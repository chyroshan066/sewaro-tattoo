interface Social {
    instagram: string;
    facebook: string;
}

export interface Link {
    href: string;
}

export interface Name {
    name: string;
}

export interface Text {
    text: string;
}

export interface IconType {
    icon: string;
}

export interface Title {
    title: string;
}

export interface ImgSrc {
    imgSrc: string;
}

export interface NavLink extends Link, Name {}
export interface Gallery extends Title, ImgSrc {}
export interface SocialLink extends Link, IconType {}

export interface Service extends Name {
    percent: number;
}

export interface Testimonial extends Text {
    author: string;
}

export interface Article extends Link, Gallery {
    date: string;
}

export interface Btn {
    variant: string;
    marginTop?: string;
}

export interface AlertState {
    isVisible: boolean;
    type: "success" | "error";
    title?: string;
    message: string;
}

export interface SocialLinks {
    social: Social;
}