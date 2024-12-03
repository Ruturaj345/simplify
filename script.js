function generateOtp() {
    const digits = '123456789';
    let otp = '';

    for (let i = 0; i < 4; i++) {
        const randomIndex = Math.floor(Math.random() * digits.length);
        otp += digits[randomIndex];
    }

    // Display OTP on the UI
    document.getElementById('otp-display').textContent = otp;
    document.getElementById('error-message').textContent = '';
}