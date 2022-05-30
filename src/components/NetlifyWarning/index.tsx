import { FC } from 'react';

export interface NetlifyWarningProps {
  pageName: string;
}

export const NetlifyWarning: FC<NetlifyWarningProps> = ({ pageName }) => {
  return (
    <div className="p:30px bgc:color-gray2 bd:1px_solid_color-gray3 bdrs:6px d:flex fld:column ai:center jc:center ta:center fz:15px">
      <p>Không thể hiển thị nội dung này tại trang Admin. Hãy chuyển sang trang {pageName}</p>
    </div>
  );
};
