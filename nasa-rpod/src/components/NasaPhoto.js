import React from 'react'
import {useState, useEffect} from 'react'

const NasaPhoto = () => {
  const [photoData, setPhotoData] = useState(null);

  useEffect(() => {
    fetchPhoto();
    async function fetchPhoto(){
      const res = await fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/perseverance/latest_photos?api_key=eflHIihBHCXPdWPKDAIGGbARvyn9fs4LPqT2JKsz");
      const data = await res.json();
      console.log(data);
      setPhotoData(data);
    }
  }, []);



  if(!photoData) return<div>Not working!</div>
  return (
    <div>
      <img src = {photoData.latest_photos[0].img_src} alt = "something random"></img>
      <h1>{photoData.latest_photos[0].rover.name} - ({photoData.latest_photos[0].camera.full_name}) </h1>
      <p>Date Taken: {photoData.latest_photos[0].earth_date} - Sol: {photoData.latest_photos[0].sol}</p>
    </div>
  )
}

export default NasaPhoto