import { BIO_REGEX, MAIL_REGEX, NAME_REGEX, PWD_REGEX, SPECIALTY_REGEX } from "../constants/regex"

export const validateInputs = (field,value) => {
    const paterns = {
        firstName: NAME_REGEX,
        lastName: NAME_REGEX,
        email: MAIL_REGEX,
        pwd: PWD_REGEX,
        specialty: SPECIALTY_REGEX,
        bio: BIO_REGEX,
    }
    return paterns[field].test(value) || false;
}