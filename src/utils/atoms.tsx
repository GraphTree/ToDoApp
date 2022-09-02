import { atom } from 'recoil';
import {IToDo} from "../utils/types";

export const ToDoState = atom<IToDo[]>({
    key: 'ToDoState',
    default: [],
})