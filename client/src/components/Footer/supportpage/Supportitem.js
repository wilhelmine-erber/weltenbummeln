import { useRef } from "react";
const Supportitem = ({ faq, active, onToggle }) => {
    const { question, answer } = faq; 
     const contentEl = useRef();  
     return (
      <li className={`accordion_item_support ${active ? "active" : ""}`}>
        <button className="button_support" onClick={onToggle}>
          {question}
          <span className="control_support">{active ? "-" : "+"} </span>
        </button>
        <div
          ref={contentEl}
          className="answer_wrapper_support"
          style={
            active
              ? { height: contentEl.current.scrollHeight }
              : { height: "0px" }
          }
        >
          <div className="answer_support">{answer}</div>
        </div>
      </li>
    );
  };
  export default Supportitem;