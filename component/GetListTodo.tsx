import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { deleteTodo } from "../redux/action/deleteTodo";
import { editCheckedTodo } from "../redux/action/editCheckedTodo";
import { getTodo } from "../redux/action/getTodo";
import { RootState } from "../redux/store";
const GetListTodo = () => {
    const dispatch = useAppDispatch();
    const result = useAppSelector((state: RootState) => state.listTodo);

    useEffect(() => {
        dispatch(getTodo());
    }, [dispatch]);

    const handleDelete = async (id: number) => {
        await dispatch(deleteTodo(id));
    };

    return (
        <>
            {result.map((item) => {
                return (
                    <li
                        className={!item.checked ? "" : "complete"}
                        key={item.id}
                    >
                        <input
                            type="checkbox"
                            onChange={(e) =>
                                dispatch(
                                    editCheckedTodo({
                                        data: item,
                                        checked: e.target.checked,
                                    })
                                )
                            }
                            checked={item.checked ? true : false}
                        />
                        <span className="todo-title">{item.name}</span>
                        <span
                            className="delete-btn"
                            onClick={() => handleDelete(item.id)}
                        >
                            X
                        </span>
                    </li>
                );
            })}
        </>
    );
};

export default GetListTodo;
