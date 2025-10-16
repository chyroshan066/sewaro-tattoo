export interface Link {
    href: string;
}

interface Name {
    name: string;
}

export interface Text {
    text: string;
}

export interface IconType {
    icon: string;
}

export interface NavLink extends Link, Name {}

export interface SocialLink extends Link, IconType {}

export interface Service extends Name {
    percent: number;
}

export interface Testimonial extends Text {
    author: string;
    tag: string;
}

export interface Gallery {
    imgSrc: string;
    title: string;
}

export interface Article extends Link, Gallery {
    date: string;
}
