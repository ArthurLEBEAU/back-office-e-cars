import { AButton } from "@components/SharedComponents/AtomicComponents/Button";
import AText from "@components/SharedComponents/AtomicComponents/Text";
import { Link } from "react-router-dom";

const UnkownPage = () => {
  return (
    <div className="flex flex-col space-y-10 justify-center items-center h-full w-full">
      <div className="h-96">
        <img
          className="object-contain h-full w-full"
          src={"page_not_found.svg"}
          alt="404"
        />
      </div>
      <div className="space-y-5 flex flex-col items-center">
        <AText size="high+2" bold>
          Page Inconnu
        </AText>
        <AText color="text-gray-500">
          Desolé, nous ne trouvons pas votre page
        </AText>

        <Link to={"/"}>
          <AButton type="dashed" action={null}>
            Revenir a l'accueil
          </AButton>
        </Link>
      </div>
    </div>
  );
};

export default UnkownPage;
