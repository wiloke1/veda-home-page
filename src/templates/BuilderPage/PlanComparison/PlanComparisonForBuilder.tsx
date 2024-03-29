import { useLocation } from '@reach/router';
import classNames from 'classnames';
import { Button } from 'components/Button';
import { GetStartedPopup } from 'components/GetStartedPopup';
import { Markdown } from 'components/Markdown/Markdown';
import { usePlanToggleState } from 'components/PlanToggle';
import { Section } from 'components/Section';
import { Title } from 'components/Title';
import { Tooltip } from 'components/Tooltip';
import { FC, useEffect, useState } from 'react';
import { useWindowSize } from 'react-use';
import { SectionPlanComparison, TableItem } from 'types/Builder';
import { pmChildren } from 'utils/postMessage';
import { reactNodeToString } from 'utils/reactNodeToString';
import * as styles from './PlanComparison.module.scss';

const MAX_WIDTH = 950;

export const PlanComparisonForBuilder: FC<SectionPlanComparison> = ({ heading, planFeatures, plansTable, backgroundImage, backgroundColor }) => {
  const [features] = planFeatures;
  const [activeTitle, setActiveTitle] = useState(plansTable[0]?.title ?? '');
  const { width } = useWindowSize();
  const featuresContent = features.content.trim();
  const { nextType, currentType } = usePlanToggleState();
  const [idLoading, setIdLoading] = useState('');
  const location = useLocation();
  const [currentPlan, setCurrentPlan] = useState('');

  useEffect(() => {
    const off1 = pmChildren.on('@landing/plan/success', ({ plan }) => {
      setIdLoading('');
      setCurrentPlan(plan);
    });
    const off2 = pmChildren.on('@landing/plan/failure', () => {
      setIdLoading('');
    });
    const off3 = pmChildren.on('@landing/currentPlan', ({ plan }) => {
      setCurrentPlan(plan);
    });
    return () => {
      off1();
      off2();
      off3();
    };
  }, []);

  useEffect(() => {
    const vedaWrapperEl = document.getElementById('veda-wrapper');
    if (!!vedaWrapperEl) {
      vedaWrapperEl.style.removeProperty('overflow');
    }
  }, []);

  const renderTableItem = (item: TableItem, index: number) => {
    const itemWidth = width <= MAX_WIDTH && item.title === activeTitle ? '100%' : `${100 / plansTable.length}%`;
    if (width <= MAX_WIDTH && item.title !== activeTitle) {
      return null;
    }
    const itemContent = item.content.trim();

    return (
      <div key={item.title} className={styles.plan} style={{ width: itemWidth }} data-json={JSON.stringify(item)}>
        <div
          className={classNames(
            styles.planHeader,
            item.highlight ? styles.planHeaderHighlight : '',
            location.pathname === '/pricing-for-veda-builder' ? 't:0!' : '',
          )}
          style={plansTable.length - 1 === index ? { borderRadius: '0 10px 0 0' } : {}}
        >
          <h3 className={styles.planTitle}>{item.title}</h3>
          <div className={styles.planPrice} dangerouslySetInnerHTML={{ __html: nextType === 'monthly' ? item.pricePerMonth : item.pricePerYear }} />
          {currentPlan === item.handle && nextType === currentType && (
            <div className="pos:absolute t:10px r:10px w:30px h:30px bgc:color-secondary c:color-light bdrs:50% d:flex ai:center jc:center fz:16px">
              <i className="far fa-check" />
            </div>
          )}
          {currentPlan === item.handle && nextType === currentType ? (
            <Button size="medium" style={{ width: '100%', maxWidth: 200 }} backgroundColor="var(--color-gray2)" color="var(--color-gray9)">
              Current Plan
            </Button>
          ) : (
            <GetStartedPopup
              buttonSize="medium"
              buttonHighlight={item.highlight}
              buttonText={item.buttonText}
              buttonStyle={{ width: '100%', maxWidth: 200 }}
              isLoading={idLoading === item.handle}
              onClickForBuilder={() => {
                if (!idLoading) {
                  pmChildren.emit('@landing/plan/request', {
                    handle: item.handle,
                    type: nextType,
                    pricePerMonth: item.pricePerMonth,
                    pricePerYear: item.pricePerYear,
                    title: item.handle,
                  });
                  setIdLoading(item.handle);
                }
              }}
            />
          )}
        </div>
        <div className={styles.planBody}>
          <Markdown
            components={{
              li: ({ node: _, ...props }) => {
                const liText = reactNodeToString(props.children).trim();
                const textLast = liText.includes('[last]');
                if (liText.replace('[last]', '') === 'no') {
                  return (
                    <li className={textLast ? styles.last : ''}>
                      <i className="far fa-minus" />
                    </li>
                  );
                }
                if (liText.replace('[last]', '') === 'yes') {
                  return (
                    <li className={textLast ? styles.last : ''}>
                      <i className="far fa-check" />
                    </li>
                  );
                }
                if (textLast) {
                  const text = liText.replace('[last]', '');
                  return (
                    <li {...props} className={styles.last}>
                      {text}
                    </li>
                  );
                }
                return <li {...props} />;
              },
            }}
          >
            {!!itemContent ? `${itemContent}[last]` : itemContent}
          </Markdown>
        </div>
      </div>
    );
  };

  return (
    <Section id="plan-comparison" backgroundColor={backgroundColor} backgroundImage={backgroundImage}>
      <div className="container">
        <Title title={heading} />
        {width <= MAX_WIDTH && (
          <div className={styles.buttonGroup}>
            {plansTable.map(item => {
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
            <div className={classNames(styles.featuresHeader, location.pathname === '/pricing-for-veda-builder' ? 't:0!' : '')}>
              <h3 className={styles.featuresTitle}>{features.title}</h3>
            </div>
            <div className={styles.featuresContent}>
              <Markdown
                components={{
                  li: ({ node: _, ...props }) => {
                    const liText = reactNodeToString(props.children).trim();
                    if (/\(|\)/g.test(liText)) {
                      const text = liText.replace(/\(.*([\s\S]*?).*\)/g, '').replace('[last]', '');
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
                    if (liText.includes('[last]')) {
                      const text = liText.replace('[last]', '');
                      return (
                        <li {...props} className={styles.last}>
                          {text}
                        </li>
                      );
                    }
                    return <li {...props} />;
                  },
                }}
              >
                {!!featuresContent ? `${featuresContent}[last]` : featuresContent}
              </Markdown>
            </div>
          </div>
          <div className={styles.plans} style={{ width: width <= MAX_WIDTH ? '45%' : '70%' }}>
            {plansTable.map(renderTableItem)}
          </div>
        </div>
      </div>
    </Section>
  );
};
