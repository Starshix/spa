import React, { useMemo } from 'react';
import background from '../../assets/images/8.jpeg';
import chip from '../../assets/images/chip.png';
import visa from '../../assets/images/visa.png';

const MemoizedCardList = React.memo(function CardList({ cardNumber, cardName, cardMonth, cardYear }) {
    console.log("CardList re-rendered");
    // Функция для маскировки номера карты
    const maskedCardNumber = cardNumber ? cardNumber.replace() : '#### #### #### ####';
    const expiryDate = cardMonth && cardYear ? `${cardMonth}/${String(cardYear).slice(2,4)}` : 'ММ/ГГ';

    return (
        <div className="card-list">
            <div className="card-item">
                <div className="card-item__side -front">
                    <div className="card-item__focus"></div>
                    <div className="card-item__cover">
                        <img src={background} className="card-item__bg" alt="Card Background" />
                    </div>
                    <div className="card-item__wrapper">
                        <div className="card-item__top">
                            <img src={chip} className="card-item__chip" alt="Chip" />
                            <div className="card-item__type">
                                <img src={visa} alt="Card Type" className="card-item__typeImg" />
                            </div>
                        </div>
                        <label htmlFor="cardNumber" className="card-item__number">
                            {maskedCardNumber}
                        </label>
                        <div className="card-item__content">
                            <label htmlFor="cardName" className="card-item__info">
                                <div className="card-item__holder">Держатель</div>
                                <div className="card-item__name">{cardName || 'ИМЯ ФАМИЛИЯ'}</div>
                            </label>
                            <div className="card-item__date">
                                <label htmlFor="cardMonth" className="card-item__dateTitle">Месяц/Год</label>
                                <div className="card-item__dateItem">{expiryDate}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default MemoizedCardList;