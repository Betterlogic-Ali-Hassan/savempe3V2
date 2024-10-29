import React from "react";
import LanguagesSelect from "./LanguagesSelect";
import LanguagesDialog from "./LanguagesDialog";

const Languages = ({ mobile }: { mobile?: boolean }) => {
  return <>{mobile ? <LanguagesSelect /> : <LanguagesDialog />}</>;
};

export default Languages;
