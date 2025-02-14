import CountdownTimer from '@components/CountdownTimer/CountdownTimer';
import styles from './styles.module.scss'

import Button2 from '@components/Button 2/Button2';

function CountdownBanner() {
    const {container, containerTimmer, title, boxBtn } = styles
    const targetDate = '2025-06-01T00:00:00';
    return <div className={container}>
        <div className={containerTimmer} >
            <CountdownTimer targetDate={targetDate} />
        </div>
        <p className={title}>The classic make a comeback</p>
        <div className={boxBtn}>
            <Button2 content={'Buy now'} />
        </div>
    </div>
}

export default CountdownBanner;