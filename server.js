// import express from "express";
// import axios from "axios";
// import cors from "cors";

// const app = express();
// const PORT = 5001;

// app.use(express.json());
// app.use(cors());

// // Endpoint untuk Produk Populer (berdasarkan rating tertinggi)
// app.get("/products/popular", async (req, res) => {
//   try {
//     const response = await axios.get(
//       "https://dummyjson.com/products?limit=10&sortBy=rating&order=desc"
//     );
//     res.json(response.data);
//   } catch (error) {
//     res.status(500).json({
//       message: "Error fetching popular products",
//       error: error.message,
//     });
//   }
// });

// // Endpoint untuk Kategori Produk beauty
// app.get("/products/category/beauty", async (req, res) => {
//   try {
//     const response = await axios.get(
//       "https://dummyjson.com/products/category/beauty"
//     );
//     res.json(response.data);
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "Error fetching categories", error: error.message });
//   }
// });

// // Endpoint untuk Hot Offers (diskon terbesar)
// app.get("/products/hot-offers", async (req, res) => {
//   try {
//     const response = await axios.get(
//       "https://dummyjson.com/products?limit=10&sortBy=discountPercentage&order=desc"
//     );
//     res.json(response.data);
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "Error fetching hot offers", error: error.message });
//   }
// });

// // all products
// app.get("/products", async (req, res) => {
//   try {
//     const response = await axios.get("https://dummyjson.com/products?limit=0");
//     res.json(response.data);
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "Error fetching hot offers", error: error.message });
//   }
// });
// // endpoint untuk mencari produk id
// app.get("/products/:id", async (req, res) => {
//   const { id } = req.params; // Ambil ID dari URL

//   try {
//     const response = await axios.get(`https://dummyjson.com/products/${id}`);
//     res.json(response.data);
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "Error fetching product", error: error.message });
//   }
// });
// // Jalankan server
// https: app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });
