import { Icon } from "@iconify/react";
import { memo } from "react";
import styles from "./Button.module.css";
import { Link } from "@/types";

interface ButtonType extends Link {
    variant: string;
    btnText: string;
    className?: string;
    marginTop?: string;
    newTab?: boolean;
}

export const Button = memo(({
    variant,
    btnText,
    className,
    marginTop,
    href,
    newTab = false,
}: ButtonType) => (
    <a
        className={`${variant === "btnBlank" ? '' : styles.btn} ${styles[variant]} ${marginTop}`}
        href={href}
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
        target={newTab === true ? "_blank" : undefined}
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