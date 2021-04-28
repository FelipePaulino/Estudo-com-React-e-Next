import React from 'react';

import styles from '../header/header.module.css';

function card({ title, link, link2, link3, img }) {
    return (
        <div className={styles.container}>
            <div className={styles.flex}>
            <img className={styles.img} src={img} />
           
           <div>
            <h1 className={styles.title}>
                {title}
            </h1>
            <a className={styles.link}>
                {link}
            </a>
            <a className={styles.link}>
                {link2}
            </a>
            <a className={styles.link}>
                {link3}
            </a>
            </div>
            </div>

        </div>
    );
}

export default card;