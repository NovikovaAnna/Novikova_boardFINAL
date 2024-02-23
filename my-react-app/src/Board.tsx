import React from 'react';
import { IBoard } from '../src/models.ts';
import { Card, CardContent, Typography, List, ListItem, ListItemText, Checkbox } from '@mui/material';

interface BoardProps {
    board: IBoard;
}

const Board: React.FC<BoardProps> = ({ board }) => {
    return (
        <Card style={{ margin: '20px', width: '300px' }}>
            <CardContent>
                <Typography variant="h5" component="h2">
                    {board.name}
                </Typography>
                <List>
                    {board.tasks.map(task => (
                        <ListItem key={task.id} dense button>
                            <Checkbox edge="start" checked={task.completed} tabIndex={-1} disableRipple />
                            <ListItemText primary={task.title} />
                        </ListItem>
                    ))}
                </List>
            </CardContent>
        </Card>
    );
};

export default Board;
