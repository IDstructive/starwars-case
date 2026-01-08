import React from 'react';

interface BottomMenuProps {
  toggleMusic: React.MouseEventHandler<HTMLButtonElement>;
  isMusicPlaying: boolean;
}

export default function BottomMenu({ toggleMusic, isMusicPlaying }: BottomMenuProps) {

  return (
        <div className="flex flex-row p-4 bg-neutral-400 h-fit w-full content-center">
          <button onClick={toggleMusic} className="w-fit h-fit bg-gray-200/80 p-2 rounded text-black">
              {isMusicPlaying ? 'Pause' : 'Play'}
          </button>
          
        </div>      
  );
};
