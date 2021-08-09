import { CategorySelect as CategorySelect } from 'components/CategorySelect';
import { MenuSelect } from 'components/MenuSelect';
import { Timer } from 'components/Timer';
import { training } from 'domains/const/menus_const';
import Head from 'next/head';
import Image from 'next/image'
import { DiGithubBadge } from "react-icons/di";
import styles from 'styles/Home.module.css';

export default function Home({ menus }) {
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
            <div key={i} href="https://nextjs.org/docs" className={styles.card}>
              <MenuSelect menus={menus} name={`Menu ${i + 1}`} />
            </div>
          ))}
        </div>

        <Timer />
      </main>

      <footer className={styles.footer}>
        <a href="https://github.com/yoshixmk/hiiter" target="_blank" rel="noreferrer">
          <DiGithubBadge size="3em" />
          <Image alt="GitHub stars" src="https://img.shields.io/github/stars/yoshixmk/hiiter?style=social" height="20" width="76" />
        </a>
      </footer>
    </div>
  );
}

export async function getStaticProps() {
  const menus = training;
  return {
    props: { menus },
  };
}
