import Article from './Article'
import Box from '@mui/material/Box'
import Masonry from '@mui/lab/Masonry';

const ArticleList = ({articles}) => {
    return (
        <Box pt={2} pb={10} sx={{ display: 'flex', 
                        justifyContent: 'center', 
                        backgroundColor: 'lightgrey'
                        }}>
        <Masonry columns={{ xs: 1, sm: 1, md: 3 }} spacing={{ xs: 3, sm: 2, md: 3 }}>
            {articles.entries.slice(0,50).map(article => (
                <Article key={article.id} article={article} />
            ))}
        </Masonry>
        </Box>
    )
  }

  export default ArticleList