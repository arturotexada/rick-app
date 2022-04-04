import React from "react";
import ProcessingUrlInfo from "./ProcessingUrlInfo";

const CharacterList = ({ characters }) => {
  return (
    <div>
      {characters?.map((residente) => (
        <li key={residente}>
          <ProcessingUrlInfo randm_url={residente} />
        </li>
      ))}
    </div>
  );
};

export default CharacterList;
