import React from 'react';
import MaskedInput from 'react-text-mask';
const Step1 = ({ nextStep, handleInputChange, values }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        nextStep();
    };

    const phoneMask = [
        '+',
        '7',
        ' ',
        '(',
        /[1-9]/,
        /\d/,
        /\d/,
        ')',
        ' ',
        /\d/,
        /\d/,
        /\d/,
        '-',
        /\d/,
        /\d/,
        '-',
        /\d/,
        /\d/,
    ];

    return (
        <div className="container">
            <h2>Информация о покупателе</h2>
            <form onSubmit={handleSubmit} class="info_sell">
                <label>
                    Имя:
                    <input
                        type="text"
                        name="name"
                        required
                        value={values.name || ''}
                        onChange={(e) => handleInputChange(e.target.name, e.target.value)}
                    />
                </label>
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        required
                        value={values.email || ''}
                        onChange={(e) => handleInputChange(e.target.name, e.target.value)}
                    />
                </label>
                <label>
                    Телефон:
                    <MaskedInput
                        mask={phoneMask}
                        name="tel"
                        id="phoneInput"
                        placeholder="+7 (___) ___-__-__"
                        required
                        value={values.tel || ''}
                        onChange={(e) => handleInputChange(e.target.name, e.target.value)}
                    />
                </label>
                <button type="submit">Продолжить</button>
            </form>
        </div>
    );
};

export default Step1;