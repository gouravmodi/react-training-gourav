import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CrudExample.css'; // Import the CSS file

const CrudExample = () => {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [postId, setPostId] = useState(null);

  useEffect(() => {
    // Read all posts
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => setPosts(response.data))
      .catch(error => console.error('Error fetching posts:', error));
  }, []);

  const createPost = () => {
    // Create a new post
    axios.post('https://jsonplaceholder.typicode.com/posts', { title, body, userId: 1 })
      .then(response => setPosts([...posts, response.data]))
      .catch(error => console.error('Error creating post:', error));
  };

  const updatePost = (id) => {
    // Update an existing post
    axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, { id, title, body, userId: 1 })
      .then(response => {
        setPosts(posts.map(post => post.id === id ? response.data : post));
        setPostId(null);
      })
      .catch(error => console.error('Error updating post:', error));
  };

  const deletePost = (id) => {
    // Delete a post
    axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(() => setPosts(posts.filter(post => post.id !== id)))
      .catch(error => console.error('Error deleting post:', error));
  };

  return (
    <div>
      <h1>CRUD Example</h1>
      <div className="form-container">
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="body">Body</label>
          <textarea
            id="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button onClick={() => postId ? updatePost(postId) : createPost()}>
            {postId ? 'Update Post' : 'Create Post'}
          </button>
        </div>
      </div>
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts.map(post => (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
                <td>
                  <button onClick={() => { setTitle(post.title); setBody(post.body); setPostId(post.id); }}>Edit</button>
                  <button onClick={() => deletePost(post.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CrudExample;
