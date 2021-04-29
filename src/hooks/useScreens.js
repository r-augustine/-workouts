import React, { useEffect, useState } from "react";

const useScreens = () => {
  const [state, setState] = useState(null);

  const onResize = () => {
    if (window.innerWidth > 1127) {
      setState("large");
    }

    if (window.innerWidth > 991 && window.innerWidth < 1201) {
      setState("small");
    }

    if (window.innerWidth > 767 && window.innerWidth < 992) {
      setState("tablet");
    }

    if (window.innerWidth < 768) {
      setState("mobile");
    }
  };

  useEffect(() => {
    if (!state) {
      onResize();
    }

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [state]);

  return state;
};

export default useScreens;
