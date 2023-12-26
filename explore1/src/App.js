// import React, { useState } from 'react';
// import ImageInput from './components/ImageInput';
// import ImageDisplay from './components/ImageDisplay';
// import './App.css'; 

// const App = () => {
//   const [selectedImageId, setSelectedImageId] = useState('');

//   const handleImageIdChange = (imageId) => {
//     setSelectedImageId(imageId);
//   };

//   const handleImageDisplay = (imageId) => {
//     // You can perform additional actions when the image is displayed
//     console.log(`Displaying image with ID: ${imageId}`);
//   };

//   return (
    
//     <div className='App'>
//       <h1>My Image App</h1>
//       <ImageInput
//         onImageIdChange={handleImageIdChange}
//         onSubmit={handleImageDisplay}
//       />
//       {selectedImageId && <ImageDisplay imageId={selectedImageId} />}
//     </div>
//   );
// };

// export default App;
// App.js

import React, { useState, useEffect } from 'react';
import ImageInput from './components/ImageInput';
import ImageDisplay from './components/ImageDisplay';
import axios from 'axios';
import './App.css';

const App = () => {
  const [selectedImageId, setSelectedImageId] = useState('');
  const [annotations, setAnnotations] = useState([]);

  useEffect(() => {
    // Fetch annotations when the component mounts
    axios.get('assets/images/instances_valrem.json')
      .then(response => setAnnotations(response.data))
      .catch(error => console.error('Error loading annotations:', error));
  }, []);

  const handleImageIdChange = (imageId) => {
    setSelectedImageId(imageId);
  };

  const handleImageDisplay = (imageId) => {
    // You can perform additional actions when the image is displayed
    console.log(`Displaying image with ID: ${imageId}`);
  };

  return (
    <div className='App'>
      <h1>Explore!</h1>
      <ImageInput
        onImageIdChange={handleImageIdChange}
        onSubmit={handleImageDisplay}
      />
      {selectedImageId && (
        <ImageDisplay
          imageId={selectedImageId}
          annotations={annotations}
        />
      )}
    </div>
  );
};

export default App;
