import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosConfig from "../../api/axios.config";

export const getTodo = createAsyncThunk("todo/getTodo", async () => {
    const get = () => {
        return axiosConfig.get("");
    };
    const res = await get();

    return res.data;
});
