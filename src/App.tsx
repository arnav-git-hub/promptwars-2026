import React from 'react';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-8 flex flex-col items-center justify-center">
      <div className="max-w-2xl text-center space-y-4">
        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-400 border border-blue-500/30">
          PromptWars 2026 Ready
        </span>
        <h1 className="text-4xl font-bold tracking-tight text-white">Google Gemini + Stitch AI Starter</h1>
        <p className="text-slate-400">Pre-configured boilerplate ready for Stitch UI drop-ins and Gemini API calls.</p>
      </div>
    </div>
  );
};

export default App;
