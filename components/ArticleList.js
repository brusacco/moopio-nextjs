import ArticleItem from './ArticleItem'
import Box from '@mui/material/Box'
import Masonry from '@mui/lab/Masonry';

const ArticleList = ({ articles }) => {
    return (
        <Box pt={2} pb={10} sx={{
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: 'white'
        }}>
            <Masonry columns={{ xs: 1, sm: 1, md: 3 }} spacing={{ xs: 3, sm: 2, md: 3 }}>
                {applyFilter(articles).map((article, index) => (
                    <ArticleItem key={article.id} index={index} article={article} />
                ))}
            </Masonry>
        </Box>
    )
}

export default ArticleList

const applyFilter = (articles) => {
    var temp = articles.filter(article => article.title.length > 0)
    temp = temp.filter(article => !article.title.includes('Página no encontrada'))
    return temp
}