import React, { useState, useEffect } from "react";
import "./App.css";
import { Column, Table } from "react-virtualized";
import "react-virtualized/styles.css";

const App: React.FC = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = () => {
      fetch("./api/components.json")
        .then(response => response.json())
        .then(result => {
          setData(result);
        });
    };
    fetchData();
  }, []);

  return (
    <div>
      <Table
        width={300}
        height={300}
        headerHeight={20}
        rowHeight={30}
        rowCount={data.length}
        rowGetter={({ index }) => data[index]}
      >
        <Column label="Name" dataKey="name" width={100} />
        <Column width={200} label="Dampfzeit" dataKey="steamTime" />
      </Table>
    </div>
  );
};

export default App;
