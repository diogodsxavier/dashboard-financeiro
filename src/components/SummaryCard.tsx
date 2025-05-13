import React from "react";

interface SummaryCarsProps {
    title: string;
    amount: number;
    variant?: 'income' | 'expense' | 'total';
}

const SummaryCard: React.FC<SummaryCarsProps> = ({ title, amount, variant }) => {
    const isTotal = variant === 'total';
    const isIncome = variant === 'income';
    const isExpense = variant === 'expense';

    return (
        <div
            className={`rounded-2x1 p-4 shadow transition-colors ${
                isTotal
                    ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white"
                    : "bg-white dark:bg-zinc-800 dark:text-white"
                }`}
        >
            <h3 className="text-sm font-medium">{title}</h3>
            <p className="text-xl font-bold mt-2">
                {isIncome && "+"}
                {isExpense && "-"}R$ {amount.toFixed(2)}
            </p>
        </div>
    );
};

export default SummaryCard;
