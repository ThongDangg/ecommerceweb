import styles from './styles.module.scss';
import reLoadIcon from '@icons/svgs/reloadIcon.svg';
import heartIcon from '@icons/svgs/heartIcon.svg';
import cartIcon from '@icons/svgs/cartIcon.svg';

function ProductItem({ src, preSrc, name, price }) {
    const { boxImg, showImgWhenHover, showFncWhenHover, boxIcon,title,pricee } = styles;

    return (
        <div>
            <div className={boxImg}>
                <img
                    src='https://i.pinimg.com/736x/93/b2/04/93b204ee01ebfb9db227261c227c3e1d.jpg'
                    alt=''
                />
                <img
                    src='https://i.pinimg.com/736x/4f/28/0c/4f280cdeafae829b114af6edbcedb53b.jpg'
                    alt=''
                    className={showImgWhenHover}
                />
                <div className={showFncWhenHover}>
                    <div>
                        <div className={boxIcon}>
                            <img src={cartIcon} alt='reloadIcon' />
                        </div>
                        <div className={boxIcon}>
                            <img src={heartIcon} alt='heartIcon' />
                        </div>
                        <div className={boxIcon}>
                            <img src={reLoadIcon} alt='cartIcon' />
                        </div>
                        <div className={boxIcon}>
                            <img src={cartIcon} alt='cartIcon' />
                        </div>
                    </div>
                </div>
            </div>
            <div className={title}>Minimal Shirt</div>
            <div className={pricee}>$35.09</div>
        </div>
    );
}

export default ProductItem;
