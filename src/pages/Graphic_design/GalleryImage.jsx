import React,{useState} from "react";
import Lightbox from "react-image-lightbox";

function GalleryImage({index,images,image}) {
  const [photoIndex, setPhotoIndex] = useState(index);
  const [open, setOpen] = useState(false);

  console.log(image);
  return (
    <div className="gallery_image">
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
      <img src={image} alt="sample work" onClick={()=>setOpen(true)} style={{width: '100%', height: 'auto',borderRadius:"5px"}}/>
    </div>
  );
}

export default GalleryImage;
