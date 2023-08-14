import { Link } from "react-router-dom";

function FooterApp() {
  return (
    <div className="px-3 absolute bottom-0 right-0 left-0 py-2 lg:py-5 border-t  flex flex-col lg:flex-row space-y-2 lg:space-y-0 items-center lg:justify-between">
      <span>
        Copyright © 2022{" "}
        <a target="_blank" rel="noreferrer" href="https://adgroupe.io/">
          ADGroupe
        </a>
        {""} | Tous droits réservés.
      </span>
      <span>
        <span className="flex items-center space-x-3 ">
          <Link to="/conditions-generales-de-services">
            Conditions générales de services
          </Link>
          <span>|</span>
          <Link to="/politique-de-confidentialite">
            Politique de confidentialité
          </Link>
        </span>
      </span>
    </div>
  );
}

export default FooterApp;
