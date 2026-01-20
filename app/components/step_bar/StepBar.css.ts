import {style} from "@vanilla-extract/css";

export const stepBarBox = style({
    display: "flex",
    width: "100dvw",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "27px",
});

export const stepBarContainer = style({
    width: "fit-content",
    display: "flex",
    padding: "4px",
    flexDirection: "column",
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

export const stepBarProgressBar = style({
    position: "relative",
    width: "25%", //이거 나중에 값따라서 바뀌어야 함
    height: "4px",
    borderRadius: "4px",
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

export const stepBarButton = style ({
    display: "flex",
    padding: "10px 16px",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    color: "rgba(0, 0, 0, 0.38)",
})