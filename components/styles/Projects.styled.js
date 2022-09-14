import styled from "styled-components";

export const StyledProjects = styled.div`
display: flex;
flex-direction: column;
width: 900px;
padding: 70px 0px;

div {
    text-align: center;
}

@media (max-width: 1000px) {
    width: 700px;
}

@media (max-width: 700px) {
    width: 500px;
}

@media (max-width: 500px) {
    width: 400px;
}
`