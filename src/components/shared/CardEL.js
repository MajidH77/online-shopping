import React from "react";
import {  Card, CardActions, CardContent,  CardMedia, Typography , Divider, Button , Grid} from "@mui/material";
import { Link } from "react-router-dom";
// import { shorten } from "../../helper/functions";
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem, increase, decrease} from "../../redux/cart/cartAction";
import { quantityCount , isInCart, discountCalculator } from "../../helper/functions";
import DeleteIcon from '@mui/icons-material/Delete';
import { toast} from "react-toastify";


function CardEL( product) {
  const {name , slug , cover , price, discount} = product;


  const state = useSelector(store => store.cartState)
  const dispatch = useDispatch();



  return (
   <Card sx={{ boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px", borderRadius: 4}}>
   <Link
          to={`/products/${slug}`}
          style={{ textDecoration: "none", width: "100%" }}
        >
    <CardMedia  style={{ maxHeight:"222px", objectFit:"fill"}}
     component="img"

            //  height="250px"
             image={cover.url}
             alt={slug}
      />
    <CardContent  style={{ padding: "10px 10px 2px 10px"}}>
      
        <Typography style={{minHeight:"48px"}}
              component="p"
              variant="h9"
              color="text.primary"
              fontWeight={500}
              >
              {name}
            </Typography>
      
    </CardContent>
    </Link>
    <Divider variant="middle" sx={{ marginX: "7px" }} />
    {(!!discount) ? 
      <div >
      <Grid container  justifyContent="end" height="20px" pt="2px" pr="22px" >
        <Grid >
          <Typography
            component="p"
            fontSize="15px"
            color="#747272"
            textDecoration="line-through"
            fontWeight={400}
            mr="5px"
            style={{ textDecoration:"line-through"}}
            >
            { new Intl.NumberFormat('fa-US', {style : "decimal" }).format(price)}
          </Typography>
        </Grid>
      <div style={{background:"#cc2d42" ,color:"#ffffff", width:"26px" ,height:"17px",fontSize:"12px" , borderRadius:"50%", textAlign:"center" ,marginTop:"3px" }}>
      {new Intl.NumberFormat('fa-US', {style : "decimal" }).format(discount)}<span style={{fontSize:"10px"}}>%</span><span style={{fontSize:"10px"}}>-</span>
      </div>
    </Grid>
    <Typography
    component="p"
    fontSize="16px"
    color="text.primary"
    fontWeight={500}
    align="center" 
    py="4px"
    >
    { new Intl.NumberFormat('fa-US', {style : "decimal" }).format(discountCalculator(price, discount))}  تومان
    </Typography>
    </div>
    :

    <Typography
          component="p"
          fontSize="16px"
          color="text.primary"
          fontWeight={500}
          align="center"
          mt="12px"
          mb="8px"
         
        >
          { new Intl.NumberFormat('fa-US', {style : "decimal" }).format(price)}  تومان
        </Typography>
}

 {/* <CardActions > */}
<Grid container justifyContent="space-evenly" style={{ padding:"0px 8px 8px 8px"}}>


        {   isInCart(state, slug) ?
            <Button 
            variant="outlined"
            size="small"
            sx={{ width: "40%", borderRadius: 3 }} 
            onClick={() => {dispatch(increase(product))
              console.log(state)
            }}>+</Button> :
            <Button
              variant="outlined"
              size="medium"
              sx={{ width: "100%", borderRadius: 3, lineHeight:"1.7" }}
              onClick={() => {dispatch(addItem(product));
                toast.success(" محصول به سبد خرید اضافه شد.",{position: "top-center"});
                          }}> افزودن به سبد 
             </Button>  
     
         }
          {quantityCount(state, slug) > 0 && 
          <Typography color="#0066ff" width="20px" fontSize="18px" textAlign="center" lineHeight="32px" component="p" variant="p" fontWeight={400}
          >{quantityCount(state, slug)}</Typography>}
                    {quantityCount(state, slug) === 1 &&
                    <Button
                      variant="outlined"
                        size="small"
                        sx={{ width: "40%", borderRadius: 3 }}
                         onClick={() => dispatch(removeItem(product))}> <DeleteIcon fontSize="small" /> 
                    </Button>}
                    {quantityCount(state, slug) > 1 && 
                    <Button 
                    variant="outlined"
                    size="small"
                    fontWeight={500}
                    sx={{ width: "40%", borderRadius: 3 }}
                     onClick={() => dispatch(decrease(product))}>-
                     </Button>} 
                     </Grid>
    {/* </CardActions> */}
   </Card>
//    
  );
}

export default CardEL;
