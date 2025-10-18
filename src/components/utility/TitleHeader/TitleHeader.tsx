import { memo } from "react";
import styles from "./TitleHeader.module.css";

export const TitleHeader = memo(({
    text1, text2
}: {
    text1: string,
    text2?: string
}) => (
    <div className={styles.secTitle}>
        <h1>
            {text1} {text2 && <><br />{text2}</>}:
        </h1>
    </div>
));

TitleHeader.displayName = "TitleHeader";