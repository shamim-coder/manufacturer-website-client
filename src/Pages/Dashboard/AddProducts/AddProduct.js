import { format } from "date-fns";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddProduct = () => {
    const [loading, setLoading] = useState(false);
    const issueDate = format(new Date(), "MM-dd-yyyy");

    const imageStorageKey = "da74e5de36eb5bf4a767be72ae846820";

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const handleAddProduct = (data) => {
        setLoading(true);
        const { name, price, availableStock, minimumQuantity, model, description, category, weight, dimensions, loadSpeed } = data;
        const image = data.image[0];
        const formData = new FormData();
        formData.append("image", image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: "POST",
            body: formData,
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.success) {
                    const image = result.data.url;
                    const productInfo = {
                        image,
                        name,
                        price: parseInt(price),
                        availableStock: parseInt(availableStock),
                        minimumQuantity: parseInt(minimumQuantity),
                        model,
                        description,
                        category,
                        weight,
                        dimensions,
                        loadSpeed,
                        issueDate,
                    };

                    // send product data to database
                    fetch("http://localhost:5000/product", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                        },
                        body: JSON.stringify(productInfo),
                    })
                        .then((res) => res.json())
                        .then((result) => {
                            if (result.insertedId) {
                                setLoading(false);
                                reset();
                                toast.success("Product added successfully!");
                            } else {
                                toast.error("Failed to add product");
                            }
                        });
                } else {
                    toast.error("Failed to upload image");
                }
            });
    };
    return (
        <section>
            <h2 className="text-4xl font-bold text-center my-10">Add Product</h2>
            <form className="md:w-8/12 lg:w-6/12 mx-auto mb-10" onSubmit={handleSubmit(handleAddProduct)}>
                <div className="form-control mb-3">
                    <label className="label">
                        <span className="label-text">Product Name</span>
                    </label>
                    <input {...register("name", { required: { value: true, message: "Product Name is required" } })} type="text" placeholder="Your Name" className="input input-bordered" />

                    {errors.name?.type === "required" && <span className="label text-error text-sm">{errors.name.message}</span>}
                </div>
                <div className="form-control mb-3">
                    <label className="label">
                        <span className="label-text">Product Image</span>
                    </label>
                    <input {...register("image", { required: { value: true, message: "Product Image is required" } })} type="file" className="input input-bordered" />

                    {errors.image?.type === "required" && <span className="label text-error text-sm">{errors.image.message}</span>}
                </div>
                <div className="sm:flex gap-5">
                    <div className="form-control mb-3 w-full">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input {...register("price", { required: { value: true, message: "Price is required" } })} type="number" placeholder="Product Price" className="input input-bordered" />

                        {errors.price?.type === "required" && <span className="label text-error text-sm">{errors.price.message}</span>}
                    </div>
                    <div className="form-control mb-3 w-full">
                        <label className="label">
                            <span className="label-text">Model No</span>
                        </label>
                        <input {...register("model", { required: { value: true, message: "Model No is required" } })} type="text" placeholder="Product Model No" className="input input-bordered" />

                        {errors.model?.type === "required" && <span className="label text-error text-sm">{errors.model.message}</span>}
                    </div>
                </div>
                <div className="sm:flex gap-5">
                    <div className="form-control mb-3 w-full">
                        <label className="label">
                            <span className="label-text">Available Stock</span>
                        </label>
                        <input {...register("availableStock", { required: { value: true, message: "Available Stock is required" } })} type="number" placeholder="Available Stock" className="input input-bordered" />

                        {errors.availableStock?.type === "required" && <span className="label text-error text-sm">{errors.availableStock.message}</span>}
                    </div>
                    <div className="form-control mb-3 w-full">
                        <label className="label">
                            <span className="label-text">Minimum Quantity</span>
                        </label>
                        <input {...register("minimumQuantity", { required: { value: true, message: "Minimum Quantity is required" } })} type="number" placeholder="Minimum Quantity" className="input input-bordered" />

                        {errors.minimumQuantity?.type === "required" && <span className="label text-error text-sm">{errors.minimumQuantity.message}</span>}
                    </div>
                </div>
                <div className="sm:flex gap-5">
                    <div className="form-control mb-3 w-full">
                        <label className="label">
                            <span className="label-text">Product Category</span>
                        </label>
                        <input {...register("category", { required: { value: true, message: "Product Category is required" } })} type="text" placeholder="Product Category" className="input input-bordered" />

                        {errors.category?.type === "required" && <span className="label text-error text-sm">{errors.category.message}</span>}
                    </div>
                    <div className="form-control mb-3 w-full">
                        <label className="label">
                            <span className="label-text">Product Weight</span>
                        </label>
                        <input {...register("weight", { required: { value: true, message: "Weight is required" } })} type="text" placeholder="Product Weight" className="input input-bordered" />

                        {errors.weight?.type === "required" && <span className="label text-error text-sm">{errors.weight.message}</span>}
                    </div>
                </div>
                <div className="sm:flex gap-5">
                    <div className="form-control mb-3 w-full">
                        <label className="label">
                            <span className="label-text">Product Dimensions</span>
                        </label>
                        <input {...register("dimensions", { required: { value: true, message: "Dimensions is required" } })} type="text" placeholder="Product Dimensions" className="input input-bordered" />

                        {errors.dimensions?.type === "required" && <span className="label text-error text-sm">{errors.dimensions.message}</span>}
                    </div>
                    <div className="form-control mb-3 w-full">
                        <label className="label">
                            <span className="label-text">Product LoadSpeed</span>
                        </label>
                        <input {...register("loadSpeed", { required: { value: true, message: "LoadSpeed is required" } })} type="text" placeholder="Product LoadSpeed" className="input input-bordered" />

                        {errors.loadSpeed?.type === "required" && <span className="label text-error text-sm">{errors.loadSpeed.message}</span>}
                    </div>
                </div>

                <div className="form-control mb-3">
                    <label className="label">
                        <span className="label-text">Product Description</span>
                    </label>
                    <textarea {...register("description", { required: { value: true, message: "Product Description is required" } })} placeholder="Product Description" className="textarea border-base-300" />

                    {errors.description?.type === "required" && <span className="label text-error text-sm">{errors.description.message}</span>}
                </div>

                <div className="form-control">
                    <button type="submit" className={`btn ${loading && "loading"} btn-primary`}>
                        Add Product
                    </button>
                </div>
            </form>
        </section>
    );
};

export default AddProduct;
