"use client";

import { ContactFormData, SubscriptionFormData } from "@/middlewares/schema";
import { memo } from "react";
import { UseFormRegister, UseFormRegisterReturn } from "react-hook-form";
import styles from "../Footer/Footer.module.css";

interface FormFieldProps {
    id: keyof ContactFormData | keyof SubscriptionFormData;
    placeholder?: string;
    register: UseFormRegister<ContactFormData | SubscriptionFormData> | UseFormRegisterReturn;
    error?: string;
    disabled?: boolean;
    isTextarea?: boolean;
    isFooter?: boolean;
};

export const ErrorMessage = memo(({
    message
}: {
    message?: string
}) => {
    if (!message) return null;

    return <span style={{
        color: '#d32f2f',
        fontSize: '14px',
        display: 'block',
        fontFamily: 'var(--font-raleway), Raleway, sans-serif',
        marginTop: '8px',
        paddingTop: '0',
        lineHeight: '1.2',
        letterSpacing: '0.02em',
        fontStyle: 'italic',
        fontWeight: '400',
        width: '100%'
    }}>
        {message}
    </span>;
});

ErrorMessage.displayName = "ErrorMessage";

export const InputField = memo((
    {
        id,
        placeholder,
        register,
        error,
        disabled,
        isTextarea = false,
        isFooter = false,
    }: FormFieldProps
) => {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (typeof register === 'object' && 'onChange' in register && register.onChange) {
            register.onChange(e);
        }
    };

    const getRegisterProps = () => {
        if (typeof register === 'function') {
            // If register is a function (UseFormRegister), call it with the field id
            return register(id);
        } else {
            // If register is already an object (UseFormRegisterReturn), return it as is
            return register;
        }
    };

    if (isTextarea) {
        const registerProps = getRegisterProps();

        return (
            <div>
                <textarea
                    {...registerProps}
                    placeholder={placeholder}
                    autoComplete="off"
                    disabled={disabled}
                    onChange={handleInputChange}
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
                />
                <ErrorMessage message={error} />
            </div>
        );
    }

    if (isFooter) {
        const registerProps = getRegisterProps();

        return <div className="relative">
            <div className={styles.footerInputField}>
                <input
                    {...registerProps}
                    type="text"
                    placeholder="Your email address"
                    autoComplete="off"
                    onChange={handleInputChange}
                    disabled={disabled}
                />
                <ErrorMessage message={error} />
            </div>
        </div>;
    }

    const registerProps = getRegisterProps();

    return (
        <div>
            <input
                {...registerProps}
                placeholder={placeholder}
                type="text"
                autoComplete="off"
                onChange={handleInputChange}
                disabled={disabled}
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
            <ErrorMessage message={error} />
        </div>
    );
});

InputField.displayName = "FormField";