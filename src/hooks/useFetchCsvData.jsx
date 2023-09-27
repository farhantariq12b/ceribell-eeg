import { useState, useEffect } from "react";
import axios from "axios";
import { splitArrayInHalf, parseCsvData } from "../utils/utils";
import { BASE_URL } from "../constants/constants";

const useFetchCsvData = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [firstHalf, setFirstHalf] = useState([]);
  const [secondHalf, setSecondHalf] = useState([]);

  useEffect(() => {
    const fetchRecordings = async () => {
      try {
        const response = await axios.get(BASE_URL + url);
        const data = response.data.recordings["12345"].waves;
        fetchCsvData(data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    };
    fetchRecordings();
  }, [url]);

  const fetchCsvData = async (url) => {
    setIsLoading(true);
    try {
      const response = await axios.get(BASE_URL + "/" + url);
      const csvString = response.data;

      const newCsvData = parseCsvData(csvString);
      const [data1, data2] = splitArrayInHalf(newCsvData);
      setFirstHalf(data1);
      setSecondHalf(data2);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  return [isLoading, firstHalf, secondHalf];
};

export { useFetchCsvData };
