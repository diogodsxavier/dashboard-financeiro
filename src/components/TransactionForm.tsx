import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { v4 as uuidv4 } from "uuid";

const formSchema = z.object({
    type: z.enum(["entrada", "saida"]),
    description: z.string().min(1, 'Descrição obrigatória'),
    value: z.number({ invalid_type_error: 'Valor deve ser um número' }).positive('Valor deve ser positivo'),
    category: z.string().min(1, 'Categoria obrigatória'),
    date: z.string().min(1, 'Data obrigatória'),
});

type FormData = z.infer<typeof formSchema>;

const TransactionForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
    });
    const onSubmit = (data: FormData) => {
        const transaction = {
            id: uuidv4(),
            ...data,
        };

        console.log('Transação cadastrada:', transaction);
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium">Tipo</label>
                    <select {...register('type')} className="w-full p-2 rounded bg-zinc-100 dark:bg-zinc-700">
                        <option value="entrada">Entrada</option>
                        <option value="saida">Saída</option>
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-medium">Valor</label>
                    <input
                        type="number"
                        step='0.01'
                        {...register('value', { valueAsNumber: true })}
                        className="w-full p-2 rounded bg-zinc-100 dark:bg-zinc-700"
                    />
                    {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium">Descrição</label>

                <input
                    type="text"
                    {...register('description')}
                    className="w-full p-2 rounded bg-zinc-100 dark:bg-zinc-700"
                />
                {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
            </div>

            <div>
                <label className="block text-sm font-medium">Categoria</label>
                <input
                    type="text"
                    {...register('category')}
                    className="w-full p-2 rounded bg-zinc-100 dark:bg-zinc-700"
                />
                {errors.category && <p className="text-red-500 text-sm">{errors.category.message}</p>}
            </div>

            <div>
                <label className="block text-sm font-medium">Data</label>
                <input
                    type="text"
                    {...register('date')}
                    className="w-full p-2 rounded bg-zinc-100 dark:bg-zinc-700"
                />
                {errors.date && <p className="text-red-500 text-sm">{errors.date.message}</p>}
            </div>

            <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded shadow"
            >
                Adicionar Transação
            </button>
        </form>
    );
};

export default TransactionForm;