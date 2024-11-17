// Navigate from Home Page to Sign In Page
// Navigate from Home Page to Sign In Page when "Doctor" button is clicked
document.getElementById('doctorButton').addEventListener('click', function() {
    document.getElementById('homePage').classList.add('hidden');
    document.getElementById('signInPage').classList.remove('hidden');
});
// Function to navigate to a specific page by hiding others
function navigateTo(pageId) {
    document.querySelectorAll(".page").forEach(page => page.classList.add("hidden"));
    document.getElementById(pageId).classList.remove("hidden");
}

// Event listener for the Patient button
document.getElementById("patientButton").addEventListener("click", function () {
    navigateTo("PatientSignInPage");
    const patientAccounts = [
        { username: "23EC441", password: "thrish" },
        { username: "patient2", password: "secure456" },
    ];
});
// Mock storage for user accounts (for demonstration purposes)
// Handle the Sign In Page form submission
const mockAccounts = [
    { username: "23EC441", password: "thrish" },
    { username: "drjohn", password: "securepass" }
];

// Navigation function
function navigateTo(pageId) {
    // Hide all pages
    document.querySelectorAll(".page").forEach(page => page.classList.add("hidden"));
    // Show the specified page
    document.getElementById(pageId).classList.remove("hidden");
}

// Handle Sign In
document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;

    // Check if user exists in mockAccounts
    const user = mockAccounts.find(
        account => account.username === username && account.password === password
    );

    if (user) {
        alert("Sign-in successful! Navigating to the Scheduling Page.");
        navigateTo("schedulingPage");
    } else {
        alert("Invalid username or password. Please try again or sign up.");
    }
});

// Navigate to Sign-Up Page when "Sign up" is clicked
document.getElementById("signUpButton").addEventListener("click", function (e) {
    e.preventDefault(); // Prevent default button action
    navigateTo("signUpPage");
});
 // Optional alert for successful sign-in
    document.getElementById('signUpButton').addEventListener('click', function() {
        document.getElementById('signInPage').classList.add('hidden');
        document.getElementById('signUpPage').classList.remove('hidden');
    });
        document.getElementById('signUpPage').addEventListener('submit', function(e) {
            e.preventDefault();
        
            const newUsername = document.getElementById('newUsername').value;
            const newPassword = document.getElementById('newPassword').value;
            const conPassword = document.getElementById('conPassword').value;
            const termsAccepted = document.getElementById('terms').checked;
        
            // Validate terms acceptance
            if (!termsAccepted) {
                alert('You must accept the terms and conditions to proceed.');
                return;
            }
        
            // Validate password match
            if (newPassword !== conPassword) {
                alert('Passwords do not match.');
                return;
            }
        
            // Check for empty fields
            if (newUsername && newPassword && conPassword && termsAccepted) {
                alert('Account created successfully!');
                document.getElementById('signUpPage').classList.add('hidden');
                document.getElementById('licensePage').classList.remove('hidden');
                // Additional logic for account creation can be added here
            } else {
                alert('Please fill in all fields.');
            }
});
// Simulated OTP values
let phoneOtp = Math.floor(100000 + Math.random() * 900000);  // Random 6-digit OTP for phone
let emailOtp = Math.floor(100000 + Math.random() * 900000);  // Random 6-digit OTP for email

// Send OTP for Phone Number
document.getElementById('numberOtp').addEventListener('click', function () {
    const phoneNumber = document.getElementById('phoneNumber').value;

    // Validate phone number
    if (!phoneNumber) {
        alert('Please enter your phone number.');
        return;
    }
    
    // Check if phone number is valid (10 digits and numbers only)
    if (!/^\d{10}$/.test(phoneNumber)) {
        alert('Invalid Input. Only numbers of length 10-Digits.');
        return;
    }

    // Simulate sending OTP to phone
    alert(`OTP sent to your phone number: ${phoneOtp}`);
});
document.getElementById('license number').addEventListener('input', function () {
    const licenseNumberInput = document.getElementById('license number');
    const licenseNumber = licenseNumberInput.value;

    // Check if input is numeric and has exactly 12 digits
    if (!/^\d{0,12}$/.test(licenseNumber)) {
        alert('No Alphabets are Allowed or Invalid License Number');
        licenseNumberInput.value = licenseNumber.slice(0, -1); // Remove invalid characters
    }
});

