import { Icon } from "@iconify/react";
import { memo } from "react";
import styles from "./Button.module.css";

export const Button = memo(({
    variant,
    btnText,
    className,
    marginTop
}: {
    variant: string,
    btnText: string,
    className?: string,
    marginTop?: string
}) => (
    <a
        className={`${variant === "btnBlank" ? '' : styles.btn} ${styles[variant]} ${marginTop}`}
        href="#"
        role="button"
        onMouseEnter={(e) => {
            if (variant !== "btnBlank") {
                e.currentTarget.style.backgroundColor = '#fff';
                e.currentTarget.style.color = '#000';
            }
        }}
        onMouseLeave={(e) => {
            if (variant !== "btnBlank") {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#fff';
            }
        }}
    >
        {btnText}
        <Icon
            icon="la:arrow-right"
            style={{ marginLeft: '8px' }}
            className={`${className} ${variant === "btnBlank" ? 'hidden' : 'block'}`}
        />
    </a>
));

Button.displayName = "Button";