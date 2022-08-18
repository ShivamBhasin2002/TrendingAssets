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
    },
    {
      name: "Solana (SOL)",
      image: "solana",
      price: "$32.83",
      change: "-12.32",
      tvl: "$60,000",
      popularPairs: ["solana", "ethereum", "binance"],
    },
    {
      name: "Ethereum (ETH)",
      image: "ethereum",
      price: "$1,466.45",
      change: "-11.93",
      tvl: "$60,000",
      popularPairs: ["solana", "bitcoin", "binance"],
    },
    {
      name: "Binance USD (BUSD)",
      image: "binance",
      price: "$1.00",
      change: "+9.26",
      tvl: "$60,000",
      popularPairs: ["solana", "ethereum", "bitcoin"],
    },
    {
      name: "Shiba Inu (SHIB)",
      image: "ethereum",
      price: "$0.00000001948",
      change: "-0.1",
      tvl: "$60,000",
      popularPairs: ["solana", "ethereum", "binance"],
    },
  ];
  return (
    <div className="min-h-screen w-full bg-primaryBg flex justify-evenly items-center gap-[20px]">
      {cards.map((card) => (
        <Card {...card} />
      ))}
    </div>
  );
}

export default App;
