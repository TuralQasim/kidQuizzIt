import { childCategory } from "./childCategory";

export interface WhyItem {
  category: childCategory;
  category_id: number;
  description: string;
  id: number;
  image: string;
  title: string;
}
