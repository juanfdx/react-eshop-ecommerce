
interface Description {
  _id         : string;
  title       : string;
  text        : string;
}

interface Image {
  name      : string;
  public_id : string;
  url       : string;
}

export interface About {
  title?: string;
  description: Description[];
  image: Image;
}



export const about: About = {
  title : 'Transforming Your House into a Home with Beautifully Crafted Furniture for Every Room',
  description: [
    {
      _id   : "882e84cb-1c67-41db-bdc5-6b7b413ad86f",
      title : 'Established in 2008',
      text  : 'At eShop, our journey began in 2008 with a vision to redefine how people perceive and experience furniture. Over the years, we have grown from a small, family-owned business into a leading provider of exquisite furniture, known for our dedication to quality, craftsmanship, and innovation.',
    },
    {
      _id   : "2742c7d5-04a1-4c2b-bd8f-50042943c85f",
      title : 'The Early Years',
      text  : 'In the early years of our company, we started as a humble workshop, crafting furniture by hand with a commitment to excellence. Our founder, Dzung Nova, had a passion for woodworking and a deep appreciation for the artistry that goes into creating fine furniture. This dedication laid the foundation for our company\'s values and principles.',
    },
    {
      _id   : "c5a6ea3d-d786-4b36-81e3-5ff53c31c64f",
      title : 'Growth and Expansion',
      text  : 'As our reputation for quality craftsmanship and unique designs grew, so did our business. We expanded our operations to include a showroom where customers could experience our furniture firsthand. This expansion allowed us to connect with our customers on a more personal level and showcase the range of possibilities our furniture offered.',
    },
    {
      _id   : "2448fa6a-2e4d-4214-b79e-326e170f4c6f",
      title : 'Innovation and Customization',
      text  : 'In the 2023, we took a significant leap by embracing technology and innovation in our design and manufacturing processes. This allowed us to offer a wider range of customization options to our customers. Whether it was choosing different finishes, fabrics, or custom dimensions, we wanted every piece to reflect the unique style and personality of its owner.',
    },
  ],
  image: {
    name      : 'living room image',
    public_id : 'miniture/about/g26pjjhjq6dhrdzmkq45',
    url       : 'https://res.cloudinary.com/did3sbjr8/image/upload/v1728985277/miniture/about/g26pjjhjq6dhrdzmkq45.webp',
  },
}

