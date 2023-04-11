export const cart = {
    label: 'Cart Page',
    name: 'cart',
    path: 'content/cart',
    ui: {
        router: ({ document }) => {
            return `/${document._sys.filename}`;
        },
    },
    format: 'json',
    fields: [
        {
            label: 'Cart Section Title',
            name: 'title',
            component: 'text',
            type: 'string'
        },
        {
            label: 'Empty Cart',
            name: 'emptyCart',
            component: 'group',
            type: 'object',
            fields: [
                {
                    label: 'Empty Cart Title',
                    name: 'title',
                    component: 'text',
                    type: 'string'
                },
                {
                    label: 'Empty Cart Button',
                    name: 'button',
                    component: 'text',
                    type: 'string'
                }
            ],
        },
        {
            label: 'Filled  Card',
            name: 'filledCart',
            component: 'group',
            type: 'object',
            fields: [
                {
                    label: 'Product',
                    name: 'products',
                    component: 'text',
                    type: 'string'
                },
                {
                    label: 'Quantity',
                    name: 'qty',
                    component: 'text',
                    type: 'string'
                },
                {
                    label: 'Order Summary',
                    name: 'summary',
                    component: 'text',
                    type: 'string'
                },
                {
                    label: 'Delete All Button',
                    name: 'deleteAll',
                    component: 'text',
                    type: 'string'
                },
                {
                    label: "Select All Button",
                    name: 'selectAll',
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
                            label: "Edit License Button",
                            name: 'editLicense',
                            component: 'text',
                            type: 'string'
                        },
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
                    label: "Subtotal",
                    name: 'subTotal',
                    component: 'text',
                    type: 'string'
                },
                {
                    label: "Discount",
                    name: 'discount',
                    component: 'text',
                    type: 'string'
                },
                {
                    label: "(Your promo code applied)",
                    name: 'promoCodeApplied',
                    component: 'text',
                    type: 'string'
                },
                {
                    label: "Promod code request",
                    name: 'promoCodeRequested',
                    component: 'text',
                    type: 'string'
                },
                {
                    label: "Apply Button",
                    name: 'applyButton',
                    component: 'text',
                    type: 'string'
                },
                {
                    label: "Total",
                    name: 'total',
                    component: 'text',
                    type: 'string'
                },
                {
                    label: "Checkout Button",
                    name: 'checkoutButton',
                    component: 'text',
                    type: 'string'
                },
            ],
        }
    ],
};