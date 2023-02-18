import { GatsbyImage, Image } from 'components/Image';
import { LinkButton } from 'components/LinkButton';
import { CSSProperties, FC } from 'react';

export interface ImageTextBox2Props {
  image?: GatsbyImage;
  title: string;
  description: string;
  buttonText?: string;
  onButtonClick?: () => void;
  containerStyle?: CSSProperties;
}

export const ImageTextBox2: FC<ImageTextBox2Props> = ({ image, title, description, buttonText, onButtonClick, containerStyle }) => {
  return (
    <div className="ta:center bgc:color-light bd:1px_solid_color-gray2 bdrs:6px ov:hidden" style={containerStyle}>
      {!!image && <Image src={image} alt={title} />}
      <div className="p:15px">
        <h3 className="fz:18px mb:10px">{title}</h3>
        <p className="fz:15px">{description}</p>
        {!!buttonText && (
          <LinkButton className="mt:10px" onClick={onButtonClick}>
            {buttonText}
          </LinkButton>
        )}
      </div>
    </div>
  );
};
