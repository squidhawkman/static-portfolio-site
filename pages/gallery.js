import React from 'react'
import Image from 'next/image'
import { readdirSync } from 'fs'
import path from 'path'
import { StyledGallery, StyledGalleryImage } from '../components/styles/Gallery.styled'

export default function photos({ files }) {

  return (
    //wrap in a style component? for sure
    <StyledGallery>
        {files.map((file, index) => {
          return (
            <StyledGalleryImage>
          <Image className='image' src={`/images/photos/${file}`} alt='gallery image' layout='fill' key={index} />
          </StyledGalleryImage>
          )
        })}
    </StyledGallery>
  )
}

//this works
export async function getStaticProps() {

  const files = readdirSync(path.join('public/images/photos'))

  return {
    props: {
      files
    }
  }
}
