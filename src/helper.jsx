
export const getCharacter = file => String.fromCharCode (file+96);

export function createPosition(){

  const position = Array(8).fill('').map(x=>Array(8).fill(''));

  position[0][0] = 'wr';
  position[0][7] = 'wr';

  position[0][1] = 'wn';
  position[0][6] = 'wn';

  position[0][3] = 'wq';  

  position[0][5] = 'wb';
  position[0][2] = 'wb';

  position[0][4] = 'wk';

  position[1][0] = 'wp';
  position[1][1] = 'wp';
  position[1][2] = 'wp';
  position[1][3] = 'wp';
  position[1][4] = 'wp';
  position[1][5] = 'wp';
  position[1][6] = 'wp';
  position[1][7] = 'wp';
  

  position[7][0] = 'br';
  position[7][7] = 'br';

  position[7][1] = 'bn';
  position[7][6] = 'bn';

  position[7][3] = 'bq';  

  position[7][5] = 'bb';
  position[7][2] = 'bb';

  position[7][4] = 'bk';

  position[6][1] = 'bp';
  position[6][2] = 'bp';
  position[6][0] = 'bp';
  position[6][3] = 'bp';
  position[6][4] = 'bp';
  position[6][5] = 'bp';
  position[6][6] = 'bp';
  position[6][7] = 'bp';

  console.log(position);
  return position;

}

export function copyPosition(position){
  const newPosition = Array(8).fill('').map(x=>Array(8).fill(''));

  for (let rank = 0; rank < 8 ; rank++) {
    for (let file = 0; file < 8; file++) {
      newPosition[rank][file] = position[rank][file];
    }
  }

  return newPosition;

}