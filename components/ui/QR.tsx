'use client'
import React from 'react';
import { Input, QRCode, Space } from 'antd';

const QR: React.FC = () => {
  const [text, setText] = React.useState('https://www.facebook.com/haian.nguyen.33234/?locale=vi_VN');

  return (
    <Space direction="vertical" align="center">
      <QRCode value={text || '-'} />
      
    </Space>
  );
};

export default QR;