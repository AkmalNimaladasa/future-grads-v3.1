// ===== Simple Form Validation =====
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("inquiryForm");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const inputs = form.querySelectorAll("input, textarea");
      let valid = true;

      inputs.forEach((input) => {
        if (!input.value.trim()) {
          input.style.borderColor = "red";
          valid = false;
        } else {
          input.style.borderColor = "#ccc";
        }
      });

      if (valid) {
        alert("Thank you! Your inquiry has been sent.");
        form.reset();
      } else {
        alert("Please fill in all fields before submitting.");
      }
    });
  }
});
