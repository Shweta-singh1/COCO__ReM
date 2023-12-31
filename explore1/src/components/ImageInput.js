import React, { useState } from 'react';

const ImageInput = ({ onImageIdChange}) => {
  const [imageId, setImageId] = useState('');

  const handleChange = (event) => {
    const enteredValue = event.target.value;
    
    // Remove leading zeros and update the state
    setImageId(enteredValue.replace(/^0+/, ''));
  
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const paddedValue = imageId.padStart(12, '0');
    onImageIdChange(paddedValue);
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
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default ImageInput;