## Create app from scratch
Tech stack: Front-end e-commerce shopping cart with with ReactJS, React-Bootstrap, React-router-dom, Stripe API

Final view(notice still in progress):
![](./screenshots/shoping-cart-demo-001.png)

```
npx create-react-app frontend-reactjs
cd frontend-reactjs
npm install bootstrap react-bootstrap react-router-dom
```

check if server is running
> npm start

visit: [http://localhost:3000/](http://localhost:3000/)

useContext usage:

![](./screenshots/reactjs-useContext-01.png)


## Stripe integration

register in Strip and visit  Developer Dashboard:
https://dashboard.stripe.com/test/developers

search for 'Secret key' , copy key and save it to .env file
![](./screenshots/stripe-001-dashobard.png)

go to Page 'Products' https://dashboard.stripe.com/test/products?active=true
Add new Product
![](./screenshots/stripe-002-adding-product.png)


Copy product key id from Stripe product page
![](./screenshots/stripe-003-copy-priceAPI-ID.png)


after we add in  src/NavBar.js checkout async function
![](./screenshots/stripe-004-ineracting-with-express-back-end-and-stripe-checkout-page.png)

Test Visa card info is:
```
VISA card number: 4242 4242 4242 4242
Date: 12 / 34
CVC: 123
Country: United State
ZIP code: 12345
```
![](./screenshots/stripe-005-test-VISA-card-info.png)

Adn after successful paid, we are redirect to out page again
![](./screenshots/stripe-006-successful-paymant-and-redirect-to-out-page.png)

Now go to Stripe Dashboard > Payments and see if transaction exist
![](./screenshots/stripe-007-successful-paymant-from-stripe-dashboard.png)

Notice: (Optional step) If checkout on Stripe page do not work try to add company name for this demo
https://dashboard.stripe.com/account