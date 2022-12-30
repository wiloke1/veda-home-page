import { FC } from 'react';
import { GetStartedForm } from 'components/GetStartedForm';

export const Footer: FC = () => {
  return (
    <footer className="pos:relative z:9 ov:hidden c:color-gray1 bgc:color-gray9 pt:80px">
      <div className="container-fluid">
        <div className="pb:80px ta:center maw:580px m:auto">
          <h2 className="c:color-light fz:pfs(40px,50px) mb:10px">Veda builder</h2>
          <div className="fz:16px mb:30px">
            Veda Builder, an all-in-one Shopify Page Builder, lets you build amazing, responsive stores in no time. No need to worry about theme
            compatibility or other technicalities.
          </div>
          <GetStartedForm />
        </div>
      </div>
      <div className="p:30px_0 bdt:1px_solid_rgba(255,255,255,0.1) ta:center">Copyright © 2022.All Rights Reserved By Veda Builder</div>
    </footer>
  );
};
