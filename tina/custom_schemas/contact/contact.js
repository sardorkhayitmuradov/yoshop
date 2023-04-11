export const contact = {
    label: 'Contact Page',
    name: 'contact',
    path: 'content/contact',
    ui: {
        router: ({ document }) => {
            return `/${document._sys.filename}`;
        },
    },
    format: 'json',
    fields: [
        {
            label: 'Contact Section',
            name: 'contactSection',
            component: 'group',
            type: 'object',
            fields: [
                {
                    label: 'Contact Title',
                    name: 'title',
                    component: 'text',
                    type: 'string'
                },
                {
                    label: 'Contact Location Link',
                    name: 'locationLink',
                    component: 'text',
                    type: 'string'
                },
                {
                    label: 'Location',
                    name: 'location',
                    component: 'group',
                    type: 'object',
                    fields: [
                        {
                            label: 'Location',
                            name: 'title',
                            component: 'text',
                            type: 'string'
                        },
                        {
                            label: 'Location Street Name',
                            name: 'text',
                            component: 'text',
                            type: 'string'
                        },
                    ]
                },
                {
                    label: 'Contact Us',
                    name: 'contact',
                    component: 'group',
                    type: 'object',
                    fields: [
                        {
                            label: 'Contact Us Title',
                            name: 'title',
                            component: 'text',
                            type: 'string'
                        },
                        {
                            label: 'Contact Us Tel',
                            name: 'tel',
                            component: 'text',
                            type: 'string'
                        },
                        {
                            label: 'Contact Us Email',
                            name: 'email',
                            component: 'text',
                            type: 'string'
                        },
                    ]
                }
            ],
        },
        {
            label: 'Contact Form Section',
            name: 'form',
            component: 'group',
            type: 'object',
            fields: [
                {
                    label: 'Contact Form Title',
                    name: 'title',
                    component: 'text',
                    type: 'string'
                },
                {
                    label: 'Contact Form Text',
                    name: 'text',
                    component: 'text',
                    type: 'string'
                },
                {
                    label: 'Name Input Placeholder',
                    name: 'name',
                    component: 'text',
                    type: 'string'
                },
                {
                    label: 'Contact Form Button',
                    name: 'button',
                    component: 'text',
                    type: 'string'
                },
            ],
        },
    ],
};