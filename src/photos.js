import React from 'react';
import { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

// function Photos() {
//   const [images, setImages] = useState([]);

//   useEffect(() => {
//     const fetchImages = async () => {
//       try {
//         const response = await fetch(
//           'https://api.github.com/repos/lalithshashankjn/timeCapsule/contents/'
//         );
//         const data = await response.json();

//         // Filter only image files (optional)
//         const imageFiles = data.filter(file => file.type === 'file' && /\.(png|jpe?g|gif)$/.test(file.name));

//         // Get the download URLs for the images
//         const imageUrls = imageFiles.map(file => file.download_url);

//         setImages(imageUrls);
//         console.log(imageUrls);
//       } catch (error) {
//         console.error('Error fetching images from GitHub:', error);
//       }
//     };

//     fetchImages();
//   }, []);

//   return (    
//     <div>
//       <h1>Photo Gallery</h1>
//       <Carousel>
//         {images.map((src, index) => (
//           <Carousel.Item key={index}>
//             <img
//               className="d-block w-100"
//               src={src}
//               alt={`Slide ${index + 1}`}
//             />
//             <Carousel.Caption>
//               <h3>{`Slide ${index + 1}`}</h3>
//               <p>Description for slide {index + 1}.</p>
//             </Carousel.Caption>
//           </Carousel.Item>
//         ))}
//       </Carousel>
//       <Link to="/" className="btn btn-primary">Go Back</Link>  {/* Add this link */}
//     </div>    
//   );
// }

function Photos() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(
          'https://api.github.com/repos/lalithshashankjn/timeCapsule/contents/'
        );
        const data = await response.json();

        // Filter to include only image files (optional)
        const imageFiles = data.filter(file => file.type === 'file' && /\.(png|jpe?g|gif)$/.test(file.name));

        // Get the download URLs for the images
        const imageUrls = imageFiles.map(file => file.download_url);

        setImages(imageUrls);
      } catch (error) {
        console.error('Error fetching images from GitHub:', error);
      }
    };

    fetchImages();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings}>
      {images.map((src, index) => (
        <div key={index}>
          <img src={src} alt={`Slide ${index}`} style={{ width: '100%' }} />
        </div>
      ))}
    </Slider>
  );
}

export default Photos;
