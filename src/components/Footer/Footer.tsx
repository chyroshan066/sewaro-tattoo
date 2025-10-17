"use client";

import { Icon } from "@iconify/react";
import { memo, useCallback, useMemo, useState } from "react";
import styles from "./Footer.module.css";
import { AlertState, Link, Text } from "@/types";
import { NAVLINKS } from "@/constants";
import { InputField } from "../utility/InputField";
import { SubscriptionFormData, SubscriptionFormSchema } from "@/middlewares/schema";
import { Alert } from "../Alert";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { onSubscriptionSubmit } from "@/utils/subscriptionData";
import { SubmitButton } from "../utility/Button/SubmitButton";
import { useAlert } from "@/hooks/useAlert";

interface List extends Link {
    name: string;
}

interface FooterColumn extends Text {
    list: List[];
}

const initialSubscriptionValues: SubscriptionFormData = {
    email: "",
};


const WORKINGTIME: List[] = [
    {
        href: "/#contact",
        name: "Daily / 10:00am - 7:00pm"
    }
];

const FooterHeader = memo(({
    text
}: Text) => (
    <h4 style={{
        fontWeight: 500,
        fontSize: "20px",
        lineHeight: "30px",
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        color: "#fff",
        marginBottom: "24px"
    }}>
        {text}
    </h4>
));

FooterHeader.displayName = "FooterHeader";

const FooterPara = memo(({
    text
}: Text) => (
    <p style={{
        color: "#d6d6d6",
        letterSpacing: "0.02em",
        marginBottom: "20px",
        fontFamily: "var(--font-raleway)"
    }}>
        {text}
    </p>
));

FooterPara.displayName = "FooterPara";

const FooterColumn = memo(({
    text,
    list
}: FooterColumn) => (
    <>
        <FooterHeader text={text} />

        <ul style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
            fontFamily: "var(--font-raleway)",
            fontSize: "18px"
        }}
        >
            {list.map((item, index) => (
                <li
                    key={index}
                    style={{ marginBottom: "6px" }}
                >
                    <a
                        href={item.href}
                        style={{
                            color: "#d6d6d6",
                            textDecoration: "none"
                        }}
                    >
                        {item.name}
                    </a>
                </li>
            ))}
        </ul>

    </>
));

FooterColumn.displayName = "FooterColumn";

export const Footer = memo(() => {
    const { alertState, showAlert, hideAlert } = useAlert();

    const {
        register,
        handleSubmit,
        reset,
        formState: {
            errors,
            isSubmitting,
        }
    } = useForm<SubscriptionFormData>({
        defaultValues: initialSubscriptionValues,
        resolver: zodResolver(SubscriptionFormSchema),
        mode: "onChange",
        reValidateMode: "onChange",
        criteriaMode: "all",
        shouldFocusError: true,
    });

    const handleSubscriptionSubmit = useCallback(async (data: SubscriptionFormData) => {
        try {
            await onSubscriptionSubmit(data);

            showAlert(
                "success",
                "Thank you for subscribing! You'll receive our latest news and offers.",
                "Successfully Subscribed!"
            );

            reset(initialSubscriptionValues);
        } catch (error) {
            const errorMessage = error instanceof Error
                ? error.message
                : "Something went wrong while subscribing. Please try again.";

            showAlert(
                "error",
                errorMessage,
                "Subscription Failed"
            );

            console.error('Subscription error:', error);
        }
    }, [reset, showAlert]);

    const onSubscriptionFormSubmit = handleSubmit(handleSubscriptionSubmit);

    const isButtonDisabled = useMemo(
        () => isSubmitting,
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

        <footer
            className={styles.mainFooter}
            style={{ background: "#141414" }}
        >
            <div className={`custom-container ${styles.widgetsSection}`}>
                <div className="row">
                    <div className={`col-lg-3 col-md-3 col-sm-12 ${styles.footerColumn}`}>

                        <div className={`${styles.footerWidget} ${styles.aboutWidget}`}>

                            <FooterHeader text="About Sewaro Tattoo" />

                            <FooterPara text="Nepal's trusted tattoo studio since 2001. Sewaro Tattoo delivers exceptional custom tattoo artistry across four locations, combining creativity, precision, and hygiene to bring your vision to life." />

                            <ul
                                className={styles.contactInfoList}
                                style={{
                                    listStyle: "none",
                                    padding: 0,
                                    margin: 0,
                                    fontFamily: "var(--font-raleway)"
                                }}
                            >
                                <li style={{ marginBottom: "-20px" }}>
                                    <a
                                        href="mailto:Sewaro.tattoo2001@gmail.com"
                                        style={{
                                            color: "#d6d6d6",
                                            display: "flex",
                                            alignItems: "flex-start",
                                            textDecoration: "none",
                                            fontSize: "18px"
                                        }}
                                    >
                                        <Icon
                                            icon="icomoon-free:mail3"
                                            style={{
                                                marginRight: "10px",
                                                marginTop: "2px",
                                                flexShrink: 0
                                            }}
                                        />
                                        Sewaro.tattoo2001@gmail.com
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className={`col-lg-3 col-md-3 col-sm-12 ${styles.footerColumn}`}>
                        <div className={`${styles.footerWidget} ${styles.linksWidget}`}>
                            <FooterColumn
                                text="Useful links"
                                list={NAVLINKS}
                            />
                        </div>
                    </div>

                    <div className={`col-lg-3 col-md-3 col-sm-12 ${styles.footerColumn}`}>
                        <div className={styles.footerWidget}>
                            <FooterColumn
                                text="Working time"
                                list={WORKINGTIME}
                            />
                        </div>
                    </div>

                    <div className={`col-lg-3 col-md-3 col-sm-12 ${styles.footerColumn}`}>
                        <div className={`${styles.footerWidget} ${styles.newsletterWidget}`}>

                            <FooterHeader text="Get newsletter" />

                            <FooterPara text="Subscribe to our newsletter for exclusive tattoo inspiration, special offers, and studio updates." />

                            <form
                                onSubmit={onSubscriptionFormSubmit}
                                noValidate
                            >
                                <div
                                    className={styles.formGroup}
                                    style={{
                                        position: "relative",
                                        marginTop: "25px"
                                    }}
                                >
                                    <InputField
                                        id="email"
                                        register={register("email")}
                                        error={errors.email?.message}
                                        disabled={isSubmitting}
                                        isFooter={true}
                                    />

                                    <SubmitButton
                                        variant="footerBtn"
                                        isButtonDisabled={isButtonDisabled}
                                        btnText={<Icon icon="la:telegram-plane" className="text-2xl" />}
                                    />

                                </div>
                            </form>
                        </div>
                    </div>

                </div>

            </div>

            <div style={{
                fontSize: "16px",
                lineHeight: "19px",
                letterSpacing: "0.02em",
                color: "#DBDBDB",
                padding: "37px 0",
                borderTop: "1px solid #2B2B2B",
                fontFamily: "var(--font-raleway)"
            }}>
                <div className="custom-container">@ 2023 <a href="https://templatesjungle.com/" target="_blank" rel="noopener noreferrer" style={{ color: "#fff", textDecoration: "none" }}>TemplatesJungle</a>. All rights reserved.</div>
            </div>

        </footer>
    </>
});

Footer.displayName = "Footer";