
export interface Team {
  _id       : string;
  name     : string;
  position : string;
  image    : {
    public_id : string;
    url       : string;
  }
}



export const team: Team[] = [
  {
    _id       : "ca02fd50-b812-4a6a-88a6-b1bb0486f828",
    name     : 'anthony martinez',
    position : 'co founder',
    image    : {
      public_id : 'miniture/team/zz62yozdfveocp5ysquc',
      url       : 'https://res.cloudinary.com/did3sbjr8/image/upload/v1728988866/miniture/team/zz62yozdfveocp5ysquc.webp'
    }
  },
  {
    _id       : "1d1a71df-5c5c-4379-bb43-c7bb4bd1349d",
    name     : 'elizabeth johnson',
    position : 'creative director',
    image    : {
      public_id : 'miniture/team/gjd8uwajifnbzh11hzog',
      url       : 'https://res.cloudinary.com/did3sbjr8/image/upload/v1728988866/miniture/team/gjd8uwajifnbzh11hzog.webp'
    }
  },
  {
    _id       : "a35e75e8-3c5e-45d2-bc37-23b8c6079e5c",
    name     : 'andrew harris',
    position : 'developer',
    image    : {
      public_id : 'miniture/team/kc8rz5clggu5oa5tyhvb',
      url       : 'https://res.cloudinary.com/did3sbjr8/image/upload/v1728988866/miniture/team/kc8rz5clggu5oa5tyhvb.webp'
    }
  },
  {
    _id       : "07caa1e8-5c44-4037-a2fd-f2e22c126ff6",
    name     : 'claire thompson',
    position : 'designer',
    image    : {
      public_id : 'miniture/team/tsnaxuyh3kisgque0mzf',
      url       : 'https://res.cloudinary.com/did3sbjr8/image/upload/v1728988866/miniture/team/tsnaxuyh3kisgque0mzf.webp'
    }
  },
]