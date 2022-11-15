import React, { useEffect, useState } from "react";
import CardPersonaje from "../components/Card/CardPersonaje";
import { Col, Row } from "antd";
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
      SetValue(data.results);
    } catch (error) {
      SetValue([]);
    }
  };

  const searchData = (e) => {
    setSearch(e.target.value);
    setPageNumber(1);
  };
  useEffect(() => {
    fetchApi();
  }, [status, species, gender, pageNumber, search]);

  return (
    <div>
      <h1>HOME</h1>
      <Paginacion
        value={value?.length}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />
      <form className="search-box">
        <input
          type="}"
          placeholder="Busquemos un personaje..."
          value={search}
          onChange={searchData}
        />
      </form>
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
