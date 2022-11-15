import React from "react";
import { Radio, Space } from "antd";

const Gender = ({ setGender }) => {
  let genders = ["female", "male", "genderless", "unknown"];
  const onChange = (e) => {
    setGender(e.target.value);
  };

  return (
    <Radio.Group onChange={onChange}>
      <Space direction="vertical">
        {genders.map((item, index) => (
          <Radio value={item} key={index + "genders"}>
            {item}
          </Radio>
        ))}
      </Space>
    </Radio.Group>
  );
};

export default Gender;
