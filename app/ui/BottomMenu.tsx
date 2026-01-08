import React from 'react';
import { FuelCapacitySelector } from './FuelCapacitySelector';

interface BottomMenuProps {
  toggleMusic: React.MouseEventHandler<HTMLButtonElement>;
  isMusicPlaying: boolean;
  setFuel: (fuel: number) => void;
  fuel: number;
}

export default function BottomMenu({ toggleMusic, isMusicPlaying, setFuel, fuel }: BottomMenuProps) {

  return (
        <div className="flex flex-row p-4 bg-transparent h-fit w-full content-center gap-4 justify-center">
          <FuelCapacitySelector setFuel={setFuel} fuel={fuel} />
          <button onClick={toggleMusic} className="w-fit h-9 bg-yellow-300 p-2 rounded-lg text-black text-[14px]">
              {isMusicPlaying ? 'Pause music' : 'Play music'}
          </button>

        </div>      
  );
};
