import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';
impt 

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    children,
    className,
    primary = false,
    outline = false,
    small = false,
    rounded = false,
    large = false,
    text = false,
    disabled = false,
    leftIcon,
    rightIcon,
    onClick,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps, //Giai props de mo mot trang web moi
    };

    //remove event when disabled
    if(disabled){
        Object.keys(props).forEach(key => {
            if(key.startsWith('on') && typeof props[key] === 'function')
                delete props[key]
        })
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        primary, //add them class primary
        outline,
        small,
        large,
        rounded,
        text,
        disabled,
        [className]: className,
    });

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

Button.propTypes= {
    to: PropTypes.string,
    href: PropTypes.string,
    children: PropTypes.string,
    className: PropTypes.node.isRequired,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    small: PropTypes.bool,
    rounded: PropTypes.bool,
    large: PropTypes.bool,
    text: PropTypes.string,
    disabled: PropTypes.string,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    onClick: PropTypes.func,
}
export default Button;
