import { stepBarBox, stepBarContainer, stepBarButtonContainer, stepBarButton, stepBarProgressBarContainer, stepBarProgressBar, stepBarProgressBarBack } from "./StepBar.css";
import { useState, useRef, useLayoutEffect } from "react";

const steps=[
    {id: "1", name: "Trip"},
    {id: "2", name: "Documents"},
    {id: "3", name: "Places"},
    {id: "4", name: "Itinerary"},
    {id: "5", name: "Budget"},
    {id: "6", name: "Packing"},
]

export default function StepBar() {
    const [selectedStep, setSelectedStep] = useState(steps[0].id);
    const [progressBarWidth, setProgressBarWidth] = useState(0);
    const stepBarRef = useRef<HTMLDivElement>(null);
    const stepBarButtonRef = useRef<Record<string, HTMLDivElement | null>>({});

    const progressBarUpdate = () =>{
        const stepBar = stepBarRef.current;
        const stepBarButton = stepBarButtonRef.current[selectedStep];
        if(!stepBar || !stepBarButton) return;
        const newWidth = stepBarButton.offsetWidth + stepBarButton.offsetLeft-13;
        setProgressBarWidth(newWidth);
    }

    useLayoutEffect(() => {
        progressBarUpdate();
        window.addEventListener("resize", progressBarUpdate);
        return () => {
            window.removeEventListener("resize", progressBarUpdate);
        }
    }, [selectedStep]);

    return <div className={stepBarBox}>
        <div className={stepBarContainer}>
            <div className={stepBarButtonContainer}>
                {steps.map((step) => (
                    <div 
                    key={step.id}
                    className={stepBarButton({ isActive: step.id === selectedStep })} 
                    ref={(el) => {stepBarButtonRef.current[step.id]= el;}}
                    onClick={() => setSelectedStep(step.id)}>
                        {step.name}
                    </div>
                ))}
            </div>
            <div className={stepBarProgressBarContainer}>
                <div className={stepBarProgressBarBack} ref={stepBarRef}>
                    <div className={stepBarProgressBar} style={{width: `${progressBarWidth}px`}}/>
                </div>
            </div>
        </div>
    </div>;
}