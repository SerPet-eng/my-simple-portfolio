const projects = [
  {
    title: 'Age Calculator',
    description:
      'This challenge is designed to sharpen your JavaScript and form validation skills.',
    thumbnail: {
      desktop:
        'https://res.cloudinary.com/dhvpcbfat/image/upload/v1740401297/Projects/zfmbb5aszqpsr822zq2n.jpg',
      mobile:
        'https://res.cloudinary.com/dhvpcbfat/image/upload/v1740401298/Projects/cyoljsgw45xknxbejc9h.jpg',
    },
    link: 'https://lambent-hotteok-bd7729.netlify.app/',
  },
  {
    title: 'Contact Form',
    description:
      'Building accessible forms is a crucial task for front-end developers.',
    thumbnail: {
      desktop:
        'https://res.cloudinary.com/dhvpcbfat/image/upload/v1740401298/Projects/s8ruxhjipt56gdqowqk9.jpg',
      mobile:
        'https://res.cloudinary.com/dhvpcbfat/image/upload/v1740401298/Projects/l0pyoubfhtsfhjcnestc.jpg',
    },
    link: 'https://aquamarine-otter-6e3c1a.netlify.app/',
  },
  {
    title: 'E-Commerce Product Page',
    description:
      'In this challenge, I build a beautiful product page. I put my JS skills to the test with a lightbox product gallery and cart functionality',
    thumbnail: {
      desktop:
        'https://res.cloudinary.com/dhvpcbfat/image/upload/v1740401295/Projects/tbikpxjyvxlzhla7qnlt.jpg',
      mobile:
        'https://res.cloudinary.com/dhvpcbfat/image/upload/v1740401295/Projects/rlj42kxqhatu9ei5kovt.jpg',
    },
    link: 'https://silver-toffee-b3751d.netlify.app/',
  },
  {
    title: 'Email Form',
    description:
      'This will test your skills with basic form structure, validation, and submission. The success state will also be an excellent opportunity to work with DOM manipulation.',
    thumbnail: {
      desktop:
        'https://res.cloudinary.com/dhvpcbfat/image/upload/v1740401295/Projects/narv9qfhw8egmylxtztd.jpg',
      mobile:
        'https://res.cloudinary.com/dhvpcbfat/image/upload/v1740401295/Projects/cxxm06blgjabh04jrvk8.jpg',
    },
    link: 'https://inquisitive-otter-5f8f77.netlify.app/',
  },
  {
    title: 'IP Address Tracker',
    description:
      "In this challenge, you'll be using two separate APIs together to create an IP Address Tracking app.",
    thumbnail: {
      desktop:
        'https://res.cloudinary.com/dhvpcbfat/image/upload/v1740401296/Projects/uayzampa3y3jyocdm8e2.jpg',
      mobile:
        'https://res.cloudinary.com/dhvpcbfat/image/upload/v1740401296/Projects/exnzlvnnrzvmelssrlul.jpg',
    },
    link: 'https://precious-lebkuchen-ed1e9d.netlify.app/',
  },
  {
    title: 'Mortgage Calculator',
    description:
      'This mortgage calculator is an excellent project for practicing working with forms, client-side validation, and updating the DOM. Remember to focus on accessibility, too!',
    thumbnail: {
      desktop:
        'https://res.cloudinary.com/dhvpcbfat/image/upload/v1740401295/Projects/ncyrz0lljc6yl20ihip8.jpg',
      mobile:
        'https://res.cloudinary.com/dhvpcbfat/image/upload/v1740401295/Projects/ll7llh12zonaeypveeps.jpg',
    },
    link: 'https://ephemeral-paletas-dccc92.netlify.app/',
  },
  {
    title: 'Product List with Cart',
    description:
      'Practice updating the UI in multiple places based on user actions. The starter download also includes a JSON file to help you practice populating the DOM dynamically.',
    thumbnail: {
      desktop:
        'https://res.cloudinary.com/dhvpcbfat/image/upload/v1740401296/Projects/kdr6rl1hnybz7x0437bz.jpg',
      mobile:
        'https://res.cloudinary.com/dhvpcbfat/image/upload/v1740401294/Projects/qhlxmoeq6u7kbdpbqi02.jpg',
    },
    link: '',
  },
  {
    title: 'Product Preview',
    description:
      'This HTML & CSS-only challenge will be perfect for anyone starting to build responsive projects.',
    thumbnail: {
      desktop:
        'https://res.cloudinary.com/dhvpcbfat/image/upload/v1740401295/Projects/woboadqwq0yubi8pvcn0.jpg',
      mobile:
        'https://res.cloudinary.com/dhvpcbfat/image/upload/v1740401296/Projects/qpsbktazftslabdordol.jpg',
    },
    link: 'https://magnificent-churros-50a683.netlify.app/',
  },
  {
    title: 'Result Summary',
    description:
      'This challenge has something for everyone. It’s a HTML and CSS only project, but we’ve also provided a JSON file of the test results for anyone wanting to practice JS.',
    thumbnail: {
      desktop:
        'https://res.cloudinary.com/dhvpcbfat/image/upload/v1740401296/Projects/haz87buyzuwrdpv9y40m.jpg',
      mobile:
        'https://res.cloudinary.com/dhvpcbfat/image/upload/v1740401297/Projects/w1wlbko0mcc3oazwqbwg.jpg',
    },
    link: 'https://jazzy-hummingbird-d17433.netlify.app/',
  },
  {
    title: 'Simple Resume',
    description:
      'Simple Resume - Commissioned by Jana G. Najera. HTML & CSS Only. Despite being a simple project, it will be a great opportunity to practice accessibility and responsive design.',
    thumbnail: {
      desktop:
        'https://res.cloudinary.com/dhvpcbfat/image/upload/v1740401297/Projects/quw49pza9qnt0ml7jbul.jpg',
      mobile:
        'https://res.cloudinary.com/dhvpcbfat/image/upload/v1740401297/Projects/dk2n3qd0erzoyfgkknn1.jpg',
    },
    link: 'https://jannaresume.netlify.app/',
  },
  {
    title: 'Conference Ticket Generator',
    description:
      "In this challenge, you'll create a form that generates a ticket. There's a lot of scope for customizing the generated ticket and putting your own stamp on the project.",
    thumbnail: {
      desktop:
        'https://res.cloudinary.com/dhvpcbfat/image/upload/v1740401297/Projects/wck5tcnesnuuqtxf4mya.jpg',
      mobile:
        'https://res.cloudinary.com/dhvpcbfat/image/upload/v1740401296/Projects/b3qpcw6kj03xfaocbhrg.jpg',
    },
    link: 'https://tiny-granita-f41c3f.netlify.app/',
  },
  {
    title: 'Joke Generator',
    description:
      "In this challenge, you'll create a form that generates a ticket. There's a lot of scope for customizing the generated ticket and putting your own stamp on the project.",
    thumbnail: {
      desktop:
        'https://res.cloudinary.com/dhvpcbfat/image/upload/v1740401295/Projects/jhov8cojiussom1rhefb.jpg',
      mobile:
        'https://res.cloudinary.com/dhvpcbfat/image/upload/v1740401295/Projects/jhov8cojiussom1rhefb.jpg',
    },
    link: 'https://joke-generator-chuck-norris.netlify.app/',
  },
  {
    title: 'Multi-Form',
    description:
      'This challenge was from Frontend Mentor to build a multi-form',
    thumbnail: {
      desktop:
        'https://res.cloudinary.com/dhvpcbfat/image/upload/v1742912620/Projects/voj8pvw7ljg7rhkou24z.jpg',
      mobile:
        'https://res.cloudinary.com/dhvpcbfat/image/upload/v1742912620/Projects/nzytc9kqrthaoqhiljqq.jpg',
    },
    link: 'https://celadon-brigadeiros-a7886b.netlify.app/',
  },
];

export default projects;
