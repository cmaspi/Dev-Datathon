import React, { useState, useContext, useRef } from "react";

const Details = () => {
  const baseURL = process.env.REACT_APP_API_BASEURL;

  const [fileName, setFileName] = useState(null);

  const inputRef = useRef(null);

  const handleUpload = () => {
    inputRef.current?.click();
  };
  const handleDisplayFileDetails = () => {
    inputRef.current?.files && setFileName(inputRef.current.files[0].name);
  };

  const handleSubmit = () => {
    // fetch(`${baseURL}/validate`, {
    //   method: "POST",
    //   body: JSON.stringify({
    //     token: userContext.tokenId,
    //     file: inputRef.current.
    //   }),
    //   headers: {
    //     Authorization: `${userContext.tokenId}`,
    //   }
    // })
    //   .then((res) => {
    //     if (res.status === 200) {
    //       userContext.login(res.profileObj.name, res.profileObj.email, res.tokenId);
    //       refreshTokenSetup(res);
    //     }
    //     else {
    //       return <Redirect to="/details" />
    //     }
    //   })
  };
  return (
    <div className="m-3" onSubmit={handleSubmit}>
      <label className="mx-3">Choose file:</label>
      <input
        ref={inputRef}
        onChange={handleDisplayFileDetails}
        className="d-none"
        type="file"
      />
      <button
        onClick={handleUpload}
        className={`btn btn-outline-${fileName ? "success" : "primary"}`}
      >
        {fileName ? fileName : "Upload"}
      </button>
    </div>
  );
};

export default Details;
