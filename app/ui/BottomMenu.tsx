import React, { useState } from 'react';
import { FuelCapacitySelector } from './FuelCapacitySelector';
import Joke from './Joke'
import { Pause, Play } from 'lucide-react';


interface BottomMenuProps {
  toggleMusic: React.MouseEventHandler<HTMLButtonElement>;
  isMusicPlaying: boolean;
  setFuel: (fuel: number) => void;
  fuel: number;
}

export default function BottomMenu({ toggleMusic, isMusicPlaying, setFuel, fuel }: BottomMenuProps) {
  const [joke, setJoke] = useState<string>('');
  
  const fetchJoke = async () => {
    try {
      const response = await fetch('/api/agents/space-travel-agent/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // The body structure Mastra expects
        body: JSON.stringify({
          messages: [{ role: "user", content: "tell me a sci-fi related joke" }],
        }),
      });

      const data = await response.json();
      // Mastra returns the text in the 'text' field of the response
      setJoke(data.text);
    } catch (error) {
      console.error("Error fetching joke:", error);
      setJoke("Failed to teleport the joke. Check your connection.");
    }
  };

  return (
      <>
        <div className="flex flex-row p-4 bg-neutral-400 h-fit w-full content-center gap-4 justify-center">
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
          <button onClick={fetchJoke} className="flex w-fit gap-1 content-center h-9 bg-white p-2 rounded-lg text-black text-[14px]">
            Get Joke
          </button>
          <Joke joke={joke}/> 
        </div>      
      </>
  );
};
