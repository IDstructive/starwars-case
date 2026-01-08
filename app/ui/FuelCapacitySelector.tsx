import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface FuelCapacitySelectorProps {
  setFuel: (fuel: number) => void;
  fuel: number;
}

export function FuelCapacitySelector({ setFuel, fuel }: FuelCapacitySelectorProps) {
  return (
    <Select onValueChange={(value) => setFuel(Number(value))} value={String(fuel)}>
      <SelectTrigger className="w-[120px] bg-yellow-300 border-none rounded-lg">
        <SelectValue placeholder="Select a fuel capacity" />
      </SelectTrigger>
      <SelectContent className="bg-yellow-300 border-none">
        <SelectGroup>
          <SelectLabel>Fuel capacity</SelectLabel>
          <SelectItem value="25">25 days</SelectItem>
          <SelectItem value="20">20 days</SelectItem>
          <SelectItem value="15">15 days</SelectItem>
          <SelectItem value="10">10 days</SelectItem>
          <SelectItem value="5">5 days</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
