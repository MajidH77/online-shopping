import React,{useEffect, useState} from "react";
import { useQuery } from "@apollo/client";
import { useNavigate,  useParams } from "react-router-dom";
import { GET_PRODUCT_INFO } from "../../graphql/queries";
import Loader from "../shared/Loader";
import { Container } from "@mui/system";
import { Link } from "react-router-dom";
import {  Button, Grid, Card, Typography ,Radio , CardActions,Divider} from "@mui/material";
import sanitizeHtml from "sanitize-html";
import CommentForm from "../comment/CommentProduct";
import Comments from "../comment/Comments";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import {v4} from "uuid";
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem, increase, decrease} from "../../redux/cart/cartAction";
import { quantityCount , isInCart ,sellerFunctionColor , discountCalculator} from "../../helper/functions";
// icons : 
import Rating from '@mui/material/Rating';
import DeleteIcon from '@mui/icons-material/Delete';
import { FaCheck  } from "react-icons/fa";


import { LiaStoreAltSolid } from "react-icons/lia";
import { FaStoreAlt } from "react-icons/fa";
import { FaShop } from "react-icons/fa6";
import { BsShop } from "react-icons/bs";

import { CiBookmarkCheck } from "react-icons/ci";
import { CiDeliveryTruck } from "react-icons/ci";
import { TbTruckDelivery } from "react-icons/tb";


import { IoShieldCheckmark } from "react-icons/io5";
import { BsShieldCheck } from "react-icons/bs";
import { PiShieldCheckLight } from "react-icons/pi";

import { FaPercent } from "react-icons/fa6";

import { Swiper, SwiperSlide } from 'swiper/react';
import { toast } from "react-toastify";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../../components/home/styles.css';
import { Pagination, Navigation} from 'swiper/modules';


function ProductPage() {
  
  const { slug } = useParams();
  const navigate = useNavigate();

  const state = useSelector(store => store.cartState)
  const dispatch = useDispatch();
  
  
  const { loading, data, errors } = useQuery(GET_PRODUCT_INFO, {
    variables: { slug },
  });
  
  const [colorx , setColorx] = useState();

  
  if (loading) return <Loader />;
  if (errors) return <h3>Error...</h3>;
  
  const specifi = data.product.specifications.split(/\r?\n/);
  

return (
 
 <Container  maxWidth="xl"  >

      <Grid container spacing={2} padding={0}>
        <Grid item xs={12} md={4} mt={1}>
        <div>
        <Swiper 
        style={{
          "--swiper-navigation-color": "#2d70ff",
          "--swiper-navigation-size": "35px",width:"90%"
        }}
        
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
                      return <SwiperSlide key={v4()}><img style={{borderRadius:"10px"}} src={cover.url} alt={data.product.slug}/></SwiperSlide> })
                }
      </Swiper>
      </div>
    </Grid >
        <Grid item xs={12} md={5}  >
             <Grid  item xs={12}  padding={1} style={{display:"flex" ,alignItems:"center" , textDecoration:"none", align:"center",justifyContent:"right"}} >
         

                <Typography component="h3" variant="h7" fontWeight={500} >
                    دسته بندی :  
                </Typography>
                  <Link 
                        to={`/categories/${data.product.category.slug}`} style={{display:"flex" ,alignItems:"center" , textDecoration:"none" }}>
                        <Typography component="h3" variant="h7" fontWeight={300} color="#008cff" padding={1} >
                            {data.product.category.name}
                        </Typography>
                  </Link>
          
             </Grid>
                        
                        <Grid item xs={12} mt={0}>
                        <Grid  style={{display:"flex" ,alignItems:"center" , textDecoration:"none", align:"center",justifyContent:"right"}}>
                        <Rating flip= "false" name="size-large" value={data.product.rate}  readOnly={true}  />
                        <div style={{height:"1px" , width:"70%" ,background:"#ddd9d9" ,marginRight:"10px" }}>
                        </div> 
                        </Grid>
                        <Typography component="p" variant="h5"  color="text.primary" padding={1} fontWeight={500}>
                            {data.product.name}
                        </Typography>

