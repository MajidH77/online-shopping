import React from "react";
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Typography , Divider, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { shorten } from "../../helper";



function CardEL({cover , name, price , slug}) {

  return (
   <Card sx={{ boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px", borderRadius: 4}}>
   <Link
          to={`/products/${slug}`}
          style={{ textDecoration: "none", width: "100%" }}
        >
    <CardMedia  style={{ maxHeight:"252px", objectFit:"fill"}}
     component="img"

            //  height="250px"
             image={cover.url}
             alt={slug}
      />
    <CardContent style={{ padding: "10px"}}>
      
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
    <Divider variant="middle" sx={{ margin: "7px" }} />
    <Typography
          component="p"
          variant="h9"
          color="text.primary"
          fontWeight={500}
          align="center"
          
        >
          

          { new Intl.NumberFormat('en-US', {style : "decimal" }).format(price)}  تومان
        </Typography>
    <CardActions>

    
          <Button
            variant="outlined"
            size="small"
            sx={{ width: "100%", borderRadius: 3 }}
          >
             افزودن به سبد خرید
          </Button>
       

    </CardActions>

   </Card>
//    
  );
}

export default CardEL;
