import { Button, Result } from "antd";
import { Link } from "react-router-dom";

const UnkownPage = () => {
  return (
    <div className="flex flex-col space-y-10 justify-center items-center h-screen w-full">
      <Result
        status="404"
        title="404"
        subTitle="Désolé, cette page n'existe pas."
        extra={
          <Link to={'/'}>
            <Button type="primary">Revenir à l'accueil</Button>
          </Link>
        }
      />
    </div>
  );
};

export default UnkownPage;
