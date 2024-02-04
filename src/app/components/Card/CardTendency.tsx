import Image from "next/image";
import React from "react";

interface CardTendencyProps {
  title: string;
  content: string;
  image: string;
}

const CardTendency = ({ title, content, image }: CardTendencyProps) => {
  return (
    <div className="card max-w-96 bg-base-100 shadow-md hover:shadow-xl cursor-pointer">
      <figure>
        <Image
          src={image}
          alt={title}
          width={384}
          height={300}
          className="h-72 object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default CardTendency;
