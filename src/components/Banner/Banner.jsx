import Button from '@components/Button/Button';
import styles from './styles.module.scss';


function Banner() {
    const { container, content, title, des } = styles;
    return (
        <div className={container}>
            <div className={content}>
                <h1 className={title}>Bal3nc1ag4 Offical Store</h1>
                <div className={des}>Fine feather make fine birds</div>

                <Button content={'Go to shop'}/>
            </div>
        </div>
    );
}

export default Banner;
