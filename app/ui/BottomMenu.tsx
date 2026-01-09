import React from 'react';
import { FuelCapacitySelector } from './FuelCapacitySelector';
import { Pause, Play } from 'lucide-react';

interface BottomMenuProps {
  toggleMusic: React.MouseEventHandler<HTMLButtonElement>;
  isMusicPlaying: boolean;
  setFuel: (fuel: number) => void;
  fuel: number;
}

export default function BottomMenu({ toggleMusic, isMusicPlaying, setFuel, fuel }: BottomMenuProps) {

  return (
        <div className="flex flex-row p-4 bg-yellow-400 h-fit w-full content-center gap-4 justify-center">
          <FuelCapacitySelector setFuel={setFuel} fuel={fuel} />
          <button onClick={toggleMusic} className="flex w-fit gap-1 content-center h-9 bg-white p-2 rounded-lg text-black text-[14px]">
              {isMusicPlaying ? 
              <>
                <Pause size={16} /> <div>Pause music</div> 
              </> :
              <>
                <Play size={16} /> <div>Play music</div>
              </> 
              }
          </button>

        </div>      
  );
};
