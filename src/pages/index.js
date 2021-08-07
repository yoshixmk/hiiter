import Head from 'next/head';
import Img from 'next/image';

import { CategorySelect as CategorySelect } from '../components/CategorySelect';
import { MenuSelect } from '../components/MenuSelect.js'
import styles from '../styles/Home.module.css';
import { training } from "./api/_menus_const";

export default function Home({ menus }) {

  return (
    <div className={styles.container}>
      <Head>
        <title>HIITer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to HIITer!
        </h1>

        <p className={styles.description}>
          <code className={styles.code}>Please select menu:</code>
          <CategorySelect categories={menus} />
        </p>

        <div className={styles.grid}>
          {
            [...Array(4).keys()].map((i) =>
            (<div key={i} href="https://nextjs.org/docs" className={styles.card}>
              <h3>Menu {i} &rarr;</h3>
              <p>subtext</p>
              <MenuSelect menus={menus} name={`menu${i}`} />
            </div>
            ))
          }
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} width={'100%'} height={'100%'} />
        </a>
      </footer>
    </div>
  )
}

export async function getStaticProps() {
  const menus = training;
  return {
    props: { menus },
  }
}
