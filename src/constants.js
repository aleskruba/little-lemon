import cake from './assets/cake.jpeg';
import salad from './assets/salad.jpg';
import bruscheta from './assets/bruscheta.jpeg';

export const initializeTimes = () => [
    '17:00', '18:00', '19:00', '20:00', '21:00', '22:00',
  ];
  

export const dishes = [
  {id:1,
    title:'Greek Salad',
    description:'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
    image:salad,
    price:"$18"

  },
  {id:2,
    title:'Bruchettat',
    description:'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
    image:bruscheta,
    price:"$15"

  },
  {id:3,
    title:'Lemon Dessert',
    description:'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
    image:cake,
    price:"$10"

  }


]


export const rankings = [
  {
    id: 1,
    name: 'John Doe',
    review: 'This product is amazing! It exceeded my expectations and I will definitely buy it again.',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
    createdAt: '2024-11-23',
    stars: 5,
  },
  {
    id: 2,
    name: 'Jane Smith',
    review: 'A solid product, but the quality could be better. Still, a good value for the price.',
    image: 'https://randomuser.me/api/portraits/women/2.jpg',
    createdAt: '2024-11-21',
    stars: 4,
  },
  {
    id: 3,
    name: 'Mark Taylor',
    review: 'It works well, but I encountered a few issues with the setup. Customer service was helpful though.',
    image: 'https://randomuser.me/api/portraits/men/3.jpg',
    createdAt: '2024-11-20',
    stars: 3,
  },
  {
    id: 4,
    name: 'Emily Johnson',
    review: 'Not as good as I hoped. The functionality is fine, but the design feels a bit outdated.',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
    createdAt: '2024-11-18',
    stars: 2,
  },
  {
    id: 5,
    name: 'Chris Lee',
    review: 'Great experience overall. Highly recommend to anyone looking for a reliable and affordable option.',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
    createdAt: '2024-11-17',
    stars: 5,
  },
  {
    id: 6,
    name: 'Laura Green',
    review: 'Fantastic quality for the price. I use it daily and it works like a charm!',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
    createdAt: '2024-11-15',
    stars: 5,
  },
  {
    id: 7,
    name: 'Peter Brown',
    review: 'Decent, but not perfect. I’ve had a couple of issues with the performance. Needs improvement.',
    image: 'https://randomuser.me/api/portraits/men/7.jpg',
    createdAt: '2024-11-14',
    stars: 3,
  },
  {
    id: 8,
    name: 'Sophia Williams',
    review: 'Loved it! The design is sleek, and it works perfectly. Worth every penny.',
    image: 'https://randomuser.me/api/portraits/women/8.jpg',
    createdAt: '2024-11-13',
    stars: 5,
  },
  {
    id: 9,
    name: 'David Harris',
    review: 'It’s okay, but there are better alternatives on the market. Wouldn’t recommend for heavy use.',
    image: 'https://randomuser.me/api/portraits/men/9.jpg',
    createdAt: '2024-11-12',
    stars: 2,
  },
  {
    id: 10,
    name: 'Olivia White',
    review: 'I am very satisfied with this purchase. It exceeded my expectations in terms of both performance and style.',
    image: 'https://randomuser.me/api/portraits/women/10.jpg',
    createdAt: '2024-11-11',
    stars: 5,
  },
];


