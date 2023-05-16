import React from 'react';
import './style.css';
import { useState, useEffect } from 'react';
import {NumericFormat} from 'react-number-format';

export default function Logic() {
    
    const [prevState, setPrevState] = useState("");
    const [currState, setCurrState] = useState("");
    const [input, setInput] = useState("");
    const [operator, setOperator] = useState(null);
    const [total, setTotal] = useState(false);

    const inputNumber = (e) => {
        if (currState.includes(".") && e.target.innerText === ".")
            return;
        if (total)
            setPrevState("");
        currState ? setCurrState((prev) => prev + e.target.innerText) : setCurrState(e.target.innerText);
        setTotal(false);
    };

    useEffect(() => {
        setInput(currState);
    }, [currState]);

    useEffect(() => {
        setInput("0");
    }, []);

    const operation = (e) => {
        setTotal(false);
        setOperator(e.target.innerText);
        if (currState === "")
            return;
        if (prevState !== "")
            equals();
        else {
            setPrevState(currState);
            setCurrState("");
        }
    };

    const equals = (e) => {
        if (e?.target.innerText === "=")
            setTotal(true);
        let cal;
        if (operator === "+")
            cal = String(parseFloat(prevState) + parseFloat(currState));
        else if (operator === "-")
            cal = String(parseFloat(prevState) - parseFloat(currState));
        else if (operator === "X")
            cal = String(parseFloat(prevState) * parseFloat(currState));
        else if (operator == "/")
            cal = String(parseFloat(prevState) / parseFloat(currState));
        setCurrState("");
        setPrevState(cal);
        setInput("");
    };

    const percentage = (e) => {
        prevState ? setCurrState(String(parseFloat(currState / 100) * prevState)) : setCurrState(String(parseFloat(currState / 100)));
    };

    const plusminus = () => {
        if (currState.charAt(0) === "-")
            setCurrState(currState.substring(1));
        else
            setCurrState("-" + currState);
    };

    const clear = () => {
        setCurrState("");
        setPrevState("");
        setInput("");
    };


  return (
    <div>
      <h1 className="heading"> Calculator </h1>
    <div className="container"> 
        <div className="screen">
        {input !== "" || input === "0" ? (
            <NumericFormat
              value={input}
              displayType={"text"}
              thousandSeparator={true}
            />
          ) : (
            <NumericFormat
              value={prevState}
              displayType={"text"}
              thousandSeparator={true}
            />
          )}
        </div>
        <div className="row2"> 
            <button id="button" className="button1" onClick={clear}> C </button>
            <button id="button" className="button1" onClick={plusminus}> +/- </button>
            <button id="button" className="button1" onClick={percentage}> % </button>
            <button id="button" className="button3" onClick={operation}> / </button>
        </div>
        <div class="row2"> 
            <button id="button" className="button2"onClick={inputNumber} > 7 </button>
            <button id="button" className="button2"onClick={inputNumber} > 8 </button>
            <button id="button" className="button2"onClick={inputNumber} > 9 </button>
            <button id="button" className="button3" onClick={operation}> X </button>
        </div>
        <div class="row2"> 
            <button id="button" className="button2"onClick={inputNumber} > 4 </button>
            <button id="button" className="button2"onClick={inputNumber} > 5 </button>
            <button id="button" className="button2"onClick={inputNumber} > 6 </button>
            <button id="button" className="button3" onClick={operation}> - </button>
        </div>
        <div class="row2"> 
            <button id="button" className="button2"onClick={inputNumber} > 1 </button>
            <button id="button" className="button2"onClick={inputNumber} >2</button>
            <button id="button" className="button2"onClick={inputNumber} >3</button>
            <button id="button" className="button3" onClick={operation}>+</button>
        </div>
        <div class="row3"> 
            <button id="button" className="button2"onClick={inputNumber} > 0 </button>
            <button id="button" className="button2"onClick={inputNumber} > . </button>
            <button id="button" className="button3" onClick={equals}> = </button>
        </div>
    </div>
    </div>
  );
}

