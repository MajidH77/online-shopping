import React from "react";
import { AppBar, Toolbar, Typography , Container} from "@mui/material";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from "react-router-dom";
import  shopIcon  from "../../assets/icons/shop.svg"

function Header() {
    return ( 
         <AppBar position="sticky">
           <Container maxWidth="lg">

            <Toolbar>
                <Typography component="h1" variant="h5" fontWeight="700" flex="1" >
                   <Link to="/" style={{textDecoration:"none" , color:"#fff"}}>
                        فروشگاه
                   </Link>
                </Typography>
                <Link to="/signup" style={{ color:"#fff"}}>
                    <PersonIcon  sx={{ fontSize: 40 }} />
                    
                </Link>
                <div style={{ position: "relative"}}>
                    <Link to="/cart" style={{ color:"#fff"}}>
                        <ShoppingCartOutlinedIcon  sx={{ fontSize: 40 }} />
                        <span style={{
                            position: "absolute",
                            top: "0",
                            right: "0",
                            backgroundColor: "#04adfc",
                            borderRadius: "50%",
                            width: "18px",
                            height: "18px",
                            lineHeight: "18px",
                            fontSize: "0.80rem",
                            textAlign: "center",
                            fontWeight: "bold",
                            color: "#fff",
                        }}>2</span>
                    </Link>
                </div>
                <div style={{ position: "relative"}}>
                    <Link to="/cart" style={{ color:"#fff"}}>
                        <ShoppingCartIcon  sx={{ fontSize: 40 }} />
                        <span style={{
                            position: "absolute",
                            top: "0",
                            right: "0",
                            backgroundColor: "#04adfc",
                            borderRadius: "50%",
                            width: "18px",
                            height: "18px",
                            lineHeight: "18px",
                            fontSize: "0.80rem",
                            textAlign: "center",
                            fontWeight: "bold",
                            color: "#fff",
                        }}>2</span>
                    </Link>
                </div>
                
            </Toolbar>

           </Container>

         </AppBar>
     );
}

export default Header;