import React from 'react'
import ReactStars from 'react-rating-stars-component'
import profilePng from "../../images/logo.png"

const ReviewCard = ({review}) => {

    const options={
        edit:false,
        color:"grey",
       activeColor:"orange",
        value : review.rating,
        isHalf:true
    }
  return (
    <div className='reviewCard'>
      <img src={profilePng} alt="User" />
      <p>{review.name}</p>
      <ReactStars {...options}/>
      <span>{review.comment}</span>
      
    </div>
  )
}

export default ReviewCard
