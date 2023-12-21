export const validate = (data) => {

    const errors = {};


    if (!data) { 
        errors.email = "ایمیل وارد شود !"
    } else if (!/\S+@\S+\.\S+/.test(data)) {
        errors.email = "ایمیل اشتباه است !"
    } else {
        delete errors.email
    }


    return errors;
}