document.addEventListener('DOMContentLoaded', function() {
    const logo = document.querySelector('header .photo');
    const navUl = document.querySelector('header nav ul');
    const darkModeToggle = document.getElementById('dark-mode-toggle');

    // Verifica si el modo oscuro estaba activado antes
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
    }

    if (logo) {
        logo.addEventListener('click', function() {
            navUl.classList.toggle('active');
        });
    }

    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');

            // Guarda la preferencia en localStorage
            if (document.body.classList.contains('dark-mode')) {
                localStorage.setItem('darkMode', 'enabled');
                darkModeToggle.textContent = 'Light Mode';
            } else {
                localStorage.setItem('darkMode', 'disabled');
                darkModeToggle.textContent = 'Dark Mode';
            }

            adjustTextColors();
        });

        function adjustTextColors() {
            const textElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, span,a,p');
            textElements.forEach(element => {
                if (document.body.classList.contains('dark-mode')) {
                    element.style.color = '#2097AB';
                } else {
                    element.style.color = '#000000';
                }
            });

            const formElements = document.querySelectorAll('.contact-form, .contact-info');
            formElements.forEach(element => {
                if (document.body.classList.contains('dark-mode')) {
                    element.style.backgroundColor = '#ffffff';
                    element.style.color = '#000000';
                } else {
                    element.style.backgroundColor = '#ffffff';
                    element.style.color = '#000000';
                }
            });
        }

        adjustTextColors();
    }
});
