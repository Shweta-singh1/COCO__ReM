import React, { useState, useEffect } from 'react';
import RLEtoMask from './RLEtoMask';

const ImageDisplay = ({ imageId, annotations }) => {
  const [showImage, setShowImage] = useState(false);

  const renderMasks = () => {
    const imageElement = document.getElementById('displayed-image');

    if (imageElement) {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');

      // Set canvas dimensions to match the image
      canvas.width = imageElement.width;
      canvas.height = imageElement.height;

      // Draw masks on the canvas for annotations with the same image_id
      const annotationList = annotations.annotations; // Adjust based on your actual key
      const filteredAnnotations = annotationList.filter((annotation) => {
        return annotation.image_id === parseInt(imageId, 10);
      });

      filteredAnnotations.forEach((annotation) => {
        const rleData = annotation.segmentation;
        const mask = <RLEtoMask rleData={rleData}/>
        // drawMask(ctx, maskArray, annotation.color);
      });
//modify below
      // Overlay the canvas on the image
      const overlayImage = new Image();
      overlayImage.src = canvas.toDataURL();
      overlayImage.style.position = 'absolute';
      overlayImage.style.top = '0';
      overlayImage.style.left = '0';
      imageElement.parentNode.appendChild(overlayImage);
    }
  };


  const handleButtonClick = () => {
    renderMasks();
    setShowImage(true);
  };

  return (
    <div>
      <h2>Image Display</h2>
      <button onClick={handleButtonClick}>Display Image</button>
      {showImage && (
        <img
          id="displayed-image"
          src={`http://images.cocodataset.org/val2017/${imageId}.jpg`}
          alt={`Image ${imageId}`}
        />
      )}
    </div>
  );
};

export default ImageDisplay;
