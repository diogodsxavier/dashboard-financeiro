import React from "react";
import { Transaction } from "../types/transaction";

interface Props {
    transactions: Transaction[];
}

const TransactionList: React.FC<Props> = ({ transactions }) => {
    if (transactions.length === 0) {
        return <p className="text-zinc-400 text-sm">Nenhuma transação cadastrada.</p>
    }

    return (
        <table className="w-full table-auto">
            <thead>
                <tr className="text-left text-zinc-500">
                    <th className="p-2">Descrição</th>
                    <th className="p-2">Categoria</th>
                    <th className="p-2">Valor</th>
                    <th className="p-2">Data</th>
                </tr>
            </thead>
            <tbody>
                {transactions.map((t) => (
                    <tr key={t.id} className="border-t dark:border-zinc-700">
                        <td className="p-2">{t.description}</td>
                        <td className="p-2">{t.category}</td>
                        <td
                            className={`p-2 font-semibold ${t.type === 'entrada' ? 'text-green-500' : 'text-red-500'
                                }`}
                        >
                            {t.type === 'entrada' ? '+' : '-'} R$ {t.value.toFixed(2)}
                        </td>
                        <td className="p-2">{new Date(t.date).toLocaleDateString()}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default TransactionList;