import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./homepage.css";
import axios from "axios";
 import { useLocation } from "react-router-dom";
import Middlebar from "../../components/MIddlebar/Middlebar";

export default function Homepage() {
  const [posts, setPosts] = useState();
   const { search } = useLocation();

   
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("http://localhost:8000/api/posts"+search);
      setPosts(res.data);
    };

    fetchPosts();
  }, [search]);
  console.log(posts);
  return (
    <>
      <div>
        <Header />
      </div>

      <div className="home">
        <Posts posts={posts} />
        <Sidebar />
      </div>

      <div>
        <Middlebar />
      </div>
    </>
  );
}
