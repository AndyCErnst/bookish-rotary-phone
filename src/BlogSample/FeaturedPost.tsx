import Typography from '@mui/material/Typography';
import { Grid, Card, CardActionArea, CardContent, CardMedia } from 'MUI'

interface FeaturedPostProps {
  post: {
    title: string;
  };
}

export default function FeaturedPost(props: FeaturedPostProps) {
  const { post } = props;

  return (
    <Grid xs={12} md={6}>
      <CardActionArea component="a" href="#">
        <Card sx={{ display: 'flex' }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              {post.title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {'date'}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {'description'}
            </Typography>
            <Typography variant="subtitle1" color="primary">
              Continue reading...
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
            image={'image'}
            alt={'imageLabel'}
          />
        </Card>
      </CardActionArea>
    </Grid>
  );
}
