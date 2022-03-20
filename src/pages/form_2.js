import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const Form2 = () => {
  const history = useHistory();
  const [data, setData] = useState({
    device: "",
    address: "",
    mobileNumber: "",
  });

  const storage2 = localStorage.getItem("data_2");
  const parseStorage2 = JSON.parse(storage2);

  const changeText = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    checkData();
  }, []);

  const checkData = () => {
    if (parseStorage2) {
      setData({
        ...data,
        device: parseStorage2.device,
        address: parseStorage2.address,
        mobileNumber: parseStorage2.mobileNumber,
      });
    }
  };

  const toForm3 = () => {
    for (const x in data) {
      if (data[x] === "") {
        alert("all input must be filled");
        return;
      } else {
        localStorage.setItem("data_2", JSON.stringify(data));
      }
    }
    history.push("/form3");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="wrapper-outer col-sm-6 mx-auto mt-5 p-3 py-4">
          <span className="header-text">Information B</span>
          <div className="wrapper-inner mt-3 w-75 mx-auto">
            <section className="d-flex">
              <div className="wp me-3">
                <label for="" className="d-block">
                  Have a laptop / PC ?
                </label>
                <div className="d-inline me-3">
                  <input
                    type="radio"
                    id="yes"
                    value="yes"
                    name="device"
                    onClick={changeText}
                    checked={data.device === "yes" ? true : false}
                  />
                  <label for="yes">Yes</label>
                </div>
                <div className="d-inline ms-3">
                  <input
                    type="radio"
                    id="no"
                    value="no"
                    name="device"
                    onClick={changeText}
                    checked={data.device === "no" ? true : false}
                  />
                  <label for="no">No</label>
                </div>
              </div>
            </section>
            <section className="d-flex">
              <div className="wp">
                <label for="">Address</label>
                <div className="wp me-3">
                  <textarea
                    type="text"
                    className="d-block w-100 mb-3 p-2"
                    name="address"
                    onChange={changeText}
                    value={data.address}
                  ></textarea>
                </div>
              </div>
            </section>
            <section className="d-flex">
              <div className="wp me-3">
                <label for="">Mobile Number</label>
                <input
                  type="number"
                  className="d-block w-100"
                  name="mobileNumber"
                  onChange={changeText}
                  value={data.mobileNumber}
                />
              </div>
            </section>
            <div className="button-area d-flex justify-content-end">
              <button
                className="mt-5 border-0 p-3 text-white btn-sec me-2"
                onClick={history.goBack}
              >
                Back
              </button>
              <button
                className="mt-5 border-0 p-3 text-white btn-prim ms-2"
                onClick={toForm3}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form2;
