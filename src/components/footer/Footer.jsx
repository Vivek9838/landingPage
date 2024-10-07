import React from 'react';
import style from "./Footer.module.css"

const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={style.footer_container}>
                {/* Footer Details */}
                <div className={style.footer_details}>
                    <h3>Company Name</h3>
                    <p>123 Business Road, City, Country</p>
                    <p>Email: info@company.com | Phone: +123456789</p>
                </div>

                {/* Subscribe to Newsletter */}
                <div className={style.footer_subscribe}>
                    <h3>Subscribe to our Newsletter</h3>
                    <form>
                        <input 
                            type="email" 
                            placeholder="Enter your email" 
                            required 
                        />
                        <button type="submit">Subscribe</button>
                    </form>
                </div>
            </div>

            {/* Footer Bottom Section */}
            <div className={style.footer_bottom}>
                <p>&copy; 2024 Company Name. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
