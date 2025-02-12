import React from 'react';
import CardForm from './CardForm';
import CardList from './CardList';

const Step2 = ({ prevStep, nextStep, setCardData, cardData, values }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        nextStep();
    };

    return (
        <div className="container">
            <h2>Информация о банковской карте</h2>
            <div className="card-form">
                <CardList
                    cardNumber={cardData.cardNumber}
                    cardName={cardData.cardName}
                    cardMonth={cardData.cardMonth}
                    cardYear={cardData.cardYear}
                />
                <CardForm setCardData={setCardData} values={values} />
            </div>
            <form onSubmit={handleSubmit} class="info_card">
                <button type="button" onClick={prevStep}>Назад</button>
                <button type="submit">Продолжить</button>
            </form>
        </div>
    );
};

export default Step2;