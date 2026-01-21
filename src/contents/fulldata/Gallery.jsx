import React from 'react'
import "./Gallery.css"

const Gallery = () => {

  const fresherimges= [
    { id: 1, img: "https://picsum.photos/300/200?1" },
    { id: 2, img: "https://picsum.photos/300/200?2" },
    { id: 3, img: "https://picsum.photos/300/200?3" },
    { id: 4, img: "https://picsum.photos/300/200?4" },
    { id: 5, img: "https://picsum.photos/300/200?5" },
    { id: 6, img: "https://picsum.photos/300/200?6" },
    { id: 7, img: "https://picsum.photos/300/200?7" },
    { id: 8, img: "https://picsum.photos/300/200?8" },
    { id: 9, img: "https://picsum.photos/300/200?9" },
    { id: 10, img: "https://picsum.photos/300/200?10" },
  ];
const animation3d=[
   { id: 1, img: "https://picsum.photos/300/200?1" },
    { id: 2, img: "https://picsum.photos/300/200?2" },
    { id: 3, img: "https://picsum.photos/300/200?3" },
    { id: 4, img: "https://picsum.photos/300/200?4" },
    { id: 5, img: "https://picsum.photos/300/200?5" },
    { id: 6, img: "https://picsum.photos/300/200?6" },
    { id: 7, img: "https://picsum.photos/300/200?7" },

]
  return (
    <div className='Gallerymaindiv'>
      <h1 className='galleryheading'>
        <span>Gallery Page</span>
      </h1>
      
      <h2 className="subheading">
        <span>3D Gallery View</span>
      </h2>

      <div className="container3d">
        {animation3d.slice(0, 8).map((item, index) => (
          <span key={item.id} style={{ "--i": index + 1 }}>
            <img src={item.img} alt="3d-gallery" />
          </span>
        ))}
      </div>

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
