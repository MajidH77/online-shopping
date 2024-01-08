// import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
// import { useQuery } from "@apollo/client";
// import { GET_PRODUCTS_INFO } from "../../graphql/queries";

// const initialState = {
//     loading : false,
//     products: {},
//     error: "",
// };
// const fetchProducts = createAsyncThunk("product/fetchProducts", () => {
//     const { loading, data, errors } = useQuery(GET_PRODUCTS_INFO);
//       fetch("https://fakestoreapi.com/products").then((response) => response.data)
//       return data
//      console.log(data);
      
    
// })

// const productsSlice = createSlice({
//     name: "product",
//     initialState,
//     extraReducers: builder => {
//         builder.addCase(fetchProducts.pending, state => {
//             state.loading = true;
//         })
//         builder.addCase(fetchProducts.fulfilled, (state , action) => {
//             state.loading = false;
//             state.products = action.payload;
//             state.error = "";
//         })
//         builder.addCase(fetchProducts.rejected, (state , action) => {
//             state.loading = false;
//             state.products = {};
//             state.error = action.error.message;
//         });
//     },
// });

// export default productsSlice.reducer
// export { fetchProducts };
