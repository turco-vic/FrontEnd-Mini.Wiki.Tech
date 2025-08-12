import React from "react";
import styles from "./CardStyle.module.css";

export default function CardStyle({ title, topics, backgroundColor, borderColor }) {
    return (
        <div
            className={styles.card}
            style={{
                backgroundColor: backgroundColor || "#fff",
                border: `2px solid ${borderColor || "#ccc"}`,
            }}
        >
            <h3 className={styles.title}>{title}</h3>
            {Array.isArray(topics) ? (
                <ul>
                    {topics.map((item, index) => {
                        const [boldText, normalText] = item.split(":");
                        return (
                            <li key={index}>
                                <strong>{boldText}:</strong> {normalText}
                            </li>
                        );
                    })}
                </ul>
            ) : (
                <span>{topics}</span>
            )}
        </div>
    );
}