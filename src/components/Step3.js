import React, { useState, useCallback } from 'react';
import MapComponent from './MapComponent';

const Step3 = ({ prevStep, handleSubmit, values }) => {
    const [address, setAddress] = useState(values.address || '');

    const handleAddressChange = useCallback((newAddress) => {
        setAddress(newAddress);
    }, []);

    return (
        <div className="container">
            <div class="info_map">
                <h2>Адрес доставки</h2>
                <label>
                    Адрес:
                    <input
                        type="text"
                        name="address"
                        value={address}
                        readOnly
                    />
                </label>
                <MapComponent handleInputChange={handleAddressChange} />

                <button type="button" onClick={prevStep}>Назад</button>
                <button type="button" onClick={handleSubmit}>Завершить оформление</button>
            </div>
        </div>
    );
};

export default Step3;