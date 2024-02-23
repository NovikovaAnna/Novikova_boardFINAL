import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

interface Task {
    id: string;
    title: string;
    completed: boolean;
}

interface BoardState {
    tasks: Task[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

export const initialState: BoardState = {
    tasks: [],
    status: 'idle',
    error: null,
};

export const fetchTasks = createAsyncThunk<Task[], void, { rejectValue: string }>(
    'board/fetchTasks',
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const tasks = await response.json();
            // Обрежьте массив до первых 10 элементов, чтобы соответствовать структуре вашего состояния
            return tasks.slice(0, 10);
        } catch (error) {
            return rejectWithValue((error as Error).message);
        }
    }
);

export const boardSlice = createSlice({
    name: 'board',
    initialState,
    reducers: {
        // Редьюсеры для синхронных экшенов, не использую
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTasks.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(fetchTasks.fulfilled, (state, action: PayloadAction<Task[]>) => {
                state.status = 'succeeded';
                state.tasks = action.payload;
                state.error = null;
            })
            .addCase(fetchTasks.rejected, (state, action) => {
                state.status = 'failed';
                // Уточняю тип error с помощью action.payload, которое является типом rejectValue, указанным в createAsyncThunk
                state.error = action.payload ? action.payload : 'Something went wrong';
            });
    },
});

export default boardSlice.reducer;


