/* =====================================
   BRIGHTPATH TUITION CENTRE
   JavaScript functionality
===================================== */

// 1. Mobile navigation menu

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {
    const isOpen = navLinks.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );

    menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Close the mobile menu after clicking a navigation link

navLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation menu");
        menuToggle.textContent = "☰";
    });
});

// 2. Automatically update the copyright year

document.getElementById("currentYear").textContent =
    new Date().getFullYear();

// 3. Student enquiry form

const enquiryForm = document.getElementById("enquiryForm");
const formStatus = document.getElementById("formStatus");

enquiryForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Check that the browser's form validation passes
    if (!enquiryForm.checkValidity()) {
        enquiryForm.reportValidity();
        return;
    }

    const studentName = document
        .getElementById("studentName")
        .value.trim();

    const phone = document.getElementById("phone").value.trim();

    const studentClass = document.getElementById("studentClass").value;

    const subject = document.getElementById("subject").value;

    // Additional basic checks
    if (studentName.length < 2) {
        showMessage("Please enter a valid name.", "error");
        return;
    }

    const digits = phone.replace(/\D/g, "");

    if (digits.length < 7 || digits.length > 15) {
        showMessage("Please enter a valid phone number.", "error");
        return;
    }

    if (!studentClass || !subject) {
        showMessage("Please select a class and subject.", "error");
        return;
    }

    // Demo only: no information is sent or stored.
    showMessage(
        "Thank you, " + studentName +
        "! Your form is valid. This demo does not send your enquiry. " +
        "Connect a backend or form service to receive real submissions.",
        "success"
    );

    console.log("Demo enquiry validated:", {
        studentName: studentName,
        phone: phone,
        studentClass: studentClass,
        subject: subject
    });
});

// 4. Display form feedback

function showMessage(message, type) {
    formStatus.textContent = message;
    formStatus.className = "form-status " + type;
}