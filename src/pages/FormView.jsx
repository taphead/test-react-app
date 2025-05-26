import { useState, useEffect } from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

export default function FormView() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [website, setWebSite] = useState("");
  const [userArray, setUserArray] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

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

  function handleFormSubmit(event) {
    event.preventDefault();
    let newUser = {
      id: userArray.length + 1,
      name: name,
      phone: phone,
      address: { city: city },
      website: website,
      isLocal: true,
    };
    setUserArray((prevArray) => [...prevArray, newUser]);
    event.target.reset();
  }

  function handleCardDelete(id) {
    let newUserArray = userArray.filter((user) => user.id !== id);
    setUserArray(newUserArray);
    setIsLoaded(true);
  }

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label htmlFor="phone">Phone Number:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          pattern="^[0-9\-]+$"
          placeholder="123-456-7890"
          required
          onChange={(e) => setPhone(e.target.value)}
        />
        <br />
        <label htmlFor="city">City:</label>
        <input
          type="text"
          id="city"
          name="city"
          required
          onChange={(e) => setCity(e.target.value)}
        />
        <br />
        <label htmlFor="website">Website:</label>
        <input
          type="url"
          id="website"
          name="website"
          placeholder="https://example.com"
          required
          onChange={(e) => setWebSite(e.target.value)}
        />
        <br />
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
                <FaEdit />
                <MdDelete onClick={() => handleCardDelete(user.id)} />
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
