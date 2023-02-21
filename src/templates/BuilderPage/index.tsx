import ReactMarkdown from 'react-markdown';
import { Section } from 'components/Section';
import { ZigzagCard } from 'components/ZigzagCard';
import { FC, Fragment } from 'react';
import { BuilderPageFrontMaster, SmartSection } from 'types/Builder';
import { CollapseSection } from './CollapseSection';
import { SectionContactForm } from './ContactForm';
import { Features } from './Features';
import { FeaturesGrid } from './FeaturesGrid';
import { Hero } from './Hero';
import { PlanComparison } from './PlanComparison';
import { Plans } from './Plans';
import { Supports } from './Supports';
import { Theme } from './Theme';

export const BuilderPageTemplate: FC<BuilderPageFrontMaster> = ({ sections }) => {
  const renderSection = (section: SmartSection) => {
    switch (section.type) {
      case 'hero':
        return <Hero {...section} />;
      case 'features':
        return <Features {...section} />;
      case 'themes':
        return <Theme {...section} />;
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
      case 'featuresGrid':
        return <FeaturesGrid {...section} />;
      case 'richtext':
        return (
          section.enable && (
            <Section>
              <div className="maw:700px m:auto veda-rich-text">
                <ReactMarkdown>{section.richtextContent}</ReactMarkdown>
              </div>
            </Section>
          )
        );
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
