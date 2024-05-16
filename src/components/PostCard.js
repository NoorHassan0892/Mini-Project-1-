import React from "react";

export const PostCard = ({ image, title, description, likes }) => {
  return (
    <div style={{ background: "red" }}>
      <img
        src={image}
        style={{
          width: "200px",
          height: "200px",
        }}
      />
      <h1>{title}</h1>
      <h3>{description}</h3>
      <h5>{likes}</h5>
      <button>"Likes"</button>
    </div>
  );
};
