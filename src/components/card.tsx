import React from 'react'

interface Props {
  title:string;
  description: string;

}

const Card: React.FC<Props> =({
  title,
  description,
  
}) => {
  return (
    <section className="flex flex-col px-5 py-10 bg-gray-200 gap-5 rounded-[30px] border-4 border-black">
    <label className="font-semibold text-lg">{title}</label>
    <p className="text-base text-justify">
      {description}
    </p>
  </section>
  );
};

export default Card
