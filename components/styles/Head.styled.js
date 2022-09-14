import styled from "styled-components";

export const StyledHead = styled.header`
display: flex; 
justify-content: center;
align-items: center;
margin-top: 25px;
flex-direction: column;
width: 100%;
text-align: center;

img {
    border-radius: 50%;
    object-fit: cover;
}

h1 {
    padding-top: 25px;
    font-size: 2em;
}

p {
    padding-bottom: 50px;
    width: 400px;
}

div {
    width: 720px;
border-bottom: 1.5px solid rgba(0, 0, 0, 0.6);
}

@media (max-width: ${({ theme }) => theme.mobile.medium}) {
    div {
        width: 90%;
    }
    img {
        width: 120px;
        height: 120px;
    }
    h1 {
        font-size: 1.5em;
    }
    p {
        width: 90%;
    }
}

@media (max-width: ${({ theme }) => theme.mobile.small}) {
    p {
        width: 70%;
    }
}
`