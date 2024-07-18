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
        <Grid item key={ship} sm={6} md={12} pt={1} maxWidth="50%">
          <Ship name={ship} img={ships[ship].img} hits={ships[ship].hits} />
        </Grid>
      ))}
    </>
  );
};

export default ShipList;
