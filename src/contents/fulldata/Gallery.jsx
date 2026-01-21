import React from 'react'
import "./Gallery.css"

const Gallery = () => {
   const fresherimges = [
    { id: 1, img: "/gallery/galleryimage1.jpg" },
    { id: 2, img: "/gallery/galleryimage2.jpg" },
    { id: 3, img: "/gallery/galleryimage3.jpg" },
    { id: 4, img: "/gallery/galleryimage4.jpg" },
    { id: 5, img: "/gallery/galleryimage5.jpg" },
    { id: 6, img: "/gallery/galleryimage6.jpg" },
    { id: 7, img: "/gallery/galleryimage7.jpg" },
    { id: 8, img: "/gallery/galleryimage8.jpg" },
    { id: 9, img: "/gallery/galleryimage9.jpg" },
    { id: 10, img: "/gallery/galleryimage10.jpg" },
    { id: 11, img: "/gallery/galleryimage11.jpg" },
    { id: 12, img: "/gallery/galleryimage12.jpg" },
    { id: 13, img: "/gallery/galleryimage13.jpg" },
  ];
 const  animation3d = [
    { id: 1, img: "/round3dani/roundimage1.jpg" },
    { id: 2, img: "/round3dani/roundimage2.jpg" },
    { id: 3, img: "/round3dani/roundimage3.jpg" },
    { id: 4, img: "/round3dani/roundimage4.jpg" },
    { id: 5, img: "/round3dani/roundimage5.jpg" },
   { id: 6, img: "/round3dani/roundimage6.jpg" },
    { id: 7, img: "/round3dani/roundimage7.jpg" },
        { id: 8, img: "/round3dani/roundimage8.jpg" },

  ];

  return (
    <div className='Gallerymaindiv'>
      <h1 className='galleryheading'>
        <span>Gallery Page</span>
      </h1>
      
      <h2 className="subheading">
        <span>3D Gallery View</span>
      </h2>

      <div className="container3d">
        {animation3d.slice(0, 9).map((item, index) => (
          <span key={item.id} style={{ "--i": index + 1 }}>
            <img src={item.img} alt="3d-gallery" />
          </span>
        ))}
      </div>
 <h1 className='galleryh1'> ALL PHOTOS</h1>
      <div className='gallerygrid'>
        {fresherimges.map((item) => (
          <div className='gallerycard' key={item.id}>
            <img src={item.img} alt="gallery" />
          </div>
        ))}
      </div>

    </div>
  )
}

export default Gallery
