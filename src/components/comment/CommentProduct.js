import React, { useState, useEffect } from "react";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { useMutation } from "@apollo/client";
import { SEND_COMMENT } from "../../graphql/mutations";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { useParams } from "react-router-dom";
import { validate } from "./validation";


function CommentProduct({ slug }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailErrors, setEmailErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [text, setText] = useState("");
  const [pressed, setPressed] = useState(false);
  

          useEffect(() => {
            setEmailErrors(validate(email))
            }, [email])

            const focusHanlder = event => {
              console.log("touched");
              setTouched({ ...touched, email: true })
          }


  // const params=useParams();
  const [sendComment, { loading, data }] = useMutation(SEND_COMMENT, {
    variables: { name, email, text, slug },
  });
  console.log(data);

  const sendHandler = () => {
    if (name && email && text && !emailErrors.email ) {
      sendComment();
      setPressed(true);
    } else {
      toast.warn(" اطلاعات صحیح نمیباشد ! ", {
        position: "top-center",
      });
    }
  };

  if (data && pressed) {
    toast.success("کامنت دریافت شد, منتظر تایید مدیر.", {
      position: "top-center",
    });
    setPressed(false);
  }

  return (
    <Grid  
      container
      sx={{
        boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px",
        borderRadius: 4,
        py: 1,
        mt: 5,
      }}
    >
      <Grid item xs={12} m={2}>
        <Typography component="p" variant="h6" fontWeight={700} color="primary">
           ثبت دیدگاه
        </Typography>
      </Grid>

      
       <Grid item xs={12} m={2}>
    
        <TextField
        
          label="نام کاربری"
          variant="outlined"
          sx={{ width: "100%" }}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Grid>
      <Grid  item xs={12} m={2} >
        <TextField 
          label="ایمیل"
          variant="outlined"
          sx={{ width: "100%" }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onFocus={focusHanlder}
          /> 
          
             {emailErrors.email && touched.email &&  <span style={{color:"red"}}>{emailErrors.email}😠</span>}



      </Grid>
     <Grid item xs={12} m={2}>
        <TextField
          label=" دیدگاه "
          variant="outlined"
          sx={{ width: "100%" }}
          value={text}
          onChange={(e) => setText(e.target.value)}
          multiline
          minRows={4}
        />
      </Grid>

     

       <Grid item xs={12} m={2}>
        {loading ? (
          <Button variant="contained" disabled>
            در حال اراسال ...
          </Button>
        ) : (
          <Button variant="contained" onClick={sendHandler}>
            ارسال
          </Button>
        )}
      </Grid>

    </Grid>
  );
}

export default CommentProduct;