{(data.product.color.length > 0) && 
  <Grid container mt={3}  >

  
      <Typography  color="#00a2ff" component="h3" variant="h8" fontWeight={400} pr={1}>
        رنگ : 
      </Typography>

      {(!!data.product.color) && data.product.color.map( color => 

        <button key={color.hex} style={{background:`${color.hex}`, width:"28px",height:"28px", borderRadius:"50%",marginLeft:"5px",cursor:"pointer",border:"1px solid #2e2c2c" }} 
        onClick={() => setColorx(color.hex)}>
        {colorx === color.hex? <FaCheck size="17px"  style={{color:"#848485ff", height:"25px"}}/> : null}
        </button>
          
         )}

    </Grid>
}    
                        <Grid mt={3}>
                            <Typography color="#00a2ff" component="h3" variant="h7" fontWeight={500} >
                             ویژگی ها :  
                            </Typography>
                            <Grid item xs={12} mt={1}>
                              
                                <Typography color="#142f3f" component="h4" variant="h8" fontWeight={500} >
                           {specifi.map(item => <ul key={v4()}>< FiberManualRecordIcon sx={{ fontSize: 10, color:"gray"}}/> { item }</ul>)}
                            </Typography>
                            </Grid>
                        </Grid>

                        <Grid mt={4}>
                            <Typography color="#00a2ff" component="h3" variant="h7" fontWeight={500} >
                             مشخصات کلی :  
                            </Typography>
                            <Grid item xs={12} mt={1}>
                             
                            <div

                                dangerouslySetInnerHTML={{
                                    __html: sanitizeHtml(data.product.details.html),
                                }}
                                ></div>
                               
                            </Grid>
                        </Grid>

                      
                </Grid>
                
        </Grid>
      <Grid item xs={10} md={3} mt={1} style={{position:"sticky",top:"50px"}} >

                  <Card sx={{width:"95%" ,  borderRadius: 4 , margin:"10px", background:"linear-gradient(0deg,hsla(240,3%,94%,.5),hsla(240,3%,94%,.5)),#fff;"}}>
                        <Grid container justifyContent="space-around" height={360} >
                          <div style={{width:"100%" , height:"65%", borderRadius: 4}}>

         {(!!data.product.seller) &&
         <div>
                            <div>
                              <Typography
                              padding={2}
                              component="p"
                              variant="h7"
                              color="text.primary"
                              fontWeight={600}
                              align="left"
                              >
                                  فروشنده
                              </Typography>
                            </div>
                           <Grid container  >

                                <div  style={{width:"40px",paddingRight:"20px"}} >
                                  < FaShop color="#555353" size={20}/>
                                </div>

                                <div  >
                                  <Typography fontSize="16px">
                                    {data.product.seller.name}
                                  </Typography>
                                  <div>
                                   
                                  <Typography color={sellerFunctionColor(data.product.seller)} fontSize="15px">
                                <span  style={{color:"#494b4a"}}>  عملکرد : </span> {data.product.seller.function}
                                  </Typography>
                                  </div>
                                </div>
                           </Grid>

                                <Divider variant="middle" sx={{ margin: "10px" }}/>

                            <Grid container  mt={2} style={{ display:"grid", gridTemplateColumns: "1fr 4fr"}} >

                            <div  style={{width:"40px",paddingRight:"20px",display:"inline"}}>
                              < IoShieldCheckmark color="#256d2bd0" size={20}/>
                            </div>
                            <div  style={{display:"inline"}}>
                              <Typography fontSize="16px">
                              {data.product.seller.warranty}
                              </Typography>
                            </div>  
                            
                        </Grid>
                                <Divider variant="middle" sx={{ margin: "10px" }}/>
                       
                        <Grid container  mt={3}>

                            <div  style={{width:"40px",paddingRight:"20px" , }} >
                              < TbTruckDelivery color="#dd3b51" size={24}/>
                            </div>
                            <div >
                              <Typography fontSize="16px">
                             ارسال امروز در تهران و کرج
                              </Typography>
                            </div>
                        </Grid>
         </div>
}
                          </div>
                          
                          <div style={{width:"100%" , height:"35%", borderRadius: 4 }}>

                          <Divider variant="middle" sx={{ margin: "7px" }} /> 
{(!!data.product.discount) ?
<div >
  <Grid container pr={3} justifyContent="end" height="20px" >
    <Grid >
      <Typography
        component="p"
        variant="h8"
        color="#747272"
        textDecoration="line-through"
        fontWeight={400}
        mt={0}
        mr={1}
        style={{ textDecoration:"line-through"}}
        >
        { new Intl.NumberFormat('fa-US', {style : "decimal" }).format(data.product.price)}
      </Typography>
    </Grid>
  <div style={{background:"#cc2d42" ,color:"#ffffff", width:"30px" ,height:"18px",fontSize:"12px" , borderRadius:"42%", textAlign:"center"}}>
  {new Intl.NumberFormat('fa-US', {style : "decimal" }).format(data.product.discount)}<span style={{fontSize:"10px"}}>%</span><span style={{fontSize:"10px"}}>-</span>
  </div>
</Grid>

<Typography
component="p"
variant="h6"
color="text.primary"
fontWeight={600}
align="center" 
mt={0}
>
{ new Intl.NumberFormat('fa-US', {style : "decimal" }).format(discountCalculator(data.product.price, data.product.discount))}  تومان
</Typography>
</div>
:
<Typography
          component="p"
          variant="h6"
          color="text.primary"
          fontWeight={600}
          align="center" 
          mt={2}
        >
          { new Intl.NumberFormat('fa-US', {style : "decimal" }).format(data.product.price)}  تومان
        </Typography>
}
      <CardActions  >
       {   !isInCart(state, slug) ?
       <Grid container justifyContent="space-around"  >
         <Button
            width="20%"
            variant="contained"
            
            size="medium"
            sx={{ width: "80%", borderRadius: 3 , lineHeight: "2" }}
            style={{color:"#ffffff", background:"#EF4056"}}
            onClick={() => {dispatch(addItem(data.product))
                toast.success("محصول به سبد خرید اضافه شد.",{position: "top-center"});
              }}> افزودن به سبد خرید
             </Button> 
       </Grid>
        :
        <div>
       <Grid container justifyContent="space-between" width="150px" >
           <Button 
            variant="outlined"
            size="small"
            sx={{ width: "30%", borderRadius: 3, lineHeight: "2.2"  }} 
            onClick={() => {dispatch(increase(data.product))
            }}>+</Button>
           {
          quantityCount(state, slug) > 0 && 
          <div>
          <Typography
          component="p" 
          variant="p" 
           color="#0066ff" 
           width="5px" 
           fontSize="24px" 
           textAlign="center"  
           lineHeight="32px" 
           fontWeight={400}>
            {quantityCount(state, slug)}

            </Typography>
            </div>
            }
             {quantityCount(state, slug) === 1 &&
                    <Button
                    variant="outlined"
                    size="small"
                    sx={{ width: "20%", borderRadius: 3 , lineHeight: "2.2"  }}
                    onClick={() => dispatch(removeItem(data.product))}> <DeleteIcon fontSize="small" /> 
                    </Button>}
                    {quantityCount(state, slug) > 1 && 
                    <Button 
                    variant="outlined"
                    size="small"
                    fontWeight={500}
                    sx={{ width: "30%", borderRadius: 3 , lineHeight: "2.2"  }}
                    onClick={() => dispatch(decrease(data.product))}>-
                     </Button>}


       </Grid>

       </div>
       
      }
      {quantityCount(state, slug) > 0 && 
      <Grid>
         <Link to="/cart" style={{textDecoration:"none"}}>
           <Button
            size="medium"
            
            sx={{ lineHeight: "2.5" , fontSize:"17px" , padding:"3px", borderRadius:"10%"}}
           >
             مشاهده سبد خرید
           </Button>
         </Link>
       </Grid>
       }

     </CardActions>
    </div>
    </Grid>
   
    <Grid/>
    </Card>
    </Grid>
    <Grid container >
                            <Grid item xs={12} md={6}>
                                <CommentForm slug={slug} />
                            </Grid>
                </Grid>
                <Grid container mt={2}>
                            <Grid item xs={12}>
                                <Comments slug={slug} />
                            </Grid>
                </Grid>

    </Grid>
    </Container>
  );
}

export default ProductPage;
