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

                        {/* CONTINUAR DAQUI..... */}

                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default TransactionList;