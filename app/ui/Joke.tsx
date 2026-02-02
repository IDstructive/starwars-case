interface JokeProps {
  joke: string;
}

export default function Joke({joke}:JokeProps) {
    
  return (
        <div className="h-20 content-center pl-34 w-fit color-black text-[14px] font-bold">
            {joke}
        </div>      
  );
};
