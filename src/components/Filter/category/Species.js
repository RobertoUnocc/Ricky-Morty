import React from "react";
import { Radio, Space } from "antd";

const Species = ({ setSpecies }) => {
  let species = [
    "Human",
    "Alien",
    "Humanoid",
    "Poopybutthole",
    "Mythological",
    "Unknown",
    "Animal",
    "Disease",
    "Robot",
    "Cronenberg",
    "Planet",
  ];
  const onChange = (e) => {
    setSpecies(e.target.value);
  };

  return (
    <Radio.Group onChange={onChange}>
      <Space direction="vertical">
        {species.map((item, index) => (
          <Radio value={item} key={index + "species"}>
            {item}
          </Radio>
        ))}
      </Space>
    </Radio.Group>
  );
};

export default Species;
