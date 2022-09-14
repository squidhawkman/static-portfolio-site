import styled from "styled-components";

//make it reponsive (text size) and include that line break

export const StyledFooter = styled.footer`
position: relative;
left: 0;
bottom: 0;
width: 100%;
text-align: center;

div {
    width: 720px;
    border-top: solid 1.5px rgba(0, 0, 0, 0.6);
    margin: auto;
    padding: 6px 0px;
}

//have to have your theme provider wrapper for this to be working (wrap the app in theme provider)
@media (max-width: ${({ theme }) => theme.mobile.medium}) {
    p {
        font-size: 0.85em;
    }
    div {
        width: 90%;
        padding: 5px 0px;
    }
}
`