import React from 'react'
import { IconsData } from './IconsData'
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'

const IconSlider = ({ }) => {

    return (
        <>
            <div className='make-prev'>
                <i><GrFormPrevious /></i>
            </div>
            {IconsData.map((slide, index) => {
                return (
                    <div className='make-option'>
                        <i>{<slide.icon />}</i>
                        <p>{slide.text}</p>
                    </div>
                )
            })}
            <div className='make-next'>
                <i><GrFormNext /></i>
            </div>
        </>
    )
}

export default IconSlider