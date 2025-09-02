<script>
    document.querySelector("form").addEventListener("submit", function(e) {
        const fullname = document.getElementById("fullname").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;
        const gender = document.querySelector('input[name="gender"]:checked');
        const country = document.getElementById("country").value;
        const terms = document.getElementById("terms").checked;

        // Basic validations
        if (fullname === "" || email === "" || password === "" || !gender || country === "") {
            alert("Please fill out all required fields.");
            e.preventDefault();
            return;
        }

        // Password strength check
        if (password.length < 6) {
            alert("Password must be at least 6 characters long.");
            e.preventDefault();
            return;
        }

        // Terms and conditions
        if (!terms) {
            alert("You must agree to the Terms and Conditions.");
            e.preventDefault();
        }
    });
</script>
