import { ImageTextBox } from 'components/ImageTextBox';
import { Section } from 'components/Section';
import { Title } from 'components/Title';
import { FC } from 'react';
import { SectionFeatures } from 'types/Home';

export const Features: FC<SectionFeatures> = ({ heading, description, decorate, body }) => {
  return (
    <Section>
      <div className="container">
        <Title title={heading} text={description} decorate={decorate} />
        <div className="row">
          {body.map((item, index) => {
            return (
              <div key={index} className="col-xs-12 col-sm-6 col-md-4">
                <ImageTextBox
                  type="boxed"
                  image={item.image}
                  title={item.title}
                  description={item.description}
                  containerStyle={{ height: 'calc(100% - 30px)' }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};
