import React from 'react'
import "./PopularPost.css"
const PopularPost = () => {
    const Popular =
        [
            { id: 1, image: "https://www.w3schools.com/w3images/workshop.jpg", heading: "Lorem", discription: "Sed mattis nunc" },
            { id: 2, image: "https://www.w3schools.com/w3images/gondol.jpg", heading: "Ipsum", discription: "Praes tinci sed" },
            { id: 3, image: "https://www.w3schools.com/w3images/skies.jpg", heading: "Dorum", discription: "Ultricies congue" },
            { id: 4, image: "https://www.w3schools.com/w3images/rock.jpg", heading: "Mingsum", discription: "Lorem ipsum dipsum" },
        ];

    return (
        <>
            {Popular.map((value) => (
                <div className='PostCard' key={value.id}>
                    <img src={value.image} alt='' />
                    <div className='PostCard_details'><h4>{value.heading}</h4>
                        <span>{value.discription}</span>
                    </div>
                </div>
            ))}
        </>
    )
}

export default PopularPost