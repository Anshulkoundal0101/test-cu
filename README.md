# test-cu
# React JSON Parser and Response Display

This is a React-based web application that allows users to input JSON data, process it on the backend, and display various types of parsed information. The app processes data including numbers, alphabets, and the highest alphabet from a given JSON input.

## Features

- Users can input JSON data into a textarea.
- The application sends the input data to a backend API (`POST /bfhl`) for processing.
- Users can select different options to display the processed response:
  - Alphabets
  - Numbers
  - Highest Alphabet
- The app handles errors like invalid JSON input or server issues.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Axios**: Promise-based HTTP client for making requests to the backend API.
- **CSS**: For styling the app (optional for custom styles).

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/react-json-parser.git
