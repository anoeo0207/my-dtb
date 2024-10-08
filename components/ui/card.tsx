'use client'
import React from 'react';
import { Card } from 'antd';

const gridStyle: React.CSSProperties = {
  width: '50%',
  textAlign: 'center',
};

interface Props {
    cardTitle: string;
    value1:string;
    value2:string;
    value3:number;
    value4:number;
};

const CARD: React.FC<Props> = ({cardTitle, value1, value2, value3, value4}) => (
  <Card title={cardTitle}>
    <Card.Grid style={gridStyle}>{value1}</Card.Grid>
    <Card.Grid style={gridStyle}>{value2}</Card.Grid>
    <Card.Grid style={gridStyle}>{value3}</Card.Grid>
    <Card.Grid style={gridStyle}>{value4}</Card.Grid>
  </Card>
  
);

export default CARD;