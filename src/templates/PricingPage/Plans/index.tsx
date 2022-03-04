import { PlanCard } from 'components/PlanCard';
import { Section } from 'components/Section';
import { Title } from 'components/Title';
import { FC } from 'react';
import { SectionPlans } from 'types/Pricing';

export const Plans: FC<SectionPlans> = ({ heading, description, decorate, body }) => {
  return (
    <Section style={{ overflow: 'hidden' }}>
      <div className="container">
        <Title title={heading} text={description} decorate={decorate} />
        <div className="row">
          {body.map((item, index) => {
            return (
              <div key={index} className="col-xs-12 col-sm-6 col-md-4">
                <PlanCard {...item} />
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};
