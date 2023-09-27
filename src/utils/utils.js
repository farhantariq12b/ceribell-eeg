import Papa from "papaparse";

const parseCsvData = (csvString) => {
  const newCsvData = [];

  Papa.parse(csvString, {
    transform: (value, index) => {
      if (!Array.isArray(newCsvData[index])) {
        newCsvData[index] = [];
      }
      newCsvData[index].push(parseFloat(value * 0.0447));
    },
  });

  return newCsvData;
};

const splitArrayInHalf = (array) => {
  const halfIndex = Math.ceil(array.length / 2);
  const firstHalf = array.slice(0, halfIndex);
  const secondHalf = array.slice(halfIndex);
  return [firstHalf, secondHalf];
};

export { parseCsvData, splitArrayInHalf };
