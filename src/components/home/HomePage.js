import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import Categories from "../category/Categories";
import Products from "../blog/Products";
import {Link} from "react-router-dom";

function HomePage() {

  return (
    <Container maxWidth="lg" >
      <Grid container spacing={2} padding={3} >
        <Grid item xs={12} md={3} mt={4} pr={2}>
        {/* <Link 
            to={`/categories/${category.slug}`} style={{textDecoration:"none" , color:"#000000"}}> */}

          <Typography component="h3" variant="h5" mb={3} fontWeight={700}>
            دسته بندی ها
          </Typography>
            
          
          < Categories />
        </Grid>
        <Grid item xs={12} md={9} mt={4}>
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

export default HomePage;
