import React from 'react'
import Image from 'next/image'
import { readdirSync } from 'fs'
import path from 'path'
import { StyledGallery, StyledGalleryImage } from '../components/styles/Gallery.styled'

export default function photos({ files }) {


//I wanted to automate the creation of my gallery(like how it's done on Flickr) but am not able to figure it out yet. The problem was I could create a gallery with some variety but there would be empty white spaces. And you kno' we can' be 'avin tha'.
//const widthClasses = ['w-2', 'w-3', 'w-4']
//const heightClasses = ['h-1']

{/* <StyledGallery>
        {files.map((file, index) => {
          return (
            <StyledGalleryImage className={`${widthClasses[Math.floor(Math.random() * widthClasses.length)]} ${heightClasses[Math.floor(Math.random() * heightClasses.length)]}`} key={index}>
          <Image className='image' src={`/images/photos/${file}`} alt='gallery image' layout='fill' key={index} />
          </StyledGalleryImage>
          )
        })}
    </StyledGallery> */}

  return (
    <StyledGallery>
      <StyledGalleryImage className='w-3 h-1'>
          <Image className='image' src={`/images/photos/1.jpeg`} alt='gallery image' layout='fill' />
          </StyledGalleryImage>
            <StyledGalleryImage className='w-2'>
          <Image className='image' src={`/images/photos/3.jpeg`} alt='gallery image' layout='fill' />
          </StyledGalleryImage>
            <StyledGalleryImage className='w-5'>
          <Image className='image' src={`/images/photos/4.jpeg`} alt='gallery image' layout='fill' />
          </StyledGalleryImage>
            <StyledGalleryImage className='w-2'>
          <Image className='image' src={`/images/photos/5.jpeg`} alt='gallery image' layout='fill' />
          </StyledGalleryImage>
            <StyledGalleryImage className='w-3'>
          <Image className='image' src={`/images/photos/7.jpeg`} alt='gallery image' layout='fill' />
          </StyledGalleryImage>
            <StyledGalleryImage className='w-2 h-1'>
          <Image className='image' src={`/images/photos/8.jpeg`} alt='gallery image' layout='fill' />
          </StyledGalleryImage>
            <StyledGalleryImage className='w-2 h-2'>
          <Image className='image' src={`/images/photos/11.jpeg`} alt='gallery image' layout='fill' />
          </StyledGalleryImage>
            <StyledGalleryImage className='w-3 h-2'>
          <Image className='image' src={`/images/photos/12.jpeg`} alt='gallery image' layout='fill' />
          </StyledGalleryImage>
            <StyledGalleryImage className='w-4'>
          <Image className='image' src={`/images/photos/13.jpeg`} alt='gallery image' layout='fill' />
          </StyledGalleryImage>
            <StyledGalleryImage className='w-3 h-2'>
          <Image className='image' src={`/images/photos/14.jpeg`} alt='gallery image' layout='fill' />
          </StyledGalleryImage>
            <StyledGalleryImage className='w-3 h-2'>
          <Image className='image' src={`/images/photos/15.jpeg`} alt='gallery image' layout='fill' />
          </StyledGalleryImage>
            <StyledGalleryImage className='w-3 h-2'>
          <Image className='image' src={`/images/photos/16.jpeg`} alt='gallery image' layout='fill' />
          </StyledGalleryImage>
            <StyledGalleryImage className='w-6'>
          <Image className='image' src={`/images/photos/17.jpeg`} alt='gallery image' layout='fill' />
          </StyledGalleryImage>
            <StyledGalleryImage className='w-4'>
          <Image className='image' src={`/images/photos/18.jpeg`} alt='gallery image' layout='fill' />
          </StyledGalleryImage>
            <StyledGalleryImage className='w-4'>
          <Image className='image' src={`/images/photos/36.jpeg`} alt='gallery image' layout='fill' />
          </StyledGalleryImage>
            <StyledGalleryImage className='w-4 h-2'>
          <Image className='image' src={`/images/photos/20.jpeg`} alt='gallery image' layout='fill' />
          </StyledGalleryImage>
            <StyledGalleryImage className='w-6'>
          <Image className='image' src={`/images/photos/21.jpeg`} alt='gallery image' layout='fill' />
          </StyledGalleryImage>
            <StyledGalleryImage className='w-2'>
          <Image className='image' src={`/images/photos/22.jpeg`} alt='gallery image' layout='fill' />
          </StyledGalleryImage>
            <StyledGalleryImage className='w-3 h-2'>
          <Image className='image' src={`/images/photos/23.jpeg`} alt='gallery image' layout='fill' />
          </StyledGalleryImage>
            <StyledGalleryImage className='w-1 h-2'>
          <Image className='image' src={`/images/photos/24.jpeg`} alt='gallery image' layout='fill' />
          </StyledGalleryImage>
            <StyledGalleryImage className='w-2 h-2'>
          <Image className='image' src={`/images/photos/25.jpeg`} alt='gallery image' layout='fill' />
          </StyledGalleryImage>
            <StyledGalleryImage className='w-3 h-2'>
          <Image className='image' src={`/images/photos/26.jpeg`} alt='gallery image' layout='fill' />
          </StyledGalleryImage>
            <StyledGalleryImage className='w-2 h-1'>
          <Image className='image' src={`/images/photos/27.jpeg`} alt='gallery image' layout='fill' />
          </StyledGalleryImage>
            <StyledGalleryImage className='w-1 h-1'>
          <Image className='image' src={`/images/photos/28.jpeg`} alt='gallery image' layout='fill' />
          </StyledGalleryImage>
            <StyledGalleryImage className='w-2 h-1'>
          <Image className='image' src={`/images/photos/29.jpeg`} alt='gallery image' layout='fill' />
          </StyledGalleryImage>
            <StyledGalleryImage className='w-2 h-1'>
          <Image className='image' src={`/images/photos/30.jpeg`} alt='gallery image' layout='fill' />
          </StyledGalleryImage>
            <StyledGalleryImage className='w-6 h-2'>
          <Image className='image' src={`/images/photos/31.jpeg`} alt='gallery image' layout='fill' />
          </StyledGalleryImage>
            <StyledGalleryImage className='w-2 h-1'>
          <Image className='image' src={`/images/photos/32.jpeg`} alt='gallery image' layout='fill' />
          </StyledGalleryImage>
            <StyledGalleryImage className='w-2 h-1'>
          <Image className='image' src={`/images/photos/33.jpeg`} alt='gallery image' layout='fill' />
          </StyledGalleryImage>
            <StyledGalleryImage className='w-2 h-2'>
          <Image className='image' src={`/images/photos/34.jpeg`} alt='gallery image' layout='fill' />
          </StyledGalleryImage>
            <StyledGalleryImage className='w-4 h-2'>
          <Image className='image' src={`/images/photos/35.jpeg`} alt='gallery image' layout='fill' />
          </StyledGalleryImage>
    </StyledGallery>
  )
}

//don't need when putting images in manually
export async function getStaticProps() {

  const files = readdirSync(path.join('public/images/photos'))

  return {
    props: {
      files
    }
  }
}
