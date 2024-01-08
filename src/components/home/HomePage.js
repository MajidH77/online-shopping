import React from "react";
import { Container,Grid, Typography } from "@mui/material";
import Categories from "../category/Categories";
import Products from "../product/Products";
// import {Link} from "react-router-dom";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Pagination, Navigation , Autoplay} from 'swiper/modules';


function HomePage() {

  return (
    <Container maxWidth="lg"  >
    
      <Grid container spacing={2} padding={1} >
     <div style={{width:"100%", height:"100%", marginTop:"8px",}}>
      <Grid  item xs={12}   >
         <Swiper 

// dir="rtl"
                  slidesPerView={1}
                  spaceBetween={10}
                  loop={true}
                  pagination={{
                    clickable: true,
                    
                  }}
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                  }}
                  navigation={true}
                  modules={[Autoplay,Pagination, Navigation]}
                  className="mySwiper"
                >
                  <SwiperSlide><img src="https://dkstatics-public.digikala.com/digikala-adservice-banners/1772946ee187760c44ae02400883e4ef73de7a58_1703928825.jpg?x-oss-process=image/quality,q_95/format,webp" alt="s2"/></SwiperSlide>
                  <SwiperSlide><img src="https://dkstatics-public.digikala.com/digikala-adservice-banners/bf95f7021be3de8865b649b3f7141626140de1a6_1704551586.gif?x-oss-process=image?x-oss-process=image/format,webp" alt="s2"/></SwiperSlide>
                  <SwiperSlide><img src="https://dkstatics-public.digikala.com/digikala-adservice-banners/84c468be610718ad77212f2aa383f96eb83a2861_1704272302.jpg?x-oss-process=image/quality,q_95/format,webp" alt="s2"/></SwiperSlide>
                  <SwiperSlide><img src="https://dkstatics-public.digikala.com/digikala-adservice-banners/b4a8ae656b7d886032838b8efa753c8789f3ff7d_1703937789.jpg?x-oss-process=image/quality,q_95/format,webp" alt="s4"/></SwiperSlide>
                  <SwiperSlide><img src="https://dkstatics-public.digikala.com/digikala-adservice-banners/4d1225745109501d643131142436a1e9495cc08b_1704199035.jpg?x-oss-process=image/quality,q_95" alt="s1"/></SwiperSlide>
                  <SwiperSlide><img src="https://dkstatics-public.digikala.com/digikala-adservice-banners/e10289fba66071d82f4de4a1a6ccac086adc0648_1704290761.jpg?x-oss-process=image/quality,q_95/format,webp" alt="s3"/></SwiperSlide>
              
       
      
      </Swiper>
     </Grid>
   </div>
                <Grid item xs={12} md={3} mt={4} pr={2} paddingRight={2}>
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
          <Products />
        </Grid>
      </Grid>
    </Container>
  );
}

export default HomePage;
