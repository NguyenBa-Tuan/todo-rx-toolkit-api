import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getTodo } from "../../redux/action/getTodo";
import { RootState } from "../../redux/store";
import GetDateToday from "../../component/GetDateToday";
import bgrHeaderNight from "../../images/header-night.jpg";
import GetListTodo from "../../component/GetListTodo";
import AddTodo from "../../component/AddTodo";
import TotalTask from "../../component/TotalTask";

const todo = () => {
    return (
        <div className="content">
            <header
                className="app-header"
                style={{ backgroundImage: "url(" + bgrHeaderNight.src + ")" }}
            >
                <GetDateToday />
            </header>
            <div className="todo-container">
                <AddTodo />
                <GetListTodo />
                <TotalTask />
            </div>
        </div>
    );
};
export default todo;
