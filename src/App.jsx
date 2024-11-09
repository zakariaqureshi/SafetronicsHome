// import React, { useEffect, useState } from "react";

// export default function App() {

//   const [time, setTime] = useState("")
//   const [date, setDate] = useState("")

//   useEffect(() => {

//     const updateTime = () => {
//       const currentTime = new Date().toLocaleTimeString();
//       setTime(currentTime);

//       const todaysDate = new Date().toLocaleDateString();
//       setDate(todaysDate)
//     };


//     const intervalId = setInterval(updateTime, 1000);


//     return () => clearInterval(intervalId);
//   }, []);
//   return (
//     <>
//       <div >
//         <h1 className="text-center mt-20 bg-salate-700 text-white ">Safetronics</h1>
//         <div className="flex flex-col items-center justify-center h-screen">
//           <h1>Safe Buy</h1>
//           <h1>{time}</h1>
//           <h1>{date}</h1>

//         </div>
//       </div>
//     </>
//   )
// }

import React, { useEffect, useState } from "react";

export default function App() {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const currentTime = new Date().toLocaleTimeString();
      setTime(currentTime);

      const todaysDate = new Date().toLocaleDateString();
      setDate(todaysDate);
    };

    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-100 text-center">
        <h1 className="text-2xl font-bold">Safetronics Technologies</h1>
        <p className="text-lg mt-2">We Safeguard Your Electronics</p>
        <p className="text-sm mt-1">Software Solutions | Mobile App Development | Hardware Solutions | Cloud Solutions</p>
        <div className="mt-6">
          <h1 className="text-xl font-semibold">Safe Buy</h1>
          <h1 className="text-lg mt-2">{time}</h1>
          <h1 className="text-lg">{date}</h1>
        </div>
      </div>
    </div>
  );
}
