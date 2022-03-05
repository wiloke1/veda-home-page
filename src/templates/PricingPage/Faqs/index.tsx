import { FC } from 'react';
import Collapse from 'components/Collapse';
import { Section } from 'components/Section';
import ReactMarkdown from 'react-markdown';
import { IFaqs } from 'types/Pricing';
import { Title } from 'components/Title';
import * as styles from './Faqs.module.scss';

export const Faqs: FC<IFaqs> = ({ heading, description, decorate, collapse }) => {
  return (
    <Section>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-4">
            <Title title={heading} text={description} decorate={decorate} align="left" />
          </div>
          <div className="col-xs-12 col-sm-6 col-md-8">
            {collapse.map((item, index) => {
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
