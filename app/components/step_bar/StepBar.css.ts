import {style} from "@vanilla-extract/css";
import {recipe} from "@vanilla-extract/recipes";

export const stepBarBox = style({
    display: "flex",
    width: "100dvw",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "27px",
});

export const stepBarContainer = style({
    display: "flex",
    padding: "4px",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "4px",
    borderRadius: "12px",
    border: "1px solid rgba(255, 255, 255, 0.68)",
    background: "linear-gradient(0deg, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.20) 100%), rgba(0, 0, 0, 0.03)",
    backdropFilter: "blur(8px)",
});

export const stepBarProgressBarContainer = style({
    display: "flex",
    width: "100%",
    padding: "3px 5px",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "4px",
});

export const stepBarProgressBarBack = style({
    width: "100%",
    background: "rgba(255, 255, 255, 0.30)",
    borderRadius: "2px",
});

export const stepBarProgressBar = style({
    position: "relative",
    height: "4px",
    borderRadius: "4px",
    transition: "width 0.5s ease-in-out",
    background: "linear-gradient(90deg, rgba(16, 152, 255, 0.60) 0%, #1098FF 100%)",
    '::after': {
        content: "",
        position: "absolute",
        top: "-5.5px",
        right: "-7px",
        width:"16px",
        height: "16px",
        backgroundImage: "url(../../assets/plane.svg)",
        backgroundSize: "contain",
    }
});

export const stepBarButtonContainer = style({
    display: "flex",
    alignItems: "center",
    gap: "4px",
})

export const stepBarButton = recipe ({
    base:{
        display: "flex",
        padding: "10px 16px",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        color: "rgba(0, 0, 0, 0.38)",
        cursor: "pointer",
        userSelect: "none",
        borderRadius: "8px",
        border: "1px solid rgba(0, 0, 0, 0)",
        transition: "all 0.3s cubic-bezier(0.39, 0.09, 0.35, 1.01)",
    },
    variants: {
        isActive: {
            true: {
                border: "1px, solid rgba(255, 255, 255, 0.38)",
                background: "rgba(255, 255, 255, 0.69)",
                color: "#1098FF",
            },
            false: {}
        },
    },
})