import { FC } from "react";

interface CardProps {
  name: string;
  image: string;
  price: string;
  change: string;
  tvl: string;
  color: string;
  popularPairs: string[];
}

const Card: FC<CardProps> = ({
  image,
  name,
  price,
  change,
  tvl,
  popularPairs,
  color,
}) => {
  return (
    <div className="h-[350px] w-[300px] bg-gradient-to-b from-gradientFrom to-gradientTo relative rounded-2xl">
      <div className="absolute w-[100px] h-[100px] top-[-50px] left-1/2 -translate-x-1/2 bg-primaryBg rounded-full z-0"></div>
      <div
        id="cardLogo"
        className={`absolute w-[100px] h-[100px] top-[-50px] left-1/2 -translate-x-1/2 border-[10px] border-primaryBg  rounded-full bg-gradient-to-b from-gradientFrom ${color} z-10 flex justify-center items-center`}
      >
        <img
          src={`assets/images/logos/${image}.svg`}
          className="w-1/2 h-1/2"
          alt={`${image} logo`}
        />
      </div>
      <div className="h-full flex flex-col items-center text-primary gap-[10px] font-tommorrow pt-[70px]">
        <div className="text-[12px] leading-[30px]">{name}</div>
        <div className="text-center">
          <div className="w-[242px] h-[40px] text-[16px] flex justify-center items-center bg-primaryBg text-white rounded-[17px]">
            <span className="flex-grow"></span>
            <span>{price}</span>
            <div
              className={`text-[12px] flex-grow-[0.4] text-right pr-4 ${
                change.charAt(0) === "-" ? "text-red-600" : "text-green-600"
              }`}
            >
              {change}%
            </div>
          </div>
          <div className="text-[12px] leading-[30px]">Price</div>
        </div>
        <div className="text-center">
          <div className="w-[242px] h-[40px] text-[16px] flex justify-center items-center bg-primaryBg text-white rounded-[17px]">
            {tvl}
          </div>
          <div className="text-[12px] leading-[30px]">TVL</div>
        </div>
        <div className="text-center">
          <div className="w-[120px] h-[42px] text-[16px] flex justify-evenly items-center bg-primaryBg text-white rounded-[17px]">
            {popularPairs.map((token) => (
              <img
                src={`assets/images/logos/${token}.svg`}
                alt={`${token} Logo`}
                className="w-[22px] h-[22px]"
              />
            ))}
          </div>
          <div className="text-[12px] leading-[30px]">Popular pairs</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
