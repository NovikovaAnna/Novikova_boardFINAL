import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Button from './Button';

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
        navigate('/boards');
    };

    return (
        <div>
            {!isRegistering && <Button onClick={() => setIsRegistering(true)}>Зарегистрироваться</Button>}
            {isRegistering && (
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register('name', { required: true })} placeholder="Имя" />
                    {errors.name && <span>Это поле обязательно</span>}

                    <input {...register('email', { required: true, pattern: /^\S+@\S+$/i })} placeholder="Email" />
                    {errors.email && <span>Неверный формат email</span>}

                    <input {...register('password', { required: true, minLength: 6 })} placeholder="Пароль" type="password" />
                    {errors.password && <span>Пароль должен быть не менее 6 символов</span>}

                    <Button>Отправить</Button>
                </form>
            )}
        </div>
    );
};

export default HomePage;
