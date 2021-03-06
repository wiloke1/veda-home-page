import { ImageTextBox } from 'components/ImageTextBox';
import { Section } from 'components/Section';
import { Title } from 'components/Title';
import { FC } from 'react';
import { SectionFeatures } from 'types/Builder';

export const Features: FC<SectionFeatures> = ({ heading, description, decorate, featuresContent, backgroundColor, backgroundImage }) => {
  return (
    <Section backgroundColor={backgroundColor} backgroundImage={backgroundImage}>
      <div className="container">
        <Title title={heading} text={description} decorate={decorate} />
        <div className="row">
          {featuresContent.map((item, index) => {
            return (
              <div key={index} className="col-xs-12 col-sm-6 col-md-4">
                <ImageTextBox type="boxed" image={item.image} title={item.title} description={item.description} containerStyle={{ height: '100%' }} />
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};
