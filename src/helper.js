const shorten = (title) => {
    const splitedTitle = title.split(" ");
    const newTitle = `${splitedTitle[0]} ${splitedTitle[1] } ${splitedTitle[2] } ${splitedTitle[3]} ${splitedTitle[4]} ${splitedTitle[5]}`
    return newTitle;
}
export {shorten};