import type { DashboardCardProps } from "./DashboardCard.types";

const DashboardCard = ({ title, value, highlight }: DashboardCardProps) => {
  return (
    <div className="p-4 bg-white rounded shadow">
      <span className="text-gray-500">{title}</span>

      <h2
        className={`text-2xl font-bold ${
          highlight === "green"
            ? "text-green-600"
            : highlight === "red"
              ? "text-red-600"
              : ""
        }`}
      >
        {value}
      </h2>
    </div>
  );
};

export { DashboardCard };
