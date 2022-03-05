import { FC } from 'react';
import Collapse from 'components/Collapse';
import { Section } from 'components/Section';
import ReactMarkdown from 'react-markdown';
import * as styles from './Faqs.module.scss';

export const Faqs: FC = () => {
  return (
    <Section>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-4">
            <h2>Frequently Asked Questions</h2>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-8">
            <Collapse
              groupName="faqs"
              renderHeader={(handler, active) => (
                <Collapse.Header active={active} onClick={handler}>
                  Collapse 1
                </Collapse.Header>
              )}
              name="item1"
              accordion
            >
              <div className={styles.content}>
                <ReactMarkdown>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, vitae.</ReactMarkdown>
              </div>
            </Collapse>
            <Collapse
              groupName="faqs"
              renderHeader={(handler, active) => (
                <Collapse.Header active={active} onClick={handler}>
                  Collapse 2
                </Collapse.Header>
              )}
              name="item2"
              accordion
            >
              <div className={styles.content}>
                <ReactMarkdown>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, vitae.</ReactMarkdown>
              </div>
            </Collapse>
          </div>
        </div>
      </div>
    </Section>
  );
};
