export interface Transaction {
    id: string;
    type: 'entrada' | 'saida';
    description: string;
    value: number;
    category: string;
    date: string; // Formato ISO ou local, ex: '2023-10-01' ou '01/10/2023'
}
