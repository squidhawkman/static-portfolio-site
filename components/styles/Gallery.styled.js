import styled from "styled-components";

export const StyledGallery = styled.div`
display: flex; 
width: 85vw;
flex-wrap: wrap;
overflow: hidden;
margin: 30px 0 100px 0;
background-color: #F0EFF4;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
border-radius: 10px;
padding: 40px 0 20px 0;
`

export const StyledGalleryImage = styled.div`

height: 200px;
width: 300px;
position: relative;
margin: 4px 5px;

/* so the secret is applying object-fit to the image.. That was the answer. The Image element is the parent. */
.image {
    object-fit: contain;
  }

@media (max-width: ${({ theme }) => theme.mobile.medium}) {
    height: 200px;
}
`