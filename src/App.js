import { useState } from "react";
import Header from "./components/Header";

function App() {

  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const OPERATORS = ['/', '*', '+', '-', '%', '.',];

  const updateCalcValue = (value) => {
    console.log(value);

    if (
      (OPERATORS.includes(value) && calc === '') ||
      (OPERATORS.includes(value) && OPERATORS.includes(calc.slice(-1)))) {
      return;
    }
    setCalc((prevValue) => prevValue + value);

    if (!OPERATORS.includes(value)) {
      setCalc((calc + value));
    }

  }

  const backSpace = () => {
    setCalc(prevValue => prevValue.substring(0, prevValue.length - 1))
  }

  const handleResult = () => {
    console.log(calc);
    setResult(eval(calc).toString());
    setCalc(eval(calc).toString());
  };

  const clearAll = () => {
    setCalc("");
    setResult("0");
  };

  return (
    <div className="flex h-full md:h-screen flex-col bg-gray-100 ">
      <Header />
      <div className=" h-full w-full  flex flex-col items-center py-16">

        <div className="flex flex-col justify-between space-y-1 bg-gray-700 rounded-xl h-[500px] md:h-[540px] w-[420px] md:w-[700px] shadow-2xl shadow-gray-900 ring-8 ring-gray-900 py-2 px-4">

          <div className="flex flex-col px-4 border-4 border-gray-100bg-gray-400 rounded-xl">

            <div className=" flex items-center justify-end w-full text-xl h-[40px] font-extrabold font-spacemono  input-right text-gray-400 mt-1 py-4 px-8 text-right bg-gray-700">
              {calc || ''}
            </div>
            <div className={`flex w-full h-[60px] text-5xl justify-end items-center font-extrabold font-spacemono mt-1 text-gray-200 py-4 rounded-xl pr-3 mb-4 bg-gray-700`}>
              {result ? result : '0'}
            </div>
          </div>

          <div className="flex flex-1 justify-end flex-col w-full  bg-gray-700 rounded-xl pb-8 space-y-4 px-4">
            {/* <div className="py-1  rounded-xl flex justify-evenly">
              

              
            </div> */}
            <div className=" grid grid-cols-5 gap-y-[10px] gap-x-[14px] md:gap-x-[40px] place-items-center">
              <button className="button" onClick={() => updateCalcValue('7')}>7</button>
              <button className="button" onClick={() => updateCalcValue('8')}>8</button>
              <button className="button" onClick={() => updateCalcValue('9')}>9</button>
              <button onClick={backSpace} className="button" >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75L14.25 12m0 0l2.25 2.25M14.25 12l2.25-2.25M14.25 12L12 14.25m-2.58 4.92l-6.375-6.375a1.125 1.125 0 010-1.59L9.42 4.83c.211-.211.498-.33.796-.33H19.5a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25h-9.284c-.298 0-.585-.119-.796-.33z" />
                </svg>

              </button>
              <button className="button bg-orange-400 text-2xl " onClick={clearAll}>DEL</button>
              <button className="button" onClick={() => updateCalcValue('4')}>4</button>
              <button className="button" onClick={() => updateCalcValue('5')}>5</button>
              <button className="button" onClick={() => updateCalcValue('6')}>6</button>
              <button className="button" onClick={() => updateCalcValue('/')}>/</button>
              <button className="button" onClick={() => updateCalcValue('%')}>%</button>
              <button className="button" onClick={() => updateCalcValue('1')}>1</button>
              <button className="button" onClick={() => updateCalcValue('2')}>2</button>
              <button className="button" onClick={() => updateCalcValue('3')}>3</button>
              <button className="button" onClick={() => updateCalcValue('*')}>*</button>

              <button onClick={handleResult} className="button row-span-2 w-full h-full bg-orange-400 rounded-lg" >=</button>

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