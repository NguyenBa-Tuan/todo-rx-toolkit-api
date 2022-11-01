import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosConfig from "../../api/axios.config";

import Todo from "../../type/todo";

interface dataChecked {
    data: Todo;
    checked: boolean;
}

export const editCheckedTodo = createAsyncThunk(
    "todo/editChecked",
    async ({ data, checked }: dataChecked) => {
        const todo: Todo = {
            id: data.id,
            name: data.name,
            checked: checked,
        };
        const res = await axiosConfig.put(`${data.id}`, todo);
        return res.data;
    }
);
