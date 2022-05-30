import classNames from 'classnames';
import { GatsbyImage, Image } from 'components/Image';
import { LinkButton } from 'components/LinkButton';
import { CSSProperties, FC } from 'react';

export interface ImageTextBoxProps {
  image?: GatsbyImage;
  title: string;
  description: string;
  buttonText?: string;
  onButtonClick?: () => void;
  type?: 'default' | 'boxed';
  containerStyle?: CSSProperties;
}

export const ImageTextBox: FC<ImageTextBoxProps> = ({ image, title, description, buttonText, onButtonClick, type = 'default', containerStyle }) => {
  const boxedClassName = 'maw:none p:30px bdrs:10px bgc:transparent trs:0.3s bxsh:0_5px_20px_rgba(0,0,0,0.1)|h bgc:color-light|h';
  const titleClassName = `mt:pfs(20px,30px) ${type === 'boxed' ? 'fz:20px' : 'fz:30px'}`;
  return (
    <div className={classNames('ta:center maw:340px m:auto', { [boxedClassName]: type === 'boxed' })} style={containerStyle}>
      {!!image && <Image src={image} alt={title} className={classNames('maw:180px', { 'maw:120px': type === 'boxed' })} />}
      <h3 className={titleClassName}>{title}</h3>
      <p className="fz:15px mt:pfs(15px,20px)">{description}</p>
      {!!buttonText && (
        <LinkButton className="mt:pfs(10px,20px)" onClick={onButtonClick}>
          {buttonText}
        </LinkButton>
      )}
    </div>
  );
};
