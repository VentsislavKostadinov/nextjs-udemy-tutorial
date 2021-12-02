import Link from 'next/link';
import Layout from './components/Layout';


export default function AboutPage() {

    return (
        <Layout title='About DJ events'>
            <div>About Page</div>
            <Link href='/'>Home</Link>
        </Layout>
    )
}
