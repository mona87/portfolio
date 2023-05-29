"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const LogoPicker = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [image, setImage] = useState<string>("");
  const [prompt, setPrompt] = useState<string>("");
  const router = useRouter();

  const handleResponse = async () => {
    console.log(prompt)
    setLoading(true);
    const res = await fetch(`/api/configurator-app/${prompt}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }
    );
    const data = await res.json();
    if (res.ok) {
      setLoading(false);
      setImage(`data:image/png;base64,${data}`);
    }
  };

  return (
    <>
      {!loading && (
        <img src={image || "http://"} alt="test" height="512" width="512" />
      )}
      {loading && <p>loading...</p>}
      <textarea onChange={(e)=>{
        setPrompt(e.target.value)
      }}></textarea>
      <button type="button" onClick={() => handleResponse()}>
        test
      </button>
    </>
  );
};

export default LogoPicker;
