import "./ShopPage.css";

const ShopPage: React.FC = () => {
  const hatList = [
    {
      title: "Afro",
      price: 36,
      owned: false,
      image: "https://picsum.photos/seed/picsum/300/300",
    },
    {
      title: "Baseball Hat",
      price: 120,
      owned: true,
      image: "https://picsum.photos/seed/picsum/300/300",
    },
    {
      title: "Atronaut helmet",
      price: 1690,
      owned: false,
      image: "https://picsum.photos/seed/picsum/300/300",
    },
    {
      title: "Knight Helmet",
      price: 700,
      owned: false,
      image: "https://picsum.photos/seed/picsum/300/300",
    },
  ];

  return (
    <div className="container h-screen">
      <h1>Jake Shop</h1>
      <h2 className="mt-4">
        Here you can find many boosts and hats (snakes love hats!)
      </h2>

      <section className="container flex flex-col p-12">
        <h2 className="text-lg">Hats</h2>
        <div className="container flex flex-row gap-12">
          {hatList.map((hat) => (
            <div className="p-3">
              <img src={hat.image} />
              <span>{hat.title}</span>
              <span>{hat.price}</span>
              {hat.owned ? <button disabled>Buy</button> : <button>Buy</button>}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ShopPage;
