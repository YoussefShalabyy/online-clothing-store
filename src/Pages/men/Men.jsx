import './Men.css';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import  { useState } from 'react';
import Cart from '../cart/Cart';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';


function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const defaultTheme = createTheme();

export default function Album() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
  
    setCartItems([...cartItems, item]);
  };
  const removeFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
  };
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <main style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>

        <Container sx={{ py: 8 }} maxWidth="md">

          <Grid container spacing={4}>

            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column'}}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '140.0%',
                    }}
                    image="https://static.zara.net/photos///2023/I/0/2/p/0761/350/709/2/w/1920/0761350709_6_1_1.jpg?ts=1688110917938"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                    HOODIE
                    </Typography>
                    50$
                  </CardContent>

                  <CardActions >
                    {/* <Button size="small">View</Button> */}
                    <Button size="small" onClick={() => addToCart(card)}
                    >Add to cart </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>

<Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
         
        </Typography>
        <Copyright />
      </Box>
      </main>
    
      {/* Footer */}
      {/*  */}
      {/* End footer */}
      
    </ThemeProvider>
  );
}