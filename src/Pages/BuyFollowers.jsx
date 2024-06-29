// // BuyFollowers.js
// import React from "react";
// import styled from "styled-components";
// import options from "../data/options.json";

// const BuyFollowers = () => {
//   return (
//     <Wrapper>
//       <div className="card">
//         <div className="options">
//           {options.map((option, index) => (
//             <div
//               key={index}
//               className={`option ${option.highlighted ? "highlighted" : ""}`}
//             >
//               <div className="amount">{option.amount}</div>
//               <div className="label">{option.label}</div>
//             </div>
//           ))}
//         </div>
//         <div className="price">$1.38</div>
//         <button className="order-button">Order Now</button>
//       </div>
//     </Wrapper>
//   );
// };

// const Wrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
//   background-color: #f8f9fa;

//   .card {
//     background-color: white;
//     box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//     border-radius: 8px;
//     padding: 24px;
//     max-width: auto;
//     text-align: center;
//   }

//   .options {
//     display: grid;
//     grid-template-columns: repeat(4, 1fr);
//     gap: 16px;
//     margin-bottom: 16px;
//   }

//   .option {
//     background-color: #f3f3f3;
//     border-radius: 8px;
//     padding: 24px;
//     text-align: center;
//     transition: background-color 0.3s, color 0.3s;
//     cursor: pointer;

//     &:hover {
//       background-color: #ff6347;
//       color: white;
//     }

//     &.highlighted {
//       background-color: #ff6347;
//       color: white;
//     }

//     .amount {
//       font-size: 1.9rem;
//       font-weight: bolder;
//     }

//     .label {
//       font-size: 2rem;
//       color: #000000;

//       &.highlighted {
//         color: #ffffff;
//       }
//     }
//   }

//   .price {
//     font-size: 4rem;
//     font-weight: bold;
//     margin-bottom: 16px;
//   }

//   .order-button {
//     background: linear-gradient(to right, #bbaec4, #1433ff, #030141);
//     color: white;
//     border: none;
//     padding: 12px 24px;
//     border-radius: 8px;
//     cursor: pointer;
//     font-size: 3rem;
//     transition: background 0.3s;

//     &:hover {
//       background: linear-gradient(to right, #070380, #1433ff, #bbaec4);
//     }
//   }
// `;

// export default BuyFollowers;

// BuyFollowers.js
// BuyFollowers.js
import React from "react";
import options from "../data/options.json";

const BuyFollowers = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-yellow-100">
      <div className="bg-black shadow-lg rounded-lg p-6 c text-center ">
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-8 mb-4">
          {options.map((option, index) => (
            <div
              key={index}
              className={`bg-gray-200 rounded-lg p-6 cursor-pointer transition duration-300 ease-in-out hover:bg-red-600 hover:text-white ${
                option.highlighted ? "bg-red-600 text-white" : ""
              } w-45 h-45`}
            >
              <div className="text-2xl font-bold">{option.amount}</div>
              <div className="text-3xl mt-2">{option.label}</div>
            </div>
          ))}
        </div>
        <div className="text-6xl font-bold mb-4">$1.38</div>
        <button className="bg-gradient-to-r from-purple-400 via-blue-500 to-blue-800 text-white border-none py-3 px-6 rounded-lg text-6xl transition duration-300 ease-in-out hover:from-blue-800 hover:via-blue-500 hover:to-purple-400">
          Order Now
        </button>
      </div>
    </div>
  );
};

export default BuyFollowers;
