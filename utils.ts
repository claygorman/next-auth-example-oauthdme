const registrationEndpoint = `${process.env.NEXT_PUBLIC_KEYCLOAK_URL}/realms/${process.env.NEXT_PUBLIC_KEYCLOAK_REALM}/protocol/openid-connect/registrations`;

export const createRegistrationUrl = (redirectUri: string) => {
    const params = new URLSearchParams();
    params.set('client_id', `${process.env.NEXT_PUBLIC_KEYCLOAK_CLIENT_ID}`);
    params.set('redirect_uri', redirectUri);
    params.set('scope', 'openid profile email');
    params.set('response_type', 'code');
    params.set('response_mode', 'fragment');
    return `${registrationEndpoint}?${params.toString()}`;
};

