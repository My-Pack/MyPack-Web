import { useEffect, useState } from "react";

function useMediaQuery(width: number): boolean {
  const [targetReached, setTargetReached] = useState(false);

  useEffect(() => {
    function updateTarget(e: MediaQueryListEvent) {
      setTargetReached(e.matches);
    }

    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.addListener(updateTarget);

    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeListener(updateTarget);
  }, [width]);

  return targetReached;
}

export default useMediaQuery;
