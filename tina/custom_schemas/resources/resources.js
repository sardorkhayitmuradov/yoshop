export const resources = {
    label: 'Resources Page',
    name: 'resources',
    path: 'content/resources',
    ui: {
        router: ({ document }) => {
            return `/${document._sys.filename}`;
        },
    },
    format: 'json',
    fields: [
        {
            label: 'Resources Section',
            name: 'resources',
            component: 'group',
            type: 'object',
            fields: [
                {
                    label: 'Resources Title',
                    name: 'title',
                    component: 'text',
                    type: 'string'
                },
                {
                    label: 'Resources text',
                    name: 'text',
                    component: 'text',
                    type: 'string'
                },
            ],
        },
        {
            label: 'Resources Questions Section',
            name: 'questions',
            component: 'group',
            type: 'object',
            fields: [
                {
                    label: 'Resources Questions Title',
                    name: 'title',
                    component: 'text',
                    type: 'string'
                },
                {
                    label: 'Questions',
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
                            label: 'Question',
                            name: 'title',
                            component: 'text',
                            type: 'string'
                        },
                        {
                            label: 'Answer',
                            name: 'text',
                            component: 'text',
                            type: 'string'
                        },
                    ],
                },
            ],
        },
    ],
};