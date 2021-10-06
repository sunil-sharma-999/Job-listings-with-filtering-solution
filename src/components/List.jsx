import FilterBtn from './FilterBtn';

const List = ({
  logo,
  cname,
  newBool,
  featured,
  pos,
  time,
  contract,
  loc,
  skills,
  role,
  level,
  onFilter,
}) => {
  return (
    <div
      className="list"
      style={newBool ? { borderLeft: '6px solid hsl(180, 29%, 50%)' } : null}>
      <img className="logo" src={logo} alt="images" />
      {/* company profile */}
      <div className="company-wrap">
        {/* job company name */}
        <div className="company">
          <p className="cname">{cname}</p>
          {newBool ? <p className="tag new">New!</p> : null}
          {featured ? <p className="tag featured">FEATURED</p> : null}
        </div>
        {/* job title */}
        <p className="pos">{pos}</p>
        {/* info */}
        <div className="info">
          <p>{time}</p>
          <div></div>
          <p>{contract}</p>
          <div></div>
          <p>{loc}</p>
        </div>
      </div>
      <hr />
      <FilterBtn
        skills={skills}
        level={level}
        role={role}
        onFilter={onFilter}
      />
    </div>
  );
};

export default List;
