<<<<<<< HEAD
import React, { useState } from "react";
import Lightbox from "react-image-lightbox";

function GalleryImage({ index, images, image }) {
=======
import React,{useState} from "react";
import Lightbox from "react-image-lightbox";

function GalleryImage({index,images,image}) {
>>>>>>> a4c435fb785b8c080a6acb09be218c51e319f115
  const [photoIndex, setPhotoIndex] = useState(index);
  const [open, setOpen] = useState(false);

  console.log(image);
  return (
<<<<<<< HEAD
    <div className="graphics-photo">
=======
    <div className="gallery_image">
>>>>>>> a4c435fb785b8c080a6acb09be218c51e319f115
      {open && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}
<<<<<<< HEAD
      <img
        src={image}
        alt="sample work"
        onClick={() => setOpen(true)}
        style={{ width: "100%", height: "auto", borderRadius: "5px" }}
      />
=======
      <img src={image} alt="sample work" onClick={()=>setOpen(true)} style={{width: '100%', height: 'auto',borderRadius:"5px"}}/>
>>>>>>> a4c435fb785b8c080a6acb09be218c51e319f115
    </div>
  );
}

export default GalleryImage;
