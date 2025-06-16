# skienassignment2


### 📦 E-Commerce Cart System (Angular + Node)

This project is a basic e-commerce application with a shopping cart. It uses:

* **Angular** as the frontend
* **Node.js + Express** as the backend
* **Static product data** stored in `products.js`

---

## 📁 Project Structure

```
/backend       => Node.js + Express server
/frontend      => Angular frontend app
/products.js   => Static product list used by backend
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

* **Node.js**: [https://nodejs.org/](https://nodejs.org/)
* **Angular CLI**:

  ```bash
  npm install -g @angular/cli
  ```

---

## 🔧 Backend Setup (Node.js)

1. Navigate to the backend folder:

   ```bash
   cd backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the server:

   ```bash
   node index.js
   ```

   OR (if using nodemon):

   ```bash
   npm run dev
   ```

4. Server should run on:

   ```
   http://localhost:4000
   ```

   API Endpoint to get products:

   ```
   http://localhost:4000/products
   ```

---

## 🎨 Frontend Setup (Angular)

1. Navigate to the frontend folder:

   ```bash
   cd frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the Angular app:

   ```bash
   ng serve
   ```

4. Open your browser and visit:

   ```
   http://localhost:4200
   ```

---

## 🔄 Connecting Frontend with Backend

In your Angular service (e.g., `product.service.ts`), fetch products from:

```ts
http://localhost:4000/products
```

Make sure CORS is enabled in your backend.

---


