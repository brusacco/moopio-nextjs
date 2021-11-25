import Head from 'next/head'
import Link from 'next/link'
import Typography from '@mui/material/Typography';
import Nav from '../components/Nav'
import ArticleItem from '../components/ArticleItem'
import ArticleList from '../components/ArticleList'
import Footer from '../components/Footer'
import Box from '@mui/material/Box'
import Breadcrumbs from '@mui/material/Breadcrumbs';

export default function Article({ article }) {
    return (
        <div>
            <Head>
                <title>{article.title}</title>
                <meta name="description" content="Moopio.com" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <Nav />

                <Box pt={1} pb={1}>
                    <Breadcrumbs pl={1} aria-label="breadcrumb">
                        <Link underline="hover" color="inherit" href="/">
                            Inicio
                        </Link>
                        <Typography color="text.primary">Noticia</Typography>
                    </Breadcrumbs>
                </Box>

                <ArticleItem article={article} main={true} />
                <Box pt={2} pb={2} sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    backgroundColor: 'white'
                }}>
                </Box>
                <ArticleList articles={article.related} slug={article.slug} />
                <Footer />
            </main>
        </div>
    )
}

/* export const getServerSideProps = async (context) => {
    const res = await fetch(`https://www.moopio.com/${context.params.slug}.json`)
    const article = await res.json()

    return {
        props: {
            article,
        },
    }
} */

export async function getStaticProps({ params }) {
    const res = await fetch(`https://www.moopio.com/${params.slug}.json`)
    const article = await res.json()
    return {
        props: {
            article,
        },
        revalidate: (60 * 30),
    };
}

export async function getStaticPaths() {
    const res = await fetch('https://www.moopio.com/entry/show.json')
    const articles = await res.json()

    // remove items from articles array if empty slug
    const paths = articles.filter(article => article.slug).map(article => ({
        params: {
            slug: article.slug,
        },
    }))

    return {
        paths,
        fallback: 'blocking',
    }
}
