import React, { useState } from 'react';
import './App.css';

function Smartphonefooter() {
  const [showGetToKnowUs, setShowGetToKnowUs] = useState(false);
  const [showMakeMoneyWithUs, setShowMakeMoneyWithUs] = useState(false);
  const [showPaymentProducts, setShowPaymentProducts] = useState(false);
  const [showLetUsHelpYou, setShowLetUsHelpYou] = useState(false);

  const toggleVisibility = (setter, currentState) => {
    setter(!currentState);
  };

  return (
    <div className="footer-smartphone">
      <div className="btn-f">
        <button className="btn-dropdown" onClick={() => toggleVisibility(setShowGetToKnowUs, showGetToKnowUs)}>
          <h5 className="card-title-2">Top destinations</h5>
        </button>
        {showGetToKnowUs && (
          <div className="list-container" id="myDIV">
            <ul className="list-detail-3">
              <a href="#" className="link-style"><li className="list-detail-3">option</li></a>
              <a href="#" className="link-style"><li className="list-detail-3">option</li></a>
              <a href="#" className="link-style"><li className="list-detail-3">option</li></a>
              <a href="#" className="link-style"><li className="list-detail-3">option</li></a>
              <a href="#" className="link-style"><li className="list-detail-3">option</li></a>
              <a href="#" className="link-style"><li className="list-detail-3">option</li></a>
              <a href="#" className="link-style"><li className="list-detail-3">option</li></a>
              <a href="#" className="link-style"><li className="list-detail-3">option</li></a>
            </ul>
          </div>
        )}
      </div>
      <div className="btn-f-1">
        <button className="btn-dropdown" onClick={() => toggleVisibility(setShowMakeMoneyWithUs, showMakeMoneyWithUs)}>
          <h5 className="card-title-2">Make Money with Us</h5>
        </button>
        {showMakeMoneyWithUs && (
          <div className="list-container" id="myDIV1">
            <ul className="list-detail-3">
              <a href="#" className="link-style"><li className="list-detail-3">option</li></a>
              <a href="#" className="link-style"><li className="list-detail-3">option</li></a>
              <a href="#" className="link-style"><li className="list-detail-3">option</li></a>
              <a href="#" className="link-style"><li className="list-detail-3">option</li></a>
              <a href="#" className="link-style"><li className="list-detail-3">option</li></a>
              <a href="#" className="link-style"><li className="list-detail-3">option</li></a>
              <a href="#" className="link-style"><li className="list-detail-3">option</li></a>
              <a href="#" className="link-style"><li className="list-detail-3">option</li></a>
            </ul>
          </div>
        )}
      </div>
      <div className="btn-f-2">
        <button className="btn-dropdown" onClick={() => toggleVisibility(setShowPaymentProducts, showPaymentProducts)}>
          <h5 className="card-title-2">Top countries & regions</h5>
        </button>
        {showPaymentProducts && (
          <div className="list-container" id="myDIV2">
            <ul className="list-detail-3">
              <a href="#" className="link-style"><li className="list-detail-3">option</li></a>
              <a href="#" className="link-style"><li className="list-detail-3">option</li></a>
              <a href="#" className="link-style"><li className="list-detail-3">option</li></a>
              <a href="#" className="link-style"><li className="list-detail-3">option</li></a>
              <a href="#" className="link-style"><li className="list-detail-3">option</li></a>
              <a href="#" className="link-style"><li className="list-detail-3">option</li></a>
              <a href="#" className="link-style"><li className="list-detail-3">option</li></a>
              <a href="#" className="link-style"><li className="list-detail-3">option</li></a>
            </ul>
          </div>
        )}
      </div>
      <div className="btn-f-3">
        <button className="btn-dropdown" onClick={() => toggleVisibility(setShowLetUsHelpYou, showLetUsHelpYou)}>
          <h5 className="card-title-2">Support & FAQs</h5>
        </button>
        {showLetUsHelpYou && (
          <div className="list-container" id="myDIV3">
            <ul className="list-detail-3">
              <a href="#" className="link-style"><li className="list-detail-3">option</li></a>
              <a href="#" className="link-style"><li className="list-detail-3">option</li></a>
              <a href="#" className="link-style"><li className="list-detail-3">option</li></a>
              <a href="#" className="link-style"><li className="list-detail-3">option</li></a>
              <a href="#" className="link-style"><li className="list-detail-3">option</li></a>
              <a href="#" className="link-style"><li className="list-detail-3">option</li></a>
              <a href="#" className="link-style"><li className="list-detail-3">option</li></a>
              <a href="#" className="link-style"><li className="list-detail-3">option</li></a>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Smartphonefooter;