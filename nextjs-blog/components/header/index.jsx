import React from 'react';

import styles from '../header/header.module.css';

function card({ title, link, link2, link3, img }) {
    return (
        <div className={styles.container}>
            <div className={styles.flex}>
                <img className={styles.img} src={img} />

                <div>
                    <h1 className={styles.link}>
                       O que vamos estudar? 
                    </h1>
                    <a className={styles.link}>
                    Props e Componentização
                    </a>
                    <a className={styles.link}>
                        If integrado
                    </a>
                    <a className={styles.link}>
                        Condição Ternaria
                    </a>
                    <a className={styles.link}>
                       If, else if e else
                    </a>
                    <a className={styles.link}>
                        Switch Case
                    </a>
                    <a className={styles.link}>
                        Git
                    </a>
                    <a className={styles.link}>
                        Use State
                    </a>
                    <a className={styles.link}>
                        Use Effect
                    </a>
                    <a className={styles.link}>
                        Map
                    </a>
                    <a className={styles.link}>
                        Filter
                    </a>
                    <a className={styles.link}>
                        Função(Const e Function)
                    </a>
                    <a className={styles.link}>
                        Query String e Split
                    </a>
                    <a className={styles.link}>
                        Onchange, OnClick e etc
                    </a>
                    <a className={styles.link}>
                        Axios e Fetch
                    </a>
                    <a className={styles.link}>
                        LocalStorage e Cookies
                    </a>
                    <a className={styles.link}>
                        Estrutura de Dados e Postman
                    </a>
                    <a className={styles.link}>
                        Tipagem
                    </a>
                    <a className={styles.link}>
                        Teste Unitário
                    </a>
                </div>
            </div>

        </div>
    );
}

export default card;