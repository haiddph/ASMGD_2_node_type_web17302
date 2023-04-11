import dotenv from "dotenv";
import joi from "joi";
import Product from "../models/product";
import Category from "../models/category";

dotenv.config();

const categorySchema = joi.object({
    name: joi.string().required(),
});

export const getAll = async(req, res) => {
    try {
        const categories = await Category.find({});
        if (!categories) {
            return res.json({
                message: "Không tìm thấy sản phẩm",
            });
        }
        return res.json({
            message: "Lấy sản phẩm thành công",
            categories,
        });
    } catch (error) {
        return res.status(400).json({
            message: error,
        });
    }
};
export const get = async(req, res) => {
    try {
        const category = await Category.findById(req.params.id).populate("products");
        if (!category) {
            return res.json({
                message: "Không tìm thấy danh mục",
            });
        }
        return res.json(category);
    } catch (error) {
        return res.status(400).json({
            message: error.message,
        });
    }
};
export const create = async(req, res) => {
    try {
        // validate
        const { error } = categorySchema.validate(req.body);
        if (error) {
            return res.status(400).json({
                message: error.details[0].message,
            });
        }
        const category = await Category.create(req.body);
        if (!category) {
            return res.json({
                message: "Thêm danh mục không thành công",
            });
        }
        return res.json({
            message: "Thêm danh mục thành công",
            category,
        });
    } catch (error) {
        return res.status(400).json({
            message: error,
        });
    }
};

export const remove = async(req, res) => {
    try {
        const category = await Category.findOneAndDelete(req.params.id);
        return res.status(200).json({
            message: "xóa thành công",
            category,
        })
    } catch (error) {
        return res.status(400).json({
            message: error,
        })
    }
}

export const update = async(req, res) => {
    try {

        const { error } = categorySchema.validate(req.body);
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }
        const category = await Category.findOneAndUpdate({ _id: req.params.id }, req.body);
        if (category.length === 0) {
            return res.status(400).json({
                message: "cập nhật thất bại"
            })
        }
        return res.status(200).json({
            message: "cập nhật thành công",
            category,
        })
    } catch (error) {
        return res.status(400).json({
            message: error,
        })
    }
}