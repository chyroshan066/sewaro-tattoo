"use client";

import { Icon } from "@iconify/react";
import { memo, useCallback, useMemo, useState } from "react";
import { Button } from "../utility/Button/Button";
import { InputField } from "../utility/InputField";
import { ContactFormData, ContactFormSchema } from "@/middlewares/schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { onSubmit } from "@/utils/contactData";
import styles from "./Contact.module.css";
import { IconType, Text } from "@/types";
import { TitleHeader } from "../utility/TitleHeader/TitleHeader";

interface AlertState {
    isVisible: boolean;
    type: "success" | "error";
    title?: string;
    message: string;
}

interface Branch {
    address: string;
    city: string;
    district: string;
}

interface GetIcon extends IconType, Text { }

const initialValues: ContactFormData = {
    name: "",
    email: "",
    phone: "",
    message: "",
};

const BRANCHES: Branch[] = [
    {
        address: "Mukti Chowk",
        city: "Birtamode",
        district: "Jhapa",
    },
    {
        address: "Near Damak Multiple Campus",
        city: "Damak",
        district: "Jhapa",
    },
    {
        address: "",
        city: "Itahari",
        district: "Sunsari",
    },
    {
        address: "",
        city: "Lalitpur",
        district: "",
    },
];

const getIconList = (branch: typeof BRANCHES[0]): GetIcon[] => [
    {
        icon: "icomoon-free:location",
        text: `${branch.address}, ${branch.city}`,
    },
    {
        icon: "icomoon-free:phone",
        text: "+977 982-4949006",
    },
    {
        icon: "icomoon-free:mail3",
        text: "Sewaro.tattoo2001@gmail.com",
    },
];

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
            className={styles.contactWrap}
            style={{ background: "#F9F9F9" }}
        >
            <div className="custom-container">

                <TitleHeader
                    text1="Get in touch"
                    text2="with us"
                />

                <div className="row">

                    {BRANCHES.map((branch, branchIndex) => (
                        <div
                            key={branchIndex}
                            className={`col-md-3 ${styles.contactInfo}`}
                            style={{ minWidth: 0 }}
                        >
                            <h4 style={{
                                fontWeight: '500',
                                fontSize: '20px',
                                lineHeight: '187%',
                                letterSpacing: '0.08em',
                                textTransform: 'uppercase',
                                color: '#111',
                                marginBottom: '10px',
                                fontFamily: 'var(--font-oswald), Oswald, sans-serif'
                            }}>
                                {branch.city} OFFICE
                            </h4>
                            <p style={{
                                letterSpacing: '0.02em',
                                color: '#333333',
                                fontFamily: 'var(--font-raleway), Raleway, sans-serif',
                                marginBottom: '20px',
                                fontSize: '18px',
                                lineHeight: '187%',
                                fontWeight: '400'
                            }}>
                                Experience exceptional tattoo artistry at our {branch.district ? branch.city : ""} studio in {branch.district ? branch.district : branch.city}, Nepal. Our skilled artists bring your vision to life with precision and creativity in a comfortable, hygienic environment.
                            </p>

                            <ul className={styles.contactInfoList}>
                                {getIconList(branch).map((item, iconIndex) => (
                                    <li key={iconIndex}>
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
                                                fontSize: '18px',
                                                wordWrap: 'break-word',
                                                wordBreak: 'break-word',
                                                overflowWrap: 'break-word',
                                                maxWidth: '100%'
                                            }}
                                        >
                                            <Icon
                                                icon={item.icon}
                                                style={{
                                                    marginRight: '10px',
                                                    marginTop: '2px',
                                                    fontSize: '18px',
                                                    flexShrink: 0
                                                }}
                                            />
                                            {item.text}
                                        </a>
                                    </li>
                                ))}
                            </ul>

                            <Button
                                variant="btnBlank"
                                btnText="Get location"
                            />

                        </div>
                    ))}

                    {/* Contact Form */}
                    <div className="col-md-12">
                        <div className={styles.contactForm}>
                            <form>

                                <div className={styles.formGroup}>
                                    <InputField
                                        id="name"
                                        placeholder="Write your name here"
                                        register={register("name")}
                                        error={errors.name?.message}
                                        disabled={isSubmitting}
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <InputField
                                        id="email"
                                        placeholder="Write your email address"
                                        register={register("email")}
                                        error={errors.email?.message}
                                        disabled={isSubmitting}
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <InputField
                                        id="phone"
                                        placeholder="Write your Phone Number"
                                        register={register("phone")}
                                        error={errors.phone?.message}
                                        disabled={isSubmitting}
                                    />
                                </div>

                                <div className={styles.formGroup}>
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