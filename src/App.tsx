import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import ContentWrapper from "./sections/ContentWrapper/ContentWrapper";

function App() {
  library.add(fab);
  return (
    <div>
      <ContentWrapper />
    </div>
  );
}

export default App;
