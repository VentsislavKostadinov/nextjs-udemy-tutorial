import Link from 'next/link';
import Head from 'next/head';
import Layout from './components/Layout';
import EventItem from './components/EventItem';

import styles from '../styles/Layout.module.css';

import { API_URL } from './config/index';


export default function Home({ events }) {

  console.log(events);

  return (
    <Layout className={styles.container}>
      <h1 className={styles.container}>Upcoming Events</h1>


      {events.length === 0 && <h3>No Events to show</h3>}

      {events.map(evt => {
        return (
          <EventItem key={evt.id} evt={evt} />
        )
      })}

      {events.length > 0 && (
        <Link href='/events'>
          <button className={styles.btnAllEvents}>
            <a>View All Events</a>
          </button>
        </Link>
      )}

    </Layout>
  )
}

export async function getServerSideProps() {

  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();


  return {
    props: { events }
  }
}
