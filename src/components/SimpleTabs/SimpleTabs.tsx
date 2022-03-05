import { ReactNode, useEffect, useState } from 'react';
import * as styles from './SimpleTabs.module.scss';

export interface TabItem<T extends string> {
  label: string;
  value: T;
}

export interface SimpleTabsProps<T extends string> {
  data: TabItem<T>[];
  defaultValue: T;
  value?: T;
  renderItem?: (tabItem: TabItem<T>, index: number) => ReactNode;
  children: ReactNode | ((value: T) => ReactNode);
  onChange?: (value: T) => void;
}

const SimpleTabs = <T extends string>({ data, defaultValue, value, renderItem, children, onChange }: SimpleTabsProps<T>) => {
  const [tabActive, setTabActive] = useState<T>(defaultValue);

  useEffect(() => {
    if (!!value) {
      setTabActive(value);
    }
  }, [value]);

  useEffect(() => {
    onChange?.(tabActive);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tabActive]);

  const renderDefaultItem = (item: TabItem<T>) => {
    return <div key={item.value}>{item.label}</div>;
  };

  return (
    <div>
      <div className={styles.tab}>
        {data.map((item, index) => {
          return (
            <div
              key={item.value}
              className={styles.item}
              onClick={() => {
                setTabActive(item.value);
              }}
            >
              {!!renderItem ? renderItem(item, index) : renderDefaultItem(item)}
            </div>
          );
        })}
      </div>
      {typeof children === 'function' ? children(tabActive) : children}
    </div>
  );
};

export default SimpleTabs;
