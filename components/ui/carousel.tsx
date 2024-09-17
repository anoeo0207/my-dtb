"use client"; // Đánh dấu đây là một Client Component

import React from 'react';
import { Avatar, Carousel } from 'antd';
import App from "@/components/ui/avatarAntd";

// Định nghĩa style cho các slide của Carousel
const contentStyle: React.CSSProperties = {
  margin: 0,
  height: '160px',
  color: 'white',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
  borderRadius: '10px',
};

// Định nghĩa Component CarouselComponent
const CarouselComponent: React.FC = () => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  return (
    <Carousel afterChange={onChange}>
      <div>
        <h3 style={contentStyle}>
        <Avatar size={70} src="https://vcdn1-giaitri.vnecdn.net/2019/08/25/natra3-1566705811-8261-1566706130.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=9_Z097mPFgjoRA-LKRPAQw" />
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
        <Avatar size={70} src="https://gamek.mediacdn.vn/133514250583805952/2024/8/23/origin202408230944388204-1724404338321185070494.jpg" />
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
        <Avatar size={70} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgfPjOEUVA8Ybp0pxuUunM3aO_GqrcHwxa0Q&s" />
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>Slide 4</h3>
      </div>
    </Carousel>
  );
};

export default CarouselComponent;