import React from 'react'

const Card = ({cardImg, cl1, cl2, cl3, cardHead, cardPara, cardFooterLink, cardFooterLinkText}) => {
  return (
    <>

        <div id='card-page' className='p-5 w-[450px]'>
            <div id='card-image' className="img h-[300px] w-[100] rounded-3xl overflow-hidden">
                <img className='w-[100%] h-[100%] object-cover' src={cardImg} alt=""/>
            </div>
            <div className="content mt-4">
                <div className='flex gap-4 mb-5'>
                  {cl1 ? <a href="#" className='px-3 py-1 border rounded-2xl'>{cl1}</a> : null}
                  {cl2 ? <a href="#" className='px-3 py-1 border rounded-2xl'>{cl2}</a> : null}
                  {cl3 ? <a href="#" className='px-3 py-1 border rounded-2xl'>{cl3}</a> : null}
                </div>
                  {cardHead ? <h1 className='text-3xl font-bold'>{cardHead}</h1> :null }
                  {cardPara ? <p className='my-4'>{cardPara}</p> : null }
                  {cardFooterLinkText ? <p>By <span><a href={cardFooterLink}> {cardFooterLinkText}</a></span></p> :null}
            </div>  
        </div>

    </>
  )
}

export default Card