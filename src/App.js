import { useState } from "react";
import Header from "./components/Header";
import NumButton from "./components/NumButton";
import OpButton from "./components/OpButton";

function App() {

  const [calc, setCalc] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState("");

  const OPERATORS = ['/', '*', '+', '-', '.'];

  const updateCalcValue = (value) => {
    console.log(value);
    setCalc((prevValue) => prevValue + value);
  }

  const backSpace = () => {
    setCalc(prevValue => prevValue.substring(0, prevValue.length - 1))
  }

  const handleCalculate = () => {

    setResult(calc);
    console.log(calc);
  }

  const clearAll = () => {
    setCalc("");
    setResult("0");
  };

  return (
    <div className="flex h-full md:h-screen flex-col bg-gray-100 ">
      <Header />
      <div className=" h-full w-full  flex flex-col items-center py-16">

        <div className="flex flex-col justify-between space-y-1 bg-gray-900 rounded-xl h-[540px] w-[700px] shadow-2xl ring-8 ring-gray-700 py-2 px-4">

          <div className="flex flex-col px-4 border-4 border-gray-100bg-gray-400 rounded-xl">

            <div className=" flex items-center justify-end w-full text-xl h-[40px] font-extrabold font-spacemono  input-right text-gray-400 mt-1 py-4 px-8 text-right bg-gray-900">
              {calc || ''}
            </div>
            <div className={`flex w-full h-[60px] text-5xl justify-end items-center font-extrabold font-spacemono mt-1 text-gray-200 py-4 rounded-xl pr-3 mb-4 bg-gray-900`}>
              {result ? result :'0'}
            </div>
          </div>

          <div className="flex flex-1 justify-end flex-col w-full  bg-gray-900 rounded-xl pb-8 space-y-4 px-4">
            {/* <div className="py-1  rounded-xl flex justify-evenly">
              

              
            </div> */}
            <div className="grid grid-cols-5 gap-y-[10px] gap-x-[40px] place-items-center">
              <button className="button" onClick={() => updateCalcValue('7')}>7</button>
              <button className="button" onClick={() => updateCalcValue('8')}>8</button>
              <button className="button" onClick={() => updateCalcValue('9')}>9</button>
              <button className="button" >
                <svg onClick={backSpace} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75L14.25 12m0 0l2.25 2.25M14.25 12l2.25-2.25M14.25 12L12 14.25m-2.58 4.92l-6.375-6.375a1.125 1.125 0 010-1.59L9.42 4.83c.211-.211.498-.33.796-.33H19.5a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25h-9.284c-.298 0-.585-.119-.796-.33z" />
                </svg>

              </button>
              <button className="button bg-orange-400 text-2xl " onClick={clearAll}>DEL</button>
              <button className="button" onClick={() => updateCalcValue('4')}>4</button>
              <button className="button" onClick={() => updateCalcValue('5')}>5</button>
              <button className="button" onClick={() => updateCalcValue('6')}>6</button>
              <button className="button" onClick={() => updateCalcValue('/')}>/</button>
              <button className="button" onClick={() => updateCalcValue('^')}>%</button>
              <button className="button" onClick={() => updateCalcValue('1')}>1</button>
              <button className="button" onClick={() => updateCalcValue('2')}>2</button>
              <button className="button" onClick={() => updateCalcValue('3')}>3</button>
              <button className="button" onClick={() => updateCalcValue('x')}>x</button>
              <div className="row-span-2 w-full h-full bg-orange-400 rounded-lg  ">
                <button className="button" onClick={handleCalculate} >=</button>
              </div>
              <button className="button" onClick={() => updateCalcValue('0')}>0</button>
              <button className="button" onClick={() => updateCalcValue('.')}>.</button>
              <button className="button" onClick={() => updateCalcValue('-')}>-</button>
              <button className="button" onClick={() => updateCalcValue('+')}>+</button>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default App;


// e.keyCode === 96 ||
// e.keyCode === 49 ||
// e.keyCode === 97 ||
// e.keyCode === 50 ||
// e.keyCode === 98 ||
// e.keyCode === 51 ||
// e.keyCode === 99 ||
// e.keyCode === 52 ||
// e.keyCode === 100 ||
// e.keyCode === 53 ||
// e.keyCode === 101 ||
// e.keyCode === 54 ||
// e.keyCode === 102 ||
// e.keyCode === 55 ||
// e.keyCode === 103 ||
// e.keyCode === 56 ||
// e.keyCode === 104 ||
// e.keyCode === 57 ||
// e.keyCode === 105 ||
// e.keyCode === 110 ||
// e.keyCode === 190 ||
// e.keyCode === 111 ||
// e.keyCode === 191 ||
// e.keyCode === 56 ||
// e.keyCode === 106 ||
// e.keyCode === 109 ||
// e.keyCode === 189 ||
// e.keyCode === 187 ||
// e.keyCode === 107 ||
// e.keyCode === 13 ||
// e.keyCode === 8