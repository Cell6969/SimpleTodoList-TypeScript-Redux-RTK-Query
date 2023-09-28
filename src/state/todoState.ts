import { atom } from "recoil";
import { todolist } from "../model/TodoList";

const todoState = atom<todolist[]>({
    key: "todostate",
    default: []
});

export {todoState}