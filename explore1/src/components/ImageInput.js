import React, { useState } from 'react';

const ImageInput = ({ onImageIdChange, onSubmit }) => {
  const [imageId, setImageId] = useState('');

  const handleChange = (event) => {
    setImageId(event.target.value);
    onImageIdChange(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(imageId);
  };

  return (
    <div>
      <h2>Enter Image ID</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Image ID"
          value={imageId}
          onChange={handleChange}
        />
        {/* <button type="submit">Display Image</button> */}
      </form>
    </div>
  );
};

export default ImageInput;
