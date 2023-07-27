import { Component } from 'react';
import React from 'react';
import './Estudos.css';

class Estudos extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    this.loadPost();
  }

  loadPost = async () => {
    const fetchPost = fetch('https://jsonplaceholder.typicode.com/posts');
    const fetchPhoto = fetch('https://jsonplaceholder.typicode.com/photos');

    const [posts, photos] = await Promise.all([fetchPost, fetchPhoto]);

    const postsJson = await posts.json();
    const photosJson = await photos.json();

    const linkPostsAndPhoto = postsJson.map((post, index) => {
      return { ...post, cover: photosJson[index].url };
    });

    this.setState({ posts: linkPostsAndPhoto });
  };

  render() {
    const { posts } = this.state;

    return (
      <section className="container">
        <div className="post">
          {posts.map((post) => (
            <div className="post">
              <img src={post.cover} alt={post.title} />
              <div key={post.id} className="post-content">
                <h1>{post.title}</h1>
                <p>{post.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default Estudos;
