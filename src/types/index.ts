interface Link {
    href: string;
}

export interface NavLink extends Link {
    name: string;
}

export interface SocialLink extends Link {
    icon: string;
}