import classNames from 'classnames';
import { GetStartedPopup } from 'components/GetStartedPopup';
import { Section } from 'components/Section';
import { Title } from 'components/Title';
import { Tooltip } from 'components/Tooltip';
import { FC } from 'react';
import ReactMarkdown from 'react-markdown';
import { IPlanComparison, TableItem } from 'types/Pricing';
import * as styles from './PlanComparison.module.scss';

export const PlanComparison: FC<IPlanComparison> = ({ heading, features, table }) => {
  const [_features] = features;

  const renderTableItem = (item: TableItem) => {
    return (
      <div key={item.title} className={styles.plan}>
        <div className={classNames(styles.planHeader, { [styles.planHeaderHighlight]: item.highlight })}>
          <h3 className={styles.planTitle}>{item.title}</h3>
          <div className={styles.planPrice} dangerouslySetInnerHTML={{ __html: item.price }} />
          <GetStartedPopup
            buttonSize="medium"
            buttonHighlight={item.highlight}
            buttonText={item.buttonText}
            buttonStyle={{ width: '100%', maxWidth: 200 }}
          />
        </div>
        <div className={styles.planBody}>
          <ReactMarkdown
            children={item.content}
            components={{
              li: ({ node: _, ...props }) => {
                if (props.children?.[0] === 'minus') {
                  return (
                    <li>
                      <i className="far fa-minus" />
                    </li>
                  );
                }
                if (props.children?.[0] === 'check') {
                  return (
                    <li>
                      <i className="far fa-check" />
                    </li>
                  );
                }
                return <li {...props} />;
              },
            }}
          />
        </div>
      </div>
    );
  };

  return (
    <Section>
      <div className="container">
        <Title title={heading} />
        <div className={styles.table}>
          <div className={styles.features}>
            <div className={styles.featuresHeader}>
              <h3 className={styles.featuresTitle}>{_features.title}</h3>
            </div>
            <div className={styles.featuresContent}>
              <ReactMarkdown
                children={_features.content}
                components={{
                  li: ({ node: _, ...props }) => {
                    if (/\(|\)/.test(props.children?.[0]?.toString() ?? '')) {
                      const text = props.children?.[0]?.toString()?.replace(/\(.*\)/g, '');
                      const tooltip =
                        props.children?.[0]
                          ?.toString()
                          ?.replace(/.*\(/g, '')
                          ?.replace(/\).*/g, '')
                          ?.replace(/\(.*\)/g, '') ?? '';
                      return (
                        <li {...props}>
                          {text}
                          <Tooltip title={tooltip}>
                            <i className={classNames(styles.tooltip, 'far fa-info-circle')} />
                          </Tooltip>
                        </li>
                      );
                    }
                    return <li {...props} />;
                  },
                }}
              />
            </div>
          </div>
          <div className={styles.plans}>{table.map(renderTableItem)}</div>
        </div>
      </div>
    </Section>
  );
};