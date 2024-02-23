// src/components/BoardsPage.tsx
import React, { useState } from 'react';
import Board from '../Board.tsx';
import { IBoard } from '../models';
import { Grid } from '@mui/material';

// Начальные данные для примера
const initialBoards: IBoard[] = [
    {
        id: 'board-1',
        name: 'Доска 1',
        tasks: [
            { id: 'task-1', title: 'Задача 1', completed: false },
            { id: 'task-2', title: 'Задача 2', completed: true },
        ],
    },
    // Добавьте больше досок и задач по желанию
];

const BoardsPage: React.FC = () => {
    const [boards] = useState<IBoard[]>(initialBoards);

    return (
        <Grid container spacing={2}>
            {boards.map(board => (
                <Grid item key={board.id}>
                    <Board board={board} />
                </Grid>
            ))}
        </Grid>
    );
};

export default BoardsPage;
