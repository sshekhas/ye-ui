import { uniqueId } from "lodash-es";
import { forwardRef, useCallback, useEffect, useMemo, useState } from "react";
import { formatNumber } from "../../../../lib/number";
import { TextInput } from "../TextInput";
import styles from "./numberInput.module.css";

const NumberInput = forwardRef(
  ({ id, isBusy, isLoading, format, value, onChange, ...props }, ref) => {
    const [formattedValue, setFormattedValue] = useState(value);
    const numberInputID = useMemo(() => id || uniqueId("numberInput_"), [id]);

    const formatValue = useCallback((value = "") => {
      const unformattedNumber = String(value).split(",").join("");
      const newFormattedNumber =
        unformattedNumber === "-"
          ? "-"
          : formatNumber(unformattedNumber, {
              decimals: 0,
              nullValue: "",
            });
      setFormattedValue(newFormattedNumber);
      return unformattedNumber;
    }, []);

    const handleChange = useCallback(
      (event) => {
        if (format) {
          event.target.value = String(event.target.value).split(",").join("");
        }
        if (onChange) {
          onChange(event);
        }
      },
      [format, onChange]
    );

    useEffect(() => {
      if (format) {
        formatValue(value);
      }
    }, [format, formatValue, value]);

    return (
      <div className={styles.root}>
        <TextInput
          id={numberInputID}
          isBusy={isBusy}
          isLoading={isLoading}
          onChange={handleChange}
          // cannot format in type=number
          type={format ? "text" : "number"}
          value={formattedValue || value}
          {...props}
        />
        <input
          ref={ref}
          type="number"
          className={styles.numberInput}
          id={id}
          value={value}
        />
      </div>
    );
  }
);

export default NumberInput;