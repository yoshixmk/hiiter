import Head from 'next/head';
import Image from 'next/image';
import { DiGithubBadge } from 'react-icons/di';
import { useSelector } from 'react-redux';

import { CategorySelect } from '../components/CategorySelect';
import { MenuSelect } from '../components/MenuSelect';
import { Timer } from '../components/Timer';
import { Focus } from '../store/cycle';
import styles from '../styles/Home.module.css';

export type Menus = [
  {
    type: string;
    menuNames: [
      {
        name: string;
        subtext: string;
      }
    ];
  }
];

export default function Home({ menus }: { menus: Menus }): JSX.Element {
  const { positionNumber } = useSelector((state: { focus: Focus }) => state.focus);

  return (
    <div className={styles.container}>
      <Head>
        <title>HIITer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to HIITer!</h1>

        <p className={styles.description}>
          <code className={styles.code}>Please select menu:</code>
          <CategorySelect categories={menus} />
        </p>

        <div className={styles.grid}>
          {[...Array(4).keys()].map((i) => (
            <div
              key={i}
              className={`${styles.card} ${positionNumber == i + 1 ? styles.highlight : {}}`}
            >
              <MenuSelect menus={menus} name={`Menu ${i + 1}`} />
            </div>
          ))}
        </div>

        <Timer />
      </main>

      <footer className={styles.footer}>
        <a href="https://github.com/yoshixmk/hiiter" target="_blank" rel="noreferrer">
          <DiGithubBadge size="3em" />
          <Image
            alt="GitHub stars"
            src="https://img.shields.io/github/stars/yoshixmk/hiiter?style=social"
            height="20"
            width="76"
          />
        </a>
      </footer>
    </div>
  );
}

export async function getStaticProps(): Promise<{ props: { menus: Menus } }> {
  const res = await fetch(`${process.env.API_URL}/trainings/menus`);
  const menus: Menus = await res.json();
  return {
    props: { menus },
  };
}
