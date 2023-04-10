export const licenses = {
    label: 'License Page',
    name: 'licenses',
    path: 'content/licenses',
    ui: {
        router: ({ document }) => {
            return `/${document._sys.filename}`;
        },
    },
    format: 'json',
    fields: [
        {
            label: 'License Tariffs Section',
            name: 'tariffs',
            component: 'group',
            type: 'object',
            fields: [
                {
                    label: 'License Tariffs Title',
                    name: 'title',
                    component: 'text',
                    type: 'string'
                },
                {
                    label: 'License Tariffs text',
                    name: 'package',
                    component: 'text',
                    type: 'string'
                },
                {
                    label: 'License Tariffs Button',
                    name: 'button',
                    component: 'text',
                    type: 'string'
                },
                {
                    label: 'License Tabs',
                    name: 'tabs',
                    component: 'group',
                    type: 'object',
                    fields: [
                        {
                            label: 'Monthly',
                            name: 'monthly',
                            component: 'text',
                            type: 'string'
                        },
                        {
                            label: 'Semi-annual',
                            name: 'semiAnnual',
                            component: 'text',
                            type: 'string'
                        },
                        {
                            label: 'Annual',
                            name: 'annual',
                            component: 'text',
                            type: 'string'
                        },
                    ]
                },
                {
                    label: 'License',
                    name: 'license',
                    component: 'group',
                    type: 'object',
                    fields: [
                        {
                            label: 'Discount',
                            name: 'discount',
                            component: 'text',
                            type: 'string'
                        },
                        {
                            label: 'Trading place',
                            name: 'tradingPlace',
                            component: 'text',
                            type: 'string'
                        },
                        {
                            label: 'Cash zone',
                            name: 'cashZone',
                            component: 'text',
                            type: 'string'
                        },
                        {
                            label: 'Users',
                            name: 'users',
                            component: 'text',
                            type: 'string'
                        },
                        {
                            label: 'Per Additional',
                            name: 'perAdditional',
                            component: 'text',
                            type: 'string'
                        },
                        {
                            label: 'Following hardware',
                            name: 'licenceHardware',
                            component: 'text',
                            type: 'string'
                        },
                        {
                            label: 'Add Equipment Button',
                            name: 'addEquipment',
                            component: 'text',
                            type: 'string'
                        },
                        {
                            label: 'Subtotal',
                            name: 'subtotal',
                            component: 'text',
                            type: 'string'
                        },
                    ]
                },
                {
                    label: "User guide",
                    name: 'guide',
                    component: 'text',
                    type: 'string'
                },
                {
                    label: "TOTAL",
                    name: 'total',
                    component: 'text',
                    type: 'string'
                },
                {
                    label: 'The license price includes',
                    name: 'licenseFeatures',
                    component: 'group',
                    type: 'object',
                    fields: [
                        {
                            label: 'Title',
                            name: 'title',
                            component: 'text',
                            type: 'string'
                        },
                        {
                            label: 'Software warranty',
                            name: 'warranty',
                            component: 'group',
                            type: 'object',
                            fields: [
                                {
                                    label: 'Title',
                                    name: 'title',
                                    component: 'text',
                                    type: 'string'
                                },
                                {
                                    label: 'Image',
                                    name: 'image',
                                    type: 'image',
                                    parse: (media) => {
                                        return `${media}`; // This is how the image is saved in public/uploads
                                    },
                                    uploadDir: () => '/public',

                                    previewSrc: (fullSrc) => fullSrc.replace('/public', ''), //This is what is shown after inserted
                                },
                            ]
                        },
                        {
                            label: 'Setup',
                            name: 'setup',
                            component: 'group',
                            type: 'object',
                            fields: [
                                {
                                    label: 'Title',
                                    name: 'title',
                                    component: 'text',
                                    type: 'string'
                                },
                                {
                                    label: 'Image',
                                    name: 'image',
                                    type: 'image',
                                    parse: (media) => {
                                        return `${media}`; // This is how the image is saved in public/uploads
                                    },
                                    uploadDir: () => '/public',

                                    previewSrc: (fullSrc) => fullSrc.replace('/public', ''), //This is what is shown after inserted
                                },
                            ]
                        },
                        {
                            label: 'Remote technical support',
                            name: 'support',
                            component: 'group',
                            type: 'object',
                            fields: [
                                {
                                    label: 'Title',
                                    name: 'title',
                                    component: 'text',
                                    type: 'string'
                                },
                                {
                                    label: 'Image',
                                    name: 'image',
                                    type: 'image',
                                    parse: (media) => {
                                        return `${media}`; // This is how the image is saved in public/uploads
                                    },
                                    uploadDir: () => '/public',

                                    previewSrc: (fullSrc) => fullSrc.replace('/public', ''), //This is what is shown after inserted
                                },
                            ]
                        },
                    ]
                },
                {
                    label: "Subtotal",
                    name: 'subTotal',
                    component: 'text',
                    type: 'string'
                },
            ],
        },

    ],
};