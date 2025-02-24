import React from 'react';
import Radio from '@mui/material/Radio';

export default function Calculator() {
    const [selectedValue, setSelectedValue] = React.useState('a');
    const [height, setHeight] = React.useState("");
    const [weight, setWeight] = React.useState("");
    const [bmi, setBmi] = React.useState(null);
    const [idealWeightRange, setIdealWeightRange] = React.useState(null);


    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const handleHeightChange = (event) => {
        const value = event.target.value.replace(/[^0-9]/g, '');
        setHeight(value);
    };

    const handleWeightChange = (event) => {
        const value = event.target.value.replace(/[^0-9]/g, ''); // Permet uniquement les chiffres
        setWeight(value);
    };

    const handleFocus = (event) => {
        if (event.target.value === '0') {
            event.target.value = '';
        }
    };

    const calculateBMI = () => {
        if (selectedValue === "a") {
            const heightInMeters = height / 100;
            const result = (weight / (heightInMeters * heightInMeters)).toFixed(2);
            setBmi(result);

            const minWeight = 18.5 * (heightInMeters ** 2);
            const maxWeight = 24.9 * (heightInMeters ** 2);
            setIdealWeightRange(`${minWeight.toFixed(1)} kg - ${maxWeight.toFixed(1)} kg`);

        } else if (selectedValue === "b" && height && weight) {
            // Calcul pour le système impérial
            const [feet, inches] = height.split("'").map(Number);
            const totalInches = feet * 12 + inches;
            const heightInMeters = totalInches * 0.0254;
            const weightInKg = weight * 0.453592;
            const result = (weightInKg / (heightInMeters * heightInMeters)).toFixed(2);
            setBmi(result);
        }
    };

    React.useEffect(() => {
        calculateBMI();
    }, [height, weight, selectedValue]);

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
                            ".css-1qiat4j": { color: selectedValue === "a" ? "#345FF6" : "#5e6e85" },
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
                            ".css-1qiat4j": { color: selectedValue === "b" ? "#345FF6" : "#5e6e85" },
                        }}
                    />Imperial
                </div>
            </div>
            {selectedValue === "a" ? (
                <div>
                    <div className='input-container'>
                        <label htmlFor="">Height</label><br />
                        <input type="text" placeholder="0" value={height} onChange={handleHeightChange} onFocus={handleFocus} /><br />
                        <span className='unit'>cm</span>
                    </div>
                    <div className='input-container'>
                        <label htmlFor="">Weight</label><br />
                        <input type="text" placeholder="0" value={weight} onChange={handleWeightChange} onFocus={handleFocus} /><br />
                        <span className='unit'>kg</span>
                    </div>
                </div>
            ) : (
                <div>
                    <div className='input-container'>
                        <div className='imperial-container'>
                            <label htmlFor="">Height</label><br />
                            <div className='imperial-container-inputs'>
                                <input className='input-left' type="text" min="0" placeholder="0" /><br />
                                <span className='unit unit-left'>ft</span>
                                <input type="text" min="0" placeholder="0" /><br />
                                <span className='unit'>in</span>
                            </div>
                        </div>
                    </div>
                    <div className='input-container input-container-2nd'>
                        <label htmlFor="">Weight</label><br />
                        <div className='imperial-container-inputs'>
                            <input className='input-left' type="text" min="0" placeholder="0" /><br />
                            <span className='unit unit-left'>st</span>
                            <input type="text" min="0" placeholder="0" /><br />
                            <span className='unit'>lbs</span>
                        </div>
                    </div>
                </div>
            )}
            {height === 0 || weight === 0 || height === "" || weight === "" ? (
                <div className='welcome-card'>
                    <span className='welcome-card-title'>Welcome!</span>
                    <p>Enter your height and weight and you’ll see your BMI result here.</p>
                </div>
            ) : height === 0 ? (
                <div className='welcome-card'>
                    <span className='welcome-card-title'>Missing Information</span>
                    <p>Please enter your height to calculate your BMI.</p>
                </div>
            ) : weight === 0 ? (
                <div className='welcome-card'>
                    <span className='welcome-card-title'>Missing Information</span>
                    <p>Please enter your weight to calculate your BMI.</p>
                </div>
            ) : height <= 0 || weight <= 0 ? (
                <div className='welcome-card'>
                    <span className='welcome-card-title'>Invalid Input</span>
                    <p>Please enter valid positive numbers for height and weight.</p>
                </div>
            ) : (
                <div className='welcome-card'>
                    <span className='welcome-card-title'>Your BMI is...</span>
                    <span className='bmi'>{bmi}</span>
                    <p>Your BMI suggests you’re a healthy weight. Your ideal weight is between {idealWeightRange}.</p>
                </div>
            )}

        </div>
    );
}
