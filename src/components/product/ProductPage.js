import React from "react";
import { useQuery } from "@apollo/client";
import { useNavigate,  useParams } from "react-router-dom";
import { GET_PRODUCT_INFO } from "../../graphql/queries";
import Loader from "../shared/Loader";
import { Container } from "@mui/system";
import { Link } from "react-router-dom";
import {  Grid, Typography } from "@mui/material";
import sanitizeHtml from "sanitize-html";
import CommentForm from "../comment/CommentProduct";
import Comments from "../comment/Comments";
import Rating from '@mui/material/Rating';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../../components/home/styles.css';
import { Pagination, Navigation} from 'swiper/modules';


function ProductPage() {
  const { slug } = useParams();
  const navigate = useNavigate();


  const { loading, data, errors } = useQuery(GET_PRODUCT_INFO, {
    variables: { slug },
  });

  console.log(data);
  if (loading) return <Loader />;
  if (errors) return <h3>Error...</h3>;
const specifi = data.product.specifications.split(/\r?\n/);


return (
 
    <Container  maxWidth="lg" >

      <Grid container spacing={3} padding={0}>
        <Grid item xs={12} md={4} mt={0} pr={0} style={{maxWidth:"450px" , maxHeight:"700px"}}>
    <div>
        <Swiper style={{}}
                //   autoHeight={true}
                slidesPerView={1}
                  spaceBetween={10}
                  loop={true}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  modules={[ Pagination, Navigation]}
                  className="mySwiper"
                >
                    {
                        data.product.covers.map(cover => {
                   return <SwiperSlide><img src={cover.url} alt={data.product.slug}/></SwiperSlide> })
                }
      </Swiper>
    </div>   
    </Grid >
        {/* <img
            src={data.product.cover.url}
            // src={data.product.covers[2].url}
            alt={data.product.slug}
            width="100%"

            
            style={{ borderRadius: 15 , cursor:"pointer"}}
          
          /> */}

        <Grid item xs={12} md={6} >
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
                        <Rating flip= "false" name="size-large" defaultValue={3} readOnly={true}  />
                        
                        <Grid item xs={12} mt={0}>
                        <Typography component="p" variant="h5"  color="text.primary" padding={1} fontWeight={500}>
                            {data.product.name}
                        </Typography>
                        <Grid mt={4}>
                            <Typography color="#00a2ff" component="h3" variant="h7" fontWeight={500} >
                             ویژگی ها :  
                            </Typography>
                            <Grid item xs={12} mt={1}>
                                {/* <Typography component="h3"  fontWeight={500} > */}
                                <Typography color="#142f3f" component="h4" variant="h7" fontWeight={500} >
                           {specifi.map(item => <ul key={item}>< FiberManualRecordIcon sx={{ fontSize: 10, color:"gray"}}/> { item }</ul>)}
                            </Typography>
                           
                                {/* </Typography> */}
                            </Grid>
                        </Grid>

                        <Grid mt={4}>
                            <Typography color="#00a2ff" component="h3" variant="h7" fontWeight={500} >
                             مشخصات کلی :  
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
