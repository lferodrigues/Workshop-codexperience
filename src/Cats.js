import React, { useState, useEffect } from "react";
import { listCats } from "./api";
import withLoader from "./withLoader";

function Cats({ list }) {
  return (
    <div className="list">
      <h1>Cats</h1>
      {list.map((cat, index) => (
        <img
          src={cat.url}
          alt=""
          key={`cat-${index}`}
          height={200}
          width={200}
        />
      ))}
    </div>
  );
}

export default withLoader(Cats, listCats);
