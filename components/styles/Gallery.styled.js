import styled from "styled-components";

export const StyledGallery = styled.div`
display: grid;
grid-auto-rows: 300px 400px;
grid-template-columns: repeat(8, 1fr);
grid-gap: 10px;
grid-auto-flow: dense;
width: 85vw;
flex-wrap: wrap;
margin: 30px 0 100px 0;
background-color: #F0EFF4;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
border-radius: 10px;
padding: 20px;

.w-1 {
    grid-column: span 1;
}
.w-2 {
    grid-column: span 2;
}
.w-3 {
    grid-column: span 3;
}
.w-4 {
    grid-column: span 4;
}
.w-5 {
    grid-column: span 5;
}
.w-6 {
    grid-column: span 6;
}

.h-1 {
    grid-row: span 1;
}
.h-2 {
    grid-row: span 2;
}
.h-3 {
    grid-row: span 3;
}
.h-4 {
    grid-row: span 4;
}
`

export const StyledGalleryImage = styled.div`
width: 100%;
height: 100%;
position: relative;

//these work, but not when applied as a class. So what's going on? The being applied through a class to the <Image> are working fine. 
//grid-row: span 2;
/* border: 3px solid black; */

/* so the secret is applying object-fit to the image.. That was the answer. The Image element is the parent. */
.image {
    object-fit: cover;
  }

/* could do something like for a cool effect, but interesting that the entire photo isn't loaded, but cut off instead */
/* .image:hover {
transform: scale(0.5)
}   */
`