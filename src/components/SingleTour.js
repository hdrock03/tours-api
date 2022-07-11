import React, { useState } from 'react'

export default function SingleTour({tour, handleDelete}) {
    const [readMore, setReadMore] = useState(false)

  return (
    <div className='singleTour'>
        <div className="container" key={tour.id}>
            <div className="up">
              <img src={tour.image} alt="img"></img>
              {/* Image agar url me diya hai to usko src tag ke under likhnege  */}
            </div>
            <div className="down">
              <div className="price">
                <p className="name">{tour.name}</p>
                <p>{tour.price}</p>
              </div>
              <p>{readMore ? tour.info : `${tour.info.substring(0,200)}...` }</p>
              <button onClick={() => setReadMore(!readMore)}> {readMore ? 'showless' : 'showmore'}</button> 

              <button  onClick={()=> handleDelete(tour.id)}>Not Interested</button>

            </div>
          </div>
    </div>
  )
}
