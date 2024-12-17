import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  const [blogPosts,setBlogPosts] = useState([])
    useEffect(() => {
      const getBlogs = async () => {
        const BASE_URL = "/data";
        try {
          // Fetch all products
          const response = await axios.get(`${BASE_URL}/blogsData.json`);
          const blogs = response?.data;
          setBlogPosts(blogs);
        } catch (error) {
          console.error("Error fetching products:", error);
          throw error;
        }
      };
      getBlogs();
    }, []);
  return (
    <div className="bg-blackTwo">
      <div className="min-h-screen py-32 max-w-6xl mx-auto px-5">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-100 mb-4">Our Blog</h1>
            <p className="text-gray-100/60">
              Stay updated with the latest trends, tutorials, and insights in
              web development.
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5  ">
            {blogPosts.map((post) => (
              <Link to={`/blogs/${post.id}`}
                key={post.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300"
              >
                {/* Blog Image */}
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                {/* Blog Content */}
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-4">
                    {post.description}
                  </p>
                  <div className="flex items-center justify-between text-gray-500 text-sm">
                    <span>By {post.author}</span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
