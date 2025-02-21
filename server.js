// POST route to process input data
app.post("/bfhl", (req, res) => {
    try {
        const { data } = req.body;

        // Validate input
        if (!Array.isArray(data)) {
            return res.status(400).json({ is_success: false, message: "Invalid input format" });
        }

        let numbers = [];
        let alphabets = [];

        // Categorize numbers and alphabets
        data.forEach((item) => {
            if (!isNaN(item)) {
                numbers.push(item);
            } else if (typeof item === "string" && item.length === 1 && /^[A-Za-z]$/.test(item)) {
                alphabets.push(item);
            }
        });

        // Determine the highest alphabet (case-insensitive)
        const highestAlphabet = alphabets.length ? [alphabets.sort().pop()] : [];

        // Respond with processed data
        res.status(200).json({
            is_success: true,
            user_id: "anshul_koundal_22bcs16818",
            email: "anshulkoundal2753@gmail.com",
            roll_number: "22bcs16818",
            numbers,
            alphabets,
            highest_alphabet: highestAlphabet,
        });

    } catch (error) {
        res.status(500).json({ is_success: false, message: "Internal Server Error" });
    }
});
