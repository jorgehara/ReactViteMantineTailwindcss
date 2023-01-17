import React, { useEffect, useState } from "react";

export const useFetchMio = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
        try {
          const response = await fetch(url);
          const data = await response.json();
          setData(data);
          setLoading(false);
        } catch (error) {
          console.error(error);
          setLoading(false);
        }
      }
      fetchData();
    }, []);
  

    // console.log(data.results);


    if (loading) {
      return <div>Loading...</div>;
    }
    return <div>{JSON.stringify(data)}</div>;
  }

