const shorten = (title) => {
    const splitedTitle = title.split(" ");
    const newTitle =
    (splitedTitle.length > 6 ) ? 
    `${splitedTitle[0]} ${splitedTitle[1] } ${splitedTitle[2] } ${splitedTitle[3]} ${splitedTitle[4]} ${splitedTitle[5] } ${splitedTitle[6]} ` 
    :
    `${splitedTitle[0]} ${splitedTitle[1] } ${splitedTitle[2] } ${splitedTitle[3]} ${splitedTitle[4]}  ` ;
    return newTitle;
}

const isInCart = (state, slug) => {
    const result = !!state.selectedItems.find(item => item.slug === slug)
    return result;
}

const quantityCount = (state, slug) => {
    const index = state.selectedItems.findIndex(item => item.slug === slug);
    if (index === -1) {
        return false
    } else {
        return state.selectedItems[index].quantity;
    }
}

const sellerFunctionColor = (seller) => {
    switch(seller.function){
        case "ضعیف" : return "#d8370fff";
        case "متوسط" : return "#d3c725ff";
        case "خوب" : return "#7fc240";
        case "خیلی خوب" : return "#369e3f";
        case "عالی" : return "#0cce1c";

        default: return "#008800";
    }
}

const discountCalculator = (price, discount) => {
  return ( price - (discount / 100) * price )
}

export {shorten, isInCart, quantityCount,sellerFunctionColor ,discountCalculator};