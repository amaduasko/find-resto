const categories = [
    {
        id: 'plants',
        name: 'Plants',
        tag: ['products', 'inspirations'],
        count: 147,
        image: require('../assets/images/plants_1.png'),
    },
    {
        id: 'seeds',
        name: 'Seeds',
        tag: ['products', 'shop'],
        count: 16,
        image: require('../assets/images/plants_1.png'),
    },
    {
        id: 'flowers',
        name: 'Flowers',
        tag: ['products', 'inspirations'],
        count: 68,
        image: require('../assets/images/plants_1.png'),
    },
    {
        id: 'sprayers',
        name: 'Sprayers',
        tag: ['products', 'shop'],
        count: 17,
        image: require('../assets/images/plants_1.png'),
    },
    {
        id: 'pots',
        name: 'Pots',
        tag: ['products', 'shop'],
        count: 47,
        image: require('../assets/images/plants_1.png'),
    },
    {
        id: 'fertilizers',
        name: 'Fertilizers',
        tag: ['products', 'shop'],
        count: 47,
        image: require('../assets/images/plants_1.png'),
    },
]
const products = [
    {
        id: 1,
        name: ' 16 Best Plants That Thrive In Your Bedroom',
        description: 'some description',
        tags: ['Interior', '27m', 'Ideas'],
        gallery: [
            require('../assets/images/plants_1.png'),
            require('../assets/images/plants_2.png'),
            require('../assets/images/plants_3.png'),
            //show only 3 images, show +3 for the rest
            require('../assets/images/plants_1.png'),
            require('../assets/images/plants_2.png'),
            require('../assets/images/plants_3.png'),
        ],
    },
]

const explore = [
    //images
    require('../assets/images/explore_1.png'),
    require('../assets/images/explore_2.png'),
    require('../assets/images/explore_3.png'),
    require('../assets/images/explore_4.png'),
    require('../assets/images/explore_5.png'),
    require('../assets/images/explore_6.png'),
]

const profile = {
    username: 'react-ui-kit',
    location: 'Europe',
    email: 'contact@react-ui-kit.com',
    avatar: require('../assets/images/avatar.png'),
    budget: 1000,
    monthly_cap: 5000,
    notifications: true,
    newsletter: false,
}

export { categories, explore, products, profile }
