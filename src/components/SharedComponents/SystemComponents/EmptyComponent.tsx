import { Empty } from "antd";
import AText from "../AtomicComponents/Text";
import { ATButton } from "../AtomicComponents/Button";

function EmptyComponent({ error }: any) {
  return (
    <Empty
      imageStyle={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "10rem",
        margin: "2rem",
        opacity: "0.7",
      }}
      description={
        error ? (
          <div className="flex flex-col space-y-5 items-center">
            <AText size="high">Un erreur est survenue</AText>
            <AText>
              {error?.status === 401
                ? "Votre session a expiré, veuillez vous reconnectez ou recharger la page"
                : "Une erreur serveur est survenue veuillez réessayez plus tard"}
            </AText>
            <ATButton action={() => window.location.reload()}>
              Recharger la page
            </ATButton>
          </div>
        ) : (
          <AText size="high">Aucune donnée</AText>
        )
      }
    />
  );
}

export default EmptyComponent;
