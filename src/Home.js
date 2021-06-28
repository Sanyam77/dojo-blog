import { useState, useEffect } from "react";
import BlogList from "./BlogList";
const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  // const handleDelete = (id) => {
  //   const newBlogs = blogs.filter((blog) => blog.id !== id);
  //   setBlogs(newBlogs);
  // };
  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/blogs")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setBlogs(data);
          setIsPending(false);
        });
    }, 1000);
  }, []);
  // this empty [] is necessary, but why?
  // this ensures that useEffect runs only at start and not every time blogs change , to prevent inf loop
  return (
    <div className="home">
      {isPending && <div>Loading...</div>}
      {blogs && (
        // <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
        <BlogList blogs={blogs} title="All Blogs" />
      )}
      {/* for using js in template, we need {} */}
      {/* blogs && is req, else when the blog is null initially, we get error in mapping(see bloglist.js). React evaluates left first, if flase then doesn't bother about right. When blogs is updated with some value, it renders again and the right is rendered this time */}
    </div>
  );
};

export default Home;
