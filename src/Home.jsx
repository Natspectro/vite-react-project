import { useState } from "react";

const Home = () => {
  // let name = "Shirahoshi";
  // const [name, setName] = useState("Nathan");
  const [age, setAge] = useState(0);
  const handleClick = () => {
    // setName("Janice");
    setAge(age + 1);
  };
  const handleClickMinus = () => {
    setAge(age - 1);
  };

  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>{age}</p>
      <button onClick={handleClick}>+</button>
      <button onClick={handleClickMinus}>-</button>
    </div>
  );
};

export default Home;
