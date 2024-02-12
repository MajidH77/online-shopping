import React from 'react';
import { useDispatch } from 'react-redux';
import { Card, Typography , Button , Grid} from "@mui/material";
import { Link } from 'react-router-dom';
import { styled } from '@mui/styles';
// Functions
import { shorten , discountCalculator} from '../../helper/functions';

// Icons
import DeleteIcon from '@mui/icons-material/Delete';


// Actions
import { removeItem, decrease, increase } from '../../redux/cart/cartAction';


const ShopCart = ({data}) => {

    const dispatch = useDispatch();
    const { name, price, quantity, slug, cover, discount} = data;

    const Img = styled('img')({
        display: 'inline',
      });

    return (
        <>

        <Card  sx={{width:"100%" , boxShadow: "rgba(0,0,0,0.2) 0px 4px 12px", borderRadius: 4 , margin:"10px" , direction:"rtl"}}>
        <Grid  container justifyContent="space-around"  alignItems="center"  >
        <Grid item >
            <Grid container>
        <Link to={`/products/${slug}`} style={{ textDecoration: "none", width: "100%" }}>
        <Img alt={slug} src={cover.url} width="100px"/>
        </Link>

            </Grid>

        </Grid>
      <Grid item >
            <Typography 
               
                component="h3"
                variant="h8"
                color="text.primary"
                fontWeight={500}
                minWidth="270px"
                align="center"
                style={{direction:"rtl"}}
                >
                {shorten(name)}
            </Typography>
        </Grid>
        
  <Grid item  pb={1}>

  {
  (!!discount) ?
  <div>
<Grid container height="20px">
     <div style={{background:"#dd3148" ,color:"#ffffff", width:"25px",height:"18px" , borderRadius:"42%"  ,textAlign:"center",fontSize:"14px", }}>
     <span style={{fontSize:"10px"}}>-</span>{new Intl.NumberFormat('fa-US', {style : "decimal" }).format(discount)}<span style={{fontSize:"10px", paddingLeft:"1px"}}>%</span>
     </div>
     <div>
         <Typography
                 component="p"
                 variant="h7"
                 color="#747272"
                 fontWeight={400}
                 mr="5px"
                 align="center" 
                 style={{direction:"rtl" , textDecoration:"line-through", }}
                 >
             { new Intl.NumberFormat('fa-US', {style : "decimal" }).format(price)} 
         </Typography>
     </div>       
 </Grid>

  <Grid>

     <Typography
         component="h3"
         variant="h9"
         color="text.primary"
         fontWeight={500} 
         style={{direction:"rtl"}}
         >
         { new Intl.NumberFormat('fa-US', {style : "decimal" }).format(discountCalculator(price , discount))}  تومان
     </Typography>

</Grid>
</div>
  :
  <Typography
         component="p"
         variant="h9"
         color="text.primary"
         fontWeight={500} 
         style={{direction:"rtl"}}
         >
         { new Intl.NumberFormat('fa-US', {style : "decimal" }).format(price)}  تومان
     </Typography>
}
        
        </Grid>
       

        <Grid item >
            <Grid container  justifyContent="space-evenly" alignItems="center" >


                  {quantity > 1 ? 
                  <Button 
                  variant="outlined"
                  size="small"
                  fontWeight={500}
                  sx={{  borderRadius: 3 }}
                   onClick={() => dispatch(decrease(data))}>-
                   </Button>
                       :
                    <Button 
                      variant="outlined"
                        size="small"
                        fontWeight={500}
                        sx={{  borderRadius: 3 , height:"30.75px" }}
                         onClick={() => dispatch(removeItem(data))}> <DeleteIcon fontSize="small" /> 
                    </Button>
                    
                } 
                 <Typography 
            component="h3"
                variant="h9"
                color="text.primary"
                fontWeight={500}
                padding="10px"
                minWidth="10px"
               
                >
                {new Intl.NumberFormat('fa-US', {style : "decimal" }).format(quantity)}
            </Typography>
                     <Button 
            variant="outlined"
            size="small"
            sx={{ borderRadius: 3 }} 
            onClick={() => {dispatch(increase(data))
            //   console.log(state)
        }}>+</Button> 
                   
                   
                     </Grid>
                     </Grid>
</Grid>
   </Card>
   </>);
};

export default ShopCart;