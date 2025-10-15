import { memo } from "react";
import styles from "./TitleHeader.module.css";

export const TitleHeader = memo(({
    text1, text2
}: {
    text1: string,
    text2: string
}) => (
    <div className={styles.secTitle}>
        <h1
        // style={{
        //     display: 'block',
        //     fontSize: '85px',
        //     textTransform: 'uppercase',
        //     color: '#111',
        //     marginBottom: '75px',
        //     fontFamily: 'var(--font-oswald), Oswald, sans-serif',
        //     fontWeight: '400',
        //     lineHeight: '104%',
        //     letterSpacing: '0.03em'
        // }}
        >
            {text1} <br />{text2}:
        </h1>
    </div>
));

TitleHeader.displayName = "TitleHeader";