// MegaBoost.jsx
import React from 'react';
import { Button } from 'antd';

interface Props {
    handleClick: () => void;
}

function MegaBoost({ handleClick }: Props) {
  console.log('Render MegaBoost');
  
  return (
    <Button
      onClick={handleClick}
    >
      MEGA BOOST!
    </Button>
  );
}

export default React.memo(MegaBoost);