import { DashboardCard } from "@/components/DashboardCard";
import { useGetDashboardQuery } from "@/services";
import { DashboardBarChart, DashboardPieChart } from "./components";

const Dashboard = () => {
  const { data } = useGetDashboardQuery();

  if (!data) {
    return <span>Erro ao carregar dashboard</span>;
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <span className="text-gray-500">Resumo geral do sistema</span>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <DashboardCard title="Pessoas" value={data.totalPersons} />
        <DashboardCard title="Categorias" value={data.totalCategories} />
        <DashboardCard title="Transações" value={data.totalTransactions} />
        <DashboardCard
          title="Saldo"
          value={`R$ ${data.balance.toFixed(2)}`}
          highlight={data.balance >= 0 ? "green" : "red"}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <DashboardPieChart
          income={data.totalIncome}
          expense={data.totalExpense}
        />

        <DashboardBarChart
          income={data.totalIncome}
          expense={data.totalExpense}
          balance={data.balance}
        />
      </div>
    </div>
  );
};

export { Dashboard };
