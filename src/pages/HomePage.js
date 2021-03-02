import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewHobby, setActiveHobby } from "../actions/hobby";
import HobbyList from "../components/HobbyList";

HomePage.propTypes = {};

function HomePage(props) {
  const hobbyList = useSelector((state) => state.hobby.list);
  const activeId = useSelector((state) => state.hobby.activeId);

  const dispatch = useDispatch();

  const handleAddHobbyClick = () => {
    const genId = Math.ceil(Math.random() * 100);
    const newHobby = {
      id: genId,
      title: `hobby ${genId}`,
    };
    const action = addNewHobby(newHobby);
    dispatch(action);
  };

  const handleHobbyClick = (hobby) => {
    const action = setActiveHobby(hobby);
    dispatch(action);
  };
  return (
    <div>
      <div>Hello</div>
      <button onClick={handleAddHobbyClick}> Add new Hobby </button>
      <HobbyList
        hobbyList={hobbyList}
        activeId={activeId}
        onHobbyClick={handleHobbyClick}
      ></HobbyList>
    </div>
  );
}

export default HomePage;
