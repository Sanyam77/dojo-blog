import { useState } from "react";
import BlogList from "./BlogList";
const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "Lorem ipsum dolor sit adipisicing ",
      body: "Reprehenderit amet repudiandae quidem, esse temporibus blanditiis ullam error repellat vero nesciunt optio laudantium rerum, enim vel minima aliquid tenetur?",
      author: "mario",
      id: 1,
    },
    {
      title: "Lorem amet consectetur adipisicing ",
      body: "Elit. Accusamus odio reprehenderit amet repudiandae quidem, esse temporibus blanditiis ullam error repellat vero nesciunt optio laudantium rerum, enim vel minima aliquid tenetur?",
      author: "yoshi",
      id: 2,
    },
    {
      title: "Lorem adipisicing ",
      body: "Accusamus odio reprehenderit amet repudiandae quidem, esse temporibus blanditiis ullam error repellat vero nesciunt optio laudantium rerum, enim vel minima aliquid tenetur?",
      author: "mario",
      id: 3,
    },
  ]);
  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };
  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" />
      <BlogList
        blogs={blogs.filter((blog) => blog.author === "mario")}
        title="Mario's Blogs"
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default Home;
