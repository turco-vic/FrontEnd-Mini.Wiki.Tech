import React from "react";
import styles from "./CodeBlock.module.css";

export default function CodeBlock({ code }) {
    return (
        <div className={styles.codeBlock}>
                    <pre>
                        <code>
                            {code}
                        </code>
                    </pre>
                </div>
    );
}