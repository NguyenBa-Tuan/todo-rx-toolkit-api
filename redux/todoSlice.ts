import { useAppDispatch } from "./../hooks";
import { useDispatch } from "react-redux";
import { createSlice } from "@reduxjs/toolkit";
import build from "next/dist/build";
import { useCallback } from "react";
import Todo from "../type/todo";
import { deleteTodo } from "./action/deleteTodo";
import { getTodo } from "./action/getTodo";
import { updateTodo } from "./action/updateTodo";
import { editCheckedTodo } from "./action/editCheckedTodo";
const listTodo: Todo[] = [];

const getTodoSlice = createSlice({
    name: "todo",
    initialState: { listTodo: listTodo, itemTodo: "" },
    reducers: {
        handleOnChangeTodo: (state, action) => {
            state.itemTodo = action.payload;
        },
    },
    extraReducers: (build) => {
        build
            .addCase(getTodo.pending, (state, action) => {})
            .addCase(getTodo.fulfilled, (state, action) => {
                state.listTodo = action.payload;
            });
        build
            .addCase(updateTodo.pending, (state, action) => {})
            .addCase(updateTodo.fulfilled, (state, action) => {
                state.listTodo.push(action.payload);
                state.itemTodo = "";
            });
        build.addCase(deleteTodo.fulfilled, (state, action) => {
            state.listTodo = state.listTodo.filter(
                (state) => action.payload.id !== state.id
            );
        });
        build.addCase(editCheckedTodo.fulfilled, (state, action) => {
            state.listTodo = state.listTodo.map((todo) => {
                if (todo.id == action.payload.id) {
                    todo.checked = !todo.checked;
                }
                return todo;
            });
        });
    },
});
export const { handleOnChangeTodo } = getTodoSlice.actions;
export const getTodoReducer = getTodoSlice.reducer;