// Verify Phone OTP
document.getElementById('enterNumberOtp').addEventListener('blur', function () {
    const enteredPhoneOtp = document.getElementById('enterNumberOtp').value;

    if (enteredPhoneOtp == phoneOtp) {
        alert('Phone OTP verified successfully!');
    } else {
        alert('Invalid Phone OTP. Please try again.');
    }
});

// Send OTP for Email
document.getElementById('emailOtp').addEventListener('click', function () {
    const email = document.getElementById('email').value;

    // Validate email
    if (!email) {
        alert('Please enter your email ID.');
        return;
    }
    
    // Check if email ends with '@gmail.com'
    if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Simulate sending OTP to email
    alert(`OTP sent to your email: ${emailOtp}`);
});

document.getElementById('nextButton').addEventListener('click', function (e) {
    e.preventDefault();

    const enteredPhoneOtp = document.getElementById('enterNumberOtp').value;
    const enteredEmailOtp = document.getElementById('emailOtp1').value;

    if (enteredPhoneOtp == phoneOtp && enteredEmailOtp == emailOtp) {
        alert('All verifications complete! Proceeding to the next step.');
        document.getElementById('licensePage').classList.add('hidden');
        document.getElementById('doctorsDocumentPage').classList.remove('hidden');
        // Add navigation logic to proceed further
    } else {
        alert('Please complete all verifications before proceeding.');
    }
});

// Handle certificate upload
document.getElementById('certificateUploadButton').addEventListener('click', function () {
    const certificateInput = document.getElementById('certificateUpload');
    const certificateStatus = document.getElementById('certificateStatus');

    if (certificateInput.files.length === 0) {
        alert('Please select a certificate to upload.');
        return;
    }

    const certificateFile = certificateInput.files[0];
    certificateStatus.textContent = `Uploaded: ${certificateFile.name}`;
    alert('Certificate uploaded successfully!');
});

// Handle license document upload
document.getElementById('licenseUploadButton').addEventListener('click', function () {
    const licenseInput = document.getElementById('licenseUpload');
    const licenseStatus = document.getElementById('licenseStatus');

    if (licenseInput.files.length === 0) {
        alert('Please select a license document to upload.');
        return;
    }

    const licenseFile = licenseInput.files[0];
    licenseStatus.textContent = `Uploaded: ${licenseFile.name}`;
    alert('License document uploaded successfully!');
});

// Submit documents
document.getElementById('submitDocuments').addEventListener('click', function () {
    const certificateInput = document.getElementById('certificateUpload');
    const licenseInput = document.getElementById('licenseUpload');

    if (certificateInput.files.length === 0 || licenseInput.files.length === 0) {
        alert('Please upload both certificate and license document before submitting.');
        document.getElementById('doctorsDocumentPage').classList.add('hidden');
        document.getElementById('schedulingPage').classList.remove('hidden');
        return;
    }

    // Additional logic to handle form submission, e.g., uploading files to a server
    alert('Documents submitted successfully!');
    document.getElementById('doctorsDocumentPage').classList.add('hidden');
    document.getElementById('schedulingPage').classList.remove('hidden');
});
// Handle the scheduling form submission
document.querySelector('.selectTime').addEventListener('click', function (e) {
    e.preventDefault();

    // Get the hospital name
    const hospitalName = document.getElementById('hospitalname').value.trim();
    if (!hospitalName) {
        alert('Please enter the hospital name.');
        return;
    }

    // Get the selected time
    const hours = document.getElementById('hours').value;
    const minutes = document.getElementById('minutes').value;
    const ampm = document.getElementById('ampm').value;

    // Validate the input time
    if (hours < 1 || hours > 12 || minutes < 0 || minutes > 59) {
        alert('Invalid time. Please enter valid hours (1-12) and minutes (0-59).');
        return;
    }

    // Display the selected schedule
    const selectedTime = `${hospitalName} - ${hours}:${minutes.padStart(2, '0')} ${ampm}`;
    document.getElementById('selectedTime').innerText = `Scheduled Time: ${selectedTime}`;

    // Update schedule (this can be saved to the database or displayed elsewhere)
    alert(`Your schedule is set: ${selectedTime}`);
});

