import React from "react";
import { IconType } from "react-icons";

interface CardSafetyProps {
  Icon: IconType;
  title: string;
  content: string;
}

const CardSafety = ({ Icon, title, content }: CardSafetyProps) => {
  return (
    <div className="card min-w-80 max-w-96 flex items-center flex-col">
      <div className="rounded-full bg-lime-600 p-4 text-white">
        <Icon size={60} />
      </div>
      <div className="card-body">
        <h3 className="card-title m-auto text-center">{title}</h3>
        <p className="text-center">{content}</p>
      </div>
    </div>
  );
};

export default CardSafety;
