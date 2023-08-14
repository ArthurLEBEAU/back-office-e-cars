import { Button } from "antd";
import React from "react";

import { Link } from "react-router-dom";
function AuthPages() {
  return (
    <div>
      <h1>Ceci est une page d'authentification</h1>
      <Link to="/home">
        <Button>Aller au dashboard</Button>
      </Link>
    </div>
  );
}

export default AuthPages;
