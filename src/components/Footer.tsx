import { Icon } from "@iconify/react";
import { memo } from "react";

export const Footer = memo(() => (
    <footer
        className="main-footer"
        style={{ background: "#141414" }}
    >
        <div className="widgets-section container">
            <div className="row">

                <div className="footer-column col-lg-3 col-md-3 col-sm-12">
                    <div className="footer-widget about-widget">
                        <h4 style={{
                            fontWeight: 500,
                            fontSize: "20px",
                            lineHeight: "30px",
                            letterSpacing: "0.08em",
                            textTransform: "uppercase",
                            color: "#fff",
                            marginBottom: "24px"
                        }}>About void tattoo</h4>
                        <p style={{
                            color: "#d6d6d6",
                            letterSpacing: "0.02em",
                            marginBottom: "20px",
                            fontFamily: "var(--font-raleway)"
                        }}>Sit amet, consectetur nun in velit arcu posuere integer. Adipiscing elit duis porttitor massa tellus</p>
                        <ul className="contact-info-list" style={{ listStyle: "none", padding: 0, margin: 0, fontFamily: "var(--font-raleway)" }}>
                            <li style={{ marginBottom: "-20px" }}>
                                <a href="#" style={{
                                    color: "#d6d6d6",
                                    display: "flex",
                                    alignItems: "flex-start",
                                    textDecoration: "none",
                                    fontSize: "18px"
                                }}>

                                    <Icon icon="icomoon-free:location" style={{ marginRight: "10px", flexShrink: 0 }} />1630 Elm Drive, New York City
                                </a>
                            </li>
                            <li style={{ marginBottom: "-20px" }}>
                                <a href="#" style={{
                                    color: "#d6d6d6",
                                    display: "flex",
                                    alignItems: "flex-start",
                                    textDecoration: "none",
                                    fontSize: "18px"
                                }}>
                                    <Icon icon="icomoon-free:phone" style={{ marginRight: "10px", marginTop: "2px", flexShrink: 0 }} />
                                    +49 93 30493943
                                </a>
                            </li>
                            <li style={{ marginBottom: "-20px" }}>
                                <a href="#" style={{
                                    color: "#d6d6d6",
                                    display: "flex",
                                    alignItems: "flex-start",
                                    textDecoration: "none",
                                    fontSize: "18px"
                                }}>
                                    <Icon icon="icomoon-free:mail3" style={{ marginRight: "10px", marginTop: "2px", flexShrink: 0 }} />
                                    contact@yourinfo.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-column col-lg-3 col-md-3 col-sm-12">
                    <div className="footer-widget links-widget">
                        <h4 style={{
                            fontWeight: 500,
                            fontSize: "20px",
                            lineHeight: "30px",
                            letterSpacing: "0.08em",
                            textTransform: "uppercase",
                            color: "#fff",
                            marginBottom: "24px"
                        }}>Useful links</h4>
                        <div className="widget-content">
                            <ul className="list" style={{ listStyle: "none", padding: 0, margin: 0, fontFamily: "var(--font-raleway)", fontSize: "18px" }}>
                                <li style={{ marginBottom: "6px" }}>
                                    <a href="#" style={{ color: "#d6d6d6", textDecoration: "none" }}>About me</a>
                                </li>
                                <li style={{ marginBottom: "6px" }}><a href="#" style={{ color: "#d6d6d6", textDecoration: "none" }}>My gallery</a></li>
                                <li style={{ marginBottom: "6px" }}><a href="#" style={{ color: "#d6d6d6", textDecoration: "none" }}>My services</a></li>
                                <li style={{ marginBottom: "6px" }}><a href="#" style={{ color: "#d6d6d6", textDecoration: "none" }}>Contact me</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-column col-lg-3 col-md-3 col-sm-12">
                    <div className="footer-widget time-widget">
                        <h4 style={{
                            fontWeight: 500,
                            fontSize: "20px",
                            lineHeight: "30px",
                            letterSpacing: "0.08em",
                            textTransform: "uppercase",
                            color: "#fff",
                            marginBottom: "24px"
                        }}>Working time</h4>
                        <div className="widget-content">
                            <ul className="list" style={{ listStyle: "none", padding: 0, margin: 0, fontFamily: "var(--font-raleway)", fontSize: "18px" }}>
                                <li style={{ marginBottom: "6px" }}><a href="#" style={{ color: "#d6d6d6", textDecoration: "none" }}>Mon - Tue / Appointment</a></li>
                                <li style={{ marginBottom: "6px" }}><a href="#" style={{ color: "#d6d6d6", textDecoration: "none" }}>Wed - Fri / 10:00 - 9:00pm</a></li>
                                <li style={{ marginBottom: "6px" }}><a href="#" style={{ color: "#d6d6d6", textDecoration: "none" }}>Sat / 10:00 - 6:00pm</a></li>
                                <li style={{ marginBottom: "6px" }}><a href="#" style={{ color: "#d6d6d6", textDecoration: "none" }}>Sun / no work on this day</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-column col-lg-3 col-md-3 col-sm-12">
                    <div className="footer-widget newsletter-widget">
                        <h4 style={{
                            fontWeight: 500,
                            fontSize: "20px",
                            lineHeight: "30px",
                            letterSpacing: "0.08em",
                            textTransform: "uppercase",
                            color: "#fff",
                            marginBottom: "24px"
                        }}>Get newsletter</h4>
                        <p style={{
                            color: "#d6d6d6",
                            letterSpacing: "0.02em",
                            marginBottom: "20px",
                            fontFamily: "var(--font-raleway)"
                        }}>Elit duis porttitor massa tellus nun in velit arcu posuere integer.</p>
                        <form>
                            <div className="form-group" style={{ position: "relative", marginTop: "25px" }}>
                                <input type="text" name="email" placeholder="Your email address" />
                                {/* <input type="text" name="email" placeholder="Your email address" required="" /> */}
                                <button
                                    type="submit"
                                    style={{
                                        background: 'none',
                                        border: 'none',
                                        cursor: 'pointer',
                                        position: "absolute",
                                        right: "0",
                                        top: "0",
                                        color: "#F2F2F2",
                                        fontSize: "26px"
                                    }}
                                >
                                    <Icon icon="la:telegram-plane" />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>

        </div>

        <div className="footer-bottom" style={{
            fontSize: "16px",
            lineHeight: "19px",
            letterSpacing: "0.02em",
            color: "#DBDBDB",
            padding: "37px 0",
            borderTop: "1px solid #2B2B2B",
            fontFamily: "var(--font-raleway)"
        }}>
            <div className="copyright container">@ 2023 <a href="https://templatesjungle.com/" target="_blank" rel="noopener noreferrer" style={{ color: "#fff", textDecoration: "none" }}>TemplatesJungle</a>. All rights reserved.</div>
        </div>

    </footer>
));

Footer.displayName = "Footer";