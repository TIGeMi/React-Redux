import React from "react";
import PropTypes from "prop-types";
import './HobbyList.css';

HobbyList.propTypes = {
  hobbyList: PropTypes.array,
  activeId: PropTypes.number,
  onHobbyClick: PropTypes.func,
};
HobbyList.defaultProps = {
  hobbyList: [],
  activeId: null,
  onHobbyClick: null,
};

function HobbyList(props) {
  const { hobbyList, activeId, onHobbyClick } = props;
  const handleClick = (hobby) => {
    if(onHobbyClick) {
      onHobbyClick(hobby);
    }
  };
  return (
    <div>
      <ul>
        {hobbyList.map((hobby) => (
          <li
            className={hobby.id === activeId ? "active" : ""}
            onClick={() => handleClick(hobby)}
            key={hobby.id}
          >
            {hobby.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HobbyList;
