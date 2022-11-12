import { Link } from 'gatsby';
import { FC } from 'react';

export interface NotifyCardProps {
  title: string;
  description: string;
  date: string;
  href?: string;
}

export const NotifyCard: FC<NotifyCardProps> = ({ title, description, date, href }) => {
  const renderContent = () => {
    return (
      <div className="p:15px_20px d:flex jc:space-between">
        <div className="pr:20px">
          <h3 className="fz:16px lh:1.2 mb:3px">{title}</h3>
          <div className="c:color-gray7">{description}</div>
        </div>
        <div className="fz:12px c:color-gray6 flxs:0">{date}</div>
      </div>
    );
  };

  if (!!href) {
    return (
      <Link
        to={href}
        className="pos:relative d:block mb:10px! td:none bdrs:6px c:inherit bd:1px_solid bdc:color-secondary bdc:color-gray3|vi bgc:color-quinary bgc:color-light|vi m:auto"
      >
        {renderContent()}
      </Link>
    );
  }

  return <div className="mb:10px! bdrs:6px bd:1px_solid_color-gray3 bgc:color-light m:auto">{renderContent()}</div>;
};
