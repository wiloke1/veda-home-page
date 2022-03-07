import { Section } from 'components/Section';
import { ZigzagCard } from 'components/ZigzagCard';
import { FC, Fragment } from 'react';
import { BuilderPageFrontMaster } from 'types/Builder';
import { Features } from './Features';
import { Hero } from './Hero';
import { Supports } from './Supports';
import { Theme } from './Theme';

export const BuilderPageTemplate: FC<BuilderPageFrontMaster> = ({ sections, isNetlify }) => {
  return (
    <>
      {sections.map((section, index) => {
        return (
          <Fragment key={index}>
            {!!section.hero && !section.hero.disable && <Hero {...section.hero} />}
            {!!section.features && !section.features.disable && <Features {...section.features} />}
            {!!section.themes && !section.themes.disable && (
              <Theme
                isNetlify={isNetlify}
                heading={section.themes.heading}
                description={section.themes.description}
                decorate={section.themes.decorate}
              />
            )}
            {!!section.supports && !section.supports.disable && <Supports {...section.supports} />}
            {!!section.zigzag && !section.zigzag.disable && (
              <Section backgroundColor={section.zigzag.backgroundColor}>
                <ZigzagCard {...section.zigzag.body} />
              </Section>
            )}
          </Fragment>
        );
      })}
    </>
  );
};
