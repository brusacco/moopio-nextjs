import Image from 'next/image'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import InventoryIcon from '@mui/icons-material/Inventory';
import Typography from '@mui/material/Typography';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { FacebookShareButton, FacebookIcon } from 'next-share';
import { TwitterShareButton, TwitterIcon } from 'next-share'
import { WhatsappShareButton, WhatsappIcon } from 'next-share'
import { PinterestShareButton, PinterestIcon } from 'next-share'
import { Button, CardActionArea } from '@mui/material'


const ArticleItem = ({ article, index }) => {
  const share_url = `https://www.moopio.com/${article.slug}.html`
  return (
    <Card style={{ backgroundColor: 'lightgrey' }}>
      <CardActionArea href={`/${article.slug}`}>
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
          layout='responsive'
          priority={index < 10 ? 'true' : 'disabled'}
        />

        <CardContent>
          <Typography gutterBottom variant="h6" component="div" color="text.primary">
            {article.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {truncate(article.description, 200)}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <FacebookShareButton
          url={share_url}
          quote={article.title}
        >
          <FacebookIcon size={32} round />
        </FacebookShareButton>

        <TwitterShareButton
          url={share_url}
          title={article.title}
        >
          <TwitterIcon size={32} round />
        </TwitterShareButton>

        <WhatsappShareButton
          url={share_url}
          title={article.title}
          separator=":: "
        >
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>

        <PinterestShareButton
          url={share_url}
          description={article.description}
          media={article.image}
        >
          <PinterestIcon size={32} round />
        </PinterestShareButton>
      </CardActions>
    </Card>
  );
}


export default ArticleItem;

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
