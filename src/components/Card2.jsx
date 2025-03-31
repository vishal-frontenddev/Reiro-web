import React from 'react'

const Card2 = ({ cardImage, cardHeader, cardFooterLinks, cardFooterLinkTexts }) => {
    return (
        <>

            <div id='card-2' className='w-[350px] h-[400px] rounded-xl flex flex-col pt-6 pl-6 bg-white'>
                <img className='w-[93%] h-[53%] object-cover rounded-xl' src={cardImage} alt="" />
                <h2 className='text-2xl font-bold pt-3 pb-3'>{cardHeader}</h2>
                <p>By <span><a href={cardFooterLinks}> {cardFooterLinkTexts}</a></span></p>
            </div>
        </>

    )
}

export default Card2