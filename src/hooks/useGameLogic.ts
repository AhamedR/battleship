import { useContext } from 'react';
import { GameContext, GameContextType } from '../contexts/GameContext';

const useGameLogic = (): GameContextType => {
  const context = useContext(GameContext);
  console.log(context);
  if (!context) {
    throw new Error('useGameLogic must be used within a GameProvider');
  }
  return context;
};

export default useGameLogic;
