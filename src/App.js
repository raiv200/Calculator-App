import Header from "./components/Header";
import NumButton from "./components/NumButton";
import OpButton from "./components/OpButton";

function App() {
  return (
    <div className="flex h-full md:h-screen flex-col bg-gray-100 ">
      <Header />
      <div className=" h-full w-full  flex flex-col items-center py-16">

        <div className="flex flex-col justify-between space-y-1 bg-gray-900 rounded-xl h-[540px] w-[700px] shadow-2xl ring-8 ring-gray-700 py-2 px-4">

          <div className="flex flex-col px-4 border-4 border-gray-100bg-gray-400 rounded-xl">

            <input type="text" className=" w-full text-xl font-extrabold font-spacemono input-right text-gray-400 py-4 rounded-xl focus:outline-none px-8  bg-gray-900"  autoFocus/>
            <div className="flex w-full text-5xl justify-end items-center font-extrabold font-spacemono mt-1 text-gray-200 py-4 rounded-xl  px-8 bg-gray-900">
              9203
            </div>
          </div>

          <div className="flex flex-1 justify-center flex-col w-full  bg-gray-900/10 rounded-xl py-3 space-y-4 px-4  border-4 border-gray-100">
            {/* <div className="py-1  rounded-xl flex justify-evenly">
              

              
            </div> */}
            <div className="grid grid-cols-5 gap-y-[10px] gap-x-[40px] place-items-center">
              <NumButton>7</NumButton>
              <NumButton>8</NumButton>
              <NumButton>9</NumButton>
              <NumButton>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75L14.25 12m0 0l2.25 2.25M14.25 12l2.25-2.25M14.25 12L12 14.25m-2.58 4.92l-6.375-6.375a1.125 1.125 0 010-1.59L9.42 4.83c.211-.211.498-.33.796-.33H19.5a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25h-9.284c-.298 0-.585-.119-.796-.33z" />
                </svg>

              </NumButton>
              <NumButton>(</NumButton>
              <NumButton>4</NumButton>
              <NumButton>5</NumButton>
              <NumButton>6</NumButton>
              <NumButton>/</NumButton>
              <NumButton>)</NumButton>
              <NumButton>1</NumButton>
              <NumButton>2</NumButton>
              <NumButton>3</NumButton>
              <NumButton>x</NumButton>
              <div className="row-span-2 w-full h-full bg-[#ff513c] rounded-lg  ">
                <NumButton>=</NumButton>
              </div>
              <NumButton>0</NumButton>
              <NumButton>.</NumButton>
              <NumButton>-</NumButton>
              <NumButton>+</NumButton>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default App;
