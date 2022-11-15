import { Button } from "antd";
import React from "react";

const Paginacion = ({ pageNumber, setPageNumber, value }) => {
  const paginaNext = () => {
    setPageNumber(pageNumber + 1);
  };
  const paginaPrev = () => {
    setPageNumber(pageNumber - 1);
  };

  return (
    <div>
      <Button onClick={paginaPrev} disabled={pageNumber === 1}>
        PREV
      </Button>
      <Button onClick={paginaNext} disabled={value === undefined}>
        NEXT
      </Button>
      <p style={{ padding: "15px", fontWeight: "bold" }}>
        Página : {pageNumber}
      </p>
    </div>
  );
};

export default Paginacion;
