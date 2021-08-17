import React from "react";
import api from "../API/listAPI";
import { useState, useEffect } from "react";
import LoadingBox from "../components/LoadingBox";
import MyCourses from "../components/User/MyCourses/MyCourses";

function MyAcademy() {
  let [myAcademy, setMyAcademy] = useState();
  useEffect(() => {
    const getMyAcademy = async () => {
      try {
        let res = await api.myAcademy();
        console.log(res);
        if (res.data) {
          setMyAcademy(res.data.data);
        }
      } catch (err) {
        if (err.response) {
          console.log(err.response.data.message);
        } else if (err.request) {
          console.log(err.request);
        } else {
          console.log("Error", err.message);
        }
      }
    };

    getMyAcademy();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  document.title = "My Academy";
  return !myAcademy ? (
    <LoadingBox />
  ) : (
    <>
      <section
        style={{
          height: "100px",
          width: "100%",
          display: "flex",
          alignItems: "center",
          background: "black",
        }}
      >
        <div className="container">
          <h3 style={{ color: "white", float: "left" }}>My learning</h3>
        </div>
      </section>
      {myAcademy.map((academy) => (
        <MyCourses key={academy.academy_id} academy={academy} />
      ))}
    </>
  );
}

export default MyAcademy;
