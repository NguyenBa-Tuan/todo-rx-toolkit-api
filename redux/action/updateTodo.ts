import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosConfig from "../../api/axios.config";

export const updateTodo = createAsyncThunk(
    "todo/updateTodo",
    async (data: object) => {
        const resp = await axiosConfig.post("", data);
        return resp.data;
    }
);
