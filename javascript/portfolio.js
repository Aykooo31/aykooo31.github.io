document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("contactForm");

    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault(); // Sayfa yenilenmesini durdur

            var name = document.getElementById("Name").value.trim();
            var phone = document.getElementById("Phone").value.trim();
            var email = document.getElementById("Email").value.trim();
            var message = document.getElementById("Message").value.trim();

            if (name === "" || phone === "" || email === "" || message === "") {
                alert("Please fill in all field(s)!");
                return;
            }

            if (!/^\d{10}$/.test(phone)) {
                alert("Phone number must be 10 digits!");
                return;
            }

            if (!/\S+@\S+\.\S+/.test(email)) {
                alert("Please enter a valid email address!");
                return;
            }

            alert("Form submitted successfully!");

            setTimeout(function() {
                location.href = location.href.split('?')[0]; // Sayfayı temiz şekilde yenile
            }, 500); // Yarım saniye sonra yenileme işlemi
        });
    } else {
        console.error("Form element not found!");
    }
});