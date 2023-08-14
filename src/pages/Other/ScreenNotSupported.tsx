import AText from "@components/SharedComponents/AtomicComponents/Text";
import Logo from "@components/SharedComponents/Logo/Logo";
import React from "react";

function ScreenNotSupported() {
  return (
    <div className="h-screen text-center flex justify-center flex-col items-center space-y-5">
      <Logo className="h-16" />
      <AText size="high">Resolution d'ecran non supportée</AText>

      <AText>Veuillez passer sur un écran de plus grande résolution</AText>
    </div>
  );
}

export default ScreenNotSupported;
