import { createContext, ReactNode, useContext, useState } from "react";
import { ShoppingCart } from "../components/ShoppingCart";
import { StoreItem } from "../pages/Shop";

type CartProviderProps = {
  children: ReactNode;
  items: StoreItem[];
};

type CartContext = {
  openCart: () => void;
  closeCart: () => void;
  getQuantity: (id: number) => number;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  removeItem: (id: number) => void;
  cartQuantity: number;
  cartItems: CartItem[];
  items: StoreItem[];
};

type CartItem = {
  id: number;
  quantity: number;
};

const CartContext = createContext({} as CartContext);

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children, items }: CartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  function getQuantity(id: number) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }

  function increaseQuantity(id: number) {
    setCartItems((items) => {
      if (items.find((item) => item.id === id) == null) {
        return [...items, { id, quantity: 1 }];
      } else {
        return items.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function decreaseQuantity(id: number) {
    setCartItems((items) => {
      if (items.find((item) => item.id === id)?.quantity === 1) {
        return items.filter((item) => item.id !== id);
      } else {
        return items.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function removeItem(id: number) {
    setCartItems((items) => {
      return items.filter((item) => item.id !== id);
    });
  }

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  function openCart() {
    setIsOpen(true);
  }

  function closeCart() {
    setIsOpen(false);
  }

  return (
    <CartContext.Provider
      value={{
        getQuantity,
        increaseQuantity,
        decreaseQuantity,
        removeItem,
        cartItems,
        cartQuantity,
        openCart,
        closeCart,
        items,
      }}
    >
      {children}
      <ShoppingCart isOpen={isOpen} />
    </CartContext.Provider>
  );
}
