import { GetStartedForm } from 'components/GetStartedForm';
import { Image } from 'components/Image';
import { Section } from 'components/Section';
import { CSSProperties, FC, useRef } from 'react';
import { SectionHero } from 'types/Builder';
import classNames from 'classnames';
import { MouseMove } from 'components/MouseMove';
import * as styles from './Hero.module.scss';
import imac from './imgs/imac.png';
import img0 from './imgs/0.png';
import img1 from './imgs/1.png';
import img2 from './imgs/2.png';
import img3 from './imgs/3.png';

export interface HeroProps extends SectionHero {}

export const Hero: FC<HeroProps> = ({ heading, description, heroImage, backgroundColor, backgroundImage }) => {
  const rightRef = useRef<HTMLDivElement | null>(null);
  const styleVariables = {
    ...(backgroundColor ? { '--section-background-color': backgroundColor } : {}),
  } as CSSProperties;
  const isInstallPage = /\/install/g.test(window?.location?.pathname);

  return (
    <Section className={classNames('p:0! ov:hidden', isInstallPage ? '' : 't:-75px t:-85px@920px')} backgroundImage={backgroundImage}>
      <div className="container">
        <div className="d:flex fxw:wrap h:100vh">
          <div className="w:50% pr:pfs(30px,80px) d:flex fld:column jc:center w:100%@+md pr:0@+md w:100%@+1100px maw:600px@+1100px m:auto@+1100px pr:0@+1100px">
            <h1 className={classNames(styles.heading, 'fz:pfs(40px,60px) fw:600 mb:20px')} dangerouslySetInnerHTML={{ __html: heading }} />
            <p className="fz:20px">{description}</p>
            <GetStartedForm containerClassName="mt:40px" />
          </div>
          <div ref={rightRef} className="pos:relative w:50% pl:pfs(30px,80px) d:flex fld:column jc:center w:100%@+md pl:0@+md d:none@+1100px">
            <div className="pos:relative w:max-content pr:30px">
              <div className="pos:absolute z:0 t:-80px r:-50px">
                <Image src={img0} alt="" />
              </div>
              <div className="pos:absolute z:4 t:-30px r:0">
                <MouseMove elementRef={rightRef} radius={50}>
                  <Image src={img1} alt="" />
                </MouseMove>
              </div>
              <div className="pos:absolute z:3 t:0 r:0">
                <MouseMove elementRef={rightRef} radius={40}>
                  <Image src={img2} alt="" />
                </MouseMove>
              </div>
              <div className="pos:absolute z:3 t:30px r:-140px">
                <MouseMove elementRef={rightRef} radius={30}>
                  <Image src={img3} alt="" />
                </MouseMove>
              </div>
              <div className="pos:relative">
                <MouseMove elementRef={rightRef}>
                  {!!heroImage && (
                    <div className="pos:absolute t:3.5% r:5.8% b:33% l:3.2% ov:hidden bdrs:12px">
                      <Image className="w:100%" src={heroImage} alt="" />
                    </div>
                  )}
                  <Image src={imac} alt="" />
                </MouseMove>
              </div>
            </div>
          </div>
          <div className="pos:absolute t:0 l:50% z:-1 w:10000px h:100% bgc:var(--section-background-color) l:0@+1100px" style={styleVariables} />
        </div>
      </div>
    </Section>
  );
};
