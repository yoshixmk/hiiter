import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { DiGithubBadge } from 'react-icons/di';
import { useSelector } from 'react-redux';

import { CategorySelect } from '../components/CategorySelect';
import { CountDownOverlay } from '../components/CountDownOverlay';
import { MenuSelect } from '../components/MenuSelect';
import { Timer } from '../components/Timer';
import { YoutubeVideoModal } from '../components/YoutubeVideoModal';
import { Cycle, Focus } from '../store/cycle';
import styles from '../styles/Home.module.css';
import { menuSize } from '../utils/constant';

export type Menu = {
  name: string;
  subtext: string;
  videoId?: string;
  start?: number;
};

export type Menus = [
  {
    type: string;
    menuNames: Menu[];
  }
];

export default function Home({ menus }: { menus: Menus }): JSX.Element {
  const { positionNumber, isRunning } = useSelector((state: { focus: Focus }) => state.focus);
  const [selectedMenus, setSelectedMenus] = useState([]);

  const { category } = useSelector((state: { cycle: Cycle }) => state.cycle);
  const filteredMenus = menus.filter((c) => c.type === category)[0].menuNames;

  useEffect(() => {
    setSelectedMenus(filteredMenus);
  }, [filteredMenus]);

  const onSelectMenu = (positionNumber: number) => (menu: Menu) => {
    selectedMenus[positionNumber] = menu;
    setSelectedMenus([...selectedMenus]);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>HIITer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>HIITer</h1>

        <p className={styles.description}>
          <code className={styles.code}>Please select menu:</code>
          <CategorySelect categories={menus} />
        </p>

        <div className={styles.grid}>
          {[...Array(menuSize).keys()].map((i) => (
            <div key={i} className={`${styles.card} ${positionNumber == i + 1 ? styles.highlight : {}}`}>
              <MenuSelect filteredMenus={filteredMenus} index={i} onSelect={onSelectMenu(i)} />
            </div>
          ))}
        </div>

        <div className={styles.grid}>
          <Timer />
          {isRunning ? (
            <YoutubeVideoModal
              videoId={selectedMenus[positionNumber - 1]?.videoId}
              start={selectedMenus[positionNumber - 1]?.start}
            />
          ) : (
            <p>?????????????????????????????????????????????</p>
          )}
        </div>
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
      {isRunning && <CountDownOverlay />}
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
