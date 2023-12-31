import React, { useState, useEffect } from 'react';
import ImageInput from './components/ImageInput';
import ImageDisplay from './components/ImageDisplay';
import axios from 'axios';
import './App.css';

const App = () => {
  const [selectedImageId, setSelectedImageId] = useState('');
  const [annotations, setAnnotations] = useState([]);
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    // Fetch annotations when the component mounts
    axios.get('assets/images/instances_valrem.json')
      .then(response => setAnnotations(response.data))
      .catch(error => console.error('Error loading annotations:', error));
  }, []);

  const handleImageChangeAndDisplay = (imageId) => {
    setSelectedImageId(imageId);
    setShowImage(true);
  };

  return (
    <div className='App'>
      <h1>Explore!</h1>
      <ImageInput
        onImageIdChange={handleImageChangeAndDisplay}
      />
      {showImage && selectedImageId && (
        <ImageDisplay
          imageId={selectedImageId}
          annotations={annotations}
        />
      )}
    </div>
  );
};

export default App;
