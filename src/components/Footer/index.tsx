import "./style.scss"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';

const Footer = () => {

    return (
        <footer>
            <section className="news_letter">
                <form>
                    <h4>Sign Up to Our Newsletter</h4>
                    <p>Get the Latest Beauty Secrets and Trends, Sign Up for Our Newsletter and Stay Informed About All Things Beauty</p>

                    <div className="input_field">
                        <input type="text" placeholder="Your Email" />
                        <button>Submit</button>
                    </div>
                </form>
            </section>

            <section className="footer">
                <div className="row">
                    <div className="col">
                        <span>Volt</span>
                        <p>Experience the Great Outdoors in Style with Volt's<br />
                            Shop now and gear up for adventure in Volt!
                        </p>
                    </div>

                    <div className="col">
                        <span>Categories</span>
                        <ul>
                            <li>Jackets</li>
                            <li>Shirts</li>
                            <li>Knit</li>
                            <li>T-shirts</li>
                            <li>Bottoms</li>
                            <li>Accesories</li>
                        </ul>
                    </div>

                    <div className="col">
                        <span>Customer Care</span>
                        <ul>
                            <li>FAQ</li>
                            <li>Shipping</li>
                            <li>Order Status</li>
                            <li>Return and Exchange</li>
                        </ul>
                    </div>

                    <div className="col">
                        <span>Company</span>
                        <ul>
                            <li>Privacy</li>
                            <li>Guides</li>
                            <li>Terms Of Conditions</li>
                        </ul>
                    </div>

                    <div className="col">
                        <ul>
                            <li><FacebookIcon /></li>
                            <li><InstagramIcon /></li>
                            <li><YouTubeIcon /></li>
                            <li><XIcon /></li>
                        </ul>
                        <p>Call Us On +234 91 3540 9822&nbsp;&nbsp;&nbsp;&nbsp; USD $ | English</p>
                    </div>
                </div>

                <p className="copyright">© 2024 Volt Studio, Inc - All Rights Reserved</p>
            </section>
        </footer>
    )
}

export default Footer