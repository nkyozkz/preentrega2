import React from 'react';
import "../styles/footer.css"

const Footer = () => {
    return (
        <footer>
            <div class="container footer-content">
            <ul class="footer-info">
                <p> Contacto</p>
            
                <li>info.crazyrugs@gmail.com</li>
                <li>+56876543321</li>
            </ul>
            <ul class="footer-redes">
                <li><a href="https://www.whatsapp.com"><i class="fab fa-whatsapp"></i></a></li>
                <li><a href="https://www.instagram.com"><i class="fab fa-instagram"></i></a></li>
            </ul>
            </div>
            <p>© Crazy Rugs 2022</p>
        </footer>
    );
}

export default Footer;
