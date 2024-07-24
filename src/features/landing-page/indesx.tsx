import Avatar from "../../assets/CatPeek.jpg";
import Card from "../../components/card";
import ProjectCard from "../../components/project-card";
import React from "react";

interface Props {
  title: string;
  year: string;
  description: string;
  bgColor?: string;
}

const LandingPage = () => {
  const education: Props[] = [
    {
      title: "Sekolah Dasar",
      year: "2007-2012",
      description: "Bersekolah pada Institute SD Pekayon Jaya 2",
    },
    {
      title: "Sekolah Menengah Pertama",
      year: "2013-2016",
      description: "Bersekolah pada Institute SMP Negeri 20 Bekasi",
    },
    {
      title: "Sekolah Menengah Atas",
      year: "2017-2019",
      description: "Bersekolah pada Institute SMK BinakaryaMandiri 2",
    },
    {
      title: "Kuliah",
      year: "2019-2023",
      description: "Melanjutkan Studi di Universitas KrisnaDwipayana Bekasi",
    },
  ];

  const projects: Props[] = [
    {
      title: "Project 1",
      year: "2023",
      description:
        "Membuat Game Pertarungan 2D berbasis Java Script yang merupakan Projek Skripsi saya yang pertama kali menggunakan Java Script, dan HTML",
    },
    {
      title: "Project 2",
      year: "2024",
      description:
        "FrontEnd tentang Protofolio saya atau bisa disebut web FrontEnd yang sedang anda baca saat ini ",
    },
    {
      title: "Project 3",
      year: "2024",
      description:
        "Projek ini adalah FrontEnd menggunakan API dari TMDB Movie. Dimana saya membuat website berbasis FrontEnd menggunakan API",
    },
    {
      title: "Project 4",
      year: "2024",
      description:
        "Projek ini adalah membuat Pokedex dari Pokemon francise berbasis API dari PokeAPI",
    },
  ];

  return (
    <div className="flex flex-col">
      <section className="flex flex-col items-center m-10">
        <img
          src={Avatar}
          className="w-[1040px] h-[400px] rounded-[30px] border-8 border-black"
        />
        <div className="flex flex-col">
          <h1 className="font-bold text-2xl">What are you looking at?!</h1>
        </div>
      </section>

      <div className="flex flex-col gap-10">
        <Card
          title="Summary"
          description="Ini adalah Website FrontEnd yang dibuat untuk Portofolio oleh Saya karena saya. Saya suka
            anime, oleh karena itu saya menaruh gambar seperti di atas dibandingkan dengan foto saya. 
            Saya sangat menyukai Desain Grafis oleh karena itu kodingan saya tidak terlalu bagus"
        />

        <section className="flex flex-col px-5 py-10 bg-gray-200 gap-5 rounded-[30px] border-4 border-black">
          <label className="font-semibold text-lg">Education</label>
          {education.map((edu, index) => (
            <ProjectCard
              key={index}
              title={edu.title}
              year={edu.year}
              description={edu.description}
              bgColor={edu.bgColor}
            />
          ))}
        </section>

        <section className="flex flex-col px-5 py-10 bg-gray-200 gap-5 rounded-[30px] border-4 border-black">
          <label className="font-semibold text-lg">Projects</label>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              year={project.year}
              description={project.description}
              bgColor={project.bgColor}
            />
          ))}
        </section>
      </div>

      <footer className="mt-10" />
    </div>
  );
};

export default LandingPage;
