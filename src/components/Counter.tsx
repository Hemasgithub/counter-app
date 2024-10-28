// src/components/Counter.tsx
import React from 'react';
import useCounterStore from '../stores/useCounterStore.ts';

const Counter: React.FC = () => {
  const { count, increment, decrement, reset } = useCounterStore();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Count: {count}</h1>
      <div className="space-x-2">
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={increment}>
          Increment
        </button>
        <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={decrement}>
          Decrement
        </button>
        <button className="bg-gray-500 text-white px-4 py-2 rounded" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
