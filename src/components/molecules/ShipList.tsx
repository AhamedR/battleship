import { useMemo } from 'react';
import Grid from '@mui/material/Grid';

import Ship from '../atoms/Ship';
import useGameLogic from '../../hooks/useGameLogic';


const ShipList: React.FC = () => {
  const {ships} = useGameLogic()
  const shipData = useMemo(() => ships, [ships]);

  return (
    <>
      {Object.keys(shipData).map((ship) => (
        <Grid key={ship} item xs={12} sm={6} md={12} maxWidth="50%">
          <Ship name={ship} img={ships[ship].img} hits={ships[ship].hits} />
        </Grid>
      ))}
    </>
  );
};

export default ShipList;
