import React from 'react'
import {useState, useEffect} from 'react'
import NavBar from "./NavBar"

const apiKey = process.env.REACT_APP_NASA_KEY;

const NasaPhoto = () => {
  const [photoData, setPhotoData] = useState(null);

  useEffect(() => {
    fetchPhoto();
    async function fetchPhoto(){
      const res = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/perseverance/latest_photos?api_key=${apiKey}`);
      const data = await res.json();
     
      setPhotoData(data.latest_photos.slice(0,10));
      console.log(photoData)
    }
  }, []);



  if(!photoData) return<div>Loading...</div>
  return (
    <>
      <NavBar></NavBar>
      <div className = "wrapper">
        {photoData.map((photo, index) => (
          <div key = {index} className= "nasa-photo">
            <img src = {photo.img_src} alt = {`Mars Photo ${index}`} className = "photo"></img>
            <h1 className = "camera-name">{photo.camera.full_name} </h1>
            <p className = "date">Date Taken: {photo.earth_date} - Sol: {photo.sol}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default NasaPhoto