"use client";

import { ContactFormData, SubscriptionFormData } from "@/middlewares/schema";
import { memo } from "react";
import { UseFormRegister, UseFormRegisterReturn } from "react-hook-form";
import styles from "./InputField.module.css";

interface FormFieldProps {
    id: keyof ContactFormData | keyof SubscriptionFormData;
    placeholder?: string;
    register: UseFormRegister<ContactFormData | SubscriptionFormData> | UseFormRegisterReturn;
    error?: string;
    disabled?: boolean;
    isTextarea?: boolean;
};

export const ErrorMessage = memo(({
    message
}: {
    message?: string
}) => {
    if (!message) return null;

    return <span style={{
        color: 'var(--lavender-blue)',
        fontSize: '0.875rem !important',
        display: 'block',
        fontFamily: 'var(--fontFamily-roboto)',
        marginTop: '0',
        paddingTop: '0',
        lineHeight: '1.2'
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
                    className={styles.textarea}
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

    const registerProps = getRegisterProps();

    return (
        <div>
            <input
                {...registerProps}
                placeholder={placeholder}
                type="text"
                autoComplete="off"
                className={styles.inputField}
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