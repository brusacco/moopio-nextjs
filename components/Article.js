import Image from 'next/image'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import InventoryIcon from '@mui/icons-material/Inventory';
import Typography from '@mui/material/Typography';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { red } from '@mui/material/colors';

const Article = ({article}) => { 
  return (
    <Card style={{backgroundColor: 'darkgrey'}}>
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
        subheader="September 14, 2016"
      />

      <Image
        src={article.image}
        alt={article.title}
        width={article.image_size.width}
        height={article.image_size.height}
        blurDataURL="data:..." automatically provided
        placeholder="blur" // Optional blur-up while loading
      />
    
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" color="text.primary">
        {article.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {truncate(article.description,200)}
        </Typography>
      </CardContent>
      
    </Card>
  );
}


export default Article;

// truncate string to
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
