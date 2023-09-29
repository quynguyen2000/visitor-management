import { Card as CardAntd, CardProps } from 'antd';
import { FC } from 'react';
import './Card.scss';

export const Card: FC<CardProps> = ({ children, ...props }) => {
  const className = props.className ? props.className : '';

  return (
    <CardAntd {...props} className={`card ${className}`}>
      {children}
    </CardAntd>
  );
};
