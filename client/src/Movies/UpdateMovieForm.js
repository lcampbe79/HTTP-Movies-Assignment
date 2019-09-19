import React, { useState, useEffect } from 'react';
import axios from 'axios';

const initialMovie = {
  id: '',
  title: '',
  director: '',
  metascore: '',
  stars: []
}



const UpdateMovieForm = props => {
  const [movie, setMovie] = useState({initialMovie})

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/api/movies/:id`, movie)
      .then(res => console.log(res)
        // props.updateItems(res.data);
        // props.history.push(`/item-list/${item.id}`);
        // setItem(initialItem);
      )
      .catch(err => console.log(err.response));
  };
  return (
    <div>
      <h2>Update Movie</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          // onChange={changeHandler}
          placeholder="title"
          value={movie.name}
        />
        {/* <div className="baseline" /> */}

        <input
          type="text"
          name="director"
          // onChange={changeHandler}
          placeholder="Director"
          value={movie.director}
        />
        {/* <div className="baseline" /> */}

        <input
          type="number"
          name="metascore"
          // onChange={changeHandler}
          placeholder="metascore"
          value={movie.metascore}
        />
        {/* <div className="baseline" /> */}

        <input
          type="string"
          name="description"
          // onChange={changeHandler}
          placeholder="Description"
          value={movie.description}
        />
        {/* <div className="baseline" /> */}

        <input
          type="string"
          name="stars"
          // onChange={changeHandler}
          placeholder="stars"
          value={movie.stars}
        />
        {/* <div className="baseline" /> */}

        <button className="edit-button">Edit Movie</button>
      </form>
    </div>
  );
}

export default UpdateMovieForm;