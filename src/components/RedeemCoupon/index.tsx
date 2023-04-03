import classNames from 'classnames';
import { FC } from 'react';
import { pmChildren } from 'utils/postMessage';
import * as styles from './RedeemCoupon.module.scss';

interface RedeemCouponProps {}

export const RedeemCoupon: FC<RedeemCouponProps> = () => {
  const openModal = () => {
    pmChildren.emit('@landing/openModalCoupon');
  };
  return (
    <div className={classNames('mr:10px ff:font-secondary fw:500', styles.container)} onClick={openModal}>
      Redeem Coupon
    </div>
  );
};
