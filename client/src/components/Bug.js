import React from "react";
import { useNavigate, Link } from "react-router-dom";

const Bug = (props) => {
  const navigate = useNavigate();
  const { name, id, bug_type } = props;
  return (
    <div className="border">
      <h1>Bug</h1>
      <p>id: {id}</p>
      <p>name: {name}</p>
      <p>bug_type: {bug_type}</p>
      <Link to={`/bugs/${id}`}>show</Link>
      <button>delete</button>
      <button
        onClick={() =>
          navigate(`/bugs/${id}/edit`, { state: { name, id, bug_type } })
        }
      >
        edit
      </button>
    </div>
  );
};

export default Bug;