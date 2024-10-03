import {useState,useRef} from 'react';
import ResultModal from './ResultModal.jsx';

export default function TimerChallenge({title,targetTime}) {
    const timerRef = useRef();
    const dialog = useRef();

    const [timeRemaining, setTimeRemaining] = useState(targetTime*1000);

    const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime*1000;

    if(timeRemaining <= 0){
        clearInterval(timerRef.current);
        dialog.current.open();
    }

    function handleReset(){
        setTimeRemaining(targetTime*1000);
    }
    
    function handleStar(){
        timerRef.current = setInterval(() => {
            setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 10);            
        },10);
    }

    function handleStop(){
        dialog.current.open();
        clearTimeout(timerRef.current);
    }

    return(
    <>
        <ResultModal ref={dialog} targetTime={targetTime} remainingTime={timeRemaining} onReset={handleReset}/>
        <section className="challenge">
            <h2>{title}</h2>
            <p className="challenge-time">
                {targetTime} second{targetTime > 1 ? 's' : ''}
            </p>
            <p>
                <button onClick={timerIsActive ? handleStop : handleStar}>
                    {timerIsActive ? 'stop' : 'start'} Challenge
                </button>
            </p>
            <p className={timerIsActive ? 'active' : undefined}>
                {timerIsActive ? 'Time is running' : 'Timer inactive'}
            </p>
        </section>
    </>
    );
}