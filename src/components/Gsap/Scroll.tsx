import React, { useState } from 'react';
import styles from './Scroll.module.scss';

const Scroll = () => {
    const handleClick = () => {
        // CSS変数の値を取得
        const rootStyle = getComputedStyle(document.documentElement);
        const delayTime = rootStyle.getPropertyValue('--time-button').trim(); // 時間を取得

        // 取得した時間をミリ秒に変換
        const delayInMilliseconds = parseInt(delayTime, 10) * 1000; // 秒単位からミリ秒単位に変換

        // console.log(`Delay time: ${delayInMilliseconds}ms`); // コンソールに表示

        // 指定された時間だけ遅延させる
        setTimeout(() => {
            // 遅延後の処理（例: ボタンの色をトグル）
            const currentColor = rootStyle.getPropertyValue('--button').trim();
            const newColor = currentColor === 'blue' ? 'red' : 'blue'; // 色をトグル
            document.documentElement.style.setProperty('--button', newColor);
        }, delayInMilliseconds);
    };
    return (
        <div className={styles.root}>
            Scroll画面です
            <button
                type="button"
                className={styles.button}
                onClick={handleClick}
            >
                <span>ボタン</span>
            </button>
        </div>
    );
};

export default Scroll;
