import { memo } from "react";
import styles from "./Button.module.css";

interface SubmitButtonProps {
    isButtonDisabled?: boolean;
    btnText: string;
    marginTop: string;
}

export const SubmitButton = memo(({
    isButtonDisabled = false,
    btnText,
    marginTop
}: SubmitButtonProps) => (
    <button
        type="submit"
        className={`${styles.btn} ${styles.btnBlack} ${marginTop}`}
        disabled={isButtonDisabled}
    >
        {btnText}
    </button>
));

SubmitButton.displayName = "SubmitButton";