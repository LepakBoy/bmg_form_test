import React, { useEffect, useState } from "react";
import "../assets/style.css";
import { useHistory } from "react-router-dom";

const Form1 = () => {
  const history = useHistory();
  const [formJobdesc, setFormJobdesc] = useState([{ jobdesk: "" }]);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
  });

  const storage1 = localStorage.getItem("data_1");
  const parseStorage1 = JSON.parse(storage1);

  const toForm2 = () => {
    for (const x in data) {
      if (data[x] === "") {
        alert("all input must be filled");
        return;
      } else {
        localStorage.setItem("data_1", JSON.stringify(data));
        localStorage.setItem("jobdesc", JSON.stringify(formJobdesc));
        history.push("/form2");
      }
    }
  };

  useEffect(() => {
    checkData();
  }, []);

  const checkData = () => {
    if (parseStorage1) {
      setData({
        ...data,
        firstName: parseStorage1.firstName,
        lastName: parseStorage1.lastName,
        gender: parseStorage1.gender,
        email: parseStorage1.email,
      });
    }
  };

  const addFormJobdesc = () => {
    if (formJobdesc.length >= 5) {
      alert("Max jobdesc is 5");

      return;
    }
    let newField = { jobdesk: "" };
    setFormJobdesc([...formJobdesc, newField]);
  };

  const changeText = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleChange = (e, index) => {
    let data = [...formJobdesc];
    data[index][e.target.name] = e.target.value;
    setFormJobdesc(data);
  };

  const handleRemove = (index) => {
    if (formJobdesc.length === 1) {
      return;
    }

    let list = [...formJobdesc];
    list.splice(index, 1);

    setFormJobdesc(list);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="wrapper-outer col-sm-6 mx-auto mt-5 p-3 py-4">
          <span className="header-text">Information A</span>
          <div className="wrapper-inner mt-3 w-75 mx-auto">
            <section className="d-flex">
              <div className="wp me-3">
                <label for="">First Name</label>
                <input
                  type="text"
                  className="d-block w-100"
                  name="firstName"
                  onChange={changeText}
                  value={data.firstName}
                />
              </div>
              <div className="wp">
                <label for="">Last Name</label>
                <input
                  type="text"
                  className="d-block w-100"
                  name="lastName"
                  onChange={changeText}
                  value={data.lastName}
                />
              </div>
            </section>
            <section className="d-flex">
              <div className="wp">
                <label for="">Jobdesc</label>
                <div className="wp me-3">
                  {formJobdesc.map((x, index) => (
                    <div className="d-flex">
                      <input
                        type="text"
                        className="d-block w-100 mb-3"
                        name="jobdesk"
                        onChange={(e) => handleChange(e, index)}
                        key={index}
                        value={index.jobdesk}
                      />
                      <button
                        className="btn-prim border-0 btn-add ms-2 text-white bg-danger"
                        onClick={() => handleRemove(index)}
                      >
                        x
                      </button>
                    </div>
                  ))}
                </div>
              </div>
              <button
                className="btn-prim btn-add h-75 my-auto border-0 mt-2 ms-4"
                onClick={addFormJobdesc}
              >
                <span className="text-white">+</span>
              </button>
            </section>
            <section className="d-flex">
              <div className="wp me-3">
                <label for="">Gender</label>
                <select
                  name="gender"
                  onChange={changeText}
                  className="d-block w-100"
                  value={data.gender}
                >
                  <option value={""}>-</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
            </section>
            <section className="d-flex">
              <div className="wp me-3">
                <label for="">Email</label>
                <input
                  type="email"
                  className="d-block w-100"
                  name="email"
                  onChange={changeText}
                  value={data.email}
                />
              </div>
            </section>
            <div className="button-area d-flex justify-content-end">
              <button
                className="mt-5 border-0 p-3 text-white btn-prim"
                onClick={toForm2}
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

export default Form1;
