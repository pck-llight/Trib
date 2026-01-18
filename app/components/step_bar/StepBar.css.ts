import {style} from "@vanilla-extract/css";

export const stepBarContainer = style({
    display: "flex",
    position: "absolute",
    padding: "4px",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "4px",
    borderRadius: "12px",
    border: "1px solid rgba(255, 255, 255, 0.68)",
    background: "linear-gradient(0deg, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.20) 100%), rgba(0, 0, 0, 0.03)",
    backdropFilter: "blur(8px)",
});

export const stepBarProgressBarContainer = style({
    display: "flex",
    padding: "3px 5px",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "4px",
});

export const stepBarProgressBar = style({});