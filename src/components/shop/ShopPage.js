import React , {useState} from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { styled } from '@mui/styles';
import empty from "../../assets/icons/empty-cart.svg"
import tick from "../../assets/icons/icons8-tick.gif"
import { Grid , Typography , Container , Card , Button, Box , Modal} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
// Components
import ShopCart from './ShopCard';
// Ations
import {clear , checkout} from "../../redux/cart/cartAction"


const ShopPage = () => {
  const [open, setOpen] =useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
    

    const dispatch = useDispatch();
    const state = useSelector(store => store.cartState)
    const Img = styled('img')({
      display: 'block',
      marginLeft: "auto",
      marginRight: "auto",
      
    });

return (
        <div >
          
           <div>
   <Grid>

      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={{
  position: 'absolute',
  top: '40%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}}>
          <Typography paddingTop={5}  align="center" id="keep-mounted-modal-title" variant="h4" component="h5">
           سفارش شما ثبت شد.
          </Typography>
          <Img  src={tick}  alt="tick" width="50px"  />
          <Typography id="keep-mounted-modal-description"  align="center"  variant="h6" component="h5"sx={{ mt: 2 }}>
           شماره پیگیری : { Math.ceil(Math.random(1) * 100000000)}
          </Typography>
          <Link to="/" style={{textDecoration:"none"}}>
          <div>
          <Button size="medium" left="50%" >بازگشت به فروشگاه</Button>
          </div>
          </Link>
        </Box>
      </Modal>
  </Grid>
    </div>
           
            <Container maxWidth="lg"  >
    
      <Grid container spacing={1} padding={1} >
     <div style={{width:"100%", height:"100%", marginTop:"8px",}}>
      
   
   </div>
   
                <Grid item xs={12} md={4} mt={1} paddingRight={2}>

                {/* <Link 
                    to={`/categories/${category.slug}`} style={{textDecoration:"none" , color:"#000000"}}> */}
                  <Card sx={{width:"100%" , boxShadow: "rgba(0,0,0,0.2) 0px 4px 12px", borderRadius: 4 , margin:"10px"}}>
                  {
                    state.itemsCounter > 0 && <Grid padding={2}  >
                     <Typography
                     component="h4"
                     variant="h9"
                     color="text.primary"
                     fontWeight={500} 
                     style={{direction:"rtl"}}>سبد خرید شما  </Typography>
                      <Grid container mt={1}>

                  <div style={{background:"#49515f" ,color:"#ffffff", width:"18px",height:"18px" , borderRadius:"42%"  ,textAlign:"center",fontSize:"14px",marginLeft:"5px" }}>
                      {new Intl.NumberFormat('fa-US', {style : "decimal" }).format(state.itemsCounter)}
                   </div> 
                   <Typography 
                    component="h4"
                    variant="h9"
                    color="text.primary"
                    fontWeight={500} 
                    style={{direction:"rtl"}}>
                      کالا 
                   </Typography>
                      </Grid>
                   
                  <Grid container justifyContent="space-between" py={2}>
                    <Grid>
                    <Typography
                      component="h4"
                      variant="h9"
                      fontWeight={500} 
                      style={{direction:"rtl" , color:"#ef4056"}}
                      > سود شما از خرید (تخفیف) : </Typography>
                    </Grid>
                    <Grid>
                    <Typography
                      component="h4"
                      variant="h9"
                      color="text.primary"
                      fontWeight={500} 
                      style={{direction:"rtl", color:"#ef4056"}}
                      >
                    {new Intl.NumberFormat('fa-US', {style : "decimal" }).format(state.totalDiscount)} <span>تومان </span>
                    </Typography>
                    </Grid>

                  </Grid>
                  <Grid container justifyContent="space-between" py={2}>
                    <Grid>
                    <Typography
                      component="h4"
                      variant="h9"
                      color="text.primary"
                      fontWeight={500} 
                      style={{direction:"rtl"}}
                      >
                    جمع سبد خرید :
                    </Typography>
                    </Grid>
                    <Grid>
                    <Typography
                      component="h4"
                      variant="h9"
                      color="text.primary"
                      fontWeight={500} 
                      style={{direction:"rtl"}}
                      >
                    {new Intl.NumberFormat('fa-US', {style : "decimal" }).format(state.total)} <span>تومان </span>
                   </Typography>
                    </Grid>

                  </Grid>
                  
                        <Grid container py={1} justifyContent="space-around"  >
                          
                           
                            <Button 
                            size="medium"
                            variant="contained" color="success"
                            sx={{  borderRadius: 3, lineHeight: "2"}}  
                            endIcon={<ShoppingCartCheckoutIcon />}
                            onClick={() => { dispatch(checkout()) 
                              handleOpen()
                              

                            }}>
                              پرداخت و تکمیل سفارش
                            </Button>
                         
                          
                            <Button  
                            size="medium"
                            variant="contained"
                             color="error"
                             endIcon={<DeleteIcon />}
                            sx={{  borderRadius: 3}}
                            onClick={() =>  dispatch(clear())
                            }>  خالی کردن سبد
                            </Button>
                        </Grid>
                    </Grid>
            }

{
                state.itemsCounter === 0 && !state.checkout && <Grid padding={2} >
                        
                        <Button style={{textDecoration:"none" , lineHeight: "2.2"}} href="/">برگشت به فروشگاه</Button>
                    </Grid>
            }

            {
                state.checkout && <div >
                        <h3>Checked out successfully</h3>
                        <Link to="/">Buy More</Link>
                    </div>
            }
               
                  </Card>
                </Grid>
               
        <Grid item xs={12} md={8} mt={1}>
          <Grid >

          
          {(state.selectedItems.length < 1) ? 
           <Card  sx={{width:"100%" , boxShadow: "rgba(0,0,0,0.2) 0px 4px 12px", borderRadius: 4 , margin:"10px"}}>
          
            <Img  src={empty}  alt="empty" width="200px"  />
            <Typography
          component="h3"
          variant="h9"
          color="text.primary"
          fontWeight={500}
          align="center"
          padding="30px"
          >
         سبد خرید شما خالی است!
        </Typography>
          
          </Card>
          : 
          state.selectedItems.map(item => <ShopCart key={item.slug} data={item} />)}
         
          </Grid>
        </Grid>
      </Grid>
    </Container>
           
        </div>
    );
};

export default ShopPage;