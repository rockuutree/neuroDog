"use client";

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

// Give me an array of { day: string, total: number } of the past 14 days of a random number

// Add the number to the day
const data = Array.from({ length: 14 }, (_, i) => {
  const date = new Date();
  date.setDate(date.getDate() - i);
  return {
    day: date.toLocaleDateString("en-US", { weekday: "short" }),
    total: Math.floor(Math.random() * 100),
  };
}).reverse();

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis
          dataKey="day"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}%`}
        />
        <Bar
          dataKey="total"
          fill="currentColor"
          radius={[4, 4, 0, 0]}
          className="fill-primary"
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
