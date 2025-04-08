export const NAME_REGEX = /^[a-zA-Z\u0600-\u06FF\s][a-zA-Z\u0600-\u06FF0-9-_].{2,24}/; 
export const MAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
export const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}/; 
export const SPECIALTY_REGEX = /^[a-zA-Z\u0600-\u06FF\s].{5,24}$/;
export const BIO_REGEX = /^.{9,100}/;
