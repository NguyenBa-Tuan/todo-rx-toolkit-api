import { useCallback, useState } from "react";
import { useAppSelector } from "../hooks";

const TotalTask = () => {
    const listTodo = useAppSelector((state) => state.listTodo);

    const getLength = useCallback(
        (isOpen = "all") => {
            let getLenght;
            if (isOpen === "all") {
                getLenght = Object.keys(listTodo);
            } else {
                getLenght = listTodo.filter((item) => item.checked !== isOpen);
            }
            return getLenght.length;
        },
        [listTodo]
    );

    return (
        <div className="total-task">
            <span>
                {getLength() + " "}
                tasks
            </span>
            <span>
                {getLength(false) + " "}
                complete
            </span>
            <span>
                {getLength(true) + " "}
                open
            </span>
        </div>
    );
};

export default TotalTask;
