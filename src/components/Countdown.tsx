import { useContext } from 'react';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/Countdown.module.css';


export function Countdown() {
    const { minutes, seconds, hasFinished, isActive, startCountdown, resetCountdown } = useContext(CountdownContext);

    const [minutesLeft, minutesRight] = String(minutes).padStart(2, '0').split('');
    const [secondsLeft, secondsRight] = String(seconds).padStart(2, '0').split('');

    return (
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>
                        {minutesLeft}
                    </span>
                    <span>
                        {minutesRight}
                    </span>
                </div>
                <span>:</span>
                <div>
                    <span>
                        {secondsLeft}
                    </span>
                    <span>
                        {secondsRight}
                    </span>
                </div>
            </div>

            { hasFinished ?
                (<button disabled className={styles.countdownButton}>
                    Ciclo encerrado <img src="icons/level.svg" alt="level" />
                </button>) : (
                    <>
                        {isActive ?
                            (<button onClick={resetCountdown} type="button" className={`${styles.countdownButton} ${styles.countdownButtonActive}`}>
                                Abandonar
                            </button>) :
                            (<button onClick={startCountdown} type="button" className={styles.countdownButton}>
                                Iniciar
                            </button>)
                        }
                    </>
                )}




        </div>
    )
}