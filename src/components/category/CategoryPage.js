import React from "react";
import { useQuery } from "@apollo/client";
import { useParams, useNavigate } from "react-router-dom";
import sanitizeHtml from "sanitize-html";
import { GET_CATEGORY_INFO } from "../../graphql/queries";
import { Avatar, Container, Grid, Typography } from "@mui/material";
import CardEL from "../shared/CardEL";
import Loader from "../shared/Loader";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";



function CategoryPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { loading, data, errors } = useQuery(GET_CATEGORY_INFO, {
    variables: { slug },
  });
console.log(data);
  
  if (loading) return <Loader /> ;
  if (errors) return <h3>Error...</h3>;

  const {
    category: { id, name, photo , products },
  } = data;

  return (
 
    <Container maxWidth="lg">

      <Grid item display="flex" flexDirection="column" alignItems="end" mt={5} ml={15}>
         <ArrowBackRoundedIcon fontSize="large" cursor="pointer" onClick={() => navigate(-1)}  />
      </Grid>
      <Grid container mt={0} >

        <Grid item xs={12} md={10} mt={0}>
          <Grid item xs={12} padding={2} style={{display:"flex" ,alignItems:"center" , textDecoration:"none" }} >
          <Typography component="h3" variant="h7" fontWeight={500}>
            دسته بندی : 
          </Typography>
              <Avatar src={photo.url} sx={{ marginLeft: 1 , marginRight:1}} />
              <Typography component="p" variant="p"  color="text.secondary">
                {name}
              </Typography>
          </Grid>
          <Grid container spacing={2}>
      {data.category.products.map((product) => (
        <Grid item xs={6} sm={4} md={3} key={product.id}>
          <CardEL {...product} />
        </Grid>
      ))}
    </Grid>

        </Grid>
      </Grid>
    </Container>
   
  );
}

export default CategoryPage;