// Handle the "Next" button to navigate to the next page
document.querySelector('.next').addEventListener('click', function () {
    const hospitalName = document.getElementById('hospitalname').value.trim();
    const hours = document.getElementById('hours').value;
    const minutes = document.getElementById('minutes').value;
    const ampm = document.getElementById('ampm').value;

    if (!hospitalName || hours === '' || minutes === '' || !ampm) {
        alert('Please complete the scheduling before proceeding.');
        return;
    }

    // Assuming validation is successful, navigate to the next page
    document.getElementById('schedulingPage').classList.add('hidden');
    // Add logic here to show the next page, for example:
    // document.getElementById('nextPage').classList.remove('hidden');
    alert('Navigating to the next step.');
});
// Mock patient accounts
const patientAccounts = [
    { username: "23EC441", password: "thrish" },
    { username: "patient2", password: "secure456" },
];

// Function to navigate between pages
function navigateTo(pageId) {
    // Hide all pages
    document.querySelectorAll(".page").forEach(page => page.classList.add("hidden"));
    // Show the target page
    document.getElementById(pageId).classList.remove("hidden");
}

// Handle patient sign-in
document.getElementById("PsignIn").addEventListener("click", function (e) {
    e.preventDefault(); // Prevent default form submission behavior

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;

    // Check if the user exists in the patientAccounts database
    const user = patientAccounts.find(
        account => account.username === username && account.password === password
    );

    if (user) {
        alert("Sign-in successful! Redirecting to Patient Home Page...");
        navigateTo("PatientHomePage"); // Navigate to Patient Home Page
    } else {
        alert("Invalid username or password. Please try again or sign up.");
    }
});

// Handle sign-up button click
document.getElementById("PsignUp").addEventListener("click", function (e) {
    e.preventDefault(); // Prevent default form submission behavior
    navigateTo("PatientAadhar"); // Navigate to Patient Aadhar (Sign Up Page)
});
// Function to generate OTP (simple random 6-digit number)
function generateOTP() {
    return Math.floor(100000 + Math.random() * 900000); // Generate a 6-digit OTP
}

// Function to validate Aadhar Number (Only 12 digits allowed)
function validateAadhar(aadhar) {
    const regex = /^\d{12}$/; // Only 12 digits allowed
    console.log('Validating Aadhar:', aadhar);
    return regex.test(aadhar);
}

// Function to validate Phone Number (Only 10 digits allowed)
function validatePhoneNumber(phone) {
    const regex = /^\d{10}$/; // Only 10 digits allowed
    console.log('Validating Phone:', phone);
    return regex.test(phone);
}

// Function to validate Email ID (Should end with "@gmail.com")
function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/; // Email must end with @gmail.com
    console.log('Validating Email:', email);
    return regex.test(email);
}

// Event listener for the Aadhar OTP button
document.getElementById("numberOtp").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default behavior
    console.log('Aadhar OTP Button clicked');

    const aadharNumber = document.getElementById("Aadhar number").value.trim();
    console.log('Entered Aadhar:', aadharNumber);
    
    // Check if Aadhar Number is valid
    if (!validateAadhar(aadharNumber)) {
        alert("Invalid Aadhar Number. It should be exactly 12 digits.");
        return; // Stop execution if invalid
    }

    // Generate and display OTP for Aadhar
    const aadharOtp = generateOTP();
    alert(`Aadhar OTP sent! Your OTP is: ${aadharOtp}`);
    document.getElementById("enterNumberOtp").value = ''; // Clear OTP field after sending OTP
});

