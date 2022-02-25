import { Section } from 'components/Section';
import { Title } from 'components/Title';
import { FC } from 'react';
import { Content } from './Content';

export interface ThemeProps {
  subHeading?: string;
  heading: string;
  description: string;
  isNetlify?: boolean;
}

export const Theme: FC<ThemeProps> = ({ subHeading, heading, description, isNetlify = false }) => {
  return (
    <Section>
      <Title subTitle={subHeading} title={heading} text={description} />
      {!isNetlify && <Content />}
    </Section>
  );
};
