import { useEffect, useRef, useState } from "react";
import { cssVariable } from "../lib/css";

export default function useMeasureInput() {
  const labelRef = useRef();
  const [extraStyles, setExtraStyles] = useState({});

  useEffect(() => {
    if (labelRef.current) {
      const lineHeight = Number.parseFloat(cssVariable("--ye-line-height"));
      const labelHeight = labelRef.current.offsetHeight;
      const fontSize = Number.parseFloat(
        getComputedStyle(labelRef.current).fontSize
      );
      const lineHeightPixel = lineHeight * fontSize;
      if (lineHeightPixel < labelHeight) {
        setExtraStyles({
          input: {
            paddingTop: labelHeight - lineHeightPixel,
            height: labelHeight,
          },
        });
      }
    }
  }, []);

  return [labelRef, extraStyles];
}
