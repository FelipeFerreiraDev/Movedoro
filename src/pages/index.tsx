import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { Experiencebar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";

import styles from '../styles/Pages/Home.module.css';

import Head from 'next/head';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        Inicio | move.it
      </Head>
      
      <Experiencebar />

      <section>
        <div>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>

        <div>

        </div>
      </section>
    </div>
  )
}
