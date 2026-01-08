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

export function FuelCapacitySelector() {
  return (
    <Select >
      <SelectTrigger className="w-[180px] bg-yellow-500 border-none">
        <SelectValue placeholder="Select a fuel capacity" />
      </SelectTrigger>
      <SelectContent className="bg-white border-none">
        <SelectGroup>
          <SelectLabel>Fuel capacity</SelectLabel>
          <SelectItem value="25">25j - I'm Too Young To Die</SelectItem>
          <SelectItem value="20">20j - Hey, Not Too Rough</SelectItem>
          <SelectItem value="15">15j - Hurt Me Plenty</SelectItem>
          <SelectItem value="10">10j - Ultra-Violence</SelectItem>
          <SelectItem value="5">5j - Nightmare!</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
