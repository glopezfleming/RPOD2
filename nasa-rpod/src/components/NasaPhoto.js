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
     
      const randomIndexes = getRandomIndexes(data.latest_photos.length, 20);
      console.log(randomIndexes);
      const selectedPhotos = randomIndexes.map(index => data.latest_photos[index]);
      setPhotoData(selectedPhotos);
      console.log(selectedPhotos);
    }
  }, []);

  function getRandomIndexes(max, count){
    const indexes = [];
    while(indexes.length < count){
      const randomIndex = Math.floor(Math.random() *max);
      if(!indexes.includes(randomIndex)){
        indexes.push(randomIndex);
      }
    }
    return indexes;
  }



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