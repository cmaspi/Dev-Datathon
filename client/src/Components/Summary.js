import React from "react";

const Summary = () => {
  const baseURL = process.env.REACT_APP_API_BASEURL;
  const [summary, setSummary] = useState("This course is awesome");

  useEffect(() => {
    const token = localStorage.getItem("tokenId");
    fetch(`${baseURL}summary/`, {
      method: "POST",
      body: JSON.stringify({
        id: props.id,
      }),
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    })
      .then((r) => r.json().then((data) => ({ status: r.status, body: data })))
      .then((obj) => {
        console.log(obj);
        setSummary(obj.body);
      })
      .catch(() => {
        console.log("error");
      });
  }, []);

  return <div>Summary</div>;
};

export default Summary;
