import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import type { DashboardBarChartProps } from "./DashboardBarChart.types";
import { CHART_COLORS } from "@/constants";

const DashboardBarChart = ({
  income,
  expense,
  balance,
}: DashboardBarChartProps) => {
  const data = [
    { name: "Receita", value: income },
    { name: "Despesa", value: expense },
    { name: "Saldo", value: balance },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">Totais Financeiros</h2>

      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />

          <Bar dataKey="value">
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={
                  entry.name === "Receita"
                    ? CHART_COLORS.positive
                    : entry.name === "Despesa"
                      ? CHART_COLORS.negative
                      : entry.value >= 0
                        ? CHART_COLORS.neutral
                        : CHART_COLORS.negative
                }
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export { DashboardBarChart };
