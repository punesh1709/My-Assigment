import React, { useState, useEffect } from "react";
import "./Card.css";
function Card() {
  const API = "https://randomuser.me/api/?page=1&results=1&seed=abc";
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    getInfo();
  }, []);

  let getInfo = async () => {
    try {
      let response = await fetch(API);
      let JsonResponse = await response.json();
      let result = {
        img: JsonResponse.results[0].picture.large,
        firstName: JsonResponse.results[0].name.first,
        lastName: JsonResponse.results[0].name.last,
        gender: JsonResponse.results[0].gender,
        phoneNo: JsonResponse.results[0].phone,
      };
      setUserInfo(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center mt-12 rounded-xl">
        <div className="CardComp flex items-center justify-center rounded-xl">
          {userInfo && (
            <div className=" lg:grid cardss p-10 text-2xl font-semibold bg-pink-50 rounded-xl ">
              <img
                src={userInfo.img}
                alt="User"
                className="border border-sky-500 col-start-1 col-end-3 row-start-1 row-end-4 m-auto img rounded-xl"
              />
              
              <p className="m-auto border-b-4 border-red-100">
                First Name:{" "}
                <span className="text-indigo-600 italic">
                  {userInfo.firstName}
                </span>
              </p>
              <p className="m-auto border-b-4 border-red-100">
                Last Name:{" "}
                <span className="text-indigo-600 italic">
                  {userInfo.lastName}
                </span>
              </p>
              <p className="col-start-3 col-end-3 row-start-2 row-end-2 m-auto border-b-4 border-red-100">
                Gender:{" "}
                <span className="text-indigo-600 italic">
                  {userInfo.gender}
                </span>
              </p>
              <p className="col-start-3 col-end-5 row-start-3 row-end-4 m-auto ml-12 border-b-4 border-red-100">
                P. No:{" "}
                <span className="text-indigo-600 italic">
                  {userInfo.phoneNo}
                </span>
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Card;
