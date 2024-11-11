export const AboutPage = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 space-y-10">
      {/* Sección del Título */}
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold tracking-tight text-blue-900">
          Nuestra Empresa
        </h1>
        <p className="text-lg text-gray-600">
          Conoce más sobre CompuMatch, tu aliado tecnológico.
        </p>
      </div>

      {/* Sección de Imagen y Descripción */}
      <div className="flex flex-col md:flex-row gap-8 items-center">
        {/* Imagen */}
        <div className="flex-1">
          <img
            src="https://images.pexels.com/photos/443383/pexels-photo-443383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Imagen de fondo"
            className="h-[400px] w-full object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Descripción */}
        <div className="flex-1 space-y-4 text-gray-800">
          <p className="text-base leading-7">
            <strong>CompuMatch</strong> es una tienda en línea especializada en la venta de computadoras, fundada en 2024. 
            Nuestro objetivo es ofrecer a nuestros clientes la mejor calidad y precio en tecnología, 
            ayudándolos a encontrar la computadora ideal para sus necesidades personales y académicas.
          </p>

          <p className="text-base leading-7">
            Contamos con un equipo de expertos que selecciona cuidadosamente los mejores productos para garantizar 
            que cada compra sea una inversión inteligente. En <strong>CompuMatch</strong>, te guiamos paso a paso 
            para que encuentres la opción perfecta adaptada a tu perfil y presupuesto.
          </p>
        </div>
      </div>

      {/* Sección de Llamado a la Acción */}
      <div className="bg-blue-100 p-8 rounded-lg text-center space-y-4">
        <h2 className="text-3xl font-semibold text-blue-900">
          ¡No esperes más y adquiere tu computador en CompuMatch!
        </h2>
        <p className="text-gray-700">
          Ofrecemos asesoramiento personalizado para ayudarte a tomar la mejor decisión.
        </p>
        <a
          href="mailto:compumatch01@gmail.com"
          className="inline-block bg-blue-900 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-800 transition-all duration-200"
        >
          Contáctanos
        </a>
      </div>

      {/* Sección de Contacto */}
      <div className="text-center space-y-2">
        <p className="text-lg font-medium text-gray-800">
          Para más información, no dudes en ponerte en contacto:
        </p>
        <p>
          <a
            href="mailto:compumatch01@gmail.com"
            className="text-blue-900 hover:underline"
          >
            compumatch01@gmail.com
          </a>{" "}
          |{" "}
          <a href="tel:3024101216" className="text-blue-900 hover:underline">
            302 410 1216
          </a>
        </p>
      </div>
    </div>
  );
};
