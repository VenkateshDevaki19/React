import React, { useEffect, useState } from "react";
import styles from "./ImageCarousel.module.css";

const ImageCarousel = () => {
  //Array of images
  const images = [
    "https://wallpaperset.com/w/full/c/9/0/522708.jpg",
    "https://th.bing.com/th/id/R.124a1db7be2c13d936d8a71bd43ffd5f?rik=2ZT%2baXLkZYcxWg&riu=http%3a%2f%2fthewowstyle.com%2fwp-content%2fuploads%2f2015%2f01%2fnature-wallpaper-27.jpg&ehk=jIVFSOxLN%2fQKs4hEfZHNWAeXoeXkeEXooP%2fTy9Vwkek%3d&risl=&pid=ImgRaw&r=0",
    "https://cdn.wallpapersafari.com/13/87/oTrSxF.jpg",
    "https://jooinn.com/images/lonely-tree-reflection-3.jpg",
    "https://th.bing.com/th/id/R.ac54341504588eedd651ff867f1ef949?rik=JYmQaMVSULpYQg&riu=http%3a%2f%2fthewowstyle.com%2fwp-content%2fuploads%2f2015%2f01%2fnature-images.jpg&ehk=BNPsuSOUR7ATZ3EpRwxx1xFl7LUbO3tYlu1wFLCBrCE%3d&risl=&pid=ImgRaw&r=0",
  ];

  //state to keep track of current image index
  const [imageIndex, setImageIndex] = useState(0);

  //next image handler
  const nextImage = () => {
    setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  //prev image handler
  const prevImage = () => {
    setImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  //Auto slide after every 10 seconds

  useEffect(() => {
    const interval = setInterval(nextImage, 3000);
    return () => clearInterval(interval); // cleanup on component unmount
  }, []);

  // image will pause when mouse hover
  const handleMouseEnter = () => {
    clearInterval(interval);
  };

  //After the mouse leave the next image will show
  const handleMouseLeave = () => {
    interval = setInterval(nextImage, 3000);
  };

  return (
    <div
      className={styles.carouselContainer}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className={`${styles.button} ${styles.prev}`} onClick={prevImage}>
        &#8592;
      </button>
      <div className={styles.carouselImage}>
        <img src={images[imageIndex]} className={styles.carouselImg} />
      </div>
      <button className={`${styles.button} ${styles.next}`} onClick={nextImage}>
        &#8594;
      </button>
    </div>
  );
};

export default ImageCarousel;
