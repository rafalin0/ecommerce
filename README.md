<div align="center" >
  <br />
    <a href="https://bling-it-on.netlify.app/s" >
    <img src="https://i.ibb.co/gD10rPb/Homepage.png" alt="Homepage" width="45%" border="0">
    </a>
  <div>
    <img src="https://img.shields.io/badge/-React_JS-black?style=for-the-badge&logoColor=white&logo=react&color=61DAFB" alt="react.js" />
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
    <img src="https://img.shields.io/badge/-Styled--Components-black?style=for-the-badge&logo=styled-components&logoColor=FFFFFF&color=DB7093" alt="Styled-Components" />
    <br />
    <img src="https://img.shields.io/badge/-Firestore-black?style=for-the-badge&logo=firebase&logoColor=FFCA28&color=DD2C00" alt="Firestore" />
    <img src="https://img.shields.io/badge/-Redux-black?style=for-the-badge&logo=redux&logoColor=FFFFFF&color=764ABC" alt="Redux" />
    <img src="https://img.shields.io/badge/-Stripe-black?style=for-the-badge&logo=stripe&logoColor=FFFFFF&color=635BFF" alt="Stripe" />
    <img src="https://img.shields.io/badge/-Netlify-black?style=for-the-badge&logo=netlify&logoColor=FFFFFF&color=00C7B7" alt="Netlify" />



  </div>

  <h3 align="center">Bling It On - Ecommerce Web App</h3>
</div>

## 📋 <a name="table">Table of Contents</a>

