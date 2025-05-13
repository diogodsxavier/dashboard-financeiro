import { useEffect, useState } from "react";
import TransactionForm from "../components/TransactionForm";
import { Transaction } from "../types/transaction";
import SummaryCars from "../components/SummaryCard";
import TransactionList from "../components/TransactionList";
import PieChartComponent from "../components/PieChart";

const STORAGE_KEY = '@painel-financeiro:transactions';

const Dashboard = () => {
    const [transactions, setTransactions] = useState<Transaction[]>([]);



    //  Carrega as transações do localStorage quando o componente é montado
    useEffect(() => {
        const stored = localStorage.getItem(STORAGE_KEY);

        try {
            if (stored) {
                const parsed = JSON.parse(stored);
                if (Array.isArray(parsed)) {
                    setTransactions(parsed);
                }
            }
        } catch (e) {
            console.error('Erro ao carregar transações do localStorage', e);

        }
    }, []);

    // Persiste sempre que mudar transactions

    useEffect(() => {
        if (transactions.length > 0) {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions));
        }
    }, [transactions]);

    const handleAdd = (tx: Transaction) => {
        setTransactions((prev) => [tx, ...prev]);
    };


    // Cálculo dos resumos
    const entradas = transactions
        .filter(t => t.type === 'entrada')
        .reduce((sum, t) => sum + t.value, 0);

    const saidas = transactions
        .filter(t => t.type === 'saida')
        .reduce((sum, t) => sum + t.value, 0);

    const saldo = entradas - saidas;

    return (
        <main className="p-4 md:p-8 max-w-6x1 mx-auto space-y-6">
            {/* Título */}
            <h1 className="text-2x1 font-bold">Painel Financeiro</h1>

            {/* Summary Cards */}

            <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <SummaryCars
                    title='Entradas'
                    amount={entradas}
                    variant='income'
                />
                <SummaryCars
                    title='Saídas'
                    amount={saidas}
                    variant='expense'
                />
                <SummaryCars
                    title='Saldos'
                    amount={saldo}
                    variant='total'
                />
            </section>

            {/* Formulário de transações */}
            <section>
                {/* Componente TransactionForm virá aqui */}
                <div className="bg-white dark:bg-zinc-800 rounded-2xl shadow p-4">
                    <h2 className="text-lg font-semibold mb-2">Nova Transação</h2>
                    <TransactionForm onAddTransaction={handleAdd} />
                </div>
            </section>

            {/* Lista de transações */}
            <section>
                <h2 className="text-lg font-semibold mb-2">Transações</h2>
                {/* Componente TransactionList virá aqui */}
                <div className="bg-white dark:bg-zinc-800 rounded-2xl shadow p-4">






                {/* CONTINUAR DAQUI AMANHÃ */}





                    <TransactionList transactions={transactions} />
                </div>
            </section>

            {/* Gráfico de pizza */}
            <section>
                <h2 className="text-lg font-semibold mb-2">Distribuição por categoria</h2>
                {/* Componente PieChart virá aqui */}
                <div className="bg-white dark:bg-zinc-800 rounded-2xl shadow p-4">
                    <PieChartComponent key={transactions.length} transactions={transactions} />
                </div>
            </section>
        </main>
    )
};

export default Dashboard;