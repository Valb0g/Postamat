import React from 'react';
import { useSelector } from 'react-redux';
import {
  Card, CardImg,
} from 'reactstrap';

function Packages() {
  const packages = useSelector((state) => state.product);
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
    }}
    >
      {
          packages.map((p) => (
            <Card key={p.id} style={{ padding: '5px', margin: '5px', flex: '45%' }}>
              <CardImg src={p.img} alt="Card image cap" />
            </Card>
          ))
     }

    </div>

  );
}

export default Packages;
