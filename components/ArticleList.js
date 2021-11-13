import Article from './Article'
import Box from '@mui/material/Box'
import Masonry from '@mui/lab/Masonry';

const ArticleList = ({articles}) => {
    return (
        <Box mt={2} sx={{ display: 'flex', justifyContent: 'center' }}>
        <Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={{ xs: 1, sm: 2, md: 3 }}>
      {articles.entries.map(article => (
          <Article key={article.id} article={article} />
        ))}
      </Masonry>
      </Box>
    )
  }

  export default ArticleList