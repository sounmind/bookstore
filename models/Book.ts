export interface Price {
  amount: number;
  currency: string;
}

export interface Book {
  id: number;
  title: string;
  price: Price;
  category: string;
  description: string;
}
