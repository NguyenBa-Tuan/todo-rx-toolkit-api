import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosConfig from "../../api/axios.config";

export const deleteTodo = createAsyncThunk(
    "todo/delete",
    async (id: number) => {
        const res = await axiosConfig.delete(`${id}`);
        return res.data;
    }
);
