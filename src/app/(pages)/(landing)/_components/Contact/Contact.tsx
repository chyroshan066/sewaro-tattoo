"use client";

import { Icon } from "@iconify/react";
import { memo, useMemo } from "react";
import { Button } from "@/components/utility/Button/Button";
import { InputField } from "@/components/utility/InputField";
import { ContactFormData, ContactFormSchema } from "@/middlewares/schema";
import { onSubmit } from "@/utils/contactData";
import styles from "./Contact.module.css";
import { IconType, Text } from "@/types";
import { TitleHeader } from "@/components/utility/TitleHeader/TitleHeader";
import { Alert } from "@/components/Alert";
import { SubmitButton } from "@/components/utility/Button/SubmitButton";
import { useFormSubmission } from "@/hooks/useFormSubmission";

interface Branch {
    address: string;
    city: string;
    district?: string;
    phone: number | number[];
    phone2?: number;
    addressLink: string;
}

interface GetIcon extends IconType, Text {
    href?: string;
}

interface InputFieldType {
    id: "message" | "name" | "email" | "phone";
    placeholder: string;
}

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
        phone: 9702037757,
        addressLink: "https://www.google.com/maps/place/Sewaro+tattoo+birtamode/@26.6431983,87.9887241,17z/data=!4m14!1m7!3m6!1s0x39e5bb00124006d1:0xf491b04cae72b859!2sSewaro+tattoo+birtamode!8m2!3d26.6431935!4d87.991299!16s%2Fg%2F11vwyh_y5d!3m5!1s0x39e5bb00124006d1:0xf491b04cae72b859!8m2!3d26.6431935!4d87.991299!16s%2Fg%2F11vwyh_y5d?entry=ttu&g_ep=EgoyMDI1MTAxMy4wIKXMDSoASAFQAw%3D%3D",
    },
    {
        address: "Near Taxi Stand",
        city: "Damak",
        district: "Jhapa",
        phone: 9824949006,
        addressLink: "https://www.google.com/maps/place/Sewaro+tattoo/@26.6591162,87.6962376,17z/data=!4m14!1m7!3m6!1s0x39e59153ece186b7:0xd41001628aabed1!2sSewaro+tattoo!8m2!3d26.6591114!4d87.6988125!16s%2Fg%2F11h4pl91dr!3m5!1s0x39e59153ece186b7:0xd41001628aabed1!8m2!3d26.6591114!4d87.6988125!16s%2Fg%2F11h4pl91dr?entry=ttu&g_ep=EgoyMDI1MTAxMy4wIKXMDSoASAFQAw%3D%3D",
    },
    {
        address: "Biratnagar Road - Radha Krishna Mandir Opposite",
        city: "Itahari",
        district: "Sunsari",
        phone: 9701723788,
        phone2: 9841546533,
        addressLink: "",
    },
    {
        address: "Jawlakhel under SBI Bank",
        city: "Lalitpur",
        phone: 9825910833,
        addressLink: "https://www.google.com/maps/place/Sewaro+Tattoo/@27.6731495,85.3118423,17z/data=!3m1!4b1!4m6!3m5!1s0x39eb19ccd7eb33fb:0x9f041ad3f12d3485!8m2!3d27.6731448!4d85.3144172!16s%2Fg%2F11b6f505l4?entry=ttu&g_ep=EgoyMDI1MTAxMy4wIKXMDSoASAFQAw%3D%3D",
    },
];

const getIconList = (branch: typeof BRANCHES[0]): GetIcon[] => {
    const iconList: GetIcon[] = [
        {
            icon: "icomoon-free:location",
            text: `${branch.address}, ${branch.city}`,
            href: branch.addressLink,
        },
        {
            icon: "icomoon-free:phone",
            text: `+977 ${branch.phone}`,
            href: `tel:+977${branch.phone}`,
        },
    ];

    // Only add phone2 if it exists
    if (branch.phone2) {
        iconList.push({
            icon: "icomoon-free:phone",
            text: `+977 ${branch.phone2}`,
            href: `tel:+977${branch.phone2}`,
        });
    }

    iconList.push({
        icon: "icomoon-free:mail3",
        text: "Sewaro.tattoo2001@gmail.com",
        href: "mailto:Sewaro.tattoo2001@gmail.com",
    });

    return iconList;
};

const INPUTFIELDS: InputFieldType[] = [
    {
        id: "name",
        placeholder: "Write your name here",
    },
    {
        id: "email",
        placeholder: "Write your email address",
    },
    {
        id: "phone",
        placeholder: "Write your Phone Number",
    },
    {
        id: "message",
        placeholder: "Write your messages here",
    },
];

export const Contact = memo(() => {
    const {
        register,
        formState: {
            errors,
            isSubmitting
        },
        onFormSubmit,
        isButtonDisabled,
        alertState,
        hideAlert,
    } = useFormSubmission<ContactFormData>({
        schema: ContactFormSchema,
        defaultValues: initialValues,
        onSubmit: onSubmit,
        successMessage: "Thank you! Your message has been sent. We look forward to serving you.",
        successTitle: "Message Sent!",
        errorTitle: "Sending Failed",
        errorMessage: "Something went wrong while sending your message. Please try again.",
    });

    const buttonText = useMemo(
        () => isSubmitting ? "Sending..." : "Send It",
        [isSubmitting]
    );

    return <>
        <Alert
            type={alertState.type}
            title={alertState.title}
            message={alertState.message}
            isVisible={alertState.isVisible}
            onDismiss={hideAlert}
            autoDismiss={true}
            autoDismissDelay={6000}
            className="sm:max-w-md"
        />

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
                                            href={item.href}
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
                                            target={item.icon === "icomoon-free:location" ? "_blank" : undefined}
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
                                href={branch.addressLink}
                                newTab={true}
                            />

                        </div>
                    ))}

                    {/* Contact Form */}
                    <div className="col-md-12">
                        <div className={styles.contactForm}>
                            <form
                                onSubmit={onFormSubmit}
                                noValidate
                            >

                                {INPUTFIELDS.map((field, index) => (
                                    <div
                                        key={index}
                                        className={styles.formGroup}
                                    >
                                        <InputField
                                            id={field.id}
                                            placeholder={field.placeholder}
                                            register={register(field.id)}
                                            isTextarea={field.id === "message"}
                                            error={errors[field.id]?.message}
                                            disabled={isSubmitting}
                                        />
                                    </div>
                                ))}

                                <SubmitButton
                                    btnText={buttonText}
                                    marginTop="mt-[25px]"
                                    isButtonDisabled={isButtonDisabled}
                                    variant="btnBlack"
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