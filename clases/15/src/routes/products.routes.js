import { Router } from "express";
import upload from "../utils/upload.middleware.js";

import ProductsDAD from "../daos/products.dao.js";

const router = Router();
router.get("/", async (req, res) => {
  let withStock = req.query.stock;
  let products;
  if (withStock === undefined) {
    products = await ProductsDAD.getAll();
  } else {
    products = await ProductsDAD.getAllWithStock();
  }
  res.render("products", { products });
});

router.get("/new", (req, res) => {
  res.render("new-product");
});

router.get("/:id", async (req, res) => {
  let id = req.params.id;
  if (!id) {
    res.redirect("/products/");
  }
  let product = await ProductsDAD.getById(id);
  if (!product) {
    res.render("404");
  }
  res.render("product", {
    title: product.title,
    description: product.description,
    photo: product.photo,
    price: product.price,
    isStock: product.stock > 0,
  });
});

router.post("/", upload.single("image"), async (req, res) => {
  let filename = req.file.filename;
  let product = req.body;

  await ProductsDAD.add(
    product.title,
    product.description,
    filename,
    product.price,
    product.stock
  );

  res.redirect(`/products`);
});

export default router;