// Event listener for the Phone Number OTP button
document.getElementById("numberOtpPhone").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default behavior
    console.log('Phone OTP Button clicked');

    const phoneNumber = document.getElementById("phoneNumber").value.trim();
    console.log('Entered Phone Number:', phoneNumber);
    
    // Validate Phone Number (Only 10 digits allowed)
    if (!validatePhoneNumber(phoneNumber)) {
        alert("Invalid Phone Number. It should be exactly 10 digits.");
        return; // Stop execution if invalid
    }

    // Generate and display OTP for Phone Number
    const phoneOtp = generateOTP();
    alert(`Phone OTP sent! Your OTP is: ${phoneOtp}`);
    document.getElementById("enterPhoneOtp").value = ''; // Clear OTP field after sending OTP
});

// Event listener for the Email OTP button
document.getElementById("emailOtp").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default behavior
    console.log('Email OTP Button clicked');

    const email = document.getElementById("email").value.trim();
    console.log('Entered Email:', email);
    
    // Validate Email ID (Should end with "@gmail.com")
    if (!validateEmail(email)) {
        alert("Invalid Email ID. It should end with '@gmail.com'.");
        return; // Stop execution if invalid
    }

    // Generate and display OTP for Email
    const emailOtp = generateOTP();
    alert(`Email OTP sent! Your OTP is: ${emailOtp}`);
    document.getElementById("emailOtp1").value = ''; // Clear OTP field after sending OTP
});

// Event listener for the Next button
document.getElementById("nextButton").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default form submission behavior
    console.log('Next Button clicked');

    // Get the values from the input fields
    const aadharNumber = document.getElementById("Aadharnumber").value.trim();
    const phoneNumber = document.getElementById("phoneNumber").value.trim();
    const email = document.getElementById("email").value.trim();
    const aadharOtpEntered = document.getElementById("enterNumberOtp").value.trim();
    const phoneOtpEntered = document.getElementById("enterPhoneOtp").value.trim();
    const emailOtpEntered = document.getElementById("emailOtp1").value.trim();

    console.log('Entered values for Next:', aadharNumber, phoneNumber, email, aadharOtpEntered, phoneOtpEntered, emailOtpEntered);

    // Validate Aadhar Number (Only 12 digits and no alphabets)
    if (!validateAadhar(numberOtp)) {
        alert("Invalid Aadhar Number. It should be exactly 12 digits.");
        return;
    }

    // Validate Phone Number (Only 10 digits and no alphabets)
    if (!validatePhoneNumber(numberOtp1)) {
        alert("Invalid Phone Number. It should be exactly 10 digits.");
        return;
    }

    // Validate Email (Should end with @gmail.com)
    if (!validateEmail(emailOtp)) {
        alert("Invalid Email ID. It should end with '@gmail.com'.");
        return;
    }

    // Check if OTPs entered match the generated OTPs (You can enhance this with more complex OTP handling)
    if (!aadharOtpEntered || !phoneOtpEntered || !emailOtpEntered) {
        alert("Please enter all OTPs to proceed.");
        return;
    }

    // If everything is valid
    alert("All details validated successfully. Proceeding to the next page.");

    // Example: Navigate to the next page
    navigateTo("NextPage"); // Replace with the actual target page ID
});

// Function to navigate to a different page
function navigateTo(pageId) {
    // Hide all pages
    document.querySelectorAll(".page").forEach(page => page.classList.add("hidden"));
    // Show the specified page
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.remove("hidden");
    } else {
        console.error("Target page not found:", pageId); // Debugging log for error
    }
}










