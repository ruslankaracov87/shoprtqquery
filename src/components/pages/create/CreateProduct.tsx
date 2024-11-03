"use client";
import { usePostProductsMutation } from "@/redux/api/shop";
import scss from "./CreateProduct.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";

interface IShopProduct {
  _id?: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  count: number;
  rating: {
    rate: number;
    countRating: number;
  };
}

const CreateProduct = () => {
  const { register, handleSubmit, reset } = useForm<IShopProduct>();
  const [postProductMutation] = usePostProductsMutation();

  const onPostProduct: SubmitHandler<IShopProduct> = (data) => {
    const product = {
      id: data._id,
      title: data.title,
      price: data.price,
      description: data.description,
      category: data.category,
      image: data.image,
      count: 1,
      rating: {
        rate: Math.round(Math.random() * 5),
        countRating: Math.round(Math.random() * 100),
      },
    };
    postProductMutation(product);
    console.log(data, "data");
    // reset();
    return product;
  };

  return (
    <section className={scss.CreateProduct}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.inputPosts}>
            <form onSubmit={handleSubmit(onPostProduct)}>
              <input
                type="text"
                placeholder="Product Name"
                {...register("title", { required: true })}
              />
              <input
                type="number"
                placeholder="Product Price"
                {...register("price", { required: true })}
              />
              <input
                type="text"
                placeholder="Product Img"
                {...register("image", { required: true })}
              />
              <input
                type="text"
                placeholder="Product Description"
                {...register("description", { required: true })}
              />
              <select {...register("category", { required: true })}>
                <option value="">Category</option>
                <option value="Clothes">Clothes</option>
                <option value="Mobile">Mobile</option>
                <option value="Mebel">Mebel</option>
                <option value="Toys">Toys</option>
              </select>
              <button type="submit">Add</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateProduct;
