import React from "react";

import { useQuery } from "@apollo/client";
import { GET_CATEGORIES_INFO } from "../../graphql/queries";
import { Avatar, Divider, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Loader from "../shared/Loader";

function Categories() {
  const { loading, data, errors } = useQuery(GET_CATEGORIES_INFO);
// console.log(data);
  if (loading) return <Loader/>;
  if (errors) return <h3>Error...</h3>;
  
  const { categories } = data;
  return (
    
    <Grid
    container
    sx={{ boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px", borderRadius: 4 }}>
        
      {categories.map((category , index) => (
        <React.Fragment key={category.id}>
       
          <Grid item xs={12} padding={2} >
        
            <Link 
            to={`/categories/${category.slug}`} style={{display:"flex" ,alignItems:"center" , textDecoration:"none" }}>
              <Avatar src={category.photo.url} sx={{ marginLeft: 2 , marginRight:1}} />
              <Typography component="p" variant="p"  color="text.secondary">
                {category.name}
              </Typography>
            </Link>
          </Grid>
          {index !== category.length - 1 && (
            <Grid item xs={12}>
              <Divider variant="middle" />
            </Grid>
          )}
            
          
           </React.Fragment>
          ))}
          
    </Grid>
    
  );
}

export default Categories;
