import React, { useState } from 'react'
import './FormPreview.css'
const FormPreview = ({ formData = {} }) => {
  const { imageurl, title, subtitle, description } = formData;
  const [showFullDescription, setshowFullDescription] = useState(false);

  const shortDescription = description.slice(0, 250);
  const displayedDescription = showFullDescription ? description : shortDescription;
  const buttonText = showFullDescription ? "READ LESS «" : "READ MORE »";

  const toggleDescription = () => {
    setshowFullDescription(!showFullDescription)
  }
  return (
    <div className='PreviewSection'>
      <div className='heading'><h2>Blog Preview</h2></div>
      <div className='PreviewContent'>
        <>
          <img className='Blog_image' src={imageurl} alt="Preview Img" />
        </>
        <div className='Blog_contant'>
          <h3 id='PostTitle'>{title || "Post Title"}</h3>
          <h5 id='PostSubtitle'>{subtitle || "Post SubTitle"}</h5>
        </div>
        <div className='Preview_content'>
          <p id='Postdescription'>{displayedDescription || " Post Description..."}</p>
          {description.length > 250 && (
            <button className='read_btn' onClick={toggleDescription}>
              {buttonText}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
export default FormPreview

