import { CouponInfo } from 'components/PlanCard';

export const calculatePricing = ({ type, discount, currentPrice }: { type: CouponInfo['type']; currentPrice: number | string; discount: number }) => {
  // Trường hợp current price = "Free" thì giữ nguyên
  if (typeof currentPrice === 'string') {
    return currentPrice;
  }
  if (type === 'PERCENTAGE') {
    return (currentPrice * (100 - discount)) / 100;
  } else if (type === 'FIXED') {
    return currentPrice - discount;
  } else {
    // Loại chiết khấu không hợp lệ thì return về giá gốc
    return currentPrice;
  }
};

export const getPrice = (str: string) => {
  const regex = /\d+/;
  const match = str.match(regex);
  const number = match ? parseInt(match[0]) : str;
  return number;
};

export const replacePricing = (plan: string, price: string | number) => {
  if (typeof price === 'string') {
    return price;
  } else {
    const regex = /\d+/; // matches one or more digits
    const result = plan.replace(regex, price.toString());
    return result;
  }
};
