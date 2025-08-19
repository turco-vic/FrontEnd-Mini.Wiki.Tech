"use client";

import React, { useState } from "react";
import styles from "./CodeBlock.module.css";

export default function CodeBlock({ code, language = "code" }) {
    const normalized = typeof code === "string" ? code.replace(/\r\n/g, "\n") : "";
    const lines = normalized.split("\n");
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            if (typeof window !== 'undefined' && navigator?.clipboard?.writeText) {
                await navigator.clipboard.writeText(normalized);
            } else if (typeof document !== 'undefined') {
                const body = document.body || document.getElementsByTagName('body')[0];
                if (!body) return;
                const textarea = document.createElement('textarea');
                textarea.value = normalized;
                textarea.setAttribute('readonly', '');
                textarea.style.position = 'fixed';
                textarea.style.top = '-9999px';
                textarea.style.left = '-9999px';
                body.appendChild(textarea);
                textarea.focus();
                textarea.select();
                try {
                    document.execCommand('copy');
                } finally {
                    if (textarea && textarea.parentNode) {
                        textarea.parentNode.removeChild(textarea);
                    }
                }
            } else {
                return;
            }
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
        } catch (e) {
        }
    };

    return (
        <div className={styles.codeBlock}>
            <div className={styles.header}>
                <div className={styles.windowDots}>
                    <span className={`${styles.dot} ${styles.red}`}></span>
                    <span className={`${styles.dot} ${styles.yellow}`}></span>
                    <span className={`${styles.dot} ${styles.green}`}></span>
                </div>
                <div className={styles.headerRight}>
                    <span className={styles.langLabel}>{language}</span>
                    <button
                        type="button"
                        className={styles.copyBtn}
                        aria-label="Copiar código"
                        onClick={handleCopy}
                    >
                        {copied ? "Copiado" : "Copiar"}
                    </button>
                </div>
            </div>

            <div className={styles.content}>
                <div className={`${styles.lines} font-roboto-mono`}>
                    {lines.map((line, idx) => (
                        <div className={styles.line} key={idx}>
                            <span className={styles.lineNumber}>{idx + 1}</span>
                            <span className={styles.lineContent}>{line || "\u00A0"}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}