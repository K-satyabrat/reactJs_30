import { useState } from "react";
import accordionData from "./data";
import "./style.css";

export default function Accordion() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  function handleMultiSelection(getCurrentId) {
    let copyMultple = [...multiple];
    const findIndexOfCurrentId = copyMultple.indexOf(getCurrentId);
    if (findIndexOfCurrentId) copyMultple.push(getCurrentId);
    else copyMultple.splice(findIndexOfCurrentId, 1);
    setMultiple(copyMultple);

    console.log(findIndexOfCurrentId);
  }
  console.log(selected);
  return (
    <div>
      <div className="wrapper">
        <button
          className="btn"
          onClick={() => setEnableMultiSelection(!enableMultiSelection)}
        >
          Enable Multiselection
        </button>
        <div className="accordion">
          {accordionData && accordionData.length > 0 ? (
            accordionData.map((dataItem) => (
              <div className="item" key={dataItem.id}>
                <div
                  onClick={
                    enableMultiSelection
                      ? () => handleMultiSelection(dataItem.id)
                      : () => handleSingleSelection(dataItem.id)
                  }
                  className="title"
                >
                  <h3>{dataItem.title}</h3>
                  <span>+</span>
                </div>

                {enableMultiSelection
                  ? multiple.indexOf(dataItem.id) !== -1 && (
                      <div className="content">{dataItem.content}</div>
                    )
                  : selected === dataItem.id && (
                      <div className="content">{dataItem.content}</div>
                    )}
                {/* {selected === dataItem.id ? (
                  <div className="content">{dataItem.content}</div>
                ) : null} */}
              </div>
            ))
          ) : (
            <div> No data found</div>
          )}
        </div>
      </div>
    </div>
  );
}
