import React, { Component } from 'react';
import axios from 'axios';
import Blog from './Blog.component';
import './BlogsList.css';

class BlogsList extends Component {
  constructor(props) {
    super(props);
    this.state = { exercises: [] };
  }
  componentDidMount() {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/exercises`)
      .then((res) => {
        this.setState({ exercises: res.data });
      })
      .catch((err) => console.log(`Error: ${err}`));
  }

  deleteExercise = (id, e) => {
    e.preventDefault();
    axios
      .delete(`${process.env.REACT_APP_BASE_URL}/exercises/${id}`)
      .then(() => this.props.history.push('/blogs'))
      .catch((err) => console.log(`Error: ${err}`));
    this.setState({
      exercises: this.state.exercises.filter((exercise) => exercise._id !== id),
    });
  };

  render() {
    return (
      <div className="container-BlogsList">
        <h3>Logged Blogs</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.exercises.map((currentexercise) => {
              return (
                <Blog
                  exercise={currentexercise}
                  deleteExercise={this.deleteExercise}
                  key={currentexercise._id}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
export default BlogsList;
