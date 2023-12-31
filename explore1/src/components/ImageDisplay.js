import React, { useState, useEffect } from 'react';
import RLEtoMask from './RLEtoMask';

const ImageDisplay = ({ imageId, annotations }) => {
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    renderMasks();
    setShowImage(true);
  }, [imageId, annotations]);

  const renderMasks = () => {
    console.log('Hi');
    const imageElement = document.getElementById('displayed-image');

    if (imageElement) {
      console.log('If?');
      const annotationList = annotations.annotations; // Adjust based on your actual key
      const filteredAnnotations = annotationList.filter((annotation) => {
        return annotation.image_id === parseInt(imageId, 10);
      });

      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');

      // Set canvas size to match the image size
      canvas.width = imageElement.width;
      canvas.height = imageElement.height;

      // Draw the original image on the canvas
      const img = new Image();
      img.src = `http://images.cocodataset.org/val2017/${imageId}.jpg`;
      img.onload = () => {
        ctx.drawImage(img, 0, 0);

        // Draw masks on the canvas
        filteredAnnotations.forEach((annotation) => {
          const rleData = annotation.segmentation;
          const imageData = RLEtoMask(rleData);
          console.log(imageData);
          ctx.putImageData(imageData, 0, 0);
        });

        // Replace the original image with the canvas
        imageElement.src = canvas.toDataURL();
      };
    }
  };

  return (
    <div>
      <h2>Image Display</h2>
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
