import React, { useState } from 'react'
import './AdminForm.css'
import FormPreview from '../FormPreview/FormPreview';
const AdminForm = () => {
  const data = {
    imageurl: '',
    title: '',
    subtitle: '',
    description: '',
  };

  const [formData, setFormData] = useState(data);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className='AdminForm'>
      <div className='FormSection'>
        <div className='formContiner'>
        <div className='heading'><h2>Blog Post</h2></div>
        <form id='formSection'  >
          <div className='FormContent'>
            <label htmlFor="image"><h4>Image URL:</h4></label>
            <input type="text" id='image' className='inputBox' name='imageurl' placeholder='Paste Image Url' value={formData.imageurl} onChange={handleChange} />

            <label htmlFor="title"><h4>Title:</h4></label>
            <input type="text" id='title' className='inputBox' name='title' placeholder='Enter Title' value={formData.title} onChange={handleChange}/>

            <label htmlFor="SubTitle"><h4>Sub Title:</h4></label>
            <input type="text" id='SubTitle' className='inputBox' name='subtitle' placeholder='Enter Subitle' value={formData.subtitle} onChange={handleChange} />

            <label htmlFor="Description"><h4>Description:</h4></label>
            <textarea id='Description' className='textarea' name='description' placeholder='Enter Description...' value={formData.description} onChange={handleChange}></textarea>

          </div>
            <button type='submit' className='btn'>Create Post</button>
        </form>
        </div>
        </div>
     
       <div className='PreviewForm'> <FormPreview formData={formData} /></div>
      
    </div>
  )
}

export default AdminForm