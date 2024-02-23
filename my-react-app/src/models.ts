export interface ITask {
    id: string;
    title: string;
    completed: boolean;
}

export interface IBoard {
    id: string;
    name: string;
    tasks: ITask[];
}
