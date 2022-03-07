import { ImageTextBox } from 'components/ImageTextBox';
import { Section } from 'components/Section';
import { Title } from 'components/Title';
import { navigate } from 'gatsby';
import { FC } from 'react';
import { SectionSupports } from 'types/Builder';

export const Supports: FC<SectionSupports> = ({ heading, description, decorate, supportsContent }) => {
  return (
    <Section>
      <div className="container">
        <Title title={heading} text={description} decorate={decorate} />
        <div className="row">
          {supportsContent.map((item, index) => {
            return (
              <div key={index} className="col-xs-12 col-sm-6 col-md-4">
                <ImageTextBox
                  image={item.image}
                  title={item.title}
                  description={item.description}
                  buttonText={item.buttonText}
                  onButtonClick={() => {
                    if (item.link === '--chat--') {
                      console.log('chat');
                    } else if (item.link.includes('http')) {
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
