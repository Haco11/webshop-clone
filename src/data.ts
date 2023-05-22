import im6 from "./assets/img6.jpg";
import im7 from "./assets/img7.jpg";
import im8 from "./assets/img8.jpg";
import im9 from "./assets/img9.jpg";
import im10 from "./assets/img10.jpg";
import im11 from "./assets/img11.jpg";
import { Product } from "./type/Product";
export const data: Product[] = [
  {
    id: 1,
    title: "Ghost Squadron Sweatshirt",
    price: 999,
    image_url: im6,
    quantity: 1,
  },
  {
    id: 2,
    title: "Koenigsegg Sweatshirt",
    price: 999,
    image_url: im7,
    quantity: 1,
  },
  {
    id: 3,
    title: "Ghost Sweatshirt",
    price: 999,
    image_url: im8,
    quantity: 1,
  },
  {
    id: 4,
    title: "Black Cap",
    price: 355,
    image_url: im9,
    quantity: 1,
  },
  {
    id: 5,
    title: "Koenigsegg Keyring",
    price: 359,
    image_url: im10,
    quantity: 1,
  },
  {
    id: 6,
    title: "Grey Cap",
    price: 355,
    image_url: im11,
    quantity: 1,
  },
];

export const getProductsByIds = (ids: number[]): Product[] => {
  return data.filter((product) => ids.includes(product.id));
};

export const featured_products = [1, 5, 8];

// -> products/1
