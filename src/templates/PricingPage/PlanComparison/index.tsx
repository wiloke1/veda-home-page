import classNames from 'classnames';
import { Button } from 'components/Button';
import { GetStartedPopup } from 'components/GetStartedPopup';
import { Section } from 'components/Section';
import { Title } from 'components/Title';
import { Tooltip } from 'components/Tooltip';
import { FC, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useWindowSize } from 'react-use';
import { IPlanComparison, TableItem } from 'types/Pricing';
import * as styles from './PlanComparison.module.scss';

const MAX_WIDTH = 950;

export const PlanComparison: FC<IPlanComparison> = ({ heading, features, table }) => {
  const [_features] = features;
  const [activeTitle, setActiveTitle] = useState(table[0].title);
  const { width } = useWindowSize();

  const renderTableItem = (item: TableItem, index: number) => {
    const itemWidth = width <= MAX_WIDTH && item.title === activeTitle ? '100%' : `${100 / table.length}%`;
    if (width <= MAX_WIDTH && item.title !== activeTitle) {
      return null;
    }
    return (
      <div key={item.title} className={styles.plan} style={{ width: itemWidth }}>
        <div
          className={classNames(styles.planHeader, { [styles.planHeaderHighlight]: item.highlight })}
          style={table.length - 1 === index ? { borderRadius: '0 10px 0 0' } : {}}
        >
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
            components={{
              li: ({ node: _, ...props }) => {
                const textLast = props.children?.[0]?.toString()?.includes('[last]');
                if (props.children?.[0]?.toString()?.replace('[last]', '') === 'no') {
                  return (
                    <li className={textLast ? styles.last : ''}>
                      <i className="far fa-minus" />
                    </li>
                  );
                }
                if (props.children?.[0]?.toString()?.replace('[last]', '') === 'yes') {
                  return (
                    <li className={textLast ? styles.last : ''}>
                      <i className="far fa-check" />
                    </li>
                  );
                }
                if (textLast) {
                  const text = props.children?.[0]?.toString()?.replace('[last]', '');
                  return (
                    <li {...props} className={styles.last}>
                      {text}
                    </li>
                  );
                }
                return <li {...props} />;
              },
            }}
          >{`${item.content.trim()}[last]`}</ReactMarkdown>
        </div>
      </div>
    );
  };

  return (
    <Section>
      <div className="container">
        <Title title={heading} />
        {width <= MAX_WIDTH && (
          <div className={styles.tab}>
            {table.map(item => {
              return (
                <Button
                  key={item.title}
                  onClick={() => setActiveTitle(item.title)}
                  backgroundColor={item.title === activeTitle ? 'var(--color-gray8)' : 'var(--color-gray2)'}
                  color={item.title === activeTitle ? 'var(--color-light)' : 'var(--color-gray8)'}
                >
                  {item.title}
                </Button>
              );
            })}
          </div>
        )}
        <div className={styles.table}>
          <div className={styles.features} style={{ width: width <= MAX_WIDTH ? '55%' : '30%' }}>
            <div className={styles.featuresHeader}>
              <h3 className={styles.featuresTitle}>{_features.title}</h3>
            </div>
            <div className={styles.featuresContent}>
              <ReactMarkdown
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
                    if (props.children?.[0]?.toString()?.includes('[last]')) {
                      const text = props.children?.[0]?.toString()?.replace('[last]', '');
                      return (
                        <li {...props} className={styles.last}>
                          {text}
                        </li>
                      );
                    }
                    return <li {...props} />;
                  },
                }}
              >{`${_features.content.trim()}[last]}`}</ReactMarkdown>
            </div>
          </div>
          <div className={styles.plans} style={{ width: width <= MAX_WIDTH ? '45%' : '70%' }}>
            {table.map(renderTableItem)}
          </div>
        </div>
      </div>
    </Section>
  );
};
