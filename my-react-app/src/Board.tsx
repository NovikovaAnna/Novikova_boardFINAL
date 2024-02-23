import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTasks } from './boardSlice.ts';
import { RootState } from './store';
import { IBoard } from './models';
import { Card, CardContent, Typography, List, ListItem, ListItemText, Checkbox } from '@mui/material';

interface BoardProps {
    board: IBoard;
}

const Board: React.FC<BoardProps> = ({ board }) => {
    const dispatch = useDispatch();
    const { tasks, status, error } = useSelector((state: RootState) => state.board || initialState);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchTasks());
        }
    }, [board.id, status, dispatch]);

    return (
        <Card style={{ margin: '20px', width: '300px' }}>
            <CardContent>
                <Typography variant="h5" component="h2">
                    {board.name}
                </Typography>
                <List>
                    {tasks.map((task) => (
                        <ListItem key={task.id} dense button>
                            <Checkbox edge="start" checked={task.completed} tabIndex={-1} disableRipple />
                            <ListItemText primary={task.title} />
                        </ListItem>
                    ))}
                </List>
                {error && <p>Ошибка: {error}</p>}
            </CardContent>
        </Card>
    );
};

export default Board;
