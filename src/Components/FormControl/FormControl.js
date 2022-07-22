import React from "react";

const FormControl = ({ register, label, errors, type, name, require, defaultValue }) => {
    return (
        <div className="form-control mb-3">
            <label className="label">
                <span className="label-text">{label}</span>
            </label>

            {type === "textarea" ? (
                <textarea defaultValue={defaultValue} {...register(name, { required: { value: require, message: `${label} is required` } })} placeholder={label} className="textarea border-base-300 w-full" />
            ) : (
                <input defaultValue={defaultValue} {...register(name, { required: { value: require, message: `${label} is required` } })} type={type} placeholder={label} className="read-only:bg-base-100 input input-bordered" />
            )}

            {errors[name]?.type === "required" && <span className="label text-error text-sm">{errors[name]?.message}</span>}
        </div>
    );
};

export default FormControl;
