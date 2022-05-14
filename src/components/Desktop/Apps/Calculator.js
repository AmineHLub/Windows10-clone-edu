import React, { useState } from 'react';
import '../../../stylesheets/Apps/calculator.css';
import calculate from './logic/calculate';

export default function Calculator() {
  const [displayCalc, setdisplayCalc] = useState({});

  const handleEvent = (val) => {
    setdisplayCalc((prevState) => calculate(prevState, val));
  };

  const {
    next, operation, total,
  } = displayCalc;
  return (
    <div className="calculator-app-wrapper">
      <section className="calculator-screen d-flex">
        <p>{next || operation || total || '0'}</p>
      </section>
      <section className="calculator-buttons d-flex">
        <button type="button" onClick={() => handleEvent('AC')} className="operations">
          <p>CE</p>
        </button>
        <button type="button" onClick={() => handleEvent('AC')} className="operations">
          <p>C</p>
        </button>
        <button type="button" onClick={() => handleEvent('AC')} className="operations">
          <p>⌫</p>
        </button>
        <button type="button" onClick={() => handleEvent('÷')} className="operations">
          <p>÷</p>
        </button>
        <button type="button" onClick={() => handleEvent('7')} className="calculator-nbrs">
          <p>7</p>
        </button>
        <button type="button" onClick={() => handleEvent('8')} className="calculator-nbrs">
          <p>8</p>
        </button>
        <button type="button" onClick={() => handleEvent('9')} className="calculator-nbrs">
          <p>9</p>
        </button>
        <button type="button" onClick={() => handleEvent('x')} className="operations">
          <p>×</p>
        </button>
        <button type="button" onClick={() => handleEvent('4')} className="calculator-nbrs">
          <p>4</p>
        </button>
        <button type="button" onClick={() => handleEvent('5')} className="calculator-nbrs">
          <p>5</p>
        </button>
        <button type="button" onClick={() => handleEvent('6')} className="calculator-nbrs">
          <p>6</p>
        </button>
        <button type="button" onClick={() => handleEvent('-')} className="operations">
          <p>−</p>
        </button>
        <button type="button" onClick={() => handleEvent('1')} className="calculator-nbrs">
          <p>1</p>
        </button>
        <button type="button" onClick={() => handleEvent('2')} className="calculator-nbrs">
          <p>2</p>
        </button>
        <button type="button" onClick={() => handleEvent('3')} className="calculator-nbrs">
          <p>3</p>
        </button>
        <button type="button" onClick={() => handleEvent('+')} className="operations">
          <p>+</p>
        </button>
        <button type="button" onClick={() => handleEvent('+/-')} className="operations">
          <p>±</p>
        </button>
        <button type="button" onClick={() => handleEvent('0')} className="calculator-nbrs">
          <p>0</p>
        </button>
        <button type="button" onClick={() => handleEvent('.')} className="operations">
          <p>.</p>
        </button>
        <button type="button" onClick={() => handleEvent('=')} className="operations">
          <p>=</p>
        </button>
      </section>
    </div>
  );
}
