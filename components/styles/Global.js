import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

* {
    box-sizing: border-box;
}

a {
    text-decoration: none;
    color: rgba(0, 0, 0, 0.7);
}

a:hover {
    color: black;
}

body {
    background: ${({ theme }) => theme.colors.body}; 
    font-family: 'Poppins', sans-serif;
    font-size: 1.15em;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

body div {
    width: 100%;
}

body main {
    display: flex;
    flex-direction: column;
    align-items: center;
}

body main div {
    display: flex;
    align-items: center;
    justify-content: center;
}

p {
    opacity: 0.6;
    line-height: 1.5;
}

img {
    max-width: 100%;
}

.proj-img {
    cursor: pointer;
    border-radius: 3px;
}

.proj-img:hover {
    opacity: 0.6;
}
`

export default GlobalStyles