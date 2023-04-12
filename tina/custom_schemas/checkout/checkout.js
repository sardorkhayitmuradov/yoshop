export const checkout = {
    label: 'Checkout Page',
    name: 'checkout',
    path: 'content/checkout',
    ui: {
        router: ({ document }) => {
            return `/${document._sys.filename}`;
        },
    },
    format: 'json',
    fields: [
        {
            label: 'Checkout Title',
            name: 'title',
            component: 'text',
            type: 'string'
        },
        {
            label: 'Checkout Delivery Options Section',
            name: 'deliveryOptions',
            component: 'group',
            type: 'object',
            fields: [
                {
                    label: 'Checkout Delivery Options Title',
                    name: 'title',
                    component: 'text',
                    type: 'string'
                },
                {
                    label: 'Home delivery Tab',
                    name: 'home',
                    component: 'group',
                    type: 'object',
                    fields: [
                        {
                            label: 'Home delivery',
                            name: 'tab',
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
                                    label: 'Text',
                                    name: 'text',
                                    component: 'text',
                                    type: 'string'
                                },
                            ]
                        },
                        {
                            label: 'Description',
                            name: 'text',
                            component: 'text',
                            type: 'string'
                        },
                        {
                            label: 'Name Input',
                            name: 'name',
                            component: 'group',
                            type: 'object',
                            fields: [
                                {
                                    label: 'Label',
                                    name: 'label',
                                    component: 'text',
                                    type: 'string'
                                },
                                {
                                    label: 'Placeholder',
                                    name: 'placeholder',
                                    component: 'text',
                                    type: 'string'
                                },
                            ]
                        },
                        {
                            label: 'Number Input',
                            name: 'number',
                            component: 'group',
                            type: 'object',
                            fields: [
                                {
                                    label: 'Label',
                                    name: 'label',
                                    component: 'text',
                                    type: 'string'
                                },
                                {
                                    label: 'Placeholder',
                                    name: 'placeholder',
                                    component: 'text',
                                    type: 'string'
                                },
                            ]
                        },
                        {
                            label: 'Email Input',
                            name: 'email',
                            component: 'group',
                            type: 'object',
                            fields: [
                                {
                                    label: 'Label',
                                    name: 'label',
                                    component: 'text',
                                    type: 'string'
                                },
                                {
                                    label: 'Placeholder',
                                    name: 'placeholder',
                                    component: 'text',
                                    type: 'string'
                                },
                            ]
                        },
                        {
                            label: 'Town Input',
                            name: 'town',
                            component: 'group',
                            type: 'object',
                            fields: [
                                {
                                    label: 'Label',
                                    name: 'label',
                                    component: 'text',
                                    type: 'string'
                                },
                                {
                                    label: 'Placeholder',
                                    name: 'placeholder',
                                    component: 'text',
                                    type: 'string'
                                },
                            ]
                        },
                        {
                            label: 'Actual Address Input',
                            name: 'currentAddress',
                            component: 'group',
                            type: 'object',
                            fields: [
                                {
                                    label: 'Label',
                                    name: 'label',
                                    component: 'text',
                                    type: 'string'
                                },
                                {
                                    label: 'Placeholder',
                                    name: 'placeholder',
                                    component: 'text',
                                    type: 'string'
                                },
                            ]
                        }
                    ]
                },
                {
                    label: 'In-store pickup Tab',
                    name: 'store',
                    component: 'group',
                    type: 'object',
                    fields: [
                        {
                            label: 'In-store pickup',
                            name: 'tab',
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
                                    label: 'Text',
                                    name: 'text',
                                    component: 'text',
                                    type: 'string'
                                },
                            ]
                        },
                        {
                            label: 'In-store pickup Option',
                            name: 'townOption',
                            component: 'group',
                            type: 'object',
                            fields: [
                                {
                                    label: 'Option Title ',
                                    name: 'title',
                                    component: 'text',
                                    type: 'string'
                                },
                                {
                                    label: 'Option Text',
                                    name: 'option',
                                    component: 'text',
                                    type: 'string'
                                },
                            ]
                        }
                    ]
                }
            ],
        },
        {
            label: 'Payment Types',
            name: 'payment',
            component: 'group',
            type: 'object',
            fields: [
                {
                    label: 'Payment Title',
                    name: 'title',
                    component: 'text',
                    type: 'string'
                },
                {
                    label: 'Cash',
                    name: 'cash',
                    component: 'group',
                    type: 'object',
                    fields: [
                        {
                            label: 'Cash upon receipt',
                            name: 'title',
                            component: 'text',
                            type: 'string'
                        },
                        {
                            label: 'Address',
                            name: 'address',
                            component: 'text',
                            type: 'string'
                        }
                    ]
                },
                {
                    label: 'Card',
                    name: 'card',
                    component: 'group',
                    type: 'object',
                    fields: [
                        {
                            label: 'Card Title',
                            name: 'title',
                            component: 'text',
                            type: 'string'
                        },
                        {
                            label: 'Name Input',
                            name: 'name',
                            component: 'group',
                            type: 'object',
                            fields: [
                                {
                                    label: 'Title',
                                    name: 'title',
                                    component: 'text',
                                    type: 'string'
                                }
                            ]
                        },
                        {
                            label: 'Card Number',
                            name: 'cardNumber',
                            component: 'group',
                            type: 'object',
                            fields: [
                                {
                                    label: 'Card Number Title',
                                    name: 'title',
                                    component: 'text',
                                    type: 'string'
                                },
                                {
                                    label: 'Expire Date Placeholder',
                                    name: 'expireData',
                                    component: 'text',
                                    type: 'string'
                                },
                                {
                                    label: 'Code Placeholder',
                                    name: 'code',
                                    component: 'text',
                                    type: 'string'
                                },
                            ]
                        }
                    ]
                }
            ],
        },
        {
            label: 'Save card for future',
            name: 'saveCard',
            component: 'text',
            type: 'string'
        },
        {
            label: 'Review details',
            name: 'review',
            component: 'text',
            type: 'string'
        },
        {
            label: 'Terms',
            name: 'terms',
            component: 'group',
            type: 'object',
            fields: [
                {
                    label: 'Public Terms',
                    name: 'public',
                    component: 'group',
                    type: 'object',
                    fields: [
                        {
                            label: 'Text',
                            name: 'text',
                            component: 'text',
                            type: 'string'
                        },
                        {
                            label: 'Text Modal',
                            name: 'textModal',
                            component: 'text',
                            type: 'string'
                        }
                    ]
                },
                {
                    label: 'Policy Terms',
                    name: 'policy',
                    component: 'group',
                    type: 'object',
                    fields: [
                        {
                            label: 'Text',
                            name: 'text',
                            component: 'text',
                            type: 'string'
                        },
                        {
                            label: 'Text Modal',
                            name: 'textModal',
                            component: 'text',
                            type: 'string'
                        }
                    ]
                },
                {
                    label: 'Mobile Terms',
                    name: 'mobileTerms',
                    component: 'group',
                    type: 'object',
                    fields: [
                        {
                            label: 'Text',
                            name: 'text',
                            component: 'text',
                            type: 'string'
                        }
                    ]
                },
                {
                    label: 'Mobile Email Terms',
                    name: 'mobileEmailTerms',
                    component: 'group',
                    type: 'object',
                    fields: [
                        {
                            label: 'Text',
                            name: 'text',
                            component: 'text',
                            type: 'string'
                        }
                    ]
                },
            ],
        },
        {
            label: 'Products',
            name: 'products',
            component: 'group',
            type: 'object',
            fields: [
                {
                    label: 'Products Title',
                    name: 'title',
                    component: 'text',
                    type: 'string'
                },
                {
                    label: 'Licenses',
                    name: 'licenses',
                    component: 'group',
                    type: 'object',
                    fields: [
                        {
                            label: 'Period',
                            name: 'period',
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
                            label: 'Equipment',
                            name: 'equipment',
                            component: 'text',
                            type: 'string'
                        }
                    ]
                },
                {
                    label: 'Total',
                    name: 'total',
                    component: 'text',
                    type: 'string'
                },
            ],
        },
        {
            label: 'Pay Button',
            name: 'payButton',
            component: 'text',
            type: 'string'
        },
        {
            label: 'Back Button',
            name: 'backButton',
            component: 'text',
            type: 'string'
        },
        {
            label: 'Pay Modal',
            name: 'modal',
            component: 'group',
            type: 'object',
            fields: [
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
                    label: 'Title',
                    name: 'text',
                    component: 'text',
                    type: 'string'
                },
                {
                    label: 'Subtext',
                    name: 'subtext',
                    component: 'text',
                    type: 'string'
                },
            ],
        }
    ],
};