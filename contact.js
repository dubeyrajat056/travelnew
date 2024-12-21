
document.getElementById('contactForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    try {
        const response = await fetch('http://localhost:5000/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, phone, message })
        });

        if (response.ok) {
            alert('Your message has been sent!');
        } else {
            alert('There was a problem sending your message.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred.');
    }
});

