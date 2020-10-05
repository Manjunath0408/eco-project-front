import React from 'react';
import { Link } from 'react-router-dom';

const Blog = ({ exercise, deleteExercise }) => {
  return (
    <tr>
      <td>{exercise.username}</td>
      <td>{exercise.description}</td>
      <td>{exercise.duration}</td>
      <td>{exercise.date.substring(0, 10)}</td>
      <td>
        <Link to={'/edit/' + exercise._id}>edit</Link> |{' '}
        <a
          href="/"
          onClick={(e) => {
            deleteExercise(exercise._id,e);
          }}
        >
          delete
        </a>
      </td>
    </tr>
  );
};
export default Blog;
