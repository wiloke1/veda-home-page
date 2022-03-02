import { Index } from 'elasticlunr';
import { Link } from 'gatsby';
import { ChangeEventHandler, FC, useRef, useState } from 'react';
import * as styles from './Search.module.scss';
import { useSearchIndexQuery } from './useSearchIndexQuery';

export interface SearchProps {
  templateKey: string;
}

export const Search: FC<SearchProps> = ({ templateKey }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const index = useRef<Index<string>>();
  const searchIndex = useSearchIndexQuery();

  const getOrCreateIndex = () => {
    return index.current
      ? index.current
      : // Create an elastic lunr index and hydrate with graphql query results
        Index.load(searchIndex);
  };

  const handleSearch: ChangeEventHandler<HTMLInputElement> = evt => {
    const query = evt.target.value;
    index.current = getOrCreateIndex();
    setQuery(query);
    setResults(
      index.current
        .search(query, { expand: true })
        // Map over each ID and return the full document
        .map(({ ref }) => index.current?.documentStore.getDoc(ref)),
    );
  };

  return (
    <div className={styles.container}>
      <input className={styles.input} placeholder="Search the blog..." type="text" value={query} onChange={handleSearch} />
      <div className={styles.icon}>
        <i className="far fa-search"></i>
      </div>
      <div className={styles.list}>
        {results.map(page => {
          if (page.templateKey !== templateKey) {
            return null;
          }
          return (
            <Link key={page.id} className={styles.listItem} to={page.slug}>
              {page.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
};
