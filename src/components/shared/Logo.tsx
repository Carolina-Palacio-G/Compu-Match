import { Link } from "react-router-dom";

export const Logo = () => {
    return (
        <Link
            to="/"
            className="text-2xl font-bold tracking-tighter transition-all"
        >
            {/* Imagen para pantallas grandes */}
            <img
                src="/Img/Logo-01.png" // Ruta relativa desde la carpeta public
                alt="CompuMatch logo"
                className="hidden lg:block w-40 h-auto" // Estilos personalizados
            />

            {/* Imagen para pantallas pequeñas */}
            <img
                src="/Img/Logo-01.png" // Misma ruta para pantallas pequeñas
                alt="CompuMatch logo"
                className="lg:hidden w-20 h-auto" // Tamaño reducido en móviles
            />
        </Link>
    );
};