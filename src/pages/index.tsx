import Head from 'next/head';

import { GetServerSideProps } from 'next';

import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { Experiencebar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { ChallengeBox } from "../components/ChallengeBox";
import { CountdownProvider } from "../contexts/CountdownContext";

import styles from '../styles/Pages/Home.module.css';
import { ChallengesProvider } from '../contexts/ChallengesContext';
import { SideBar } from '../components/SideBar';


interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {
  return (
    <ChallengesProvider level={props.level} currentExperience={props.currentExperience} challengesCompleted={props.challengesCompleted}>
      <div className={styles.containerPrincipal}>
      <SideBar />
        <div className={styles.container}>

          <Head>
            Inicio | movedoro
        </Head>

          <Experiencebar />

          <CountdownProvider>
            <section>
              <div>
                <Profile />
                <CompletedChallenges />
                <Countdown />
              </div>

              <div>
                <ChallengeBox />
              </div>
            </section>
          </CountdownProvider>
        </div>
      </div>
    </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {


  const { level, currentExperience, challengesCompleted } = context.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}