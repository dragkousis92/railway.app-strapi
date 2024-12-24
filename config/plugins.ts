export default ({ env }) => ({
    'users-permissions': {
        config: {
            jwtSecret: env('JWT_SECRET'),
        },
    },
    upload: {
        config: {
            provider: 'cloudinary',
            providerOptions: {
                cloud_name: 'dvkbfqcce',
                api_key: "984661812427117",
                api_secret: "cHqZojPrzWGpcdQ_kXpm-xTSbTY",
            },
            actionOptions: {
                upload: {},
                uploadStream: {},
                delete: {},
            },
        },
    },
});
