import React, { useState } from 'react';

  const ImageInput = ({ onImageIdChange, onSubmit }) => {
  const [imageId, setImageId] = useState('');

  const handleChange = (event) => {
    const enteredValue = event.target.value;
    
    // Remove leading zeros and update the state
    setImageId(enteredValue.replace(/^0+/, ''));
    
    // Pass the padded image ID to the parent component
    onImageIdChange(enteredValue.padStart(12, '0'));
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
