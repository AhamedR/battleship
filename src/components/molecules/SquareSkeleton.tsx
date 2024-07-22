import React, { useLayoutEffect, useRef, useState } from "react";
import { Skeleton, Box } from "@mui/material";

const SquareSkeleton: React.FC = () => {
  const [height, setHeight] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (ref.current) {
      setHeight(ref.current.offsetWidth);
    }
  }, [ref]);

  return (
    <Box ref={ref} width="100%">
      <Skeleton variant="rounded" width="100%" height={height} animation="wave" />
    </Box>
  );
};

export default SquareSkeleton;
