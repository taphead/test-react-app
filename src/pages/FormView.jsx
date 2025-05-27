import { useState, useEffect } from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";

export default function FormView() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [website, setWebSite] = useState("");
  const [userArray, setUserArray] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [editId, setEditId] = useState();
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const storedUsers = localStorage.getItem("userList");
    if (storedUsers) {
      setUserArray(JSON.parse(storedUsers));
      setIsLoaded(true);
    } else {
      async function fetchUsers() {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setUserArray(data);
        setIsLoaded(true);
      }
      fetchUsers();
    }
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("userList", JSON.stringify(userArray));
    }
  }, [userArray, isLoaded]);

  function isValidName(name) {
    return name.length !== 0 && !/\d/.test(name);
  }

  function isValidWebsite(url) {
    const pattern = new RegExp(
      "^(https?:\\/\\/)?" +
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*))\\.)+" +
        "[a-z]{2,}" +
        "(\\:\\d+)?(\\/[-a-z\\d%@_.~+&:]*)*" +
        "(\\?[;&a-z\\d%@_.,~+&:=-]*)?" +
        "(\\#[-a-z\\d_]*)?$",
      "i"
    );
    return pattern.test(url);
  }

  function isValidPhone(phone) {
    const pattern = new RegExp(/^(?:\d[-]?){9}\d$/);
    return pattern.test(phone);
  }

  function handleFormSubmit(event) {
    event.preventDefault();

    let newErrors = {};

    if (!isValidName(name)) {
      if (name.length === 0) {
        newErrors.name = "Please enter a value in the name field";
      } else {
        newErrors.name = "Please enter a valid name";
      }

      setErrors(newErrors);
    }

    if (!isValidPhone(phone)) {
      if (phone.length === 0) {
        newErrors.phone = "Please enter a value in the phone field";
      } else {
        newErrors.phone = "Please enter a valid 10-digit phone number";
        setErrors(newErrors);
      }
    }

    if (!isValidName(city)) {
      if (city.length === 0) {
        newErrors.city = "Please enter a value in the ciy field";
      } else {
        newErrors.city = "Please enter a valid city name";
      }

      setErrors(newErrors);
    }

    if (!isValidWebsite(website)) {
      if (website.length === 0) {
        newErrors.website = "Please enter a value in the website field";
      } else {
        newErrors.website = "Please enter a valid URL";
        setErrors(newErrors);
      }
    }

    if (
      isValidName(name) &&
      isValidName(city) &&
      isValidPhone(phone) &&
      isValidWebsite(website)
    ) {
      setErrors({});
    } else {
      return;
    }

    let newUser = {
      id: userArray.length + 1,
      name: name,
      phone: phone,
      address: { city: city },
      website: website,
      isLocal: true,
    };
    setUserArray((prevArray) => [...prevArray, newUser]);
    setName("");
    setCity("");
    setPhone("");
    setWebSite("");
    toast("Card Submitted");
    event.target.reset();
  }

  function handleCardEdit(user) {
    setName(user.name);
    setPhone(user.phone);
    setCity(user.address.city);
    setWebSite(user.website);
    setEditId(user);
  }

  function handleCardDelete(id) {
    let newUserArray = userArray.filter((user) => user.id !== id);
    setUserArray(newUserArray);
    setIsLoaded(true);
    toast("Card Deleted");
  }

  function handleUpdate(user) {
    user.name = name;
    user.phone = phone;
    user.address.city = city;
    user.website = website;
    setEditId(null);
    setName("");
    setPhone("");
    setCity("");
    setWebSite("");
    let newUserArray = userArray.map((u) => {
      if (u.id === user.id) {
        return {
          ...u,
          name: user.name,
          phone: user.phone,
          address: {
            ...u.address,
            city: user.address.city,
          },
          website: user.website,
        };
      }
      return u;
    });
    setUserArray(newUserArray);
    setIsLoaded(true);
    toast("Card Edited");
  }

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          className={errors.name ? "input-error" : ""}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
        <label htmlFor="phone">Phone Number:</label>
        <input
          type="text"
          id="phone"
          name="phone"
          placeholder="123-456-7890"
          value={phone}
          className={errors.phone ? "input-error" : ""}
          onChange={(e) => setPhone(e.target.value)}
        />
        <br />
        {errors.phone && <p style={{ color: "red" }}>{errors.phone}</p>}
        <label htmlFor="city">City:</label>
        <input
          type="text"
          id="city"
          name="city"
          value={city}
          className={errors.city ? "input-error" : ""}
          onChange={(e) => setCity(e.target.value)}
        />
        <br />
        {errors.city && <p style={{ color: "red" }}>{errors.city}</p>}
        <label htmlFor="website">Website:</label>
        <input
          type="text"
          id="website"
          name="website"
          placeholder="https://example.com"
          value={website}
          className={errors.website ? "input-error" : ""}
          onChange={(e) => setWebSite(e.target.value)}
        />
        {errors.website && <p style={{ color: "red" }}>{errors.website}</p>}
        <br />
        {editId && (
          <input
            type="submit"
            value="Update"
            onClick={() => handleUpdate(editId)}
          />
        )}
        <input type="submit" value="Submit" />
      </form>

      <div className="formcontainer">
        {userArray.map((user, index) => (
          <div key={user.id || index + 1} className="formcard">
            Name: {user.name}
            <br />
            Phone Number: {user.phone}
            <br />
            City: {user.address.city}
            <br />
            Website: {user.website}
            <br />
            {"isLocal" in user && (
              <div>
                <FaEdit onClick={() => handleCardEdit(user)} />
                <MdDelete onClick={() => handleCardDelete(user.id)} />
              </div>
            )}
          </div>
        ))}
      </div>
      <ToastContainer />
    </>
  );
}
