import React from "react";
import { Col, Row, Collapse, Radio, Space, Button } from "antd";
import Status from "./category/Status";
import Species from "./category/Species";
import Gender from "./category/Gender";
const { Panel } = Collapse;

const Filter = ({ setGender, setSpecies, setStatus }) => {
  const clear = () => {
    setGender("");
    setSpecies("");
    setStatus("");
    window.location.reload(false);
  };

  return (
    <Col span={5}>
      <Button type="primary" onClick={clear} danger className="btm-limpiar">
        Limpiar Filtros
      </Button>
      <Collapse defaultActiveKey={["1"]}>
        <Panel header="Status" key="1">
          <Status setStatus={setStatus} />
        </Panel>
        <Panel header="Species" key="2">
          <Species setSpecies={setSpecies} />
        </Panel>
        <Panel header="Gender" key="3">
          <Gender setGender={setGender} />
        </Panel>
      </Collapse>
    </Col>
  );
};

export default Filter;
