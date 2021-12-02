import Layout from "./components/Layout";
import Link from 'next/link';
import styles from '../styles/404.module.css'

export default function NotFoundPage() {

    return (
        <Layout title='Page not found'>
            <div className={styles.error}>
            <h1>404</h1>
            <h4>Sorry, there is nothing here</h4>
            <Link href='/' className={styles.error}>Return to Home</Link>
            </div>
            
        </Layout>
    )
}