import { env } from 'node:process';
import { PlaywrightTestConfig } from '@playwright/test';
import envConfig from './config/enviroment';

require('dotenv').config();

const testEnv: string = env.ENV === undefined ? 'local' : env.ENV.toString().toLowerCase();
const baseUrl: string = envConfig[testEnv].baseUrl;

const config: PlaywrightTestConfig = {
    globalSetup: env.SKIP_AUTH ? '' : './global-setup',
    timeout: 60000,
    fullyParallel: true,
    use: {
        baseURL: baseUrl,
    },
    projects: [
        {
            name: 'Chromium',
            use: { ...envConfig[testEnv].chromium },
        },
        // {
        //     name: 'Firefox',
        //     use: { ...envConfig[testEnv].firefox },
        // },
        // {
        //     name: 'WebKit',
        //     use: { ...envConfig[testEnv].webkit },
        // },
    ],
    // Reporter to use
    reporter: 'html',
};

export default config;