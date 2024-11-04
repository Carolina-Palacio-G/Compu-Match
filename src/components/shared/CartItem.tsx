import { LuMinus, LuPlus } from "react-icons/lu";
import { formatPrice } from "../../helpers";
import { useCartStore } from "../../store/cart.store";

// Interface para definir los tipos de propiedades de cada artículo en el carrito
export interface ICartItem {
  variantId: string;
  productId: string;
  name: string;
  color: string;
  storage: string;
  price: number;
  quantity: number;
  image: string;
}

interface Props {
  item: ICartItem;
}

// Componente CartItem que representa cada artículo en el carrito
export const CartItem = ({ item }: Props) => {
  const removeItem = useCartStore((state) => state.removeItem);
  const updateQuantity = useCartStore((state) => state.updateQuantity);

  // Función para incrementar la cantidad del artículo
  const increment = () => {
    updateQuantity(item.variantId, item.quantity + 1);
  };

  // Función para decrementar la cantidad del artículo
  const decrement = () => {
    if (item.quantity > 1) {
      updateQuantity(item.variantId, item.quantity - 1);
    }
  };

  return (
    <li className="flex justify-between items-start gap-5 py-3 border-b border-slate-200">
      {/* Imagen del producto */}
      <div className="flex-shrink-0 w-20">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-20 object-contain"
        />
      </div>

      {/* Detalles del producto */}
      <div className="flex-1 space-y-2">
        <div className="flex justify-between items-start">
          <p className="font-semibold text-gray-800 whitespace-normal">
            {item.name}
          </p>
          <p className="text-sm font-medium text-gray-600">
            {formatPrice(item.price)}
          </p>
        </div>

        <p className="text-[13px] text-gray-600">
          {item.storage} / {item.color}
        </p>

        {/* Controles de cantidad y botón de eliminar */}
        <div className="flex gap-4 items-center">
          <div className="flex items-center gap-3 px-2 py-1 border border-slate-200 rounded-full">
            <button
              onClick={decrement}
              disabled={item.quantity === 1}
              aria-label="Decrementar cantidad"
              className="text-gray-500 hover:text-black disabled:text-gray-300"
            >
              <LuMinus size={15} />
            </button>
            <span className="text-gray-700 text-sm">{item.quantity}</span>
            <button
              onClick={increment}
              aria-label="Incrementar cantidad"
              className="text-gray-500 hover:text-black"
            >
              <LuPlus size={15} />
            </button>
          </div>

          <button
            className="text-[10px] underline font-medium text-gray-600 hover:text-black"
            onClick={() => removeItem(item.variantId)}
            aria-label="Eliminar producto del carrito"
          >
            Eliminar
          </button>
        </div>
      </div>
    </li>
  );
};
