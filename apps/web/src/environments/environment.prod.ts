import packageJson from '@package';

export const AppConfig = {
    production: true,
    environment: 'PROD',
    version: packageJson.version,
    BACKEND_URL: 'https://iptvnator-backend-azure.vercel.app',
