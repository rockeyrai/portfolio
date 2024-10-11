"use client"

import { TrendingUp } from "lucide-react"
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"



const chartData = [
  { sector: "Strength", percentage: 80 },
  { sector: "Endurance", percentage: 75 },
  { sector: "Flexibility", percentage: 85 },
  { sector: "Body Fat", percentage: 60 },
  { sector: "Muscle Tone", percentage: 70 },
  { sector: "Cardiovascular Fitness", percentage: 90 },
  
]

const chartConfig = {
  percentage: {
    label: "Percentage",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

export function ComponentPhysic() {
  return (
    <Card>
      <CardHeader className="items-center pb-4">
        <CardTitle>Physical Radar Chart</CardTitle>
        <CardDescription>
          Showing stats of my Physic in percent.
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-5">
        <ChartContainer
          config={chartConfig}
          className="mx-auto max-h-[450px] max-w-[500px] "
        >
          <RadarChart data={chartData}>
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <PolarAngleAxis dataKey="sector" />
            <PolarGrid />
            <Radar
              dataKey="percentage"
              fill="var(--color-percentage)"
              fillOpacity={0.7}
            />
          </RadarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
