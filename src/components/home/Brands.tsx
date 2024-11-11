const brands = [
  {
    image: "public/Img/Brands/Apple.png",
    alt: "Apple",
  },
  {
    image: "public/Img/Brands/Asus.png",
    alt: "ASUS",
  },
  {
    image: "public/Img/Brands/Dell.png",
    alt: "Dell",
  },
  {
    image: "public/Img/Brands/Hp.png",
    alt: "HP",
  },
  {
    image: "public/Img/Brands/Lenovo.png",
    alt: "Lenovo",
  },
  {
    image: "public/Img/Brands/Samsung.png",
    alt: "Samsung",
  },
  {
    image: "public/Img/Brands/Toshiba.png",
    alt: "Toshiba",
  },
];

export const Brands = () => {
  return (
    <div className="flex flex-col items-center gap-3 pt-16 pb-12">
      <h2 className="font-bold text-2xl">Marcas que disponemos</h2>

      <p className="w-2/3 text-center text-sm md:text-base">
        Tenemos lo más moderno en tecnología y los últimos modelos de
        computadores disponibles
      </p>

      <div className="grid grid-cols-3 gap-6 mt-8 items-center md:grid-cols-6">
        {brands.map((brand, index) => (
          <div key={index}>
            <img src={brand.image} alt={brand.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};
