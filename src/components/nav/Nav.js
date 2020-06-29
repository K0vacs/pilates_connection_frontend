import React, { Component } from 'react';
import './Nav.css';
import Menu from '../menu/Menu';

export default class Nav extends Component {
state = {
  posts: []
}

  componentDidMount() {
    fetch('http://localhost/wp-json/wp/v2/menu')
    .then(res => res.json())
    .then((data) => {
      this.setState({ posts: data })
      console.log(data)
    })
    .catch(console.log)
  }

    render() {
      const posts = this.state.posts.map(post => {
        return <Menu key={post.ID} title={post.title} />
      });
      return (
        <div>
          <h1>Hello!</h1>
          {posts}
          {/* <h1>{this.state.contacts.map(s => (<li>{s}</li>))}</h1> */}
        </div>

      );
    }
}