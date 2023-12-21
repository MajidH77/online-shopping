import React from "react";

import { useQuery } from "@apollo/client";
import { Grid, Typography, Container } from "@mui/material";
import { GET_BLOGS_INFO } from "../../graphql/queries";
import CardEL from "../shared/CardEL";
import Loader from "../shared/Loader";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import { useNavigate } from "react-router-dom";



function AllBlogs() {

    const navigate = useNavigate();
  const { loading, data, errors } = useQuery(GET_BLOGS_INFO);
  if (loading) return <Loader/>;
  if (errors) return <h4>Error...</h4>;
  // console.log(data);
  
  
  return (
    <Container maxWidth="lg" display="flex" justifyContent="space-between">
     

        <Grid container  spacing={2} >
            <Grid item xs={12} mt={6} display="flex" justifyContent="space-between">
            <Typography style={{textDecoration:"none" , color:"#3c76f3"}} component="h3" variant="h5" fontWeight={700} mt={2} mb={2} fontSize="30px" >
                تمامی مقالات 
            </Typography>
            <ArrowBackRoundedIcon fontSize="large" cursor="pointer" onClick={() => navigate(-1)} />
            </Grid>

            <Grid container spacing={2}>
            {data.posts.map((post) => (
                <Grid item xs={12} sm={6} md={4} key={post.id}>
                <CardEL {...post} />
                </Grid>
            ))}
            </Grid>

        </Grid>
    </Container>
  );
}

export default AllBlogs;
