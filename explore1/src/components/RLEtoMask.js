import React, { useState, useEffect } from 'react';


const RLEtoMask = ({rleData}) => {
  const [binaryArray, setBinaryArray] = useState([]);
  const [image, setImage] = useState(null);
//   const rleData={
//     "segmentation": {
//     "size": [425, 640], 
//     "counts": [89196, 3, 422, 4, 421, 5, 420, 6, 419, 6, 419, 7, 418, 7, 418, 8, 418, 7, 418, 7, 418, 8, 418, 7, 418, 7, 418, 8, 418, 7, 418, 7, 418, 7, 418, 7, 419, 6, 419, 7, 418, 7, 418, 7, 418, 7, 419, 6, 419, 6, 419, 6, 419, 6, 419, 6, 419, 6, 419, 6, 419, 6, 419, 6, 419, 6, 419, 6, 419, 6, 419, 6, 419, 6, 419, 6, 419, 6, 419, 6, 419, 6, 419, 5, 420, 5, 420, 5, 419, 6, 419, 6, 419, 6, 419, 6, 419, 6, 419, 6, 419, 6, 419, 6, 419, 6, 419, 6, 419, 6, 419, 6, 419, 6, 419, 6, 419, 6, 419, 6, 419, 6, 419, 6, 419, 6, 419, 6, 419, 6, 419, 5, 420, 5, 420, 5, 420, 5, 420, 5, 420, 5, 420, 5, 420, 5, 420, 5, 420, 5, 420, 5, 420, 5, 420, 5, 420, 5, 419, 6, 419, 6, 419, 6, 419, 6, 419, 6, 419, 6, 419, 6, 419, 6, 419, 5, 420, 5, 420, 5, 420, 5, 420, 5, 420, 5, 420, 5, 420, 5, 420, 5, 420, 5, 420, 5, 420, 5, 420, 5, 420, 5, 420, 5, 420, 4, 421, 4, 420, 5, 420, 5, 420, 5, 420, 5, 420, 5, 420, 5, 420, 5, 420, 5, 420, 5, 420, 5, 420, 5, 420, 5, 420, 5, 420, 5, 420, 5, 420, 5, 420, 5, 420, 5, 419, 6, 419, 6, 419, 6, 419, 6, 419, 6, 419, 6, 419, 6, 419, 6, 419, 6, 419, 6, 419, 6, 419, 6, 419, 6, 419, 6, 419, 6, 419, 6, 419, 6, 419, 6, 419, 6, 419, 6, 419, 6, 418, 7, 418, 7, 418, 7, 418, 6, 419, 6, 419, 6, 419, 6, 419, 6, 419, 6, 419, 6, 419, 6, 419, 6, 419, 6, 419, 6, 419, 6, 419, 6, 419, 5, 420, 5, 420, 5, 420, 5, 419, 6, 419, 6, 419, 6, 419, 6, 419, 6, 419, 6, 419, 6, 419, 6, 419, 6, 419, 6, 419, 6, 419, 6, 419, 6, 419, 6, 419, 6, 419, 6, 419, 6, 419, 6, 419, 6, 419, 6, 419, 6, 419, 5, 419, 6, 419, 6, 419, 6, 419, 6, 419, 6, 419, 6, 419, 6, 419, 6, 419, 6, 419, 6, 419, 6, 419, 6, 418, 7, 418, 7, 418, 7, 418, 7, 418, 6, 419, 6, 419, 6, 419, 6, 419, 6, 419, 6, 419, 6, 419, 6, 419, 6, 419, 6, 418, 7, 418, 7, 418, 7, 418, 7, 418, 7, 418, 6, 419, 6, 419, 6, 419, 6, 419, 6, 419, 6, 419, 6, 419, 6, 419, 6, 419, 5, 420, 5, 420, 5, 420, 5, 420, 4, 422, 2, 85055],
//   }
//   };
  useEffect(() => {
    const imageWidth = rleData.segmentation.size[0];
    const imageHeight = rleData.segmentation.size[1];
    const counts = rleData.segmentation.counts;

    let currentPixel = 0;
    let currentCount = 0;
    let currentBinaryValue = 0;

    const newBinaryArray = Array(imageWidth * imageHeight).fill(0);

    for (const count of counts) {
      currentCount += count;
      while (currentCount > 0) {
        newBinaryArray[currentPixel] = currentBinaryValue;
        currentPixel += 1;
        currentCount -= 1;
      }
      currentBinaryValue = 1 - currentBinaryValue;
    }
    setBinaryArray(newBinaryArray);
 
    const arrayToImageData = (input) => {
      const [r, g, b, a] = [0, 114, 189, 255];
      const arr = new Uint8ClampedArray(4 * imageWidth * imageHeight).fill(0);
      for (let i = 0; i < input.length; i++) {
        if (input[i] > 0.0) {
          arr[4 * i + 0] = r;
          arr[4 * i + 1] = g;
          arr[4 * i + 2] = b;
          arr[4 * i + 3] = a;
        }
      }
      return new ImageData(arr, imageWidth, imageHeight);
    };

    // Convert binary array to ImageData
    const imageData = arrayToImageData(newBinaryArray);

    // Function to convert ImageData to Image
    const imageDataToImage = (imageData) => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.width = imageData.width;
      canvas.height = imageData.height;
      ctx?.putImageData(imageData, 0, 0);

      const img = new Image();
      img.src = canvas.toDataURL();
      setImage(img);
    };

    // Convert ImageData to Image
    imageDataToImage(imageData);
  }, [rleData]);

  return (
    <div>
      {image && (
        <div>
          <p>Processed Image:</p>
          <img src={image.src} alt="Processed" width="425px" height="640px" />
        </div>
      )}
    </div>
  );
};

export default RLEtoMask;





