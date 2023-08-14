import React from "react";

import { LoadingOutlined } from "@ant-design/icons";

const Loading = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <LoadingOutlined style={{ fontSize: "3rem", color: "#005200" }} />
    </div>
  );
};

export default Loading;
