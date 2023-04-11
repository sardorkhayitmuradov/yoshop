export const equipment = {
    label: 'Equipment Page',
    name: 'equipment',
    path: 'content/equipment',
    ui: {
        router: ({ document }) => {
            return `/${document._sys.filename}`;
        },
    },
    format: 'json',
    fields: [
        {
            label: 'Hero Section',
            name: 'heroSection',
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
                    label: 'Equipment Offer Items',
                    name: 'offers',
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
                            label: 'Offer Items',
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
                                    label: 'Title',
                                    name: 'title',
                                    type: 'string',
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
                            ],
                        },
                    ]
                },
            ],
        },
        {
            label: 'Add To Cart Button',
            name: 'addCart',
            component: 'text',
            type: 'string'
        },

    ],
};