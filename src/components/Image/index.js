import { useState, forwardRef } from 'react';
import images from '~/assets/images';
import styles from './Image.module.scss';
import classNames from 'classnames';

const Image = forwardRef(({ className, src, alt, fallback: customFallback = images.noImage, ...props }, ref) => {
    const [fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback(images.noImage);
    };

    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={fallback || src}
            alt={alt}
            {...props}
            onError={handleError}
        />
    );
});

export default Image;
