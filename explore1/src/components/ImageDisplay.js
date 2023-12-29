import React, { useState, useEffect } from 'react';

const ImageDisplay = ({ imageId, annotations }) => {
  const [showImage, setShowImage] = useState(false);

  const parseRLE = (rleData) => {
    // Extract width and height from size property of RLE data
    const width = rleData.size[1];
    const height = rleData.size[0];

    // Parse RLE data and initialize mask array
    const rleCounts = rleData.counts;
    const newMaskArray = new Array(width * height).fill(0);

    // Iterate over RLE data and set values in the mask array
    let currentIndex = 0;
    for (let i = 0; i < rleCounts.length; i += 2) {
      const runLength = rleCounts[i];
      const runValue = rleCounts[i + 1];

      // Set values in the mask array based on the run length and value
      for (let j = 0; j < runLength; j++) {
        newMaskArray[currentIndex++] = runValue;
      }
    }
    console.log(newMaskArray);
    // Return the generated mask array
    return newMaskArray;
  };
  

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
        const maskArray = parseRLE(rleData);
        // drawMask(ctx, maskArray, annotation.color);
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
