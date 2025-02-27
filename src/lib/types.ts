

export type Navigation = NavigationSection[];

export interface NavigationSection {
    title: string;
    links: NavigationLink[];
}


export interface NavigationLink {
    title: string | null;
    url: string;
    icon?: string;
    active?: boolean;
}