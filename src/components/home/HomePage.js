import React,{useEffect , useState} from "react";
import { Container,Grid, Typography } from "@mui/material";
import Categories from "../category/Categories";
import BestSellers from "../../components/BestSellers";
import SpecialDiscount from "../../components/SpecialDiscount";
import Products from "../product/Products";
// import {Link} from "react-router-dom";
import { useSelector } from "react-redux";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Pagination, Navigation , Autoplay} from 'swiper/modules';



function HomePage() {

  // const productsState = useSelector((store) => store.productsState )

  
  return (
    <>
    <div style={{width:"100%", height:"100%",}}>
      <Grid  item xs={12} style={{width:"100%"}}   >
         <Swiper  
            style={{
                      "--swiper-navigation-color": "#2e2e2e",
                      "--swiper-navigation-size": "25px",
                      "--swiper-pagination-color": "#2e2e2e",
                      "--swiper-pagination-size": "60px",
                      "--swiper-pagination-bullet-horizontal-gap": "8px",
                      // "--swiper-pagination-bullet-background": "url(./line.svg)",
                      
                    }}
                  slidesPerView={1}
                  spaceBetween={10}
                  loop={true}
                  pagination={{
                    clickable: true,  
                  }}
                  autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                  }}
                  navigation={true}
                  modules={[Autoplay,Pagination, Navigation]}
                  className="mySwiper"
                >
                  {/* <SwiperSlide><img src="https://dkstatics-public.digikala.com/digikala-adservice-banners/3fc345de534d82494a65ff068f730d2fea98732d_1707557025.jpg?x-oss-process=image/quality,q_95/format,webp" alt="s1"/></SwiperSlide> */}
                  <SwiperSlide><img src="https://dkstatics-public.digikala.com/digikala-adservice-banners/1772946ee187760c44ae02400883e4ef73de7a58_1703928825.jpg?x-oss-process=image/quality,q_95/format,webp" alt="s1"/></SwiperSlide>
                  <SwiperSlide><img src="https://dkstatics-public.digikala.com/digikala-adservice-banners/bf95f7021be3de8865b649b3f7141626140de1a6_1704551586.gif?x-oss-process=image?x-oss-process=image/format,webp" alt="s2"/></SwiperSlide>
                  <SwiperSlide><img src="https://dkstatics-public.digikala.com/digikala-adservice-banners/84c468be610718ad77212f2aa383f96eb83a2861_1704272302.jpg?x-oss-process=image/quality,q_95/format,webp" alt="s3"/></SwiperSlide>
                  <SwiperSlide><img src={"https://dkstatics-public.digikala.com/digikala-adservice-banners/b4a8ae656b7d886032838b8efa753c8789f3ff7d_1703937789.jpg?x-oss-process=image/quality,q_95/format,webp"} alt="s4"/></SwiperSlide>
                  <SwiperSlide><img src="https://dkstatics-public.digikala.com/digikala-adservice-banners/c8f4e098d31f979b874477333e212b8e3842eb53_1707557025.jpg?x-oss-process=image/quality,q_95/format,webp" alt="s5"/></SwiperSlide>
                  <SwiperSlide><img src="https://dkstatics-public.digikala.com/digikala-adservice-banners/e10289fba66071d82f4de4a1a6ccac086adc0648_1704290761.jpg?x-oss-process=image/quality,q_95/format,webp" alt="s6"/></SwiperSlide>
                  <SwiperSlide><img src="https://dkstatics-public.digikala.com/digikala-adservice-banners/db2c0b4c50ff9d788b338fb4657893bd1a786cd0_1707300295.jpg?x-oss-process=image/quality,q_95/format,webp" alt="s7"/></SwiperSlide>
              
       
      
      </Swiper>
     </Grid>
   
   </div>
    <Container maxWidth="lg"  >
      <div style={{marginTop:"10px"}}>
    <BestSellers  />
      </div>
      <div style={{marginTop:"10px"}}>
    <SpecialDiscount  />
      </div>
      <Grid container spacing={2} padding={1} >
     
                <Grid item xs={12} md={3} mt={1} pr={2} paddingRight={2}>
                {/* <Link 
                    to={`/categories/${category.slug}`} style={{textDecoration:"none" , color:"#000000"}}> */}

                  <Typography component="h3" variant="h5" mb={3} fontWeight={700}>
                    دسته بندی ها
                  </Typography>
                    
                  
                  < Categories />
                </Grid>
               
        <Grid item xs={12} md={8} mt={4}>
          
          {" "}
          {/* <Link 
            
          <Typography component="h3" variant="h5" mb={3} fontWeight={700}>
          محصولات
          </Typography>
            {/* </Link> */}
            {/* { (!!search) ? 
            <div></div>
            :

            <Products />

            } */}
          <Products />
        </Grid>
      </Grid>
    </Container>
</>
  );
}

export default HomePage;
