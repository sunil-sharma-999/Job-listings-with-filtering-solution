import Lists from './components/Lists';
import FilterBar from './components/FilterBar';
import { useState, useEffect } from 'react';

const App = () => {
  const [filter, setfilter] = useState([]);

  const filterFunc = (f) => {
    const data = f.target.textContent;
    if (filter.includes(data)) {
      return;
    } else {
      setfilter([...filter, data]);
    }
  };

  const filtering = () => {
    if (filter.length === 0) {
      const FilterTags = document.querySelectorAll('.filter-tags');
      FilterTags.forEach((fts) => {
        const list = fts.parentElement;
        list.style.display = 'block';
      });
    } else {
      const FilterTags = document.querySelectorAll('.filter-tags');
      FilterTags.forEach((fts) => {
        const list = fts.parentElement;
        const ftArr = Array.from(fts.querySelectorAll('.ftag')).map((ft) => {
          return ft.textContent;
        });
        const filterResult = filter.every((f) => {
          return ftArr.includes(f);
        });
        if (filterResult === true) {
          list.style.display = 'block';
        } else {
          list.style.display = 'none';
        }
      });
    }
  };

  const deleteTag = (d) => {
    const deleteVal = d.target.parentElement.firstChild.textContent;

    setfilter(
      filter.filter((f) => {
        return f !== deleteVal;
      }),
    );
  };

  const clearFilter = () => {
    setfilter([]);
  };

  useEffect(() => {
    filtering();
  }, [filter]);
  return (
    <div className="app">
      <picture>
        <source
          srcSet="./images/bg-header-desktop.svg"
          media="(min-width:800px)"
        />
        <img src="./images/bg-header-mobile.svg" alt="" />
      </picture>
      <div className="wrap">
        {filter.length > 0 ? (
          <FilterBar
            filter={filter}
            deleteTag={deleteTag}
            clearFilter={clearFilter}
          />
        ) : null}
        <Lists onFilter={filterFunc} />
      </div>
    </div>
  );
};

export default App;
