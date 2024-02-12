export const fetchProductsSuccess = products => {
    return {
        type: "FETCH_PRODUCTS_SUCCESS",
        payload: products
    }
}
