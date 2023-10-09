const phoneNumber = process.env.REACT_APP_PHONE_NUMBER
const sheet = process.env.REACT_APP_GOOGLE_SHEET_ENDPOINT

export const INFO = {
  title: "DRINKS - Delivery de bebidas en Córdoba",
  phone: phoneNumber,
  social: {
    instagram: "instagram.com/",
    facebook: "facebook.com/",
    twitter: "twitter.com/",
  },
  sheet: sheet,
}