1. 💎 [Introduction](#introduction)
2. 📋 [Features](#features)
3. ⚙️ [Tech Stack](#tech-stack)
4. 🤸 [Quick Start](#quick-start)
5. 🚀 [How It Works](#usage)
6. 📸 [Screenshots](#screenshots)
7. 🙏[Acknowledgments](#awknowlegements) 


## <a name="introduction">💎 Introduction</a>

**Bling It On** is a refined ecommerce platform for exquisite jewelry, catering to individuals looking to add a touch of elegance to their style. With a carefully curated selection of bracelets, rings, earrings, necklaces, and jewelry sets, this store offers a seamless shopping experience that combines luxury with accessibility.

## <a name="features">📋 Features</a>

1. **Home Page with Highlighted Collections:**  
  The homepage features curated collections that create an inviting first impression. High-quality visuals and a call to action encourage customers to explore and discover products.

2. **Organized Product Catalog:**
  Browse jewelry items by category, including "Bracelets," "Earrings," "Jewelry Sets," "Necklaces," and "Rings." Each category page provides detailed product information, images, and options to add items to your wishlist or cart, as well as the ability to remove items from wishlist.

3. **Wishlist Functionality:**  
  Customers can save their favorite items to revisit later, compare products, or add them to the cart with ease.

4. **Shopping Cart**  
    The intuitive cart design displays products with their quantities, prices, and total cost. Customers can adjust quantities or remove items as needed, and then proceed to checkout.

5. **Order Summary & Checkout:**
  An order summary is displayed alongside the payment form for a final review. The checkout process includes secure payment via credit card for a seamless transaction

6. **User Account & Authentication:**
   Customers can securely log in or sign up to create accounts. The total number of items in the cart and wishlist is displayed, along with quick access actions such as proceeding to checkout, opening the cart, moving all wishlist items to the cart, browsing the product catalog, or signing out.



## <a name="tech-stack">⚙️ Tech Stack</a>

### 🎨 Frontend
-   **React**: Core library for building the user interface _(react, react-dom)_.  
-   **React Router**: Client-side routing library to handle navigation _(react-router-dom)_.  
-   **Redux**: State management library for predictable state updates _(redux, react-redux)_.  
-   **Redux Saga**: Middleware for handling side effects like asynchronous actions in Redux _(redux-saga)_.  
-   **Reselect**: Selector library for efficient state access in Redux _(reselect)_.  
-   **TypeScript**: Superset of JavaScript for type safety _(typescript)_.


### 💅 Styling
-  **Styled-Components**: Library for styling components with CSS-in-JS _(styled-components, @types/styled-components)_.
-  **Sass**: CSS preprocessor for more efficient and organized styling _(sass)_.

### 💳 Payment Integration
-  **Stripe**: Payment processing library with React and JavaScript SDKs for secure payment integration _(@stripe/react-stripe-js, @stripe/stripe-js, stripe)_.

### 🔥 Firebase
-  **Firebase**: Backend-as-a-Service for authentication, database, and other backend services _(firebase)_.

### 🌐 Deployment
- **Netlify**: Deployment platform for frontend hosting and serverless functions.



## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

### **Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)


### **Cloning the Repository**

```bash
git clone https://github.com/rafalin0/ecommerce.git
cd ecommerce
```

### **Installation**

Install the project dependencies using npm:

```bash
npm install
```

### **Set Up Environment Variables**

Create a new file named `.env.local` in the root of your project and add the following content:

```env
REACT_APP_FIREBASE_API_KEY=
REACT_APP_FIREBASE_AUTH_DOMAIN=
REACT_APP_FIREBASE_PROJECT_ID=
REACT_APP_FIREBASE_STORAGE_BUCKET=
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=
REACT_APP_FIREBASE_APP_ID=
REACT_APP_FIREBASE_MEASUREMENT_ID=

REACT_APP_STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=

REACT_APP_API_URL=http://localhost:8888/.netlify/functions

```

Replace the placeholder values with your actual Firebase and Stripe credentials. You can obtain these credentials by signing up & creating a new project on [Firebase](https://firebase.google.com/) and [Stripe website](https://stripe.com/).

### **Running the Project**

```bash
netlify dev
```

Open [http://localhost:8888](http://localhost:8888) in your browser to view the project.

## 🚀 <a name="usage"> How It Works</a>
- **Homepage**: Browse featured collections and explore jewelry items.
- **Catalog**: View products by category (bracelets, rings, earrings, etc.).
- **Add to Cart**: Add items to your cart with a simple click.
- **Wishlist**: Save items for later, remove, or move them to the cart.
- **Cart**: Review your cart, adjust quantities, remove products, and proceed to checkout.
- **Checkout**: Review your order summary and complete secure payment via Stripe.
- **User Account**: Sign up or log in to manage your cart and wishlist.

## 📸 <a name="screenshots">Screenshots</a>

Here are some sample screenshots of the Bling It On app:
<div align="center" >
<img src="https://i.ibb.co/hFxZBGK/Category-Page.png" width="30%" alt="Category-Page" border="0">
<img src="https://i.ibb.co/5GZ5jdR/Wishlist-Page.png" width="30%" alt="Wishlist-Page" border="0">
<img src="https://i.ibb.co/K7KnB59/Checkout-Page.png" width="32%" alt="Checkout-Page" border="0">
<img src="https://i.ibb.co/p18bLVV/Sign-in.png" width="34%" alt="Sign-in" border="0">
<img src="https://i.ibb.co/JxQGWKw/mobile-category-page.jpg" width="10%" alt="mobile-category-page" border="0">
<img src="https://i.ibb.co/QYTx2NV/mobile-wishlist.jpg" width="12%" alt="mobile-wishlist" border="0">
<img src="https://i.ibb.co/MsLC4Hm/mobile-checkout.jpg" width="13%" alt="mobile-checkout" border="0">
<img src="https://i.ibb.co/djwL58f/Cart.png" width="23%" alt="Cart" border="0">
</div>

## 🙏 <a name="acknowledgements">Acknowledgements</a>
- **Images**: Product images are provided by [**The Glorious Studio**](https://www.pexels.com/@the-glorious-studio-3584518/) and sourced from [**Pexels**](https://www.pexels.com/).   
  
- **Learning Resources**: Special thanks to Andrei Neagoie and Yihua Zhang, creators of the [**Complete React Developer (w/ Redux, Hooks, GraphQL)**](https://www.udemy.com/course/complete-react-developer-zero-to-mastery/) course on [**Udemy**](https://www.udemy.com/), for their invaluable guidance in learning React.
