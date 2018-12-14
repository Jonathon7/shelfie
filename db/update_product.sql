UPDATE products
SET product_name = $1,
	 product_price = $2,
	 product_img = $3
WHERE id = $4;