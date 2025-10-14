import { Icon } from "@iconify/react";
import { memo } from "react";

export const Contact = memo(() => {
    return (
        <section
            id="contact"
            className="contact-wrap"
            style={{ background: "#F9F9F9" }}
        >
            <div className="container">
                {/* Section Title */}
                <div className="sec-title">
                    <h1 style={{
                        display: 'block',
                        fontSize: '85px',
                        textTransform: 'uppercase',
                        color: '#111',
                        marginBottom: '75px',
                        fontFamily: 'var(--font-oswald), Oswald, sans-serif',
                        fontWeight: '400',
                        lineHeight: '104%',
                        letterSpacing: '0.03em'
                    }}>
                        Get in touch <br />with me:
                    </h1>
                </div>

                <div className="row">
                    {/* LA Office 1 */}
                    <div className="col-md-3 contact-info">
                        <h4 style={{
                            fontWeight: '500',
                            fontSize: '20px',
                            lineHeight: '187%',
                            letterSpacing: '0.08em',
                            textTransform: 'uppercase',
                            color: '#111',
                            marginBottom: '10px',
                            fontFamily: 'var(--font-oswald), Oswald, sans-serif'
                        }}>LA OFFICE</h4>
                        <p style={{
                            letterSpacing: '0.02em',
                            color: '#333333',
                            fontFamily: 'var(--font-raleway), Raleway, sans-serif',
                            marginBottom: '20px',
                            fontSize: '18px',
                            lineHeight: '187%',
                            fontWeight: '400'
                        }}>In velit arcu posuere integer sit amet, consectetur nun adipiscing elit. Duis porttitor massa tellus</p>
                        <ul
                            className="contact-info-list"
                            style={{
                                listStyle: 'none',
                                padding: '0',
                                margin: '20px 0 0 0'
                            }}
                        >
                            <li>
                                <a
                                    href="#"
                                    style={{
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        fontWeight: '500',
                                        lineHeight: '21px',
                                        letterSpacing: '0.02em',
                                        color: '#111',
                                        textDecoration: 'none',
                                        transition: 'color 0.3s ease',
                                        fontFamily: 'var(--font-raleway), Raleway, sans-serif',
                                        marginBottom: '14px',
                                        fontSize: '18px'
                                    }}
                                >
                                    <Icon
                                        icon="icomoon-free:location"
                                        style={{
                                            marginRight: '10px',
                                            marginTop: '2px',
                                            fontSize: '18px',
                                            flexShrink: 0
                                        }}
                                    />
                                    784 Norman, Los Angeles
                                </a>
                            </li>
                            <li>
                                <a href="#" style={{
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    fontWeight: '500',
                                    lineHeight: '21px',
                                    letterSpacing: '0.02em',
                                    color: '#111',
                                    textDecoration: 'none',
                                    transition: 'color 0.3s ease',
                                    fontFamily: 'var(--font-raleway), Raleway, sans-serif',
                                    marginBottom: '14px',
                                    fontSize: '18px'
                                }}>
                                    <Icon icon="icomoon-free:phone" style={{
                                        marginRight: '10px',
                                        marginTop: '2px',
                                        fontSize: '18px',
                                        flexShrink: 0
                                    }} />
                                    +49 93 30493943
                                </a>
                            </li>
                            <li>
                                <a href="#" style={{
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    fontWeight: '500',
                                    lineHeight: '21px',
                                    letterSpacing: '0.02em',
                                    color: '#111',
                                    textDecoration: 'none',
                                    transition: 'color 0.3s ease',
                                    fontFamily: 'var(--font-raleway), Raleway, sans-serif',
                                    marginBottom: '14px',
                                    fontSize: '18px'
                                }}>
                                    <Icon icon="icomoon-free:mail3" style={{
                                        marginRight: '10px',
                                        marginTop: '2px',
                                        fontSize: '18px',
                                        flexShrink: 0
                                    }} />
                                    contact@thevoidsir.com
                                </a>
                            </li>
                        </ul>
                        <a
                            className="btn btn-blank"
                            href="#"
                            role="button"
                            style={{
                                color: '#111',
                                padding: '0',
                                margin: '22px 0 0 0',
                                border: 'none',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px',
                                fontFamily: 'var(--font-raleway), Raleway, sans-serif',
                                fontSize: '18px',
                                lineHeight: '21px',
                                transition: 'all 0.3s ease',
                                textTransform: 'none',
                                fontWeight: '500',
                                letterSpacing: '0.02em',
                                borderBottom: '1px solid #111',
                                paddingBottom: '4px',
                                textDecoration: 'none',
                                borderRadius: '0'
                            }}
                        >
                            Get location
                        </a>
                    </div>

                    {/* LA Office 2 */}
                    <div className="col-md-3 contact-info">
                        <h4 style={{
                            fontWeight: '500',
                            fontSize: '20px',
                            lineHeight: '187%',
                            letterSpacing: '0.08em',
                            textTransform: 'uppercase',
                            color: '#111',
                            marginBottom: '10px',
                            fontFamily: 'var(--font-oswald), Oswald, sans-serif'
                        }}>LA OFFICE</h4>
                        <p style={{
                            letterSpacing: '0.02em',
                            color: '#333333',
                            fontFamily: 'var(--font-raleway), Raleway, sans-serif',
                            marginBottom: '20px',
                            fontSize: '18px',
                            lineHeight: '187%',
                            fontWeight: '400'
                        }}>In velit arcu posuere integer sit amet, consectetur nun adipiscing elit. Duis porttitor massa tellus</p>
                        <ul className="contact-info-list" style={{
                            listStyle: 'none',
                            padding: '0',
                            margin: '20px 0 0 0'
                        }}>
                            <li>
                                <a href="#" style={{
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    fontWeight: '500',
                                    lineHeight: '21px',
                                    letterSpacing: '0.02em',
                                    color: '#111',
                                    textDecoration: 'none',
                                    transition: 'color 0.3s ease',
                                    fontFamily: 'var(--font-raleway), Raleway, sans-serif',
                                    marginBottom: '14px',
                                    fontSize: '18px'
                                }}>
                                    <Icon icon="icomoon-free:location" style={{
                                        marginRight: '10px',
                                        marginTop: '2px',
                                        fontSize: '18px',
                                        flexShrink: 0
                                    }} />
                                    784 Norman, Los Angeles
                                </a>
                            </li>
                            <li>
                                <a href="#" style={{
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    fontWeight: '500',
                                    lineHeight: '21px',
                                    letterSpacing: '0.02em',
                                    color: '#111',
                                    textDecoration: 'none',
                                    transition: 'color 0.3s ease',
                                    fontFamily: 'var(--font-raleway), Raleway, sans-serif',
                                    marginBottom: '14px',
                                    fontSize: '18px'
                                }}>
                                    <Icon icon="icomoon-free:phone" style={{
                                        marginRight: '10px',
                                        marginTop: '2px',
                                        fontSize: '18px',
                                        flexShrink: 0
                                    }} />
                                    +49 93 30493943
                                </a>
                            </li>
                            <li>
                                <a href="#" style={{
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    fontWeight: '500',
                                    lineHeight: '21px',
                                    letterSpacing: '0.02em',
                                    color: '#111',
                                    textDecoration: 'none',
                                    transition: 'color 0.3s ease',
                                    fontFamily: 'var(--font-raleway), Raleway, sans-serif',
                                    marginBottom: '14px',
                                    fontSize: '18px'
                                }}>
                                    <Icon icon="icomoon-free:mail3" style={{
                                        marginRight: '10px',
                                        marginTop: '2px',
                                        fontSize: '18px',
                                        flexShrink: 0
                                    }} />
                                    contact@thevoidsir.com
                                </a>
                            </li>
                        </ul>
                        <a className="btn btn-blank" href="#" role="button" style={{
                            color: '#111',
                            padding: '0',
                            margin: '22px 0 0 0',
                            border: 'none',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            fontFamily: 'var(--font-raleway), Raleway, sans-serif',
                            fontSize: '18px',
                            lineHeight: '21px',
                            transition: 'all 0.3s ease',
                            textTransform: 'none',
                            fontWeight: '500',
                            letterSpacing: '0.02em',
                            borderBottom: '1px solid #111',
                            paddingBottom: '4px',
                            textDecoration: 'none',
                            borderRadius: '0'
                        }}>
                            Get location
                        </a>
                    </div>

                    {/* Contact Form */}
                    <div className="col-md-6">
                        <div className="contact-form">
                            <form>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="username"
                                        placeholder="Write your name here"
                                        required
                                        style={{
                                            width: '100%',
                                            paddingBottom: '16px',
                                            border: 'none',
                                            borderBottom: '1px solid #111',
                                            background: 'transparent',
                                            fontSize: '16px',
                                            lineHeight: '100%',
                                            color: '#333',
                                            fontFamily: 'var(--font-raleway), Raleway, sans-serif'
                                        }}
                                    />
                                </div>

                                <div className="form-group">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Write your email address"
                                        required
                                        style={{
                                            width: '100%',
                                            paddingBottom: '16px',
                                            border: 'none',
                                            borderBottom: '1px solid #111',
                                            background: 'transparent',
                                            fontSize: '16px',
                                            lineHeight: '100%',
                                            color: '#333',
                                            fontFamily: 'var(--font-raleway), Raleway, sans-serif'
                                        }}
                                    />
                                </div>

                                <div className="form-group">
                                    <textarea
                                        name="message"
                                        placeholder="Write your messages here"
                                        rows={1}
                                        style={{
                                            width: '100%',
                                            paddingBottom: '16px',
                                            border: 'none',
                                            borderBottom: '1px solid #111',
                                            background: 'transparent',
                                            fontSize: '16px',
                                            lineHeight: '100%',
                                            color: '#333',
                                            fontFamily: 'var(--font-raleway), Raleway, sans-serif',
                                            resize: 'none',
                                            height: '38px',
                                            minHeight: '38px'
                                        }}
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-black"
                                    style={{
                                        color: '#fff',
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontFamily: 'var(--font-oswald), Oswald, sans-serif',
                                        fontSize: '18px',
                                        boxSizing: 'border-box',
                                        padding: '20px 40px',
                                        fontWeight: '400',
                                        lineHeight: '1',
                                        overflow: 'hidden',
                                        letterSpacing: '0.08em',
                                        textTransform: 'uppercase',
                                        marginTop: '25px',
                                        borderRadius: '0',
                                        transition: 'all 0.3s ease',
                                        textDecoration: 'none',
                                        border: 'none',
                                        cursor: 'pointer',
                                        background: '#111'
                                    }}
                                >
                                    Send It
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
});

Contact.displayName = "Contact";