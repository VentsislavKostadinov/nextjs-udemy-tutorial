import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/EventItem.module.css';

export default function EventItem({evt}) {

    return (
        <div className={styles.event}>
          <div className={styles.img}>
               <Image src={evt.image ? evt.image : '/images/event-default.png'} width={170} height={100}/>
          </div>

          <div>
              <span>{evt.date} at {evt.time}</span>
              <h1>{evt.name}</h1>
          </div>

          <div>
              <Link href={`/events/${evt.slug}`}><button className={styles.btn}><a>Details</a></button></Link>
          </div>
          

        </div>
    )
}