import styles from '../styles.module.scss';
import fbIcon from '@icons/svgs/fbIcon.svg';
import instaIcon from '@icons/svgs/instaIcon.svg';
import ytbIcon from '@icons/svgs/ytbIcon.svg';

function BoxIcon({ type, href }) {
    const { boxIcon } = styles; //vì khi hover vào icon sẽ navigate nên tạo 2 giá trị par để xác định hiển thị icon nào và href vào đúng

    const handleRenderIcon = (type) => {
        switch (type) {
            case 'fb':
                return fbIcon;
            case 'ins':
                return instaIcon;
            case 'ytb':
                return ytbIcon;
        }
    };

    return (
        <div className={boxIcon}>
            <img src={handleRenderIcon(type)} alt={type} />
        </div>
    );
}

export default BoxIcon;
