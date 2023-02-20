import { useState } from "react";
import Bloglist from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "Nate", id: 1 },
    { title: "Welcome party!", body: "lorem ipsum...", author: "Kayla", id: 2 },
    { title: "Web dev tips", body: "lorem ipsum...", author: "Nate", id: 3 },
  ]);
  return (
    <div className="home">
      <Bloglist blogs={blogs} title="All Blogs" />
      <Bloglist
        blogs={blogs.filter((blog) => blog.author === "Nate")}
        title="Nate's Blogs"
      />
    </div>
  );
};

export default Home;
