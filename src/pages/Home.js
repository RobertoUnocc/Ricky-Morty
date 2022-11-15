import React, { useEffect, useState } from "react";
import CardPersonaje from "../components/Card/CardPersonaje";
import { Col, Row, Collapse, Radio, Space } from "antd";
import Filter from "../components/Filter/Filter";
import Paginacion from "../components/Paginacion/Paginacion";

const Home = () => {
  const [value, SetValue] = useState([]);
  const [status, setStatus] = useState("");
  const [species, setSpecies] = useState("");
  const [gender, setGender] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [search, setSearch] = useState("");
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  const fetchApi = async () => {
    try {
      const res = await fetch(api);
      const data = await res.json();
      console.log(data.results);
      SetValue(data.results);
    } catch (error) {
      SetValue([]);
    }
  };

  useEffect(() => {
    fetchApi();
  }, [status, species, gender, pageNumber]);

  return (
    <div>
      <h1>HOME</h1>
      <Paginacion pageNumber={pageNumber} setPageNumber={setPageNumber} />
      <Row>
        <Filter
          setStatus={setStatus}
          setSpecies={setSpecies}
          setGender={setGender}
        />
        <Col span={19}>
          <CardPersonaje value={value} />
        </Col>
      </Row>
    </div>
  );
};

export default Home;
