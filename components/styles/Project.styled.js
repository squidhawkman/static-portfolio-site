import styled from "styled-components";

export const StyledProject = styled.div`
display: flex; 
flex-direction: ${({ layout }) => layout || 'row'};
padding: 30px;
margin: 20px 0px;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
background-color: #F0EFF4;
border-radius: 3px;

div {
    display: flex;
    flex-direction: column;
}

div a {
    padding: 10px 0;
}

div p {
    opacity: 0.7;
}

@media (max-width: ${({ theme }) => theme.mobile.large}) {
    flex-direction: column;
}
`