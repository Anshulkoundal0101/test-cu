import React, { useState } from 'react';
import axios from 'axios';
import './App.css'; // Optional: for custom styles

const App = () => {
    const [inputData, setInputData] = useState('');
    const [responseData, setResponseData] = useState(null);
    const [error, setError] = useState('');
    const [selectedOptions, setSelectedOptions] = useState({
        alphabets: false,
        numbers: false,
        highestAlphabet: false,
    });

    const handleSubmit = async () => {
        setError('');
        setResponseData(null);
        try {
            const response = await axios.post('https://your-backend-url/bfhl', { data: JSON.parse(inputData) });
            setResponseData(response.data);
        } catch (err) {
            setError('Invalid JSON input or server error');
        }
    };

    const handleOptionChange = (event) => {
        const { name, checked } = event.target;
        setSelectedOptions((prev) => ({ ...prev, [name]: checked }));
    };

    const renderResponse = () => {
        if (!responseData) return null;

        const { numbers, alphabets, highest_alphabet } = responseData;

        return (
            <div>
                <h3>Response:</h3>
                {selectedOptions.numbers && <div><strong>Numbers:</strong> {numbers.join(', ')}</div>}
                {selectedOptions.alphabets && <div><strong>Alphabets:</strong> {alphabets.join(', ')}</div>}
                {selectedOptions.highestAlphabet && <div><strong>Highest Alphabet:</strong> {highest_alphabet.join(', ')}</div>}
            </div>
        );
    };

    return (
        <div className="App">
            <h1>Your Roll Number</h1>
            <textarea
                rows="4"
                cols="50"
                value={inputData}
                onChange={(e) => setInputData(e.target.value)}
                placeholder='Enter JSON data here, e.g., {"data": ["A", "C", "z"]}'
            />
            <br />
            <button onClick={handleSubmit}>Submit</button>
            {error && <p className="error">{error}</p>}
            {responseData && (
                <div>
                    <h3>Select Options to Display:</h3>
                    <label>
                        <input
                            type="checkbox"
                            name="alphabets"
                            checked={selectedOptions.alphabets}
                            onChange={handleOptionChange}
                        />
                        Alphabets
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="numbers"
                            checked={selectedOptions.numbers}
                            onChange={handleOptionChange}
                        />
                        Numbers
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="highestAlphabet"
                            checked={selectedOptions.highestAlphabet}
                            onChange={handleOptionChange}
                        />
                        Highest Alphabet
                    </label>
                    {renderResponse()}
                </div>
            )}
        </div>
    );
};

export default App;