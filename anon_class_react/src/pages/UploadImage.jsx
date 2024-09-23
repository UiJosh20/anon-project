import axios from 'axios';
import React, { useState } from 'react'

const UploadImage = () => {
    const [media, setMedia] = useState("")
    const [image, setImage] = useState("")

    let url = "http://localhost:5002/product/uploadImage"

    const handleImageChange = (e) => {
        let reader = new FileReader();
       let imageInfo = e.target.files[0];
       reader.readAsDataURL(imageInfo);

       reader.onload = () =>{
           setMedia(reader.result);
       } 
    }

    const handleSubmit = () => {
      axios.post(url, {media})
      .then((res)=>{
          setImage(res.data.mediaUrl)
      })
      .catch(err => console.log(err))
        
    }


  return (
    <>
    <section>
        <input type="file" name="" id="" onChange={handleImageChange} />
        <button type='submit' onClick={handleSubmit}>Upload</button>



        <main style={{display: "flex", justifyContent: "center", gap: "40px"}}>
          <div style={{width:"fit-content", height: "fit-content"}}>
            <img src={image} style={{width: "300px", height:"300px"}}alt="" />
          </div>
        </main>
    </section>
    </>
  )
}

export default UploadImage