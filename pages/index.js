import { StyledHead } from "../components/styles/Head.styled"
import Image from "next/image"
import { HeadContainer } from "../components/styles/HeadContainer.styled"
import Projects from "../components/Projects"

export default function Home() {
  return (
    <>
    <HeadContainer>
    <StyledHead>
      <Image src='/images/jinnie-cat.jpg' width='150px' height='150px' alt="header image" />
      <h1>Steven Swanson</h1>
      <p>All projects created from scratch by me</p>
      {/* this div is the bottom border */}
      <div></div>
    </StyledHead>
    </HeadContainer>
    <Projects />
    </>
  )
}
