export interface Transaction {
  id: string;
  type: "entrada" | "saida";
  description: string;
  value: number;
  category: string;
  date: string;
}

