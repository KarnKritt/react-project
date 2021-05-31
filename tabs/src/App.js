import React, { useState, useEffect } from "react";

const url = "https://course-api.com/react-tabs-project";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState(0);

  const fetchData = async () => {
    const response = await fetch(url);
    const datas = await response.json();
    setData(datas);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(data);
  if (loading) {
    return (
      <div className="container">
        <h1>Loading ...</h1>
      </div>
    );
  }
  const { title, company, duties, dates } = data[value];
  return (
    <div className="container">
      <h1>Experience</h1>
      <div className="underline"></div>
      <div className="display">
        <div className="btns">
          {data.map((company, index) => {
            return (
              <button
                key={company.id}
                className={`btn ${index === value ? "active" : ""}`}
                onClick={() => {
                  setValue(index);
                }}
              >
                {company.company}
              </button>
            );
          })}
        </div>
        <div className="person">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <h5>{dates}</h5>
          {duties.map((duty) => {
            return (
              <div className="duty">
                <i class="fas fa-angle-double-right"></i>
                <p>{duty}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
