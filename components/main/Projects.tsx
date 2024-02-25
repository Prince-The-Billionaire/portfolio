import React from 'react'
import ProjectCard from '../sub/ProjectCard'

const Projects = () => {
  return (
    <div className='flex flex-col items-center justify-center py-20'>
        <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to bg-cyan-500'>
            My Projects
        </h1>
        <div className='h-full w-full flex flex-col md:flex-row gap-10 px-10'>
            <ProjectCard
                src='/NextWebsite.png'
                title='Modern Next.js portfolio'
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'
            />
            <ProjectCard
                src='/CardImage.png'
                title='Interactive website cards'
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'
            />
            <ProjectCard
                src='/Spacewebsite.png'
                title='Modern Next.js portfolio'
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'
            />
        </div>
    </div>
  )
}

export default Projects