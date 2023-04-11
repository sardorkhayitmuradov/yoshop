export const company = {
    label: 'Company Page',
    name: 'company',
    path: 'content/company',
    ui: {
        router: ({ document }) => {
            return `/${document._sys.filename}`;
        },
    },
    format: 'json',
    fields: [
        {
            label: 'Company Hero Section',
            name: 'hero',
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
                    label: 'Text',
                    name: 'text',
                    component: 'text',
                    type: 'string'
                },
            ],
        },
        {
            label: 'Company Features Section',
            name: 'companyFeatures',
            component: 'group',
            type: 'object',
            fields: [
                {
                    label: 'Company Purpose',
                    name: 'purpose',
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
                            label: 'Text',
                            name: 'text',
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
                    label: 'Company Vision',
                    name: 'vision',
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
                            label: 'Text',
                            name: 'text',
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
                            label: 'Line 1',
                            name: 'firstLine',
                            component: 'group',
                            type: 'object',
                            fields: [
                                {
                                    label: 'Word 1',
                                    name: 'first',
                                    component: 'text',
                                    type: 'string'
                                },
                                {
                                    label: 'Word 2',
                                    name: 'second',
                                    component: 'text',
                                    type: 'string'
                                },
                                {
                                    label: 'Word 3',
                                    name: 'third',
                                    component: 'text',
                                    type: 'string'
                                },

                            ]
                        },
                        {
                            label: 'Line 2',
                            name: 'secondLine',
                            component: 'group',
                            type: 'object',
                            fields: [
                                {
                                    label: 'Word 1',
                                    name: 'first',
                                    component: 'text',
                                    type: 'string'
                                },
                                {
                                    label: 'Word 2',
                                    name: 'second',
                                    component: 'text',
                                    type: 'string'
                                }
                            ]
                        },
                        {
                            label: 'Line 3',
                            name: 'thirdLine',
                            component: 'group',
                            type: 'object',
                            fields: [
                                {
                                    label: 'Word 1',
                                    name: 'first',
                                    component: 'text',
                                    type: 'string'
                                },
                                {
                                    label: 'Word 2',
                                    name: 'second',
                                    component: 'text',
                                    type: 'string'
                                }
                            ]
                        },
                    ]
                },
                {
                    label: 'Company Details',
                    name: 'details',
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
                            label: 'Abbreviation',
                            name: 'name',
                            component: 'text',
                            type: 'string'
                        },
                        {
                            label: 'Bin Code',
                            name: 'code',
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
            ],
        },
    ],
};