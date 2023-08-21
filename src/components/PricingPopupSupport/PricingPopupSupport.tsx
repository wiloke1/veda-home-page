import { Markdown } from 'components/Markdown/Markdown';
import { ModalBase } from 'components/ModalBase';
import { graphql, useStaticQuery } from 'gatsby';
import { useRef } from 'react';
import { createGlobalState } from 'react-use';
import { PricingPopupData } from 'types/PricingPopup';

export const usePricingPopupStatic = () => {
  const { markdownRemark } = useStaticQuery<PricingPopupData>(graphql`
    query PricingPopupQuery {
      markdownRemark(frontmatter: { templateKey: { eq: "pricingPopup" } }) {
        frontmatter {
          pricingPopup {
            listTitle
            content
            align
          }
        }
      }
    }
  `);

  return markdownRemark.frontmatter.pricingPopup;
};

const useListContentActive = createGlobalState('');

export const usePricingPopupSupport = () => {
  const data = usePricingPopupStatic();
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [_, setListContentActive] = useListContentActive();

  const getLiProps = <T extends { children: any; className?: string }>(props: T) => {
    const children = Array.isArray(props.children) ? props.children[0] : '';
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

export const PricingPopupSupport = () => {
  const data = usePricingPopupStatic();
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
    >
      <div
        className="bgc:color-light p:30px bdrs:6px w:calc(100vw_-_20px) maw:1000px mah:80vh ovx:hidden ovy:auto"
        style={{ textAlign: popupContent.align }}
      >
        <Markdown>{popupContent.content}</Markdown>
      </div>
      <div
        className="pos:absolute t:0 r:10px fz:30px lh:normal cur:pointer"
        onClick={() => {
          setListContentActive('');
        }}
      >
        &times;
      </div>
    </ModalBase>
  );
};
