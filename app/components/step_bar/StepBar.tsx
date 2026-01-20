import { stepBarBox, stepBarContainer, stepBarButtonContainer, stepBarButton, stepBarProgressBarContainer, stepBarProgressBar, stepBarProgressBarBack } from "./StepBar.css";
import { useState } from "react";

const steps=[
    {id: 1, name: "Trip"},
    {id: 2, name: "Documents"},
    {id: 3, name: "Places"},
    {id: 4, name: "Itinerary"},
    {id: 5, name: "Budget"},
    {id: 6, name: "Packing"},
]

export default function StepBar() {
    const [selectedStep, setSelectedStep] = useState(steps[0].id);
    const [palneYPos, setPlaneYPos] = useState();

    return <div className={stepBarBox}>
        <div className={stepBarContainer}>
            <div className={stepBarButtonContainer}>
                {steps.map((step) => (
                    <div 
                    key={step.id} 
                    className={stepBarButton({ isActive: step.id === selectedStep })} 
                    onClick={() => setSelectedStep(step.id)}>
                        {step.name}
                    </div>
                ))}
            </div>
            <div className={stepBarProgressBarContainer}>
                <div className={stepBarProgressBarBack}>
                    <div className={stepBarProgressBar}/>
                </div>
            </div>
        </div>
    </div>;
}