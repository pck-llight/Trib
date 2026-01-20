import { stepBarBox, stepBarContainer, stepBarButtonContainer, stepBarButton, stepBarProgressBarContainer, stepBarProgressBar } from "./StepBar.css";

export default function StepBar() {
    return <div className={stepBarBox}>
        <div className={stepBarContainer}>
            <div className={stepBarButtonContainer}>
                <div className={stepBarButton}>Trip</div>
                <div className={stepBarButton}>Documents</div>
                <div className={stepBarButton}>asdf</div>
                <div className={stepBarButton}>asdf</div>
            </div>
            <div className={stepBarProgressBarContainer}>
                <div className={stepBarProgressBar}/>
            </div>
        </div>
    </div>;
}