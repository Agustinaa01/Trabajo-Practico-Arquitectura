export interface Contact {
    name: string,
    lastname: string
    celularNumber?: string,
}

export const defaultContact:Contact = {
    name: "First name",
    lastname: "Last Name",
    celularNumber: "+5412345678",
}


export interface ContactJsonPlaceholder {
    name?: string;
    lastname: string;
    username?: string;
}

