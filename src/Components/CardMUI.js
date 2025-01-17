import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function CardMUI () {
  return (
    <Card sx={{ maxWidth: 345, gap: 2 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="100"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="image here"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            title
          </Typography>
          <Typography variant="body2" color="text.secondary">
            example text
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};