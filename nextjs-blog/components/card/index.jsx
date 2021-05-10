import React from 'react';

import styles from '../card/styles.module.css';

function card({ title, description, link, link2, img, link3, isImage }) {
    return (
        <div className={styles.container}>
            {/* Atende os dados casos */}
            {/* {isImage === true && title === 'Aula 1' && */}
                <img className={styles.img} src={img} />
            {/* } */}

            <h1 className={styles.title}>
                {title}
            </h1>
            {/* Atende o caso */}
            {title === 'Aula 1' &&
                <p>A aula mais legal</p>
            }
            {/* Se atende um caso ou outro */}
            {(isImage === true || title === 'Aula 2') &&
                <p className={styles.description}>
                    {description}
                </p>
            }
            <a className={styles.link}>
                {link}
            </a>
            {/* Se link2 existe */}
            {link2 &&
                <a className={styles.link}>
                    {link2}
                </a>
            }
            {link3 &&
                <a className={styles.link2}>
                    {link3}
                </a>
            }
        </div>
    );
}

export default card;