interface Social {
    instagram: string;
    facebook: string;
}

interface Date {
    date: string;
}

interface Author {
    author: string;
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
export interface Article extends Link, Gallery, Date {}
export interface Testimonial extends Text, Author {}

export interface Blog extends Title, Author, Date, ImgSrc, Link{
    id?: string;
    category: string;
    keywords: string[];
    content: {
        introduction?: string;
        sections: {
            title: string;
            content: string;
            items?: string[];
            highlights?: string[];
        }[];
        conclusion?: string;
    };
}

export interface Service extends Name {
    percent: number;
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
