import Image from 'next/image'
import Link from 'next/link'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CardActionArea } from '@mui/material'
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Share from './Share'

const ArticleItem = ({ article, index, main = false }) => {
  return (
    <Card style={{ backgroundColor: 'lightgrey' }}>

      <CardHeader
        avatar={
          <Avatar alt={article.site.name} src={article.site.image} />
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={article.site.name}
        subheader={drawDate(article.created_at)}
      />
      <Link href={`/${article.slug}.html`} passHref>
        <CardActionArea href={`/${article.slug}.html`}>
          <Image
            src={main ? article.image : article.image_mosaic}
            alt={article.title}
            width={article.image_size.width}
            height={article.image_size.height}
            layout='responsive'
          />

          <CardContent>
            <Typography gutterBottom variant="h6" component="div" color="text.primary">
              {article.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {truncate(article.description, 200)}
            </Typography>

            {article.tags &&
              <Stack direction="row" pt={5} spacing={1}>
                {drawTags(article.tags)}
              </Stack>
            }

          </CardContent>

        </CardActionArea>
      </Link>

      <CardActions>
        <Share article={article} />
      </CardActions>
    </Card >
  );
}


export default ArticleItem;

const drawTags = (tags) => {
  if (!tags) return []
  return tags.split(',').map((tag, index) => {
    return (
      <Chip key={index} label={tag} />
    )
  })
}

const drawDate = (date) => {
  const dt = Date.parse(date)
  return (
    new Date(dt).toLocaleDateString("es-ES", { year: 'numeric', month: 'long', day: 'numeric' })
  )
}


const truncate = (str, length, ending) => {
  if (length == null) {
    length = 100;
  }
  if (ending == null) {
    ending = '...';
  }
  if (!str) {
    return '';
  }
  if (str.length > length) {
    return str.substring(0, length - ending.length) + ending;
  } else {
    return str;
  }
};
