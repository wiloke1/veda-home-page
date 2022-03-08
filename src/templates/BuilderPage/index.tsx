import { Section } from 'components/Section';
import { ZigzagCard } from 'components/ZigzagCard';
import { FC, Fragment } from 'react';
import { BuilderPageFrontMaster, SmartSection } from 'types/Builder';
import { CollapseSection } from './CollapseSection';
import { SectionContactForm } from './ContactForm';
import { Features } from './Features';
import { Hero } from './Hero';
import { PlanComparison } from './PlanComparison';
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
          <Section backgroundColor={section.backgroundColor} backgroundImage={section.backgroundImage}>
            <ZigzagCard {...section.zigzagContent} />
          </Section>
        );
      case 'supports':
        return <Supports {...section} />;
      case 'plans':
        return <Plans {...section} />;
      case 'collapse':
        return <CollapseSection {...section} />;
      case 'planComparison':
        return <PlanComparison {...section} />;
      case 'contactForm':
        return <SectionContactForm {...section} />;
      default:
        return null;
    }
  };

  return (
    <>
      {sections.map((section, index) => {
        if (!section.enable) {
          return null;
        }
        return <Fragment key={index}>{renderSection(section)}</Fragment>;
      })}
    </>
  );
};
