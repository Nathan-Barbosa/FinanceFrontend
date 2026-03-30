import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import type { DashboardPieChartProps } from "./DashboardPieChart.types";
import { PIE_CHART_COLORS } from "@/constants";

const DashboardPieChart = ({ income, expense }: DashboardPieChartProps) => {
  const data = [
    { name: "Receita", value: income },
    { name: "Despesa", value: expense },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">Receitas vs Despesas</h2>

      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie data={data} dataKey="value" nameKey="name" outerRadius={80}>
            {data.map((_, index) => (
              <Cell key={index} fill={PIE_CHART_COLORS[index]} />
            ))}
          </Pie>

          <Tooltip />
          <Legend verticalAlign="bottom" height={36} iconType="circle" />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export { DashboardPieChart };
