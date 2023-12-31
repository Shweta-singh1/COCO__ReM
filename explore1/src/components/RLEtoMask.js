import React, { useState, useEffect } from 'react';


const RLEtoMask = ({rleData}) => {
  const [binaryArray, setBinaryArray] = useState([]);
  const [imageData, setImageData] = useState(null);

  useEffect(() => {
    const imageWidth = rleData.size[1];
    const imageHeight = rleData.size[0];
    const counts = rleData.counts;

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
    // setBinaryArray(newBinaryArray);
    const transposedBinaryArray = Array(imageHeight * imageWidth).fill(0);

    for (let i = 0; i < imageWidth; i++) {
      for (let j = 0; j < imageHeight; j++) {
        transposedBinaryArray[j * imageWidth + i] = newBinaryArray[i * imageHeight + j];
      }
    }
  
    setBinaryArray(transposedBinaryArray);
    console.log("Hello");
 
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
      return new ImageData(arr,imageWidth,imageHeight);
    };

    // Convert binary array to ImageData
    const imageData = arrayToImageData(transposedBinaryArray);
    setImageData(imageData);

  }, [rleData]);

  return (
    imageData
  );

 };

  export default RLEtoMask;

