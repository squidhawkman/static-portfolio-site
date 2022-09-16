import React from 'react'
import { StyledProjects } from './styles/Projects.styled'
import { projects } from '../data'
import Image from 'next/image'
import { StyledProject } from './styles/Project.styled'
import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'

export default function Projects() {

  return (
    <StyledProjects>
        {projects.map(project => (
            <StyledProject layout={project.id % 2 === 0 && 'row-reverse'} key={project.id}>
                <Link href={project.site}><Image className='proj-img' src={project.image} layout='intrinsic' width='800px' height='500px' alt='project image'/></Link>
                <div>
                <h4>{project.title}</h4>
                <Link href={project.site}>{project.description}</Link>
                <p><span style={{fontWeight: 'bold'}}>Focus:</span> {project.tech}</p>
                <Link href={project.repolink}><FaGithub className='icon' /></Link>
                </div>
            </StyledProject>
        ))}
    </StyledProjects>
  )
}
