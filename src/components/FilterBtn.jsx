const FilterBtn = ({ skills, level, role, onFilter }) => {
  return (
    <div className="filter-tags">
      <p className="ftag" onClick={onFilter}>
        {role}
      </p>
      <p className="ftag" onClick={onFilter}>
        {level}
      </p>
      {skills === undefined
        ? null
        : skills.map((s) => {
            return (
              <p
                className="ftag"
                key={Math.floor(Math.random() * 1000000)}
                onClick={onFilter}>
                {s}
              </p>
            );
          })}
    </div>
  );
};

export default FilterBtn;
