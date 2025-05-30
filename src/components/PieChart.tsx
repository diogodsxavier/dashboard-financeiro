// Corijir o problema do gráfico de pizza


import React from "react";
import { Transaction } from "../types/transaction";
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

interface Props {
    transactions: Transaction[];
}

const COLORS = ["#2dd4bf", "#f87171", "#60a5fa", "#fbbf24", "#34d399", "#a78bfa"];

const PieChartComponent: React.FC<Props> = ({ transactions }) => {
    // Soma os valores por categoria, respeitando tipo de transação
    const dataMap: Record<string, number> = {};

    transactions.forEach((t) => {
        const valor = t.type === "entrada" ? t.value : -t.value;
        dataMap[t.category] = (dataMap[t.category] || 0) + valor;
    });

    // Remove categorias com valor <= 0
    const filteredData = Object.entries(dataMap)
        .filter(([, value]) => value > 0)
        .map(([name, value]) => ({ name, value }));

    const total = filteredData.reduce((sum, item) => sum + item.value, 0);

    if (filteredData.length === 0) {
        return <p className="text-zinc-400 text-sm">Ainda sem dados para o gráfico.</p>
    }

    return (
        <ResponsiveContainer width="100%" height={300}>
            <PieChart>
                <Legend verticalAlign="top" height={36} />
                <Tooltip formatter={(value: number) => `R$ ${value.toFixed(2)}`} />
                <Pie
                    dataKey='value'
                    data={filteredData}
                    nameKey='name'
                    cx='50%'
                    cy='50%'
                    outerRadius={100}
                    label={({ name, value }) =>
                        `${name}: ${((value / total) * 100).toFixed(0)}%`
                    }
                >
                    {filteredData.map((_, idx) => (
                        <Cell key={idx} fill={COLORS[idx % COLORS.length]} />
                    ))}
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    );
};

export default PieChartComponent;