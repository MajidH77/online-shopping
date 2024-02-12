import React from "react";
import BestSellers from "../BestSellers";
import { useQuery } from "@apollo/client";
import { useParams, useNavigate } from "react-router-dom";
import sanitizeHtml from "sanitize-html";
import { GET_CATEGORY_INFO } from "../../graphql/queries";
import { Avatar, Container, Grid, Typography } from "@mui/material";
import CardEL from "../shared/CardEL";
import Loader from "../shared/Loader";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";



function AllCategoriesPage() {


  return (
 
    <Container maxWidth="lg">
        <BestSellers />
    
    </Container>
   
  );
}

export default AllCategoriesPage;
