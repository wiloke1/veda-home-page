import { NetlifyWarning } from 'components/NetlifyWarning';
import { Section } from 'components/Section';
import { Title } from 'components/Title';
import { FC } from 'react';
import { Section as ISection } from 'types/general';
import { Content } from './Content';

export interface ThemeProps {
  subHeading?: string;
  heading: string;
  description: string;
  decorate?: ISection['decorate'];
  isNetlify?: boolean;
}

export const Theme: FC<ThemeProps> = ({ subHeading, heading, description, decorate, isNetlify = false }) => {
  return (
    <Section>
      <Title subTitle={subHeading} title={heading} text={description} decorate={decorate} />
      {isNetlify ? <NetlifyWarning pageName="theme" /> : <Content />}
    </Section>
  );
};
