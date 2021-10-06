import { v4 } from 'uuid';

const FilterBar = ({ filter, deleteTag, clearFilter }) => {
  return (
    <div className="fbar">
      <div className="fbar-content">
        {filter.map((f) => {
          return (
            <div className="filterVal" key={v4()}>
              <p className="fval">{f}</p>
              <p className="cancel" onClick={deleteTag}>
                x
              </p>
            </div>
          );
        })}
      </div>
      <p className="clear" onClick={clearFilter}>
        Clear
      </p>
    </div>
  );
};

export default FilterBar;
