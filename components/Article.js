import Image from 'next/image'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { red } from '@mui/material/colors';

const Article = ({article}) => { 
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={article.site.name}
        subheader="September 14, 2016"
      />

      <Image
        src={article.image}
        alt={article.title}
        width={article.image_size.width}
        height={article.image_size.height}
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />
    
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {article.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {article.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">{article.site.name}</Button>
      </CardActions>
    </Card>
  );
}


export default Article;