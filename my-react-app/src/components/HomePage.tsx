import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Container, Paper, Typography, Box, TextField, Button } from '@mui/material';

interface IFormInput {
    name: string;
    email: string;
    password: string;
}

const HomePage: React.FC = () => {
    const [isRegistering, setIsRegistering] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>();
    const navigate = useNavigate();

    const onSubmit = (data: IFormInput) => {
        console.log(data);
        navigate('/boards'); // Перенаправление пользователя на страницу с досками
    };

    return (
        <Container component="main" maxWidth="md">
            <Paper elevation={6} style={{ marginTop: '2rem', padding: '2rem' }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Добро пожаловать в приложение с досками
                </Typography>
                <Typography variant="body1" paragraph>
                    Управляйте своими задачами и проектами с помощью досок. Вы можете добавлять, удалять и отмечать задачи как выполненные.
                </Typography>
                {!isRegistering && (
                    <Box textAlign="center" marginTop="2rem">
                        <Button variant="contained" color="primary" onClick={() => setIsRegistering(true)}>
                            Зарегистрироваться
                        </Button>
                    </Box>
                )}
                {isRegistering && (
                    <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <TextField
                            label="Имя"
                            {...register('name', { required: 'Это поле обязательно' })}
                            error={!!errors.name}
                            helperText={errors.name?.message}
                        />
                        <TextField
                            label="Email"
                            {...register('email', { required: 'Это поле обязательно', pattern: { value: /^\S+@\S+$/i, message: 'Неверный формат email' } })}
                            error={!!errors.email}
                            helperText={errors.email?.message}
                        />
                        <TextField
                            label="Пароль"
                            type="password"
                            {...register('password', { required: 'Это поле обязательно', minLength: { value: 6, message: 'Пароль должен быть не менее 6 символов' } })}
                            error={!!errors.password}
                            helperText={errors.password?.message}
                        />
                        <Button type="submit" variant="contained" color="primary">
                            Отправить
                        </Button>
                    </form>
                )}
            </Paper>
        </Container>
    );
};

export default HomePage;
