// https://github.com/algolia/react-instantsearch
import algoliasearch from 'algoliasearch';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';
import { useState } from 'react';

import { WOO_CONFIG } from 'config/nextConfig';
import SearchHit from './SearchHit.component';

const searchClient = algoliasearch(
  WOO_CONFIG.ALGOLIA_APP_ID,
  WOO_CONFIG.ALGOLIA_PUBLIC_API_KEY
);

const Search = () => {
  const [search, setSearch] = useState(null);

  return (
    <>
      <div className="hidden mt-2 md:inline xl:inline">
        <div className="">
          <InstantSearch
            indexName="wp_posts_product"
            searchClient={searchClient}
          >
            <SearchBox
              className="px-6 py-2 bg-white border border-gray-500 rounded-lg focus:outline-none focus:shadow-outline"
              onReset={() => {
                setSearch(null);
              }}
              onChange={(text) => {
                setSearch(text.target.value);
              }}
            />

            {search && <Hits className="absolute" hitComponent={SearchHit} />}
          </InstantSearch>
        </div>
      </div>
    </>
  );
};

export default Search;
