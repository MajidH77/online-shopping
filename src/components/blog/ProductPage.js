import React from "react";
import { useQuery } from "@apollo/client";
import { useNavigate,  useParams } from "react-router-dom";
import { GET_PRODUCT_INFO } from "../../graphql/queries";
import Loader from "../shared/Loader";
import { Container } from "@mui/system";
import { Link } from "react-router-dom";
import { Avatar, Box, Grid, Typography } from "@mui/material";
import sanitizeHtml from "sanitize-html";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import CommentForm from "../comment/CommentProduct";
import Comments from "../comment/Comments";
import Rating from '@mui/material/Rating';


function ProductPage() {
  const { slug } = useParams();
  const navigate = useNavigate();


  const { loading, data, errors } = useQuery(GET_PRODUCT_INFO, {
    variables: { slug },
  });

  console.log(data);
  if (loading) return <Loader />;
  if (errors) return <h3>Error...</h3>;


  return (
 
    <Container maxWidth="lg" >

      <Grid container spacing={3} padding={0}>
        <Grid item xs={12} md={5} mt={0} pr={2}>
        <img
            src={data.product.cover.url}
            alt={data.product.slug}
            width="100%"
         
            
            style={{ borderRadius: 15 }}
          
          />
        </Grid >

        <Grid item xs={12} md={7} mt={4}>
                <Grid item xs={12} padding={2} style={{display:"flex" ,alignItems:"center" , textDecoration:"none" }} >
                <Typography component="h3" variant="h7" fontWeight={500}>
                    دسته بندی :  
                </Typography>
                    <Link 
                        to={`/categories/${data.product.category.slug}`} style={{display:"flex" ,alignItems:"center" , textDecoration:"none" }}>
                        <Typography component="h3" variant="h7" fontWeight={300} color="#008cff" padding={1} >
                            {data.product.category.name}
                        </Typography>
                        </Link>
                            </Grid>
                        <Rating flip= "false"textAlign= "right" name="size-large" defaultValue={3} readOnly={true}  />
                        
                        <Grid item xs={12} mt={0}>
                        <Typography component="p" variant="h5"  color="text.primary" padding={1} fontWeight={500}>
                            {data.product.name}
                        </Typography>
                        <Grid mt={4}>
                            <Typography color="#00a2ff" component="h3" variant="h7" fontWeight={500} >
                             مشخصات :  
                            </Typography>
                            <Grid item xs={12} mt={1}>
                                {/* <Typography component="h3"  fontWeight={500} > */}
                            <div

                                dangerouslySetInnerHTML={{
                                    __html: sanitizeHtml(data.product.details.html),
                                }}
                                ></div>
                                {/* </Typography> */}
                            </Grid>
                        </Grid>

                      
                </Grid>
        </Grid>
                            <Grid item xs={12} lg={6}>
                                <CommentForm slug={slug} />
                            </Grid>
                            <Grid item xs={12}>
                                <Comments slug={slug} />
                            </Grid>

      </Grid>

    </Container>
  );
}

export default ProductPage;
