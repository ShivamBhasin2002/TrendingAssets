import { FC } from "react";

interface CardProps {
  name: string;
  image: string;
  price: string;
  change: string;
  tvl: string;
  popularPairs: string[];
}

const Card: FC<CardProps> = ({ image, name }) => {
  return (
    <div className="h-[350px] w-[300px] bg-gradient-to-b from-gradientFrom to-gradientTo relative rounded-2xl">
      <div className="absolute w-[100px] h-[100px] top-[-50px] left-1/2 -translate-x-1/2 bg-primaryBg rounded-full z-0"></div>
      <div
        id="cardLogo"
        className="absolute w-[100px] h-[100px] top-[-50px] left-1/2 -translate-x-1/2 border-[10px] border-primaryBg  rounded-full bg-gradient-to-b from-gradientFrom to-gradientTo z-10 flex justify-center items-center"
      >
        <img
          src={`assets/images/logos/${image}.svg`}
          className="w-1/2 h-1/2"
          alt={`${image} logo`}
        />
      </div>
      <div className="h-full flex flex-col items-center justify-evenly">
        <div className="font-tommorrow text-[12px]">{name}</div>
      </div>
    </div>
  );
};

export default Card;
