import React from 'react';
import '../../../sass/main.scss';
import Input from './Input';
import PlayButtonHolder from '../PlayButtonHolder/PlayButtonHolder';
import MoneyInput from '../InputsHolder/MoneyInput/MoneyInput';

const inputsHolder = () => {
     return <div className="InputsHolder">
                <Input />
                <PlayButtonHolder />
            </div>
}

export default inputsHolder;