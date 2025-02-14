import BoxIcon from './BoxIcon/BoxIcon';
import { dataBoxIcon, dataMenu } from './constant';
import MenuItem from './Menu/Menu';
import styles from './styles.module.scss';
import reLoadIcon from '@icons/svgs/reloadIcon.svg';
import heartIcon from '@icons/svgs/heartIcon.svg';
import cartIcon from '@icons/svgs/cartIcon.svg';

import Logo from '@icons/images/Logo-retinaa.png';
function MyHeader() {
    const { containerBoxIcon, containerMenu, containerHeader, containerBox, container } =
        styles;
    return (
        <div className={container} >
            <div className={containerHeader}>
                <div className={containerBox}>
                    <div className={containerBoxIcon}>
                        {dataBoxIcon.map((item) => {
                            return (
                                <BoxIcon type={item.type} href={item.href} />
                            );
                        })}
                    </div>
                    <div className={containerMenu}>
                        {dataMenu.slice(0, 3).map((item) => {
                            return (
                                <MenuItem
                                    content={item.content}
                                    href={item.href}
                                />
                            );
                        })}
                    </div>
                </div>
                <div>
                    <img
                        src={Logo}
                        alt='Logo'
                        style={{
                            width: '100px', // hoặc chỉ dùng maxWidth nếu cần giữ nguyên tỉ lệ
                            height: 'auto' // để đảm bảo logo không bị méo mó
                        }}
                    ></img>
                </div>
                <div classaName={containerBox}>
                    <div className={containerMenu}>
                        {dataMenu.slice(3, dataMenu.length).map((item) => {
                            return (
                                <MenuItem
                                    content={item.content}
                                    href={item.href}
                                />
                            );
                        })}
                        <div className={containerBoxIcon}>
                            <img
                                width={26}
                                height={26}
                                src={reLoadIcon}
                                alt='reLoadIcon'
                            />
                            <img
                                width={26}
                                height={26}
                                src={heartIcon}
                                alt='heartIcon'
                            />
                            <img
                                width={26}
                                height={26}
                                src={cartIcon}
                                alt='cartIcon'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyHeader;
