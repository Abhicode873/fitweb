/* Basic Resets & Global Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box; /* Include padding and border in the element's total width and height */
}

body {
    font-family: 'Open Sans', sans-serif;
    line-height: 1.6;
    color: #333;
    background-color: #f8f8f8; /* Light background for overall page */
}

h1, h2, h3 {
    font-family: 'Montserrat', sans-serif;
    color: #222;
    margin-bottom: 0.5em;
    line-height: 1.2;
}

p {
    margin-bottom: 1em;
}

a {
    text-decoration: none;
    color: #007bff; /* Primary blue for links */
    transition: color 0.3s ease;
}

a:hover {
    color: #0056b3; /* Darker blue on hover */
}

ul {
    list-style: none;
}

/* Reusable Utility Classes */
.container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 20px; /* Padding on sides for smaller screens */
}

.section-padding {
    padding: 80px 0; /* Consistent vertical padding for sections */
}

.bg-light {
    background-color: #f4f4f4; /* Light gray background for alternating sections */
}

/* Buttons */
.btn {
    display: inline-block;
    padding: 12px 25px;
    border-radius: 5px;
    font-weight: 600;
    transition: background-color 0.3s ease, color 0.3s ease;
    border: none;
    cursor: pointer;
    font-size: 1rem;
}

.btn-primary {
    background-color: #007bff;
    color: #fff;
}

.btn-primary:hover {
    background-color: #0056b3;
}

/* Header & Navigation */
.header {
    background-color: #fff;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    position: sticky;
    top: 0;
    z-index: 1000; /* Ensure header stays on top */
    padding: 15px 0;
}

.header .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo a {
    font-size: 2.2em;
    font-weight: 700;
    color: #007bff;
}

.nav-menu {
    display: flex;
    align-items: center;
}

.nav-links {
    display: flex;
    margin: 0;
    padding: 0;
}

.nav-links li {
    margin-left: 30px;
}

.nav-links a {
    color: #333;
    font-weight: 600;
    padding: 5px 0;
}

.nav-links a:hover {
    color: #007bff;
    border-bottom: 2px solid #007bff; /* Simple hover effect */
}

/* Burger Menu (for mobile responsiveness) */
.burger-menu {
    display: none; /* Hidden by default on desktop */
    flex-direction: column;
    cursor: pointer;
    padding: 5px;
}

.burger-menu .line {
    width: 28px;
    height: 3px;
    background-color: #333;
    margin: 4px 0;
    transition: all 0.3s ease;
}

/* When menu is active (JavaScript adds 'open' class) */
.burger-menu.open .line:nth-child(1) {
    transform: rotate(-45deg) translate(-5px, 6px);
}
.burger-menu.open .line:nth-child(2) {
    opacity: 0;
}
.burger-menu.open .line:nth-child(3) {
    transform: rotate(45deg) translate(-5px, -6px);
}

/* Hero Section */
.hero-section {
    background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('D:/fitness website/images/th.jpg') no-repeat center center/cover;
    color: #fff;
    text-align: center;
    padding: 180px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 600px; /* Ensures a good height */
    position: relative;
}

.hero-content h1 {
    font-size: 3.5em;
    margin-bottom: 20px;
    color: #fff;
}

.hero-content p {
    font-size: 1.3em;
    margin-bottom: 30px;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
}

/* Section Headings */
.about-section h2, .services-section h2, .contact-section h2 {
    text-align: center;
    font-size: 2.5em;
    margin-bottom: 40px;
    position: relative;
}

/* Underline effect for section titles */
.about-section h2::after, .services-section h2::after, .contact-section h2::after {
    content: '';
    display: block;
    width: 60px;
    height: 4px;
    background-color: #007bff;
    margin: 10px auto 0;
    border-radius: 2px;
}

/* About Us Section */
.about-content {
    display: flex;
    gap: 40px;
    align-items: center;
}

.about-content img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.about-text {
    flex: 1;
}

/* Services Section */
.service-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Responsive grid */
    gap: 30px;
}

.service-item {
    background-color: #fff;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.05);
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.service-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.1);
}

.service-icon {
    font-size: 3em;
    color: #007bff;
    margin-bottom: 15px;
}

.service-item h3 {
    font-size: 1.5em;
    margin-bottom: 10px;
}

.service-item p {
    font-size: 0.95em;
    color: #555;
}

/* Contact Section */
.contact-intro {
    text-align: center;
    margin-bottom: 40px;
    font-size: 1.1em;
    color: #555;
}

.contact-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
}

.contact-form-wrapper {
    background-color: #fff;
    padding: 40px;
    border-radius: 8px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.08);
}

.form-group {
    margin-bottom: 20px;
}

.form-group label {
    display: block;
    margin-bottom: 8px;
    font-weight: 600;
    color: #444;
}

.form-group input[type="text"],
.form-group input[type="email"],
.form-group textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 1rem;
    font-family: 'Open Sans', sans-serif;
}

.form-group input:focus,
.form-group textarea:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25);
}

.contact-info {
    background-color: #fcfcfc;
    padding: 40px;
    border-radius: 8px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.08);
}

.contact-info h3 {
    margin-bottom: 25px;
    color: #007bff;
}

.contact-info p {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    color: #555;
}

.icon-left {
    margin-right: 15px;
    color: #007bff;
    font-size: 1.2em;
}

.social-icons-contact a {
    font-size: 1.8em;
    color: #555;
    margin-right: 20px;
    transition: color 0.3s ease;
}

.social-icons-contact a:hover {
    color: #007bff;
}

/* Footer */
.footer {
    background-color: #222;
    color: #f4f4f4;
    padding: 30px 0;
    text-align: center;
    font-size: 0.95em;
}

