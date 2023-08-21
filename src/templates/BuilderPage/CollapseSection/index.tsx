import Collapse from 'components/Collapse';
import { LinkButton } from 'components/LinkButton';
import { Markdown } from 'components/Markdown/Markdown';
import { Section } from 'components/Section';
import { Title } from 'components/Title';
import { FC } from 'react';
import { SectionCollapse } from 'types/Builder';

export const CollapseSection: FC<SectionCollapse> = ({ heading, description, decorate, collapseContent, backgroundColor, backgroundImage }) => {
  return (
    <Section className="ov:hidden" backgroundColor={backgroundColor} backgroundImage={backgroundImage}>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-4">
            <Title title={heading} text={description} decorate={decorate} align="left" />
            <LinkButton>Ask our agents</LinkButton>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-8">
            {collapseContent.map((item, index) => {
              return (
                <Collapse
                  key={index}
                  groupName="faqs"
                  renderHeader={(handler, active) => (
                    <Collapse.Header active={active} onClick={handler}>
                      {item.title}
                    </Collapse.Header>
                  )}
                  name={`item${index}`}
                  accordion
                >
                  <div className="p:20px fz:16px">
                    <Markdown>{item.content}</Markdown>
                  </div>
                </Collapse>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
};
