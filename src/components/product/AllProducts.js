import React from "react";

import { Container, Grid, Typography } from "@mui/material";
import Categories from "../category/Categories";
import Products from "./Products";


function AllProducts() {

    
  
  return (
    <Container maxWidth="lg" >
      <Grid container spacing={2} padding={1} >
        
        <Grid item xs={12} md={12} mt={4}>
          {" "}
          {/* <Link 
            to={`/blogs`} style={{textDecoration:"none" , color:"#000000"}}> */}

          <Typography component="h3" variant="h5" mb={3} fontWeight={700}>
            محصولات
          </Typography>
            {/* </Link> */}
          <Products />
        </Grid>
      </Grid>
    </Container>
  );
}

export default AllProducts;