.footer .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap; /* Allow wrapping on small screens */
}

.footer p {
    margin: 0;
}

.social-icons-footer a {
    color: #bbb;
    font-size: 1.5em;
    margin-left: 15px;
    transition: color 0.3s ease;
}

.social-icons-footer a:hover {
    color: #007bff;
}

/* Responsive Design */
@media (max-width: 992px) {
    .nav-links {
        display: none; /* Hide desktop nav links */
        flex-direction: column;
        width: 100%;
        background-color: #fff;
        position: absolute;
        top: 70px; /* Adjust based on header height */
        left: 0;
        box-shadow: 0 5px 10px rgba(0,0,0,0.1);
        padding: 20px 0;
    }

    .nav-links.active {
        display: flex; /* Show mobile nav links when active */
    }

    .nav-links li {
        margin: 10px 0;
        text-align: center;
    }

    .burger-menu {
        display: flex; /* Show burger menu on mobile */
    }

    .hero-content h1 {
        font-size: 2.8em;
    }

    .hero-content p {
        font-size: 1.1em;
    }

    .about-content {
        flex-direction: column; /* Stack elements in about section */
        text-align: center;
    }

    .about-content img {
        margin-bottom: 30px;
    }

    .contact-grid {
        grid-template-columns: 1fr; /* Stack contact columns */
    }

    .contact-form-wrapper, .contact-info {
        padding: 30px;
    }

    .footer .container {
        flex-direction: column;
        gap: 15px;
    }
    .social-icons-footer {
        margin-top: 10px;
    }
}

@media (max-width: 768px) {
    .section-padding {
        padding: 60px 0;
    }

    .hero-section {
        padding: 120px 20px;
        min-height: 500px;
    }

    .hero-content h1 {
        font-size: 2.2em;
    }

    .hero-content p {
        font-size: 1em;
    }

    .about-section h2, .services-section h2, .contact-section h2 {
        font-size: 2em;
    }

    .service-grid {
        grid-template-columns: 1fr; /* Single column layout for services */
    }
    .btn {
        padding: 10px 20px;
        font-size: 0.9rem;
    }
}

@media (max-width: 480px) {
    .logo a {
        font-size: 1.8em;
    }

    .nav-links.active {
        top: 60px; /* Adjust based on smaller header */
    }
    .hero-section {
        padding: 80px 20px;
    }
    .hero-content h1 {
        font-size: 1.8em;
    }
    .contact-form-wrapper, .contact-info {
        padding: 20px;
    }
}

/* Testimonials Section Styles */
.testimonials-section {
    background-color: #f8f9fa;
}

.testimonials-slider {
    position: relative;
    max-width: 800px;
    margin: 0 auto;
    padding: 40px 0;
}

.testimonial-item {
    display: none;
    text-align: center;
    padding: 20px;
}

.testimonial-item.active {
    display: block;
    animation: fadeIn 0.5s ease-in-out;
}

.testimonial-img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-bottom: 20px;
    object-fit: cover;
}

.testimonial-text {
    font-size: 1.1rem;
    line-height: 1.6;
    color: #555;
    margin-bottom: 20px;
    font-style: italic;
}

.testimonial-content {
    padding: 0 60px;
    box-sizing: border-box;
}

.testimonial-content h4 {
    color: #333;
    margin-bottom: 5px;
}

.testimonial-role {
    color: #666;
    font-size: 0.9rem;
}

.testimonial-controls {
    position: absolute;
    top: 50%;
    width: 100%;
    transform: translateY(-50%);
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
}

.testimonial-prev,
.testimonial-next {
    background: #007bff;
    color: white;
    border: none;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
    transition: background-color 0.3s;
}

.testimonial-prev:hover,
.testimonial-next:hover {
    background: #0056b3;
}

/* Calculator Section Styles */
.calculator-section {
    background-color: #fff;
}

.calculator-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    margin-top: 40px;
}

.calculator-card {
    background: #f8f9fa;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.calculator-card h3 {
    margin-bottom: 20px;
    color: #333;
}

.calculator-form .form-group {
    margin-bottom: 20px;
}

.calculator-form label {
    display: block;
    margin-bottom: 8px;
    color: #555;
}

.calculator-form input,
.calculator-form select {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 1rem;
}

.calculator-result {
    margin-top: 20px;
    padding: 15px;
    border-radius: 5px;
    background: #e9ecef;
    display: none;
}

.calculator-result.show {
    display: block;
    animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

/* Dark Mode Styles */
body.dark-mode {
    background-color: #181a1b;
    color: #e0e0e0;
}
body.dark-mode .header,
body.dark-mode .contact-form-wrapper,
body.dark-mode .contact-info,
body.dark-mode .service-item,
body.dark-mode .calculator-card {
    background-color: #23272a;
    color: #e0e0e0;
}
body.dark-mode .footer {
    background-color: #111;
    color: #bbb;
}
body.dark-mode .btn-primary {
    background-color: #222;
    color: #fff;
}
body.dark-mode .nav-links,
body.dark-mode .nav-links.active {
    background-color: #23272a;
}
body.dark-mode .testimonial-item,
body.dark-mode .calculator-result {
    background: #23272a;
    color: #e0e0e0;
}

/* Back to Top Button */
#back-to-top {
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: #007bff;
    color: white;
    border: none;
    border-radius: 50%;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    cursor: pointer;
    display: none; /* Hidden by default */
    align-items: center;
    justify-content: center;
    transition: background 0.3s, opacity 0.3s;
}

#back-to-top:hover {
    background: #0056b3;
    opacity: 1;
}

/* Show the button when scrolling down */
body.scrolled #back-to-top {
    display: flex;
    opacity: 0.85;
}
