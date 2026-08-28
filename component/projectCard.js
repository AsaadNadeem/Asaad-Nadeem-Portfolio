import React from "react";
import Image from "next/image";

const ProjectCard = ({ children }) => {
  return (
    <div className="rounded-xl p-4 bg-red-50 hover:bg-red-300 w-80 mt-2 hover:mt-0 transition-all duration-300">
      {children}
    </div>
  );
};

const CardImage = ({ src, alt }) => {
  return (
    <Image
      src={src}
      alt={alt}
      height={142.4}
      width={300}
      className="rounded-sm"
    />
  );
};

const CardTitle = ({ children }) => {
  return <h3 className="text-2xl font-serif font-bold mt-2">{children}</h3>;
};

const CardTech = ({ children }) => {
  return (
    <div className="flex flex-row ms-2 gap-2 mt-1 items-center font-mono">
      <pre className="font-bold">Tech :</pre>
      <h4>{children}</h4>
    </div>
  );
};

const CardDescription = ({ children }) => {
  return <p className="text-center my-2">{children}</p>;
};

const CardLink = ({ href, children }) => {
  return (
    <a
      href={href}
      target="_blank"
      className="text-cyan-700 hover:text-cyan-900 font-bold font-xl font-serif block text-center mt-2 transition-all duration-300"
    >
      {children}
    </a>
  );
};

ProjectCard.Image = CardImage;
ProjectCard.Title = CardTitle;
ProjectCard.Tech = CardTech;
ProjectCard.Description = CardDescription;
ProjectCard.Link = CardLink;

export default ProjectCard;
