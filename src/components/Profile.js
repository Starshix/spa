import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';


export const Profile = () => {
    const formData = useSelector(state => state.formData || {});
    const dispatch = useDispatch();

    const handleSubmit = useCallback((event) => {
        event.preventDefault();
        const form = event.target;
        const formData = {};
         for (const input of form.elements){
            if (input.tagName === 'INPUT' || input.tagName === 'SELECT') {
                formData[input.name] = input.value;
            }
        }
        dispatch({ type: 'SAVE_FORM_DATA', payload: formData });
        alert('Profile saved!');
    }, [dispatch]);

    return (
        <div className="form-container">
            <h2>Ваш профиль</h2>
            <form id="profileForm" onSubmit={handleSubmit}>
                <label htmlFor="name">Имя:</label>
                <input type="text" id="name" name="name" defaultValue={formData.name || ''} required />
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" defaultValue={formData.email || ''} required />
                <label htmlFor="age">Возраст:</label>
                <input type="number" id="age" name="age" defaultValue={formData.age || ''} required />
                <label htmlFor="city">Город:</label>
                <select id="city" name="city" defaultValue={formData.city || ''}>
                     <option value="">Выберите город</option>
                    <option value="Moscow">Москва</option>
                    <option value="Saint-Petersburg">Санкт-Петербург</option>
                     <option value="Ulyanovsk">Ульяновск</option>
                 </select>
                 <button type="submit">Сохранить профиль</button>
            </form>
        </div>
    );
};