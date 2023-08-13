import React from 'react'
import CardStyle from "../scss/card.module.scss"
const Card = ({data}) => {
 
  return (
    <div className={CardStyle["card-container"]} >
        {data.map((item)=>{
            const {id, name, job, comment,img} = item
            return (
                <div key={id} className={CardStyle.card}>
                    <h2>{name}</h2>
                    <h3>{job}</h3>
                    <p>{comment}</p>
                <img style={{width:"250px"}} src={img} alt="" />
                </div>

            )
        })
            
        }
        

    </div>
  )
}

export default Card