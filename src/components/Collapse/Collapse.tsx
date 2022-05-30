import { FC, ReactNode, useEffect } from 'react';
import { createGlobalState } from 'react-use';
import { CollapseHeader } from './CollapseHeader';

export interface CollapseProps {
  /** Tên của nhóm các collapse */
  groupName?: string;
  /** Tên của collapse */
  name: string;
  /** Bật / tắt chế độ accordion ( yêu cầu phải có groupName ) */
  accordion?: boolean;
  /** Collapse được active */
  active?: boolean;
  /** in ra header của collapse */
  renderHeader: (handler: () => void, active: boolean) => ReactNode;
  /** in ra footer của collapse */
  renderFooter?: (handler: () => void) => ReactNode;
}

export interface HandleCloseParam {
  groupName: string;
  name?: string;
}

const useGlobalState = createGlobalState<Record<string, any>>({});

const DEFAULT_GROUP_NAME = 'default-group-name';

export const useCollapseActions = () => {
  const [, setState] = useGlobalState();

  const handleClose = ({ groupName, name }: HandleCloseParam) => {
    setState(state => {
      if (!state[groupName]) {
        return state;
      }
      return {
        ...state,
        [groupName]: !!name
          ? {
              ...state[groupName],
              [name]: false,
            }
          : Object.keys(state[groupName]).reduce((obj, key) => {
              return {
                ...obj,
                [key]: false,
              };
            }, []),
      };
    });
  };

  const handleOpen = ({ groupName, name }: HandleCloseParam) => {
    setState(state => {
      if (!state[groupName] && name) {
        return {
          ...state,
          [groupName]: {
            [name]: true,
          },
        };
      }
      return {
        ...state,
        [groupName]: !!name
          ? {
              ...state[groupName],
              [name]: true,
            }
          : Object.keys(state[groupName]).reduce((obj, key) => {
              return {
                ...obj,
                [key]: true,
              };
            }, []),
      };
    });
  };

  return {
    onClose: handleClose,
    onOpen: handleOpen,
  };
};

type CollapseFC = FC<CollapseProps> & {
  Header: typeof CollapseHeader;
};

const Collapse: CollapseFC = ({ groupName = DEFAULT_GROUP_NAME, name, active = false, children, renderHeader, renderFooter, accordion = true }) => {
  const [state, setState] = useGlobalState();

  useEffect(() => {
    setState(state => ({
      ...state,
      [groupName]: {
        ...state[groupName],
        [name]: active || state[groupName]?.[name],
      },
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  const handleClick = () => {
    setState(state => ({
      ...state,
      [groupName]: Object.keys(state[groupName]).reduce((obj, cur) => {
        if (accordion && groupName !== DEFAULT_GROUP_NAME) {
          return {
            ...obj,
            [cur]: state[groupName][name] ? false : cur === name,
          };
        }
        return {
          ...obj,
          [cur]: cur === name ? !state[groupName][cur] : state[groupName][cur],
        };
      }, {}),
    }));
  };

  return (
    <div className="bgc:color-light bd:1px_solid_color-gray3 bdrs:6px mb:10px">
      {renderHeader(handleClick, state[groupName]?.[name])}
      {state[groupName]?.[name] && children}
      {state[groupName]?.[name] && renderFooter?.(handleClick)}
    </div>
  );
};

Collapse.Header = CollapseHeader;

export default Collapse;
