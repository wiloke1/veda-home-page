import { Button } from 'components/Button';
import { Markdown } from 'components/Markdown/Markdown';
import { ModalBase } from 'components/ModalBase';
import { useRef } from 'react';
import { createGlobalState } from 'react-use';
import { Popup, PricingPopupFrontMaster } from 'types/PricingPopup';

const useListContentActive = createGlobalState('');

export const usePricingPopupSupportForBuilder = (value: PricingPopupFrontMaster) => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [_, setListContentActive] = useListContentActive();
  const data = value.pricingPopup ?? [];

  const getLiProps = <T extends { children: any; className?: string }>(props: T) => {
    const children = typeof props.children === 'string' ? props.children : Array.isArray(props.children) ? props.children[0] : '';
    const cond = typeof children === 'string' && data.some(popup => popup.listTitle.replace(/﻿/g, '').trim() === children.replace(/﻿/g, '').trim());

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
  const popupContent = data.find(popup => popup.listTitle.replace(/﻿/g, '').trim() === listContentActive.replace(/﻿/g, '').trim());

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
        <Markdown>{popupContent.content}</Markdown>
        {!!popupContent.buttonPrimaryLink ||
          (!!popupContent.buttonSecondaryLink && (
            <div className="d:flex ai:center jc:center gp:12px mt:20px">
              {!!popupContent.buttonPrimaryLink && (
                <Button size="medium" className="bgc:color-gray2! c:color-gray9!" target="blank" href={popupContent.buttonPrimaryLink}>
                  {popupContent.buttonPrimaryLabel}
                </Button>
              )}
              {!!popupContent.buttonSecondaryLink && (
                <Button size="medium" className="bgc:color-primary" target="blank" href={popupContent.buttonSecondaryLink}>
                  {popupContent.buttonSecondaryLabel}
                </Button>
              )}
            </div>
          ))}
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
