import React, { useMemo } from 'react';
import Grid from '@mui/material/Grid';
import Ship from '../atoms/Ship';

// Assets
import CarrierImg from '../../assets/carrier.png';
import BattleshipImg from '../../assets/battleship.png';
import CruiserImg from '../../assets/cruiser.png';
import SubmarineImg from '../../assets/submarine.png';
import DestroyerImg from '../../assets/destroyer.png';

const shipsData = [
  {
    name: 'Carrier',
    size: 5,
    img: CarrierImg,
    hits: [false, false, false, false, false],
  },
  {
    name: 'Battleship',
    size: 4,
    img: BattleshipImg,
    hits: [false, false, false, false],
  },
  {
    name: 'Cruiser',
    size: 3,
    img: CruiserImg,
    hits: [false, false, false],
  },
  {
    name: 'Submarine',
    size: 3,
    img: SubmarineImg,
    hits: [false, false, false],
  },
  {
    name: 'Destroyer',
    size: 2,
    img: DestroyerImg,
    hits: [true, true],
  },
];

const ShipList: React.FC = () => {
  const ships = useMemo(() => shipsData, []);

  return (
    <Grid container spacing={2} mt={2}>
      {ships.map((ship, index) => (
        <Grid key={index} item xs={12} sm={6} md={12} maxWidth="50%">
          <Ship name={ship.name} img={ship.img} hits={ship.hits} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ShipList;
