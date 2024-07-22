import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classNames.bind(styles); //Cách sử dụng được ký tự "-" cho class name

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* Logo */}
                {/* Search */}
            </div>
        </header>
    );
}

export default Header;
