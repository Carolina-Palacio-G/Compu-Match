export const AboutPage = () => {
  return (
    <div className="space-y-5">
      <h1 className="text-center text-4xl font-semibold tracking-tight mb-5">
        Nuestra empresa
      </h1>

      <img
        src="https://plus.unsplash.com/premium_photo-1682716270464-9a91cbbcf3b7?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWRpZmljaW8lMjBkZSUyMGxhJTIwZW1wcmVzYXxlbnwwfHwwfHx8MA%3D%3D"
        alt="Imagen de fondo"
        className="h-[500px] w-full object-cover"
      />

      <div className="flex flex-col gap-4 tracking-tighter leading-7 text-sm font-medium text-slate-800">
        <p>
          CompuMatch es una tienda en línea especializada en la venta de
          computadoras, fundada en 2024. Nuestro objetivo es ofrecer a nuestros
          clientes la mejor calidad y precio en tecnología, garantizando que
          encuentren la computadora ideal para sus necesidades personales y
          académicas.
        </p>

        <p>
          Contamos con un equipo de expertos dedicados a seleccionar
          cuidadosamente los mejores productos, asegurando que cada compra sea
          una inversión inteligente. En CompuMach, te guiamos paso a paso para
          que encuentres la opción perfecta, adaptada a tu perfil y presupuesto.
        </p>

        <h2 className="text-3xl font-semibold tracking-tighh mt-8 mb-4">
          ¡No esperes más y compra tu computador en CompuMatch!
        </h2>

        <p>
          Para más información, no dudes en ponerte en contacto con nosotros, a
          través de nuestro correo electrónico: 
          <a href="mailto:compumatch01@gmail.com">compumatch01@gmail.com</a> o
          llamado al <a href="tel:3024101216">3024101216</a>
        </p>
      </div>
    </div>
  );
};