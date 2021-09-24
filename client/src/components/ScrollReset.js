// import React, { useEffect, Fragment } from "react";
// import { withRouter } from "react-router-dom";

// function ScrollReset({ history, children }) {
//   useEffect(() => {
//     const unlisten = history.listen(() => {
//       window.scrollTo(0, 0);
//     });
//     return () => {
//       unlisten();
//     };
//   }, [history]);

//   return <Fragment>{children}</Fragment>;
// }

// export default withRouter(ScrollReset);

import React, { useEffect, Fragment } from "react";
import { withRouter } from "react-router-dom";

function ScrollReset({ history, children }) {
  useEffect(() => {
    const unlisten = history.listen(() => {
      if (!history.location.pathname.includes("/services/")) {
        window.scrollTo(0, 0);
      }
    });
    return () => {
      unlisten();
    };
  }, [history]);

  return <Fragment>{children}</Fragment>;
}

export default withRouter(ScrollReset);
