import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const Form3 = () => {
  const history = useHistory();
  const storage1 = localStorage.getItem("data_1");
  const storage2 = localStorage.getItem("data_2");
  const listJob = localStorage.getItem("jobdesc");
  const parseStorage1 = JSON.parse(storage1);
  const parseStorage2 = JSON.parse(storage2);
  const parseJobdesc = JSON.parse(listJob);

  const [data, setData] = useState({});
  const [submit, setSubmit] = useState(false);
  const [listJobdesc, setListJobdesc] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const handleSubmit = () => {
    setSubmit(true);
    localStorage.clear();
    setTimeout(() => {
      history.push("/");
    }, 5000);
  };

  const getData = () => {
    setData({ ...data, parseStorage1, parseStorage2 });
    setListJobdesc(parseJobdesc);
  };

  const resJob = listJobdesc.map((x) => {
    return x.jobdesk;
  });

  return (
    <div className="container">
      <div className="row">
        <div
          className="wrapper-outer col-sm-6 mx-auto mt-5 p-3 py-4"
          id={submit ? "submited" : null}
        >
          {!submit ? (
            <>
              <span className="header-text">Confirmation Data Entry</span>
              <div className="wrapper-inner mt-3 w-75 mx-auto">
                <div>
                  <span>
                    Fullname :{" "}
                    {`${
                      data.parseStorage1 ? data.parseStorage1.firstName : ``
                    } ${
                      data.parseStorage1 ? data.parseStorage1.lastName : `-`
                    }`}
                  </span>
                </div>
                <div>
                  <span>Jobdesc :{resJob.join(", ")}</span>
                </div>
                <div>
                  <span>
                    Gender :{" "}
                    {`${data.parseStorage1 ? data.parseStorage1.gender : `-`} `}
                  </span>
                </div>
                <div>
                  <span>
                    E-mail :{" "}
                    {`${data.parseStorage1 ? data.parseStorage1.email : `-`} `}
                  </span>
                </div>
                <div>
                  <span>
                    Have a Laptop / PC :{" "}
                    {`${data.parseStorage2 ? data.parseStorage2.device : `-`} `}
                  </span>
                </div>
                <div>
                  <span>
                    Mobile Number :{" "}
                    {`${
                      data.parseStorage2 ? data.parseStorage2.mobileNumber : `-`
                    } `}
                  </span>
                </div>
                <div>
                  <span>
                    Address :{" "}
                    {`${
                      data.parseStorage2 ? data.parseStorage2.address : `-`
                    } `}
                  </span>
                </div>
              </div>
              <div className="button-area d-flex justify-content-end">
                <button
                  className="mt-5 border-0 p-3 text-white btn-sec me-2"
                  onClick={history.goBack}
                >
                  Back
                </button>
                <button
                  className="mt-5 border-0 p-3 text-white btn-prim ms-2"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            </>
          ) : (
            <p className="text-center m-0 p-5 ">Thank you for submit form</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Form3;
