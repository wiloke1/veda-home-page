import { ModalBase } from 'components/ModalBase';
import { useRef } from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { createGlobalState } from 'react-use';
import { Popup, PricingPopupFrontMaster } from 'types/PricingPopup';

const useListContentActive = createGlobalState('');

export const usePricingPopupSupportForBuilder = (value: PricingPopupFrontMaster) => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [_, setListContentActive] = useListContentActive();
  const data = value.pricingPopup ?? [];

  const getLiProps = <T extends { children: any; className?: string }>(props: T) => {
    const children = typeof props.children === 'string' ? props.children : Array.isArray(props.children) ? props.children[0] : '';
    const cond = typeof children === 'string' && data.some(popup => popup.listTitle.trim() === children.trim());

    return {
      ...props,
      className: cond ? `${props.className} cur:pointer c:color-primary td:underline` : props.className,
      onClick: () => {
        if (cond) {
          setListContentActive(children.trim());
        }
      },
    };
  };

  return {
    contentRef,
    getLiProps,
  };
};

export const PricingPopupSupportForBuilder = ({ data, document }: { data: Popup[]; document: Document }) => {
  const [listContentActive, setListContentActive] = useListContentActive();
  const isModalVisibie = !!listContentActive;
  const popupContent = data.find(popup => popup.listTitle.trim() === listContentActive.trim());

  if (!popupContent) {
    return null;
  }

  return (
    <ModalBase
      visible={isModalVisibie}
      onClose={() => {
        setListContentActive('');
      }}
      document={document}
    >
      <div
        className="bgc:color-light p:30px bdrs:6px w:calc(100vw_-_20px) maw:1000px mah:80vh ovx:hidden ovy:auto"
        style={{ textAlign: popupContent.align }}
      >
        <ReactMarkdown>{popupContent.content}</ReactMarkdown>
      </div>
      <div
        className="pos:absolute t:0 r:10px fz:32px lh:normal cur:pointer"
        onClick={() => {
          setListContentActive('');
        }}
      >
        &times;
      </div>
    </ModalBase>
  );
};
