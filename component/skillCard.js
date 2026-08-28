import React from "react";
import Image from "next/image";

const SkillCard = ({ children, grip }) => {
  return (
    <div className="w-full md:w-auto flex border rounded-xl border-black px-7 py-3 gap-4 items-center m-2 relative overflow-hidden transition-all duration-300 cursor-pointer hover:shadow-[0_0_10px_rgba(255,80,40,0.9),0_0_25px_rgba(255,30,0,0.7),0_0_50px_rgba(180,0,0,0.5)]">
      {children}
      <div className="absolute bottom-0 left-0 h-1 w-full bg-red-200">
        <div
          className="h-full rounded-r-full bg-red-700 shadow-[0_0_10px_rgba(196,64,64,0.9)]"
          style={{ width: `${grip}%` }}
        />
      </div>
    </div>
  );
};

const CardImage = ({ src, alt }) => {
  return <Image src={src} alt={alt} width={40} height={40} />;
};

const CardText = ({ children }) => {
  return <h3 className="text-2xl font-bold">{children}</h3>;
};

SkillCard.Image = CardImage;
SkillCard.Text = CardText;
export default SkillCard;
