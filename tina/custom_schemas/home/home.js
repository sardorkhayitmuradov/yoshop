export const home = {
    label: 'Home Page',
    name: 'home',
    path: 'content/home',
    ui: {
        router: ({ document }) => {
            if (document._sys.filename === 'home') {
                return '/'
            }
        },
    },
    format: 'json',
    fields: [
        {
            label: 'Hero Section',
            name: 'hero',
            component: 'group',
            type: 'object',
            fields: [
                {
                    label: 'First Slider',
                    name: 'firstSlider',
                    component: 'group',
                    type: 'object',
                    fields: [
                        {
                            label: 'Title',
                            name: 'multIntTitle',
                            component: 'text',
                            type: 'string'
                        },
                        {
                            label: 'Text',
                            name: 'useTech',
                            component: 'text',
                            type: 'string'
                        },
                        {
                            label: 'Button Text',
                            name: 'tryFreeButton',
                            component: 'text',
                            type: 'string'
                        },
                    ]
                },
                {
                    label: 'Second Slider',
                    name: 'secondSlider',
                    component: 'group',
                    type: 'object',
                    fields: [
                        {
                            label: 'Title text',
                            name: 'buyTitle',
                            component: 'text',
                            type: 'string'
                        },
                        {
                            label: 'Title text',
                            name: 'buyRetail',
                            component: 'text',
                            type: 'string'
                        },
                        {
                            label: 'Title text',
                            name: 'buyFree',
                            component: 'text',
                            type: 'string'
                        },
                        {
                            label: 'Button Text',
                            name: 'buyNow',
                            component: 'text',
                            type: 'string'
                        },
                    ]
                },
                {
                    label: 'Third Slider',
                    name: 'thirdSlider',
                    component: 'group',
                    type: 'object',
                    fields: [
                        {
                            label: 'Title text',
                            name: 'download',
                            component: 'text',
                            type: 'string'
                        },
                        {
                            label: 'Title text',
                            name: 'downloadMobile',
                            component: 'text',
                            type: 'string'
                        },
                        {
                            label: 'Title text',
                            name: 'downloadFree',
                            component: 'text',
                            type: 'string'
                        },
                        {
                            label: 'Title text',
                            name: 'downloadApp',
                            component: 'text',
                            type: 'string'
                        },
                        {
                            label: 'Title text',
                            name: 'downloadMonth',
                            component: 'text',
                            type: 'string'
                        },
                    ]
                },
                // {
                //     label: 'Hero Image',
                //     name: 'image',
                //     component: 'image',
                //     type: 'image',
                //     parse: (media) => {
                //         return `${media}`; // This is how the image is saved in public/uploads
                //     },
                //     uploadDir: () => '/public',

                //     previewSrc: (fullSrc) => fullSrc.replace('/public', ''),
                // },
                // {
                //     label: 'Hero app store button title',
                //     name: 'app_store',
                //     component: 'text',
                //     type: 'string'
                // },
                // {
                //     label: 'Hero google play button title',
                //     name: 'play_market',
                //     component: 'text',
                //     type: 'string'
                // },
            ],
        },
        {
            label: 'License Section',
            name: 'license',
            component: 'group',
            type: 'object',
            fields: [
                {
                    label: 'License Title',
                    name: 'title',
                    component: 'text',
                    type: 'string'
                },
                {
                    label: 'License Text',
                    name: 'text',
                    component: 'text',
                    type: 'string'
                },
                {
                    label: 'Store automation',
                    name: 'storeAutomation',
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
                        {
                            label: 'Text Items',
                            name: 'items',
                            component: "group",
                            type: 'object',
                            list: true,
                            ui: {
                                itemProps: (item) => {
                                    return { label: item?.title };
                                },
                            },
                            fields: [
                                {
                                    label: 'Text',
                                    name: 'text',
                                    type: 'string',
                                }
                            ],
                        },
                    ]
                },
                {
                    label: 'Full control business',
                    name: 'fullControlBusiness',
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
                        {
                            label: 'Text Items',
                            name: 'items',
                            component: "group",
                            type: 'object',
                            list: true,
                            ui: {
                                itemProps: (item) => {
                                    return { label: item?.title };
                                },
                            },
                            fields: [
                                {
                                    label: 'Text',
                                    name: 'text',
                                    type: 'string',
                                }
                            ],
                        },
                    ]
                },
                {
                    label: 'Effective sales management',
                    name: 'effectiveSalesManagement',
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
                        {
                            label: 'Text Items',
                            name: 'items',
                            component: "group",
                            type: 'object',
                            list: true,
                            ui: {
                                itemProps: (item) => {
                                    return { label: item?.title };
                                },
                            },
                            fields: [
                                {
                                    label: 'Text',
                                    name: 'text',
                                    type: 'string',
                                }
                            ],
                        },
                    ]
                },
                {
                    label: 'Extracting maximum profit',
                    name: 'extractMinProfit',
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
                        {
                            label: 'Text Items',
                            name: 'items',
                            component: "group",
                            type: 'object',
                            list: true,
                            ui: {
                                itemProps: (item) => {
                                    return { label: item?.title };
                                },
                            },
                            fields: [
                                {
                                    label: 'Text',
                                    name: 'text',
                                    type: 'string',
                                }
                            ],
                        },
                    ]
                },
                {
                    label: 'Absolutely safe and legal business',
                    name: 'absoluteSafeBusiness',
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
                        {
                            label: 'Text Items',
                            name: 'items',
                            component: "group",
                            type: 'object',
                            list: true,
                            ui: {
                                itemProps: (item) => {
                                    return { label: item?.title };
                                },
                            },
                            fields: [
                                {
                                    label: 'Text',
                                    name: 'text',
                                    type: 'string',
                                }
                            ],
                        },
                    ]
                },
            ],
        },
        {
            label: 'Features Section',
            name: 'features',
            component: 'group',
            type: 'object',
            fields: [
                {
                    label: 'Features Title',
                    name: 'title',
                    component: 'text',
                    type: 'string'
                },
                {
                    label: 'All types of payment',
                    name: 'typesOfPayment',
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
                        {
                            label: 'Text Items',
                            name: 'items',
                            component: "group",
                            type: 'object',
                            list: true,
                            ui: {
                                itemProps: (item) => {
                                    return { label: item?.title };
                                },
                            },
                            fields: [
                                {
                                    label: 'Text',
                                    name: 'text',
                                    type: 'string',
                                }
                            ],
                        },
                    ]
                },
                {
                    label: 'Simple intuitive interface',
                    name: 'simpleIntInterface',
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
                        {
                            label: 'Text Items',
                            name: 'items',
                            component: "group",
                            type: 'object',
                            list: true,
                            ui: {
                                itemProps: (item) => {
                                    return { label: item?.title };
                                },
                            },
                            fields: [
                                {
                                    label: 'Text',
                                    name: 'text',
                                    type: 'string',
                                }
                            ],
                        },
                    ]
                },
                {
                    label: 'Full store Report',
                    name: 'storeReport',
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
                        {
                            label: 'Text Items',
                            name: 'items',
                            component: "group",
                            type: 'object',
                            list: true,
                            ui: {
                                itemProps: (item) => {
                                    return { label: item?.title };
                                },
                            },
                            fields: [
                                {
                                    label: 'Text',
                                    name: 'text',
                                    type: 'string',
                                }
                            ],
                        },
                    ]
                },
                {
                    label: 'Fiscalization Report',
                    name: 'fiscalazition',
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
                        {
                            label: 'Text Items',
                            name: 'items',
                            component: "group",
                            type: 'object',
                            list: true,
                            ui: {
                                itemProps: (item) => {
                                    return { label: item?.title };
                                },
                            },
                            fields: [
                                {
                                    label: 'Text',
                                    name: 'text',
                                    type: 'string',
                                }
                            ],
                        },
                    ]
                },
                {
                    label: 'Fully organize your store',
                    name: 'orginizeStore',
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
                        {
                            label: 'Text Items',
                            name: 'items',
                            component: "group",
                            type: 'object',
                            list: true,
                            ui: {
                                itemProps: (item) => {
                                    return { label: item?.title };
                                },
                            },
                            fields: [
                                {
                                    label: 'Text',
                                    name: 'text',
                                    type: 'string',
                                }
                            ],
                        },
                    ]
                },
                {
                    label: 'Elimination of theft',
                    name: 'eliminationTheft',
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
                        {
                            label: 'Text Items',
                            name: 'items',
                            component: "group",
                            type: 'object',
                            list: true,
                            ui: {
                                itemProps: (item) => {
                                    return { label: item?.title };
                                },
                            },
                            fields: [
                                {
                                    label: 'Text',
                                    name: 'text',
                                    type: 'string',
                                }
                            ],
                        },
                    ]
                },
            ],
        },
    ],
};