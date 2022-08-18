import Card from "./TrendingAssetCard";

function App() {
  const cards = [
    {
      name: "Bitcoin (BTC)",
      image: "bitcoin",
      price: "$31,812.80",
      change: "+10",
      tvl: "$60,000",
      popularPairs: ["solana", "ethereum", "binance"],
      color: "to-[#EAB3000F]/[0.06]",
    },
    {
      name: "Solana (SOL)",
      image: "solana",
      price: "$32.83",
      change: "-12.32",
      tvl: "$60,000",
      popularPairs: ["solana", "ethereum", "binance"],
      color: "to-[#DC1FFF1A]/[0.10]",
    },
    {
      name: "Ethereum (ETH)",
      image: "ethereum",
      price: "$1,466.45",
      change: "-11.93",
      tvl: "$60,000",
      popularPairs: ["solana", "bitcoin", "binance"],
      color: "to-[#EDF0F41A]/[0.10]",
    },
    {
      name: "Binance USD (BUSD)",
      image: "binance",
      price: "$1.00",
      change: "+9.26",
      tvl: "$60,000",
      popularPairs: ["solana", "ethereum", "bitcoin"],
      color: "to-[#EAB3000F]/[0.06]",
    },
    {
      name: "Shiba Inu (SHIB)",
      image: "shibainu",
      price: "$0.00000001948",
      change: "-0.1",
      tvl: "$60,000",
      popularPairs: ["solana", "ethereum", "binance"],
      color: "to-[#E42D041A]/[0.10]",
    },
  ];
  return (
    <div className="min-h-screen w-full bg-primaryBg flex flex-col justify-center gap-[120px]">
      <div className="px-16 flex gap-[20px] text-primary font-tommorrow text-[16px]">
        <img src="assets/images/logos/activity.svg" alt="activity icon" />
        Trending Assets
      </div>
      <div className="flex justify-evenly">
        {cards.map((card) => (
          <Card {...card} />
        ))}
      </div>
    </div>
  );
}

export default App;
