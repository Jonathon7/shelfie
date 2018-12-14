const read = (req, res, next) => {
  const dbInstance = req.app.get("db");

  dbInstance
    .get_inventory()
    .then(product => {
      res.status(200).json(product);
    })
    .catch(err => {
      res.status(500).send({ errorMessage: "Something went wrong" });
      console.log(err);
    });
};

const addProduct = (req, res, next) => {
  const dbInstance = req.app.get("db");

  dbInstance
    .add_product([
      req.body.product_name,
      req.body.product_price,
      req.body.product_img
    ])
    .then(product => {
      res.status(200).json(product);
    })
    .catch(err => {
      res.status(500).send({ errorMessage: "Something went wrong" });
      console.log(err);
    });
};

const deleteProduct = (req, res, next) => {
  const dbInstance = req.app.get("db");

  dbInstance
    .delete_product([req.params.id])
    .then(product => {
      res.status(200).json(product);
    })
    .catch(err => {
      res.status(500).send({ errorMessage: "Something went wrong" });
      console.log(err);
    });
};

const updateProduct = (req, res, next) => {
  const dbInstance = req.app.get("db");

  dbInstance
    .update_product([
      req.body.product_name,
      req.body.product_price,
      req.body.product_img,
      req.params.id
    ])
    .then(product => {
      res.status(200).json(product);
    })
    .catch(err => {
      res.status(500).send({ errorMessage: "Something went wrong" });
      console.log(err);
    });
};

module.exports = {
  read,
  addProduct,
  deleteProduct,
  updateProduct
};
