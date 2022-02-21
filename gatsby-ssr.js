import React from 'react';
import { renderToString } from 'react-dom/server';
import { RendererProvider } from 'react-fela';
import { renderToSheetList } from 'fela-dom';
import WrapWithProvider from './src/WrapWithProvider';

export const replaceRenderer = ({ bodyComponent, replaceBodyHTMLString, setHeadComponents }) => {
  // let config = {
  //   plugins: [kebabCase(), embedded(), multipleSelectors(), felaPlugin({ pixelToRem: false, rootFontSizePercent: -1, removeHoverOnMobile: true })],
  //   enhancers: [],
  // };
  const bodyHTML = renderToString(<WrapWithProvider>{bodyComponent}</WrapWithProvider>);
  // const sheetList = renderToSheetList(renderer)

  // const elements = sheetList.map(({ type, css, media, support }) =>
  //   <style
  //     dangerouslySetInnerHTML={{ __html: css }}
  //     data-fela-type={type}
  //     data-fela-support={support}
  //     key={`${type}-${media}`}
  //     media={media}
  //   />
  // )
  replaceBodyHTMLString(bodyHTML);
  // setHeadComponents(elements)
};
