//import { useRouter } from 'next/router';
import Image from 'next/image';
import Layout from "../components/Layout";
import Link from 'next/link';
import { API_URL } from "../config";
import { FaPencilAlt, FaTimes } from 'react-icons/fa';

import styles from '../../styles/EditEvent.module.css'

export default function EventPage({ evt }) {

    const deleteEvent = (e) => {
        console.log('delete');
    }

    //  const router = useRouter();
    // console.log(router);

    return (
        <Layout>
           
           <div>
                <span>{evt.date} at {evt.time}</span>
                <h1>{evt.name}</h1>
                 {evt.image && (
                     <div>
                         <Image src={evt.image} width={960} height={600}/>
                     </div>
                 )}

                 <h3>Performers</h3>
                 <p>{evt.performers}</p>

                 <h3>Description</h3>
                 <p>{evt.description}</p>

                 <h3>Venue: {evt.venue}</h3>
                 <p>{evt.address}</p>

                 <Link href='/'><a className={styles.back}> {'<'} Go Back</a></Link>
               

            </div>
            <br/>
            <br/>
            <Link href={`/events/edit/${evt.id}`}>
                <a className={styles.edit}><FaPencilAlt/>Edit Event</a>
            </Link>

            <a href='#' onClick={deleteEvent} className={styles.red}><FaTimes/> Delete Event</a>

        </Layout>

        /* <div>
         <h1>Add a new page</h1>
         <h3>{router.query.slug}</h3>
         <button onClick={() => router.push('/')}>Click</button>
        </div> */


    )
}

/*export async function xxx`({query: {slug}}) {

    console.log(slug);

    const response = await fetch(`${API_URL}/api/events/${slug}`);
    const events = await response.json();

    return {

        props: {
            evt: events[0]
        }
    }
} */

// If we want to be a static - getStaticProps and getStaticPaths

export async function getStaticPaths() {

    const response = await fetch(`${API_URL}/api/events/`);
    const events = await response.json();

    const paths = events.map(evt => ({
        params: {slug: evt.slug}
    }))

    return {

        paths,
        fallback: true

    }
}


export async function getStaticProps({ params: {slug}}) {

    console.log(slug);

    const response = await fetch(`${API_URL}/api/events/${slug}`);
    const events = await response.json();

    return {

        props: {
            evt: events[0]
        },
        revalidate: 1
    }
}