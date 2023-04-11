export const community = {
    label: 'Community Page',
    name: 'community',
    path: 'content/community',
    ui: {
        router: ({ document }) => {
            return `/${document._sys.filename}`;
        },
    },
    format: 'json',
    fields: [
        {
            label: 'Community Section',
            name: 'community',
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
                    label: 'Tabs',
                    name: 'tabs',
                    component: 'group',
                    type: 'object',
                    fields: [
                        {
                            label: "History of success Tab",
                            name: 'historySucces',
                            component: 'text',
                            type: 'string'
                        },
                        {
                            label: 'Events Tab',
                            name: 'events',
                            component: 'text',
                            type: 'string'
                        }
                    ]
                }
            ],
        },

    ],
};