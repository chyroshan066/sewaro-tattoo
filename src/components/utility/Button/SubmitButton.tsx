import { memo, ReactNode } from "react";
import styles from "./Button.module.css";
import { Btn } from "@/types";

interface SubmitButtonProps extends Btn {
    isButtonDisabled?: boolean;
    btnText: string | ReactNode;
}

export const SubmitButton = memo(({
    isButtonDisabled = false,
    btnText,
    marginTop,
    variant
}: SubmitButtonProps) => (
    <button
        type="submit"
        className={`${variant !== "footerBtn" ? styles.btn : ''} ${styles[variant]} ${marginTop}`}
        disabled={isButtonDisabled}
    >
        {btnText}
    </button>
));

SubmitButton.displayName = "SubmitButton";