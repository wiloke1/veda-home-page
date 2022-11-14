import { PlanCard } from 'components/PlanCard';
import { PlanToggle, usePlanToggleState } from 'components/PlanToggle';
import { Section } from 'components/Section';
import { Title } from 'components/Title';
import { FC } from 'react';
import { SectionPlans } from 'types/Builder';

export const Plans: FC<SectionPlans> = ({ heading, description, decorate, plansContent, backgroundImage, backgroundColor }) => {
  const planToggleState = usePlanToggleState();

  return (
    <Section style={{ overflow: 'hidden' }} backgroundColor={backgroundColor} backgroundImage={backgroundImage}>
      <div className="container">
        <Title title={heading} text={description} decorate={decorate} />
        <div className="d:flex fld:column ai:center mt:40px mb:20px">
          <PlanToggle />
        </div>
        <div className="row">
          {plansContent.map((item, index) => {
            return (
              <div key={index} className="col-xs-12 col-sm-6 col-md-4" data-json={JSON.stringify(item)}>
                <PlanCard
                  {...item}
                  planType={planToggleState}
                  onMoreClick={() => {
                    const planComparisonEl = document.getElementById('plan-comparison');
                    if (planComparisonEl) {
                      window.scrollTo({
                        top: planComparisonEl.offsetTop,
                        behavior: 'smooth',
                      });
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
