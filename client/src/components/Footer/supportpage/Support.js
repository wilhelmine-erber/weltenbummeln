import { useState } from 'react';
import { faqs } from './Data';
import Supportitem from './Supportitem';
import './Support.css';
import Formcontact from '../formcontact';

const Support = () => {
  const [clicked, setClicked] = useState('0'); 
  const handleToggle = (index) => {
    if (clicked === index) {
      return setClicked('0');
    }
    setClicked(index);
  };  
  return (
    <div className="container_support">
      <div className="section_head_support" >
        <h4>
          <span>Häufig gestellte Fragen</span>
        </h4>
        <ul className="accordion_support">
          {faqs.map((faq, index) => (
            <Supportitem
              onToggle={() => handleToggle(index)}
              active={clicked === index}
              key={index}
              faq={faq}
            />
          ))}
        </ul>
      </div>
      <div>
        <Formcontact/>
      </div>
    </div>
  );
};
export default Support;


