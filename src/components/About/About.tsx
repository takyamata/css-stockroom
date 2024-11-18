import React from 'react';
import styles from './About.module.scss';
import Anchor from '@components/Paragraph/Anchor';
import HeadLine from '@components/Paragraph/HeadLine';
import ParaGraph from '@components/Paragraph/ParaGraph';
import Span from '@components/Paragraph/Span';
import SubHeading from '@components/Paragraph/SubHeading';

const About = () => {
    return (
        <div className={styles.root}>
            <HeadLine text="About" />
            <SubHeading text="このサイトについて" />
            <ParaGraph>
                <Span text="このサイトは主にCSSにまつわるテクニックを作者である私が個人がまとめています。" />
                <Span text="図書館に来たような気持ちで閲覧できるサイトを目指しております。" />
                <Span text="あまり小難しく考えずノリで理解できるように努めております。" />
                <Span text="作者である私自身も、まだ業界経験は浅く修行の身分でありますので、間違った知識などを記載してしまった場合にはご容赦願いたい所存であります。" />
                <Span text="CSSの他にもGSAPやReactなどフロントエンドに必要なスタイルの知識も記載しています。" />
                <Span text="CSSの他にもGSAPやReaなお、このサイト自体はVite + Typescript + Reactという構成で作成されています。ctなどフロントエンドに必要なスタイルの知識も記載しています。" />
                <Span text="サイトのデザインは作者である私がかねてより敬愛している" />
                <Anchor
                    href="https://www.bloc-rhodia.jp/index.html"
                    children="「RHODIA」"
                    blank
                />
                <Span text="という1934年に創業されたフランスのメモ帳ブランドより着想を得ております。" />
                <Span text="以上、何卒よろしくお願いいたします。m(_ _)m" />
                <Span tar text="2024年11月 (/_\卍作者卍/_\)" />
            </ParaGraph>
        </div>
    );
};

export default About;
