import { useNavigate } from "react-router-dom";
import { Result } from "antd";
import { AButton } from "@components/SharedComponents/AtomicComponents/Button";
const Unauthorized = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Result
        status="403"
        title="Accès refusé"
        subTitle="Vous n'êtes pas autorisé à accéder à cette page"
        extra={
          <AButton type="dashed" action={goBack}>
            Retour
          </AButton>
        }
      />
    </div>
  );
};

export default Unauthorized;
