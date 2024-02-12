import React,{useState} from "react";
import { AppBar, Toolbar, Typography , Container , Box , TextField , Grid , IconButton , InputBase , Paper} from "@mui/material";
// import Paper from '@mui/material/Paper';
// import InputBase from '@mui/material/InputBase';
// import Divider from '@mui/material/Divider';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from "react-router-dom";
import  shopIcon  from "../../assets/icons/shop.svg"
import { useSelector } from "react-redux";

function Header() {
    const productsState = useSelector(store => store.cartState)
    const [search, setSearch] = useState("");

    return ( 
         <AppBar  position="sticky" style={{ background: '#3a3d3d' }}>
           <Container maxWidth="lg">

            <Toolbar >
               

                <Typography component="h1" variant="h5" fontWeight="700" flex="1" style={{width:"50px"}}>
                   <Link to="/" style={{textDecoration:"none" , color:"#fff"}}>
                        فروشگاه
                   </Link>
                </Typography>

                
    <Paper margin="10px"
        component="form"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 250 }}
        >

      <InputBase
        sx={{ ml: 3, flex: 1 }}
        placeholder="Search"
        inputProps={{ 'aria-label': 'search' }}
        value={search} onChange={event => setSearch(event.target.value)}
      />
      <IconButton type="button" sx={{ p: '10px' }} onClick={ () => console.log(search)} aria-label="search">
        <SearchIcon />
      </IconButton>

      
    </Paper>


    {/* <Box
    size="small"
    borderRadius={1}
        style={{background:"#ffffff"}}
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField size="small" id="outlined-basic" label="Outlined"  variant="outlined"  style={{background:"#ffffff"}} />
    </Box> */}
                
                <Link to="/signup" style={{ color:"#fff"}}>
                    <PersonIcon  sx={{ fontSize: 40 }} />
                    
                </Link>
               

                <div style={{ position: "relative"}}>
                    <Link to="/cart" style={{ color:"#fff"}}>
                        <ShoppingCartIcon  sx={{ fontSize: 40 }} />
                        {(productsState.itemsCounter)>0  && 
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
                        }}>{productsState.itemsCounter}</span>}
                    </Link>
                </div>
                
            </Toolbar>

           </Container>

         </AppBar>
     );
}

export default Header;