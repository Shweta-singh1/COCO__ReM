// import React from 'react';

// const ImageDisplay = ({ imageId }) => {
//   const imagePath = `/images/${imageId}.jpg`; // Assuming images are in the 'public' folder or served statically
//   return (
//     <div>
//       <h2>Image Display</h2>
//       <img src={imagePath} alt={`Image ${imageId}`} />
//     </div>
//   );
// };

// export default ImageDisplay;
// ImageDisplay.js

// ImageDisplay.js

// ImageDisplay.js

import React, { useState, useEffect } from 'react';

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
      const filteredAnnotations = annotationList.filter(annotation => annotation.image_id === imageId);

      filteredAnnotations.forEach(annotation => {
        const rleData = annotation.segmentation;
        const mask = parseRLE(rleData);
        drawMask(ctx, mask, annotation.color);
      });

      // Overlay the canvas on the image
      const overlayImage = new Image();
      overlayImage.src = canvas.toDataURL();
      overlayImage.style.position = 'absolute';
      overlayImage.style.top = '0';
      overlayImage.style.left = '0';
      imageElement.parentNode.appendChild(overlayImage);
    }
  };

  const parseRLE = (rleData) => {
    const { size, counts } = rleData;
    const [width, height] = size;
  
    const mask = [];
    let currentCount = 0;
    let currentX = 0;
    let currentY = 0;
  
    for (let i = 0; i < counts.length; i += 2) {
      const count = counts[i];
      const value = counts[i + 1];
  
      for (let j = 0; j < count; j++) {
        mask.push({ x: currentX, y: currentY });
  
        currentX++;
        if (currentX === width) {
          currentX = 0;
          currentY++;
        }
      }
  
      // Skip pixels based on the value
      currentX += value;
      if (currentX >= width) {
        currentX = 0;
        currentY++;
      }
    }
  
    return mask;
  };
  
  const drawMask = (ctx, mask, color) => {
    ctx.fillStyle = color;
    ctx.beginPath();
  
    mask.forEach(point => {
      ctx.lineTo(point.x, point.y);
    });
  
    ctx.closePath();
    ctx.fill();
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

