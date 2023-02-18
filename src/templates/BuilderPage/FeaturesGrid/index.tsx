import { ImageTextBox2 } from 'components/ImageTextBox2';
import { Section } from 'components/Section';
import { Title } from 'components/Title';
import { navigate } from 'gatsby';
import { FC } from 'react';
import { ISectionFeaturesGrid } from 'types/Builder';

export const FeaturesGrid: FC<ISectionFeaturesGrid> = ({ heading, description, decorate, featuresGridContent, backgroundColor, backgroundImage }) => {
  return (
    <Section backgroundColor={backgroundColor} backgroundImage={backgroundImage}>
      <div className="container">
        <Title title={heading} text={description} decorate={decorate} />
        <div className="row">
          {featuresGridContent.map((item, index) => {
            return (
              <div key={index} className="col-xs-12 col-sm-6 col-md-3">
                <ImageTextBox2
                  image={item.image}
                  title={item.title}
                  description={item.description}
                  buttonText={item.buttonText}
                  onButtonClick={() => {
                    if (item.link.includes('http')) {
                      window.location.href = item.link;
                    } else {
                      navigate(item.link);
                    }
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};
