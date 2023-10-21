import React, { useState, useEffect } from "react";
import { listDogs } from "./api";
import withLoader from "./withLoader";

function Dogs({ list }) {
  return (
    <div className="list">
      <h1>Dogs</h1>
      {list?.message?.map((dog, index) => (
        <img src={dog} alt="" height={200} width={200} key={`dog-${index}`} />
      ))}
    </div>
  );
}

export default withLoader(Dogs, listDogs);
