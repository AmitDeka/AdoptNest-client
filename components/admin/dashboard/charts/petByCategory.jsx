"use client";
import { Label, Pie, PieChart } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartContainer } from "@/components/ui/chart";
import { useEffect, useMemo, useState } from "react";
import { getAllPetByCategory } from "@/lib/api";

function generateColor(index, total) {
  const hue = (index * (360 / total)) % 360;
  return `hsl(${hue}, 70%, 60%)`;
}

export function PetByCategoryChart() {
  const [chartData, setChartData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await getAllPetByCategory();
        const data = res.data;
        const formatted = data.map((item, index) => ({
          category: item.category.name,
          petsCount: item.pets.length,
          fill: generateColor(index, data.length),
        }));
        setChartData(formatted);
      } catch (error) {
        console.error("Error fetching pet category data:", error);
      }
    }
    fetchData();
  }, []);

  const totalPets = useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.petsCount, 0);
  }, [chartData]);

  return (
    <Card className="flex flex-col rounded-2xl font-karla">
      <CardHeader className="items-center pb-0">
        <CardTitle className="font-petrona text-lg">Pets by Category</CardTitle>
        <CardDescription>Live data from the database</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer className="mx-auto aspect-square max-h-[220px]">
          <PieChart>
            <Pie
              data={chartData}
              dataKey="petsCount"
              nameKey="category"
              innerRadius={60}
              strokeWidth={5}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle">
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold">
                          {totalPets}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground text-sm">
                          Pets
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex space-x-1 flex-wrap">
          {chartData.map((item, index) => (
            <div
              className="inline-flex items-center space-x-1 border py-[2px] px-[6px] rounded-3xl"
              key={index}>
              <div
                className="size-2.5 rounded-full"
                style={{ backgroundColor: item.fill }}></div>
              <p className="text-xs font-karla">{item.category}</p>
            </div>
          ))}
        </div>
        <div className="leading-none text-muted-foreground">
          Number of pets in each category
        </div>
      </CardFooter>
    </Card>
  );
}
