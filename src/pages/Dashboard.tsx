// import React from "react";

const Dashboard = () => {
    return (
        <main className="p-4 md:p-8 max-w-6x1 mx-auto space-y-6">
            {/* Título */}
            <h1 className="text-2x1 font-bold">Painel Financeiro</h1>

            {/* Cards de resumo */}
            <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Componentes SummaryCard virão aqui */}
                <div className="bg-white dark:bg-zinc-800 rounded-2xl shadow p-4">
                    <p className="text-sm text-zinc-500">Entradas</p>
                    <p className="text-xl font-bold text-green-500">R$ 0,00</p>
                </div>

                <div className="bg-white dark:bg-zinc-800 rounded-2xl shadow p-4">
                    <p className="text-sm text-zinc-500">Saídas</p>
                    <p className="text-xl font-bold text-red-500">R$ 0,00</p>
                </div>

                <div className="bg-white dark:bg-zinc-800 rounded-2xl shadow p-4">
                    <p className="text-sm text-zinc-500">Saldo</p>
                    <p className="text-xl font-bold">R$ 0,00</p>
                </div>
            </section>

            {/* Formulário de transações */}
            <section>
                {/* Componente TransactionForm virá aqui */}
                <div className="bg-white dark:bg-zinc-800 rounded-2xl shadow p-4">
                    <h2 className="text-lg font-semibold mb-2">Nova Transação</h2>
                    <p className="text-zinc-400 text-sm">Formulário será adicionado aqui</p>
                </div>
            </section>

            {/* Lista de transações */}
            <section>
                <h2 className="text-lg font-semibold mb-2">Transações</h2>
                {/* Componente TransactionList virá aqui */}
                <div className="bg-white dark:bg-zinc-800 rounded-2xl shadow p-4">
                    <p className="text-zinc-400 text-sm">Lista de transações será renderizada aqui</p>
                </div>
            </section>

            <section>
                <h2 className="text-lg font-semibold mb-2">Distribuição por categoria</h2>
                {/* Componente PieChart virá aqui */}
                <div className="bg-white dark:bg-zinc-800 rounded-2xl shadow p-4">
                    <p className="text-zinc-400 text-sm">Gráfico de pizza será exibido aqui</p>
                </div>
            </section>
        </main>
    )
};

export default Dashboard;