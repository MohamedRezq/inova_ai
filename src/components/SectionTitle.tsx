import React from 'react'

const SectionTitle = (props: {title: string}) => {
  return (
    <div className='section-title'>
        {props.title}
    </div>
  )
}

export default SectionTitle