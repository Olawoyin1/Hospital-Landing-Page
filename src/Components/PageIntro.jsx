import React from 'react'

const PageIntro = ({header, desc}) => {
  return (
    <div className="text-center my-3 my-md-5">
        <h2 className='fw-bolder'>{header}</h2>
        <small className="muted">{desc}</small>
    </div>
  )
}

export default PageIntro