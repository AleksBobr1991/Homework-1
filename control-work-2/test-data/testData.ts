export const products = {
  blueTop: {
    id: 1,
    name: 'Blue Top',
    price: 'Rs. 500',
    category: 'Women > Tops',
    availability: 'In Stock',
    condition: 'New',
    brand: 'Polo',
  },

  menTshirt: {
    id: 2,
    name: 'Men Tshirt',
    price: 'Rs. 400',
  },

  winterTop: {
    id: 5,
    name: 'Winter Top',
    price: 'Rs. 600',
  },
} as const;

export const searchData = {
  validProductName: products.blueTop.name,
  missingProductName: 'Product That Does Not Exist 987654',
} as const;

export const cartData = {
  productQuantity: 2,
  blueTopTotalForTwoItems: 'Rs. 1000',
} as const;

export const invalidLoginData = {
  email: 'invalid-user@example.com',
  password: 'incorrect-password',
  expectedError: 'Your email or password is incorrect!',
} as const;

export const signupData = {
  name: 'Automation Student',
} as const;

export const contactData = {
  name: 'Automation Student',
  email: 'automation.student@example.com',
  subject: 'Automation Exercise test message',
  message: 'This message was submitted by an automated Playwright test.',
  expectedSuccessMessage:
    'Success! Your details have been submitted successfully.',
} as const;

export const categories = {
  women: 'Women',
  dress: 'Dress',
  womenDressHeading: 'Women - Dress Products',
} as const;
