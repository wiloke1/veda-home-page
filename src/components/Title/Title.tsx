import { FC, ReactNode } from 'react';

export interface TitleProps {
  title: string;
  text?: string;
  Left?: ReactNode;
  Right?: ReactNode;
}

const Title: FC<TitleProps> = ({ title, text, Right, Left }) => {
  return (
    <div>
      <div>
        <div>{Left}</div>
        <div>
          <div>{title}</div>
          {!!text && <div>{text}</div>}
        </div>
      </div>
      <div>{Right}</div>
    </div>
  );
};

export default Title;
