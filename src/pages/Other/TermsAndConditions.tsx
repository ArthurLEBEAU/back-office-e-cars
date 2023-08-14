import { ATButton } from "@components/SharedComponents/AtomicComponents/Button";
import MaterialIcon from "@components/SharedComponents/Icons/MaterialIcons";

function TermsAndConditions() {
  return (
    <div className="  container  pb-10 lg:pb-20   mx-auto lg:px-32">
      <div className="flex flex-col items-start sticky w-full z-40 top-0 pt-10 pb-3  left-0 right-0 bg-white border-b">
        <ATButton action={() => window.history.back()}>
          <MaterialIcon icon="arrow_back" /> Retour
        </ATButton>

        <h1 className="mt-5 text-3xl lg:text-5xl 2xl:text-6xl">
          Conditions d’utilisation
        </h1>
      </div>
      <div className="mt-20">
        <div className="space-y-5">
          <p>
            Veuillez lire attentivement les présentes Conditions d’utilisation
            (« Conditions », « Conditions générales ») avant d’utiliser le site
            Web https://www.adgroupe.io/ (le « Service ») exploité par ADGroupe
            (« Nous », « Notre » ou « Nos »).
          </p>
          <p>
            Ces conditions s’appliquent pleinement à votre utilisation de ce
            site Web et en utilisant ce site Web, vous (« Utilisateur »)
            acceptez expressément tous les termes et conditions contenus dans le
            présent document dans leur intégralité. Vous ne devez pas utiliser
            ce site Web si vous avez une objection à l’une de ces conditions
            générales. Les documents contenus dans ce site Web sont protégés par
            les lois applicables sur le droit d’auteur.
          </p>
        </div>

        <div className="mt-10 space-y-5">
          <h2 className="text-2xl lg:text-3xl 2xl:text-4xl">
            Droits de propriété intellectuelle
          </h2>
          <p>
            En tant qu’utilisateur, vous bénéficiez d’une licence limitée
            uniquement aux fins de la visualisation du contenu de ce site Web.
            Comme condition de votre utilisation du site Web, vous nous
            garantissez que vous n’utiliserez pas le site Web à des fins
            commerciales ou à toute autre fin illégale ou interdite par les
            présentes conditions.
          </p>
          <p>
            Tout le contenu placé sur le site Web (textes, graphiques, logos,
            images et tout logiciel utilisé sur le site Web) est la propriété
            d’ADGroupe ou de ses fournisseurs et est protégé par le droit
            d’auteur et d’autres lois qui protègent la propriété intellectuelle
            et les droits de propriété. Les utilisateurs acceptent d’observer et
            de se conformer à tous les avis de droit d’auteur et autres avis de
            propriété, légendes ou autres restrictions contenues dans un tel
            contenu et n’y apporteront aucune modification.
          </p>
          <p>
            Vous ne devez pas republier des documents de ce site Web (y compris
            la republication sur un autre site Web), ni reproduire ou stocker du
            matériel de ce site Web dans un système de récupération électronique
            public ou privé; vous ne devez pas reproduire, dupliquer, copier,
            vendre, revendre, visiter ou exploiter de toute autre manière notre
            site Web ou le matériel de notre site Web à des fins commerciales,
            sans notre consentement écrit exprès.
          </p>
        </div>

        <div className="mt-10 space-y-5">
          <h2 className="text-2xl lg:text-3xl 2xl:text-4xl">Restrictions</h2>
          <p>
            Il vous est spécifiquement interdit d’utiliser le site Web
            contrairement aux lois et règlements applicables ou d’utiliser le
            site Web d’une manière qui pourrait endommager, désactiver,
            surcharger ou altérer le site Web, causer un préjudice à toute
            personne ou entité commerciale, interférer avec l’utilisation et la
            jouissance du site Web par toute autre partie.
          </p>
        </div>

        <div className="mt-10 space-y-5">
          <h2 className="text-2xl lg:text-3xl 2xl:text-4xl">
            Clause de non-responsabilité
          </h2>
          <p>
            Les informations contenues sur notre site Web sont fournies à titre
            d’information générale uniquement. Selecto n’assume aucune
            responsabilité pour les erreurs ou omissions dans le contenu du
            Service. En aucun cas, ADGroupe ne pourra être tenu responsable des
            dommages spéciaux, directs, indirects, consécutifs ou accessoires ou
            de quelque dommage que ce soit, que ce soit dans le cadre d’une
            action contractuelle, d’une négligence ou d’un autre délit,
            découlant de ou en relation avec l’utilisation du Service ou du
            contenu du Service.
          </p>
          <p>
            ADGroupe se réserve le droit d’ajouter, de supprimer ou de modifier
            le contenu du Service à tout moment et sans préavis. Vous acceptez
            expressément que votre utilisation du Service est à vos risques et
            périls.
          </p>
        </div>

        <div className="mt-10 space-y-5">
          <h2 className="text-2xl lg:text-3xl 2xl:text-4xl">
            Utilisation par des tiers
          </h2>
          <p>
            Notre Service peut contenir des liens vers des sites Web ou des
            services tiers qui ne sont pas détenus ou contrôlés par ADGroupe.
            Nous n’avons aucun contrôle sur le contenu, les politiques de
            confidentialité ou les pratiques de tout site Web ou service tiers
            et n’assumons aucune responsabilité à cet égard.
          </p>
        </div>

        <div className="mt-10 space-y-5">
          <h2 className="text-2xl lg:text-3xl 2xl:text-4xl">
            Violation et signalement du contenu utilisateur
          </h2>
          <p>
            ADGroupe respecte les droits des propriétaires de propriété
            intellectuelle. Si vous pensez qu’un Contenu enfreint vos droits de
            propriété intellectuelle ou d’autres droits, veuillez consulter
            notre politique de droits d’auteur. Si ADGroupe est informé par un
            détenteur de droits d’auteur qu’un Contenu enfreint un droit
            d’auteur, ADGroupe peut, à son entière discrétion, prendre des
            mesures sans notification préalable au fournisseur de ce Contenu. Si
            le fournisseur estime que le contenu n’est pas en infraction, il
            peut envoyer une contre-notification à ADGroupe avec une demande de
            restauration du contenu supprimé.
          </p>
        </div>

        <div className="mt-10 space-y-5">
          <h2 className="text-2xl lg:text-3xl 2xl:text-4xl">
            Limitations de responsabilité
          </h2>
          <p>
            Les obligations d’ADGroupe à l’égard de ses produits et services
            sont régies uniquement par les accords en vertu desquels ils sont
            fournis. Si vous obtenez un produit ou un service d’ADGroupe par le
            biais de ce site Web qui est fourni sans accord, ce produit ou
            service sans aucune garantie, expresse ou implicite, et votre
            utilisation de ce produit ou service est à vos propres risques. Nous
            ne sommes pas responsables des dommages (y compris, sans limitation,
            les dommages pour perte de données ou de profit, ou en raison d’une
            interruption des activités) découlant de l’utilisateur ou de
            l’incapacité d’utiliser le matériel et les connaissances
            intellectuelles sur le site Web d’ADGroupe.
          </p>
        </div>

        <div className="mt-10 space-y-5">
          <h2 className="text-2xl lg:text-3xl 2xl:text-4xl">
            Stockage des données
          </h2>
          <p>
            Nous conservons vos informations personnelles aussi longtemps
            qu’elles sont nécessaires pour atteindre les objectifs pour lesquels
            elles ont été collectées, pour protéger nos intérêts légitimes (par
            exemple, dans le cadre de natures judiciaires ou à des fins
            d’inspection) et afin de nous conformer aux obligations légales ou
            aussi longtemps que le consentement a été donné.
          </p>
        </div>

        <div className="mt-10 space-y-5">
          <h2 className="text-2xl lg:text-3xl 2xl:text-4xl">
            Modifications des Conditions
          </h2>
          <p>
            Nous nous réservons le droit, à notre seule discrétion, de modifier
            ou de remplacer les présentes Conditions à tout moment. Votre
            utilisation continue du site Web après toute modification apportée
            aux présentes conditions d’utilisation signifiera que vous acceptez
            ces modifications.
          </p>
        </div>

        <div className="mt-10 space-y-5">
          <h2 className="text-2xl lg:text-3xl 2xl:text-4xl">
            Droit applicable
          </h2>
          Le présent Contrat a été conclu en vertu des lois de l’État de Côte
          d’Ivoire et sera régi, interprété et appliqué conformément aux lois de
          l’État de Côte d’Ivoire, sans égard aux règles de conflit de lois de
          celui-ci.
        </div>

        <div className="mt-10 space-y-5">
          <h2 className="text-2xl lg:text-3xl 2xl:text-4xl">Nous contacter</h2>
          <p>
            Si vous avez des questions concernant ces Termes et Conditions,
            veuillez nous contacter à contact@adgroupe.io.
          </p>
        </div>
      </div>
    </div>
  );
}

export default TermsAndConditions;
