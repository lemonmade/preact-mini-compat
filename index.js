// Use this import instead of the next one to see the effects
// of not using jsx-runtime.
// import React, { memo, useState } from "react";

import { memo, useState } from "react";
import { render } from "react-dom";

const ComponentUsingUnnecessaryApisForDemonstration = memo(
  function Component() {
    const [count, setCount] = useState(1);
    return (
      <button type="button" onClick={() => setCount((count) => count + 1)}>
        Count: {count}
      </button>
    );
  }
);

render(
  <ComponentUsingUnnecessaryApisForDemonstration />,
  document.querySelector("#app")
);
