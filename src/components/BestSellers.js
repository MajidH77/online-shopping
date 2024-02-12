import React,{useEffect , useState} from "react";
import { Link } from "react-router-dom";
import { Grid , Card, Typography} from "@mui/material";
import { Swiper, SwiperSlide } from 'swiper/react';
import { GET_PRODUCTS_INFO } from "../graphql/queries";
import { useQuery } from "@apollo/client";
import Loader from "./shared/Loader";
import bestSellersIcon from "../assets/icons/best_sellers1.svg";
import { discountCalculator } from "../helper/functions";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Pagination, Navigation} from 'swiper/modules';


function BestSellers() {
    const [swiperRef, setSwiperRef] = useState(null);
    const { loading, data, errors } =  useQuery(GET_PRODUCTS_INFO);
    if (loading) return <Loader/>;
    if (errors) return <h4>Error...</h4>;
    
    const mostSellers = data.products.filter((product) => product.sales > 1); 
    

    return ( 
<>
 <Grid container  justifyContent="end"   alignItems="center"  style={{background:"linear-gradient(278deg, rgba(174,62,189,1) 15%, rgba(209,170,214,1) 100%)",borderRadius:"5px"}}>

     <Grid item xs={12} md={12} py={2} px="10px">
     <div style={{  borderRadius: 4 , background:"linear-gradient(278deg, rgba(174,62,189,1) 15%, rgba(209,170,214,1) 100%)"}}>
        <Swiper
        onSwiper={setSwiperRef}
        // slidesPerView={6}
        spaceBetween={3}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        breakpoints={{
            // when window width is >= 320px
            320: {
              slidesPerView: 3,
              spaceBetween: 5,
            },
            480: {
                slidesPerView: 4,
                spaceBetween: 5,
              },
            720: {
                slidesPerView: 5,
                spaceBetween: 5,
              },
              1024: {
                slidesPerView: 6,
                spaceBetween: 5,
              },}}
            
        style={{
            "--swiper-navigation-color": "#a1a1a1",
            "--swiper-navigation-size": "35px",

              
           
          }}>
         <SwiperSlide  style={{ background:"#ae3ebd" , width:"fit-content ", height:"auto" ,}}>
            
        <Grid item  justifyContent="center" alignItems="center">
            <Typography 
            component="h2"
            variant="h6"
            color="#ffffff"
            fontWeight={500}
            align="center"
            height="90%"
               >
                محصولات 
                
            </Typography>
            <Typography
            component="h2"
            variant="h6"
            color="#ffffff"
            fontWeight={500}
            align="center"
            height="90%"
            mb={1}
               >
             پرفروش :
                
            </Typography>
            <img src={bestSellersIcon} style={{width:"80px"}}/>
        </Grid>
            </SwiperSlide>
         {  mostSellers.map(product => {
                 return <SwiperSlide key={product.slug} style={{borderRadius:"5px"}}>
                    <Link
                    to={`/products/${product.slug}`}
                    style={{ textDecoration: "none", width: "100%" }}>
                    <Grid container justifyContent="center">
                        <img src={product.cover.url}  style={{  objectFit:"fill" , width:"100%", height:"100%" ,maxWidth:"160px" , maxHeight:"160px",marginTop:"10px"}}/>
                        <Typography
                        component="p"
                        fontSize={16}
                        color="text.primary"
                        fontWeight={500}
                        align="center"
                        mt="8px"
                        mb="8px"
                        >
                        { new Intl.NumberFormat('fa-US', {style : "decimal" }).format(discountCalculator(product.price, product.discount))}  تومان
                        </Typography>
                    </Grid>
                    </Link>
                        </SwiperSlide>
                    } )
                }
      </Swiper>
      </div>

        </Grid>
        
   
    </Grid>
</>
    )


}

export default BestSellers