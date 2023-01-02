export default {
    name: 'recipe',
    title: 'Recipe',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'array',
            of: [{type: 'image'}],
            options: {
                hotspot: true
            }
        }, 
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                maxLength: 50,
                source: 'name'
            }
        },
        {
            name: 'step1',
            title: 'step1',
            type: 'string',
        }, 
        {
            name: 'step2',
            title: 'step2',
            type: 'string',
        }, 
        {
            name: 'step3',
            title: 'step3',
            type: 'string',
        }, 
        {
            name: 'step4',
            title: 'step4',
            type: 'string',
        }, 
        {
            name: 'step5',
            title: 'step5',
            type: 'string',
        }, {
            name: 'step6',
            title: 'step6',
            type: 'string',
        }, {
            name: 'step7',
            title: 'step7',
            type: 'string',
        }, {
            name: 'ingredients',
            title: 'ingredients',
            type: 'string',
        }, 
        {
            name: 'meal',
            title: 'Meal',
            type: 'string',
        }
    ]
}