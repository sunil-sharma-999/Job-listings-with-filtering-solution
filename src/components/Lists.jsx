import data from '../data.json';
import List from './List';

const Lists = ({ onFilter }) => {
  return (
    <div className="list-wrap">
      {data.map((d) => {
        return (
          <List
            key={d.id}
            logo={d.logo}
            cname={d.company}
            newBool={d.new}
            featured={d.featured}
            pos={d.position}
            time={d.postedAt}
            contract={d.contract}
            loc={d.location}
            skills={d.languages}
            role={d.role}
            level={d.level}
            onFilter={onFilter}
          />
        );
      })}
    </div>
  );
};

export default Lists;
