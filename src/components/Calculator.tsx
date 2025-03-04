import React from 'react';
import Radio from '@mui/material/Radio';

export default function Calculator() {

    // Radio button state
    const [selectedValue, setSelectedValue] = React.useState('a');

    // Handle form changes for both metric and imperial systems
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedValue(event.target.value);
        setBmi(null);
    };

    const handleHeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value.replace(/[^0-9]/g, '');
        setHeight(value);
    };

    const handleWeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value.replace(/[^0-9]/g, ''); // Permet uniquement les chiffres
        setWeight(value);
    };

    const handleFeetChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFeet(event.target.value.replace(/[^0-9]/g, ''));
    };

    const handleInchesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInches(event.target.value.replace(/[^0-9]/g, ''));
    };

    const handleStonesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setStones(event.target.value.replace(/[^0-9]/g, ''));
    };

    const handlePoundsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPounds(event.target.value.replace(/[^0-9]/g, ''));
    };

    //Handle focus for placeholder
    const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
        if (event.target.value === '0') {
            event.target.value = '';
        }
    };

    // Metric system values
    const [height, setHeight] = React.useState("");
    const [weight, setWeight] = React.useState("");

    // Imperial system values
    const [feet, setFeet] = React.useState("");
    const [inches, setInches] = React.useState("");
    const [stones, setStones] = React.useState("");
    const [pounds, setPounds] = React.useState("");

    const [bmi, setBmi] = React.useState(null);
    const [idealWeightRange, setIdealWeightRange] = React.useState(null);

    // Define which system is selected
    const isMetric = selectedValue === "a";
    const isImperial = selectedValue === "b";

    // Check if values are valid
    const isHeightValid = isMetric
        ? Number(height) > 0
        : Number(feet) > 0 && inches !== "" && Number(inches) >= 0;

    const isWeightValid = isMetric
        ? Number(weight) > 0
        : Number(stones) > 0 && pounds !== "" && Number(pounds) >= 0;

    // Calculate BMI  
    const calculateBMI = () => {
        // Metric calculation
        if (isMetric && isHeightValid && isWeightValid) {
            const heightInMeters = Number(height) / 100;
            const weightInKg = Number(weight);
            const result = (weightInKg / (heightInMeters * heightInMeters)).toFixed(2);
            setBmi(result);

            const minWeight = 18.5 * (heightInMeters ** 2);
            const maxWeight = 24.9 * (heightInMeters ** 2);
            setIdealWeightRange(`${minWeight.toFixed(1)} kg - ${maxWeight.toFixed(1)} kg`);
        }
            // Imperial calculation
        else if (isImperial && isHeightValid && isWeightValid) {
            const totalInches = Number(feet) * 12 + Number(inches);
            const heightInMeters = totalInches * 0.0254;

            const totalPounds = Number(stones) * 14 + Number(pounds);
            const weightInKg = totalPounds * 0.453592;

            const result = (weightInKg / (heightInMeters * heightInMeters)).toFixed(2);
            setBmi(result);

            const minWeightLbs = (18.5 * (heightInMeters ** 2)) / 0.453592;
            const maxWeightLbs = (24.9 * (heightInMeters ** 2)) / 0.453592;
            setIdealWeightRange(`${minWeightLbs.toFixed(1)} lbs - ${maxWeightLbs.toFixed(1)} lbs`);
        }
    };

    React.useEffect(() => {
        calculateBMI();
    }, [height, weight, feet, inches, stones, pounds, selectedValue]);

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
                                <input className='input-left' type="text" min="0" placeholder="0" value={feet} onChange={handleFeetChange} /><br />
                                <span className='unit unit-left'>ft</span>
                                <input type="text" min="0" placeholder="0" value={inches} onChange={handleInchesChange} /><br />
                                <span className='unit'>in</span>
                            </div>
                        </div>
                    </div>
                    <div className='input-container input-container-2nd'>
                        <label htmlFor="">Weight</label><br />
                        <div className='imperial-container-inputs'>
                            <input className='input-left' type="text" min="0" placeholder="0" value={stones} onChange={handleStonesChange} /><br />
                            <span className='unit unit-left'>st</span>
                            <input type="text" min="0" placeholder="0" value={pounds} onChange={handlePoundsChange} /><br />
                            <span className='unit'>lbs</span>
                        </div>
                    </div>
                </div>
            )}

            <div className="welcome-card">
                {(!isHeightValid && !isWeightValid) ? (
                    <>
                        <span className="welcome-card-title">Welcome!</span>
                        <p>Enter your height and weight and you’ll see your BMI result here.</p>
                    </>
                ) : (!isHeightValid) ? (
                    <>
                        <span className="welcome-card-title">Missing Information</span>
                        <p>Please enter your height to calculate your BMI.</p>
                    </>
                ) : (!isWeightValid) ? (
                    <>
                        <span className="welcome-card-title">Missing Information</span>
                        <p>Please enter your weight to calculate your BMI.</p>
                    </>
                ) : (bmi && bmi > 0) ? (
                    <>
                        <span className="welcome-card-title">Your BMI is...</span>
                        <span className="bmi">{bmi}</span>
                        <p>Your BMI suggests you’re a healthy weight. Your ideal weight is between {idealWeightRange}.</p>
                    </>
                ) : (
                    <>
                        <span className="welcome-card-title">Invalid Input</span>
                        <p>Please enter valid positive numbers for height and weight.</p>
                    </>
                )}
            </div>

        </div>
    );
}
