import Radio from '@mui/material/Radio';
import React from 'react';

export default function Calculator() {

    const [selectedValue, setSelectedValue] = React.useState('a');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    return (
        <div className="container-calculator">
            <h2>Enter your details below</h2>
            <div className="container-radio-button">
                <div className='radio-button'>
                    <Radio
                        checked={selectedValue === 'a'}
                        onChange={handleChange}
                        value="a"
                        name="radio-buttons"
                        inputProps={{ 'aria-label': 'A' }}
                        sx={{
                            width: "31px",
                            height: "31px",
                            ".css-1qiat4j": {color: selectedValue === "a" ? "#345FF6" : "#5e6e85"},
                        }}
                    />Metric
                </div>
                <div className='radio-button'>
                    <Radio
                        checked={selectedValue === 'b'}
                        onChange={handleChange}
                        value="b"
                        name="radio-buttons"
                        inputProps={{ 'aria-label': 'B' }}
                        sx={{
                            width: "31px",
                            height: "31px",
                            ".css-1qiat4j": {color: selectedValue === "b" ? "#345FF6" : "#5e6e85"},
                        }}

                    />Imperial
                </div>
            </div>
            <div className='input-container'>
                <label htmlFor="">Height</label><br />
                <input type="text" placeholder="0" /><br />
                <span className='unit'>cm</span>
            </div>
            <div className='input-container'>
                <label htmlFor="">Weight</label><br />
                <input type="text" placeholder="0" /><br />
                <span className='unit'>kg</span>
            </div>
            <div className='welcome-card'>
                <span className='welcome-card-title'>Welcome!</span>
                <p>Enter your height and weight and you’ll see your BMI result here</p>
            </div>
        </div>
    )
}
