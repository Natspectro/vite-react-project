import { useState, useEffect } from "react";
import Bloglist from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "Nate", id: 1 },
    { title: "Welcome party!", body: "lorem ipsum...", author: "Kayla", id: 2 },
    { title: "Web dev tips", body: "lorem ipsum...", author: "Nate", id: 3 },
  ]);
  const [name, setName] = useState("Nathan");
  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    console.log("Use Effect Ran");
    console.log(name);
  }, [name]);

  return (
    <div className="home">
      <Bloglist blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
      <button onClick={() => setName("Janice")}>Change Name</button>
      <h3>{name}</h3>
    </div>
  );
};

export default Home;
