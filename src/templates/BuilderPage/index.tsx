import { Section } from 'components/Section';
import { ZigzagCard } from 'components/ZigzagCard';
import { FC, Fragment } from 'react';
import { BuilderPageFrontMaster, SmartSection } from 'types/Builder';
import { Features } from './Features';
import { Hero } from './Hero';
import { Plans } from './Plans';
import { Supports } from './Supports';
import { Theme } from './Theme';

export const BuilderPageTemplate: FC<BuilderPageFrontMaster> = ({ sections, isNetlify }) => {
  const renderSection = (section: SmartSection) => {
    switch (section.type) {
      case 'hero':
        return <Hero {...section} />;
      case 'features':
        return <Features {...section} />;
      case 'themes':
        return <Theme isNetlify={isNetlify} {...section} />;
      case 'zigzag':
        return (
          <Section backgroundColor={section.backgroundColor}>
            <ZigzagCard {...section.zigzagContent} />
          </Section>
        );
      case 'supports':
        return <Supports {...section} />;
      case 'plans':
        return <Plans {...section} />;
      default:
        return null;
    }
  };

  return (
    <>
      {sections.map((section, index) => {
        return <Fragment key={index}>{renderSection(section)}</Fragment>;
      })}
    </>
  );
};
