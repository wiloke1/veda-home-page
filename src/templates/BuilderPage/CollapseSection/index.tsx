import { FC } from 'react';
import Collapse from 'components/Collapse';
import { Section } from 'components/Section';
import ReactMarkdown from 'react-markdown';
import { SectionCollapse } from 'types/Builder';
import { Title } from 'components/Title';
import { LinkButton } from 'components/LinkButton';
import * as styles from './CollapseSection.module.scss';

export const CollapseSection: FC<SectionCollapse> = ({ heading, description, decorate, collapseContent, backgroundColor, backgroundImage }) => {
  return (
    <Section style={{ overflow: 'hidden' }} backgroundColor={backgroundColor} backgroundImage={backgroundImage}>
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
                  <div className={styles.content}>
                    <ReactMarkdown>{item.content}</ReactMarkdown>
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
