import { StaticImageData } from "next/image";

export interface Product {
  id: number;
  title: string;
  price: number;
  image_url: StaticImageData;
}
