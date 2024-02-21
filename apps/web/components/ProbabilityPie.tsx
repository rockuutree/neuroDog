import React from "react";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

const COLORS = ["#E5E7EB", "#7B39ED", "#FFBB28", "#FF8042"];

interface CalmProps {
  probability: number;
}

function Calm({ probability = 0 }: CalmProps): JSX.Element {
  const data = [{ value: 1 - probability }, { value: probability }];
  return (
    <ResponsiveContainer width="100%" height={350}>
      <PieChart data={data}>
        <Pie data={data} dataKey={"value"}>
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}

export default Calm;
