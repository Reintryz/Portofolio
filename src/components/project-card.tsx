import React from 'react'

interface Props {
  title:string;
  year: string;
  description: string;
  bgColor?: string;
}

const ProjectCard: React.FC<Props> =({
  title,
  year,
  description,
  bgColor,

}) => {
  return (
  <div className='flex flex-col p-4 rounded-lg shadow-md'
    style={{ backgroundColor: bgColor}}
  >
      <div className='flex flex-row justify-between mb-2'>
          <label className='front-semibold'>{title}</label>
          <div className='text-gray-500'>{year}</div>
      </div>
    <p className='text-lg'>{description}</p>
  </div>
  );
};

export default ProjectCard
