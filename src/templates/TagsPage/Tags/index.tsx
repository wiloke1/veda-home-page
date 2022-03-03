import { FC } from 'react';
import { useTagsQuery } from './useTagsQuery';

export const Tags: FC = () => {
  const tags = useTagsQuery();

  console.log(tags);

  return <div>Tags</div>;
};
