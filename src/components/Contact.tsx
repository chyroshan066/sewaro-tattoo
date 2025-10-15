"use client";

import { Icon } from "@iconify/react";
import { memo, useCallback, useMemo, useState } from "react";
import { Button } from "./utility/Button/Button";
import { InputField } from "./utility/InputField/InputField";
import { ContactFormData, ContactFormSchema } from "@/middlewares/schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { onSubmit } from "@/utils/contactData";

interface AlertState {
    isVisible: boolean;
    type: "success" | "error";
    title?: string;
    message: string;
}

const initialValues: ContactFormData = {
    name: "",
    email: "",
    phone: "",
    message: "",
};

export const Contact = memo(() => {
    const [alertState, setAlertState] = useState<AlertState>({
        isVisible: false,
        type: "success",
        message: "",
    });

    const {
        register,
        handleSubmit,
        reset,
        formState: {
            errors,
            isSubmitting,
        }
    } = useForm<ContactFormData>({
        defaultValues: initialValues,
        resolver: zodResolver(ContactFormSchema),
        mode: "onChange", // Enable real-time validation for better UX
        reValidateMode: "onChange", // Re-validate on every change
        criteriaMode: "all", // Show all validation errors
        shouldFocusError: true, // Focus on error field
    });

    const showAlert = useCallback((
        type: AlertState["type"],
        message: string,
        title?: string
    ) => {
        setAlertState({
            isVisible: true,
            type,
            message,
            title,
        });
    }, []);

    const hideAlert = useCallback(() => {
        setAlertState(prev => ({
            ...prev,
            isVisible: false,
        }));
    }, []);

    const handleFormSubmit = useCallback(async (data: ContactFormData) => {
        try {
            await onSubmit(data);

            showAlert(
                "success",
                "Thank you! Your appointment has been booked successfully. We look forward to serving you.",
                "Appointment Booked!"
            );

            reset(initialValues);
        } catch (error) {
            const errorMessage = error instanceof Error
                ? error.message
                : "Something went wrong while booking an appointment. Please try again.";

            showAlert(
                "error",
                errorMessage,
                "Sending Failed"
            );

            console.error('Form submission error:', error);
        }
    }, [reset, showAlert]);

    const onFormSubmit = handleSubmit(handleFormSubmit);

    const isButtonDisabled = useMemo(
        () => isSubmitting,
        [isSubmitting]
    );

    const buttonText = useMemo(
        () => isSubmitting ? "Booking..." : "Book An Appointment",
        [isSubmitting]
    );

    return <>
        {/* <Alert
            type={alertState.type}
            title={alertState.title}
            message={alertState.message}
            isVisible={alertState.isVisible}
            onDismiss={hideAlert}
            autoDismiss={true}
            autoDismissDelay={6000}
            className="sm:max-w-md"
        /> */}

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
                                    <InputField
                                        id="name"
                                        placeholder="Write your name here"
                                        register={register("name")}
                                        error={errors.name?.message}
                                        disabled={isSubmitting}
                                    />
                                </div>

                                <div className="form-group">
                                    <InputField
                                        id="email"
                                        placeholder="Write your email address"
                                        register={register("email")}
                                        error={errors.email?.message}
                                        disabled={isSubmitting}
                                    />
                                </div>

                                <div className="form-group">
                                    <InputField
                                        id="message"
                                        placeholder="Write your messages here"
                                        register={register("message")}
                                        isTextarea={true}
                                        error={errors.message?.message}
                                        disabled={isSubmitting}
                                    />
                                </div>

                                <Button
                                    variant="btnBlack"
                                    className="hidden"
                                    btnText="Send It"
                                    marginTop="mt-[25px]"
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>;
});

Contact.displayName = "Contact";