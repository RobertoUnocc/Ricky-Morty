import React from "react";
import { Radio, Space } from "antd";

const Status = ({ setStatus }) => {
  let status = ["Alive", "Dead", "Unknown"];

  const onChange = (e) => {
    setStatus(e.target.value);
  };
  return (
    <Radio.Group onChange={onChange}>
      <Space direction="horizontal">
        {status.map((item, index) => (
          <Radio value={item} key={index + "status"}>
            {item}
          </Radio>
        ))}
      </Space>
    </Radio.Group>
  );
};

export default Status;
