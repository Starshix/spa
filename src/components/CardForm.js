import React, { useState, useEffect } from 'react';
import MaskedInput from 'react-text-mask';

const CardForm = ({ setCardData, values }) => {
    const [cardNumber, setCardNumber] = useState(values.cardNumber || '');
    const [cardName, setCardName] = useState(values.cardName || '');
    const [cardMonth, setCardMonth] = useState(values.cardMonth || '');
    const [cardYear, setCardYear] = useState(values.cardYear || '');
    const [cardCvv, setCardCvv] = useState(values.cardCvv || '');

    const minCardYear = new Date().getFullYear();
    const [isCardFlipped, setIsCardFlipped] = useState(false);

    useEffect(() => {
        setCardData({
            cardNumber: cardNumber,
            cardName: cardName,
            cardMonth: cardMonth,
            cardYear: cardYear,
            cardCvv: cardCvv
        });
    }, [cardNumber, cardName, cardMonth, cardYear, cardCvv, setCardData]);

    const getCardType = () => {
        const number = cardNumber;
        let re = new RegExp("^4");
        if (number.match(re) != null) return "visa";

        re = new RegExp("^(34|37)");
        if (number.match(re) != null) return "amex";

        re = new RegExp("^5[1-5]");
        if (number.match(re) != null) return "mastercard";

        re = new RegExp("^6011");
        if (number.match(re) != null) return "discover";

        re = new RegExp('^9792');
        if (number.match(re) != null) return 'troy';

        return "visa";
    };

    const generateCardNumberMask = () => {
        const cardType = getCardType();
        return cardType === "amex" ? "#### ###### #####" : "#### #### #### ####";
    };

    const flipCard = (status) => {
        setIsCardFlipped(status);
    };

    const getCardNumberMask = () => {
        const maskString = generateCardNumberMask();
        return maskString.split('').map(char => (char === '#' ? /\d/ : char));
    };

    const getCvvMask = () => {
        return [/\d/, /\d/, /\d/, /\d/];
    };

    return (
        <div className="card-form__inner">
            <div className="card-input">
                <label htmlFor="cardNumber" className="card-input__label">
                    Номер карты
                </label>
                <MaskedInput
                    type="text"
                    id="cardNumber"
                    className="card-input__input"
                    mask={getCardNumberMask()}
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    data-ref="cardNumber"
                    autocomplete="off"
                    required
                    placeholder="#### #### #### ####"
                />
            </div>
            <div className="card-input">
                <label htmlFor="cardName" className="card-input__label">
                    Держатель
                </label>
                <input
                    type="text"
                    id="cardName"
                    className="card-input__input"
                    value={cardName}
                    required
                    onChange={(e) => setCardName(e.target.value)}
                    data-ref="cardName"
                    autocomplete="off"
                />
            </div>
            <div className="card-form__row">
                <div className="card-form__col">
                    <div className="card-form__group">
                        <label htmlFor="cardMonth" className="card-input__label">
                            Месяц / Год
                        </label>
                        <select
                            className="card-input__input -select"
                            id="cardMonth"
                            value={cardMonth}
                            required
                            onChange={(e) => setCardMonth(e.target.value)}
                            data-ref="cardDate"
                        >
                            <option value="" required disabled selected>
                                Месяц
                            </option>
                            {[...Array(12)].map((_, i) => {
                                const n = i + 1;
                                const disabled =
                                    n < (cardYear === minCardYear ? new Date().getMonth() + 1 : 1);
                                return (
                                    <option key={n} value={n < 10 ? '0' + n : n} disabled={disabled}>
                                        {n < 10 ? '0' + n : n}
                                    </option>
                                );
                            })}
                        </select>
                        <select
                            className="card-input__input -select"
                            id="cardYear"
                            value={cardYear}
                            required
                            onChange={(e) => setCardYear(e.target.value)}
                            data-ref="cardDate"
                        >
                            <option value="" disabled selected>
                                Год
                            </option>
                            {[...Array(12)].map((_, i) => {
                                const year = minCardYear + i;
                                return (
                                    <option key={year} value={year}>
                                        {year}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                </div>
                <div className="card-form__col -cvv">
                    <div className="card-input">
                        <label htmlFor="cardCvv" className="card-input__label">
                            CVV
                        </label>
                        <MaskedInput
                            type="text"
                            className="card-input__input"
                            id="cardCvv"
                            mask={getCvvMask()}
                            required
                            maxLength="4"
                            value={cardCvv}
                            onChange={(e) => setCardCvv(e.target.value)}
                            onFocus={() => flipCard(true)}
                            onBlur={() => flipCard(false)}
                            autocomplete="off"
                            placeholder="CVV"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardForm;