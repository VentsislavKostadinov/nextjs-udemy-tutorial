import Head from 'next/head';
import { useRouter } from 'next/router';
import Header from './Header';
import Showcase from './Showcase';
import Footer from './Footer';

import styles from '../../styles/Layout.module.css';


export default function Layout({ title, keywords, description, children }) {

    const router = useRouter();

    return (
        <header>
            <Head>
                <title>{title}</title>
                <meta name='desc' content={description} />
                <meta name='keywords' content={keywords} />
            </Head>

            <Header />
 
            {/* show Showcase only in Home */}
            {router.pathname === '/' && <Showcase />}

            <div className={styles.container}>{children}</div>
            <Footer />
        </header>
    )
}

Layout.defaultProps = {
    title: 'DJ Event',
    description: 'Find the latest DJ musical events',
    keywords: 'music, dj, event, events'
}