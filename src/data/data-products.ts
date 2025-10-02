import type { Product } from '../interfaces/product.interface';



export const products: Product[] = [
  {
    _id: "cfafdfd9-4ad2-4936-9a63-daf8d6720224",
    name: "Apple iPhone 15 Pro Max",
    slug: "apple-iphone-15-pro-max",
    brand: "apple",
    category: "smartphones",
    description: "iPhone 15 Pro Max. Forged from titanium with the revolutionary A17 Pro chip, a customizable Action button, and the most powerful camera system ever on an iPhone.",
    features: [
      {
        key: "Forged in titanium",
        value: "iPhone 15 Pro Max features a rugged, lightweight, aerospace-grade titanium design with a textured matte glass back. The front with Ceramic Shield is tougher than any smartphone glass. And it won't budge from splashes, water or dust."
      },
      {
        key: "Advanced Display",
        value: "The 6.7\" Super Retina XDR display2 with ProMotion boosts the refresh rate up to 120Hz when you need maximum graphics performance. The Dynamic Island interface shows real-time alerts and activities. And with the always-on display, your Lock screen remains visible at all times. One quick glance, and you'll know what matters to you without lifting a finger."
      },
      {
        key: "A17 Pro chip",
        value: "The GPU is incredibly powerful so you can enjoy the most advanced mobile games with ultra-detailed environments and more realistic characters. Plus, the A17 Pro is so efficient that it gives you battery life for a whole day."
      },
      {
        key: "Customizable action button",
        value: "The Action button gives you direct access to your favorite feature, be it Silent Mode, Camera, Voice Memo, or Shortcut. Set it to your liking and hold it to work its magic."
      },
      {
        key: "Pro Connectivity",
        value: "The new USB-C connector is here to make your life easier: it allows you to charge your Mac or iPad with the same cable you use for your iPhone 15 Pro Max. USB 3 gives you a supercharged data transfer.4 And with Wi-Fi 6E, you can download files up to twice as fast."
      }
    ],
    specs: [
      {
        key: "display",
        value: [
          "Super Retina XDR display", 
          "6.7 inch (17 cm) diagonal OLED display",
          "Resolution of 2,796 by 1,290 pixels at 460 p/p",
          "HDR display",
          "Contrast 2,000,000:1"
        ]
      },
      {
        key: "chip",
        value: ["Chip A17 Pro", "New 6 core GPU", "New 16 core Neural Engine"]
      },
      {
        key: "cameras",
        value: [
          "48 Mpx main: 24 mm, f/1.78 aperture",
          "12MP Ultra Wide Angle: 13mm, f/2.2 aperture, 120° field of view and 100% Focus Pixels",
          "12MP 2x telephoto lens: 48mm, f/1.78 aperture,",
          "12MP 5x telephoto lens: 120mm, f/2.8 aperture",
          "5x optical zoom in, 2x optical zoom out and 10x optical zoom range",
          "Digital zoom up to x25"
        ]
      },
      {
        key: "dimensions and weight",
        value: [
          "height: 15.99 cm",
          "width: 7.67 cm",
          "thickness: 0.83 cm",
          "weight: 221 grams"
        ]
      },
      {
        key: "battery and power supply",
        value: [
          "Built-in rechargeable lithium-ion battery",
          "Wireless charging with MagSafe chargers up to 15W",
          "Wireless charging with Qi chargers up to 7.5W",
          "Fast charging: Up to 50% in about 30 minutes with a 20W adapter or higher"
        ]
      }
    ],
    reviews: [
      {
        _id: "bdcb7c37-3d5c-426c-a6f3-c01e2f5eabf3",
        user: "john doe",
        comment: "amazing performance and great battery life!",
        rating: 5,
        createdAt: "2024-09-11"
      },
      {
        _id: "9140f6d8-8ad6-40a7-a048-f244c7d6b90c",
        user: "jane smith",
        comment: "loving the new camera improvements.",
        rating: 4,
        createdAt: "2024-09-21"
      }
    ],
    averageRating: 4.5,
    variations: [
      {
        _id: "5e71224d-7b52-4f63-b21d-f2cf8b8942a1",
        name: "Apple iPhone 15 Pro Max 512GB Titanium Black",
        slug: "apple-iphone-15-pro-max-512gb-titanium-black",
        color: "titanium black",
        hexCode: "#454342",
        memory: "512GB",
        size: "",
        price: 155900,
        stock: 11,
        sku: "APL-IP15PM-512GB-TBK",
        available: true,
        images: [
          {
            public_id: "eshop/products/apple-iphone-15-pro-max-titanium-black/irq5wj5rhsqllizspub7",
            url: "https://res.cloudinary.com/did3sbjr8/image/upload/v1727168448/eshop/products/apple-iphone-15-pro-max-titanium-black/irq5wj5rhsqllizspub7.webp",
          },
          {
            public_id: "eshop/products/apple-iphone-15-pro-max-titanium-black/qd8godwsfiwir8e58af6",
            url: "https://res.cloudinary.com/did3sbjr8/image/upload/v1727168448/eshop/products/apple-iphone-15-pro-max-titanium-black/qd8godwsfiwir8e58af6.webp",
          },
          {
            public_id: "eshop/products/apple-iphone-15-pro-max-titanium-black/hsaotqjpqmz80ne2rjhc",
            url: "https://res.cloudinary.com/did3sbjr8/image/upload/v1727168447/eshop/products/apple-iphone-15-pro-max-titanium-black/hsaotqjpqmz80ne2rjhc.webp",
          },
          {
            public_id: "eshop/products/apple-iphone-15-pro-max-titanium-black/b0lypxpfgv84nlnwl9tq",
            url: "https://res.cloudinary.com/did3sbjr8/image/upload/v1727168448/eshop/products/apple-iphone-15-pro-max-titanium-black/b0lypxpfgv84nlnwl9tq.webp",
          },
          {
            public_id: "eshop/products/apple-iphone-15-pro-max-titanium-black/xonf0prl5bzf7qhnhqlv",
            url: "https://res.cloudinary.com/did3sbjr8/image/upload/v1727168448/eshop/products/apple-iphone-15-pro-max-titanium-black/xonf0prl5bzf7qhnhqlv.webp",
          }
        ],
      },
      {
        _id: "ebf097b6-32a4-4061-83ce-3a30f97e0b3d",
        name: "Apple iPhone 15 Pro Max 256GB Titanium Black",
        slug: "apple-iphone-15-pro-max-256gb-titanium-black",
        color: "titanium black",
        hexCode: "#454342",
        memory: "256GB",
        size: "",
        price: 134900,
        stock: 5,
        sku: "APL-IP15PM-256GB-TBK",
        available: true,
        images: [
          {
            public_id: "eshop/products/apple-iphone-15-pro-max-titanium-black/irq5wj5rhsqllizspub7",
            url: "https://res.cloudinary.com/did3sbjr8/image/upload/v1727168448/eshop/products/apple-iphone-15-pro-max-titanium-black/irq5wj5rhsqllizspub7.webp",
          },
          {
            public_id: "eshop/products/apple-iphone-15-pro-max-titanium-black/qd8godwsfiwir8e58af6",
            url: "https://res.cloudinary.com/did3sbjr8/image/upload/v1727168448/eshop/products/apple-iphone-15-pro-max-titanium-black/qd8godwsfiwir8e58af6.webp",
          },
          {
            public_id: "eshop/products/apple-iphone-15-pro-max-titanium-black/hsaotqjpqmz80ne2rjhc",
            url: "https://res.cloudinary.com/did3sbjr8/image/upload/v1727168447/eshop/products/apple-iphone-15-pro-max-titanium-black/hsaotqjpqmz80ne2rjhc.webp",
          },
          {
            public_id: "eshop/products/apple-iphone-15-pro-max-titanium-black/b0lypxpfgv84nlnwl9tq",
            url: "https://res.cloudinary.com/did3sbjr8/image/upload/v1727168448/eshop/products/apple-iphone-15-pro-max-titanium-black/b0lypxpfgv84nlnwl9tq.webp",
          },
          {
            public_id: "eshop/products/apple-iphone-15-pro-max-titanium-black/xonf0prl5bzf7qhnhqlv",
            url: "https://res.cloudinary.com/did3sbjr8/image/upload/v1727168448/eshop/products/apple-iphone-15-pro-max-titanium-black/xonf0prl5bzf7qhnhqlv.webp",
          }
        ],
      },
      {
        _id: "a3f1fd1b-1eec-4816-93e2-3d3b0cf2c5b0",
        name: "Apple iPhone 15 Pro Max 512GB Titanium Natural",
        slug: "apple-iphone-15-pro-max-512gb-titanium-natural",
        color: "titanium natural",
        hexCode: "#9D9996",
        memory: "512GB",
        size: "", 
        price: 155900,
        stock: 15,
        sku: "APL-IP15PM-512GB-TN",
        available: true,
        images: [
          {
            public_id: "eshop/products/apple-iphone-15-pro-max-titanium-natural/p3kx52qpzse1sodfqepc",
            url: "https://res.cloudinary.com/did3sbjr8/image/upload/v1727168888/eshop/products/apple-iphone-15-pro-max-titanium-natural/p3kx52qpzse1sodfqepc.webp",
          },
          {
            public_id: "eshop/products/apple-iphone-15-pro-max-titanium-natural/h8fjaibtlpaob1xehhyr",
            url: "https://res.cloudinary.com/did3sbjr8/image/upload/v1727168888/eshop/products/apple-iphone-15-pro-max-titanium-natural/h8fjaibtlpaob1xehhyr.webp",
          },
          {
            public_id: "eshop/products/apple-iphone-15-pro-max-titanium-natural/fgp14jfrytgekd9p7wuu",
            url: "https://res.cloudinary.com/did3sbjr8/image/upload/v1727168888/eshop/products/apple-iphone-15-pro-max-titanium-natural/fgp14jfrytgekd9p7wuu.webp",
          },
          {
            public_id: "eshop/products/apple-iphone-15-pro-max-titanium-natural/mgwca10pgncizxuyrjml",
            url: "https://res.cloudinary.com/did3sbjr8/image/upload/v1727168888/eshop/products/apple-iphone-15-pro-max-titanium-natural/mgwca10pgncizxuyrjml.webp",
          },
          {
            public_id: "eshop/products/apple-iphone-15-pro-max-titanium-natural/taxepyopoakvousqqwwn",
            url: "https://res.cloudinary.com/did3sbjr8/image/upload/v1727168888/eshop/products/apple-iphone-15-pro-max-titanium-natural/taxepyopoakvousqqwwn.webp",
          }
        ],
      },
      {
        _id: "8a0cd5d3-bb24-4760-a6d8-b6cd4319c01d",
        name: "Apple iPhone 15 Pro Max 256GB Titanium Natural",
        slug: "apple-iphone-15-pro-max-256gb-titanium-natural",
        color: "titanium natural",
        hexCode: "#9D9996",
        memory: "256GB",
        size: "",
        price: 134900,
        stock: 8,
        sku: "APL-IP15PM-256GB-TN",
        available: true,
        images: [
          {
            public_id: "eshop/products/apple-iphone-15-pro-max-titanium-natural/p3kx52qpzse1sodfqepc",
            url: "https://res.cloudinary.com/did3sbjr8/image/upload/v1727168888/eshop/products/apple-iphone-15-pro-max-titanium-natural/p3kx52qpzse1sodfqepc.webp",
          },
          {
            public_id: "eshop/products/apple-iphone-15-pro-max-titanium-natural/h8fjaibtlpaob1xehhyr",
            url: "https://res.cloudinary.com/did3sbjr8/image/upload/v1727168888/eshop/products/apple-iphone-15-pro-max-titanium-natural/h8fjaibtlpaob1xehhyr.webp",
          },
          {
            public_id: "eshop/products/apple-iphone-15-pro-max-titanium-natural/fgp14jfrytgekd9p7wuu",
            url: "https://res.cloudinary.com/did3sbjr8/image/upload/v1727168888/eshop/products/apple-iphone-15-pro-max-titanium-natural/fgp14jfrytgekd9p7wuu.webp",
          },
          {
            public_id: "eshop/products/apple-iphone-15-pro-max-titanium-natural/mgwca10pgncizxuyrjml",
            url: "https://res.cloudinary.com/did3sbjr8/image/upload/v1727168888/eshop/products/apple-iphone-15-pro-max-titanium-natural/mgwca10pgncizxuyrjml.webp",
          },
          {
            public_id: "eshop/products/apple-iphone-15-pro-max-titanium-natural/taxepyopoakvousqqwwn",
            url: "https://res.cloudinary.com/did3sbjr8/image/upload/v1727168888/eshop/products/apple-iphone-15-pro-max-titanium-natural/taxepyopoakvousqqwwn.webp",
          }
        ],
      }
    ],
		createdAt: new Date().toISOString()
  },
  {
    _id: "4d8b3c5f-318b-4a3b-87a3-787469b38c57",
    name: "Samsung Galaxy S24 Ultra",
    slug: "samsung-galaxy-s24-ultra",
    brand: "samsung",
    category: "smartphones",
    description: "A revolution in the way you connect. Imagine a device that can reason, plan and create. Galaxy S24 Ultra is much more than a smartphone. It is Samsung's first AI-powered device, with which you can navigate and search effortlessly, communicate in any language and work more productively and intelligently.",
    features: [
      {
        key: "Photograph like a true professional",
        value: "Quad Zoom technology, only available on the Ultra model, is like having a complete kit of four cameras in one: you can zoom in on 4 different levels, with optical quality and a 200MP main camera. The incorporation of Artificial Intelligence is a revolution when it comes to editing and improving your photos. You can get as close as you want and zoom in at night thanks to Nightography, as well as freely choose the montage of your photo, and retouch shadows, effects, framing or focus with just a few touches. What more could you ask for?"
      },
      {
        key: "The most powerful chip ever seen in a Galaxy",
        value: "Get ready because the processor in this Ultra model is coming on strong. The 4nm Snapdragon 8 Gen3, compatible with Ray Tracing technology, offers you maximum performance without compromising efficiency. Its cooling system is 90% large, reducing the temperature and guaranteeing the best experience. In addition, its intelligent Dynamic AMOLED 2X screen adapts to the ambient light conditions and with up to 2,600 nits of brightness, so you can play, browse and watch videos wherever you are."
      },
      {
        key: "Plenty of energy to keep up with your pace",
        value: "With up to 29 hours of video playback time and a high-power 5000mAh battery with ultra-fast charging, the big brother of the new S Series is at the forefront of performance. Not only will you get maximum energy efficiency, but Artificial Intelligence regulates the consumption of your device based on your usage patterns, so it can last with you wherever you go!"
      },
      {
        key: "New colors, choose your favorite!",
        value: "Featuring a beautiful titanium finish, you can choose from Titanium Yellow, Titanium Violet, Titanium Grey and Onyx Black. It is also available with the maximum memory capacity: 12GB + 256GB, 512GB or up to 1TB."
      }
    ],
    specs: [
      {
        key: "Operating system",
        value: [
          "Android 14"
        ]
      },
      {
        key: "chip",
        value: ["Qualcomm Snapdragon 8, Gen 3 for Galaxy Octa-Core"]
      },
      {
        key: "display",
        value: ["6.8\", 3120 x 1440 (QHD+) Dynamic AMOLED 2X (120 Hz)"]
      },
      {
        key: "memory",
        value: ["RAM: 12 GB"]
      },
      {
        key: "cameras",
        value: [
          "200 MP (F1.7) Main, OIS",
          "10 MP (F2.4) Zoom x3, OIS",
          "12 MP (F2.2) Ultra wide angler",
          "12MP 5x telephoto lens: 120mm, f/2.8 aperture",
          "50 MP (F3.4) Zoom x5, OIS",
          "12 MP (F2.2) Front"
        ]
      },
      {
        key: "connectivity",
        value: [
          "wiFi 7, HE160, MIMO, 1024-QAM",
          "bluetooth v5.3",
          "NFC"
        ]
      },
      {
        key: "dimensions and weight",
        value: [
          "dimensions: 162.3 x 79.0 x 8.6 mm",
          "weight: 232 g"
        ]
      },
      {
        key: "battery",
        value: [
          "5000 mAh",
          "maximum fast charge supported 45W",
          "wireless charging"
        ]
      }
    ],
    reviews: [],
    averageRating: 0,
    variations: [
      {
        _id: "340d6509-c98c-4f2f-81f0-218697013911",
        name: "Samsung Galaxy S24 Ultra 512GB Titanium Black",
        slug: "samsung-galaxy-s24-ultra-512gb-titanium-black",
        color: "titanium black",
        hexCode: "#454342",
        memory: "512GB",
        size: "",
        price: 129900,
        stock: 11,
        sku: "SAM-S24U-512GB-TBK",
        available: true,
        images: [
          {
            public_id: "eshop/products/samsung-galaxy-s24-ultra-titanium-black/t2evl9lwbvxm5ijpdq9x",
            url: "https://res.cloudinary.com/did3sbjr8/image/upload/v1727169265/eshop/products/samsung-galaxy-s24-ultra-titanium-black/t2evl9lwbvxm5ijpdq9x.webp",
          },
          {
            public_id: "eshop/products/samsung-galaxy-s24-ultra-titanium-black/vlc4jdralbdosclj08mj",
            url: "https://res.cloudinary.com/did3sbjr8/image/upload/v1727169265/eshop/products/samsung-galaxy-s24-ultra-titanium-black/vlc4jdralbdosclj08mj.webp",
          },
          {
            public_id: "eshop/products/samsung-galaxy-s24-ultra-titanium-black/nb1hkq2zdrx9p6jvxyvw",
            url: "https://res.cloudinary.com/did3sbjr8/image/upload/v1727169265/eshop/products/samsung-galaxy-s24-ultra-titanium-black/nb1hkq2zdrx9p6jvxyvw.webp",
          }
        ],
      },
      {
        _id: "287c1ee0-1c6c-4391-810f-85ac148eb441",
        name: "Samsung Galaxy S24 Ultra 256GB Titanium Black",
        slug: "samsung-galaxy-s24-ultra-256gb-titanium-black",
        color: "titanium black",
        hexCode: "#454342",
        memory: "256GB",
        size: "",
        price: 109900,
        stock: 5,
        sku: "SAM-S24U-256GB-TBK",
        available: true,
        images: [
          {
            public_id: "eshop/products/samsung-galaxy-s24-ultra-titanium-black/t2evl9lwbvxm5ijpdq9x",
            url: "https://res.cloudinary.com/did3sbjr8/image/upload/v1727169265/eshop/products/samsung-galaxy-s24-ultra-titanium-black/t2evl9lwbvxm5ijpdq9x.webp",
          },
          {
            public_id: "eshop/products/samsung-galaxy-s24-ultra-titanium-black/vlc4jdralbdosclj08mj",
            url: "https://res.cloudinary.com/did3sbjr8/image/upload/v1727169265/eshop/products/samsung-galaxy-s24-ultra-titanium-black/vlc4jdralbdosclj08mj.webp",
          },
          {
            public_id: "eshop/products/samsung-galaxy-s24-ultra-titanium-black/nb1hkq2zdrx9p6jvxyvw",
            url: "https://res.cloudinary.com/did3sbjr8/image/upload/v1727169265/eshop/products/samsung-galaxy-s24-ultra-titanium-black/nb1hkq2zdrx9p6jvxyvw.webp",
          }
        ],
      },
      {
        _id: "e0f6e3da-21f1-4f8c-a464-bba8f4ff5c4e",
        name: "Samsung Galaxy S24 Ultra 512GB Titanium Yellow",
        slug: "samsung-galaxy-s24-ultra-512gb-titanium-yellow",
        color: "titanium yellow",
        hexCode: "#F4E0B0",
        memory: "512GB",
        size: "",
        price: 129900,
        stock: 14,
        sku: "SAM-S24U-512GB-TYE",
        available: true,
        images: [
          {
            public_id: "eshop/products/samsung-galaxy-s24-ultra-titanium-yellow/e9upku7x7urntvssuspb",
            url: "https://res.cloudinary.com/did3sbjr8/image/upload/v1727169588/eshop/products/samsung-galaxy-s24-ultra-titanium-yellow/e9upku7x7urntvssuspb.webp",
          },
          {
            public_id: "eshop/products/samsung-galaxy-s24-ultra-titanium-yellow/yqjdbdtbo3bfrtcaewfv",
            url: "https://res.cloudinary.com/did3sbjr8/image/upload/v1727169587/eshop/products/samsung-galaxy-s24-ultra-titanium-yellow/yqjdbdtbo3bfrtcaewfv.webp",
          },
          {
            public_id: "eshop/products/samsung-galaxy-s24-ultra-titanium-yellow/t0qpazzunnkmgu6apzco",
            url: "https://res.cloudinary.com/did3sbjr8/image/upload/v1727169588/eshop/products/samsung-galaxy-s24-ultra-titanium-yellow/t0qpazzunnkmgu6apzco.webp",
          },
        ],
      },
      {
        _id: "47b96391-d097-481a-a241-e1cb23c1a0be",
        name: "Samsung Galaxy S24 Ultra 256GB Titanium Yellow",
        slug: "samsung-galaxy-s24-ultra-256gb-titanium-yellow",
        color: "titanium yellow",
        hexCode: "#F4E0B0",
        memory: "256GB",
        size: "",
        price: 109900,
        stock: 0,
        sku: "SAM-S24U-256GB-TYE",
        available: true,
        images: [
          {
            public_id: "eshop/products/samsung-galaxy-s24-ultra-titanium-yellow/e9upku7x7urntvssuspb",
            url: "https://res.cloudinary.com/did3sbjr8/image/upload/v1727169588/eshop/products/samsung-galaxy-s24-ultra-titanium-yellow/e9upku7x7urntvssuspb.webp",
          },
          {
            public_id: "eshop/products/samsung-galaxy-s24-ultra-titanium-yellow/yqjdbdtbo3bfrtcaewfv",
            url: "https://res.cloudinary.com/did3sbjr8/image/upload/v1727169587/eshop/products/samsung-galaxy-s24-ultra-titanium-yellow/yqjdbdtbo3bfrtcaewfv.webp",
          },
          {
            public_id: "eshop/products/samsung-galaxy-s24-ultra-titanium-yellow/t0qpazzunnkmgu6apzco",
            url: "https://res.cloudinary.com/did3sbjr8/image/upload/v1727169588/eshop/products/samsung-galaxy-s24-ultra-titanium-yellow/t0qpazzunnkmgu6apzco.webp",
          },
        ],
      }
    ],
    createdAt: new Date().toISOString()
  },
  {
    _id: "ec2844cb-e267-4640-b9f0-ff0b2fc14b8a",
    name: "Gigabyte G5 KF5-53SH Intel Core i5-13500H SSD RTX 4060 15.6\" 16GB",
    slug: "gigabyte-g5-intel-core-i5-13500h-ssd-rtx-4060-156-16gb",
    brand: "gigabyte",
    category: "laptops",
    description: "The GIGABYTE gaming laptop is equipped with up to 13th Gen Intel® Core™ i7 processor, NVIDIA® GeForce RTX™ 40 Series Laptop GPU and a 144Hz high refresh rate display.",
    features: [
      {
        key: "Slim and light design",
        value: "The slim bezel design screen enables the GIGABYTE gaming laptop to be a slim laptop with a lightweight body, the size of which has been reduced by 22% and is easy to grip without compromising its high performance. You can enjoy playing games when you go out while finishing more tasks at the same time."
      },
      {
        key: "GeForce RTX 40 Series Laptops",
        value: "Beyond speed for gamers and creators. NVIDIA® GeForce RTX™ 40 Series laptop GPUs power the world's fastest laptops for gamers and creators. Built on the ultra-efficient NVIDIA Ada Lovelace architecture, they deliver a quantum leap in performance with AI-powered DLSS 3 and enable realistic virtual worlds with full ray tracing. Plus, the Max-Q suite of technologies optimizes system performance, power, battery life, and acoustics for maximum efficiency."
      },
      {
        key: "The 13th Gen Intel® Core™ i5 processor",
        value: "The G5 gaming laptop is equipped with a 13th Gen Intel® Core™ processor. Users can stream, record gameplay, and run multiple applications without compromise. The G5 delivers fast multimedia processing and the smoothest gaming experience."
      },
      {
        key: "Ultra-low latency compatible with Wi-Fi 6E",
        value: "Wi-Fi 6E greatly reduces the latency caused by crowded connections, giving you a real-time gaming experience without a millisecond of delay, allowing you to be the last one standing."
      },
      {
        key: "DTS: X™ Ultra",
        value: "The G5 gaming laptop supports surround sound innovation that delivers exceptional sound experience and performance. From gaming, watching movies to conference calls, the DTS: X™ Ultra delivers true 3D surround effect and voice communication is clearer than ever with two-way AI noise cancellation that eliminates noise from incoming and outgoing audio."
      }
    ],
    specs: [
      {
        key: "design",
        value: [
          "Product Type: Laptop",
          "Product colour: Black",
          "Form factor: Clamshell",
          "Year of introduction: 2023"
        ]
      },
      {
        key: "display",
        value: [
          "Screen diagonal: 15.6\"",
          "Screen resolution: 1920 x 1080 pixels",
          "Touch screen: No",
          "HD Type: Full HD",
          "Maximum refresh rate: 144 Hz"
        ]
      },
      {
        key: "processor",
        value: [
          "Processor manufacturer: Intel",
          "Processor Generation: 13th Generation Intel® Core™ i5",
          "Processor model: i5-13500H",
          "Processor frequency: 4.7 GHz",
          "Number of processor cores: 12",
          "Processor Cache: 18 MB"
        ]
      },
      {
        key: "memory",
        value: [
          "Internal memory: 16 GB",
          "Internal memory type: DDR5-SDRAM",
          "Memory clock speed: 4800 MHz",
          "Maximum internal memory: 64 GB"
        ]
      },
      {
        key: "Graphics",
        value: [
          "Discrete graphics adapter model: NVIDIA GeForce RTX 4060",
          "Graphics adapter memory capacity: 8 GB",
          "Discrete graphics memory type: GDDR6"
        ]
      },
      {
        key: "connectivity",
        value: [
          "Wi-Fi standard: Wi-Fi 6E (802.11ax)",
          "ethernet: Yes",
          "bluetooth: v5.2",
        ]
      },
      {
        key: "battery",
        value: [
          "Battery technology: Lithium Ion",
          "Battery capacity: 54 Wh",
        ]
      },
      {
        key: "dimensions and weight",
        value: [
          "width: 360 mm",
          "depth: 238 mm",
          "height: 22.7 mm",
          "weight: 2.08 kg"
        ]
      }
    ],
    reviews: [
      {
        _id: "e4be9a07-b497-41dc-91f2-1e4a6e2466d3",
        user: "mary lopez",
        comment: "amazing performance and great battery life!",
        rating: 4.4,
        createdAt: "2024-08-21"
      },
    ],
    averageRating: 4.4,
    variations: [
      {
        _id: "2f7931b2-b77b-4b56-bc99-c51bb8de07f6",
        name: "Gigabyte G5 KF5-53SH Intel Core i5-13500H SSD RTX 4060 15.6\" 16GB 512GB BLACK",
        slug: "gigabyte-g5-intel-core-i5-13500h-ssd-rtx-4060-156-16gb-512gb-black",
        color: "black",
        hexCode: "#000000",
        memory: "512GB", 
        price: 103398,
        size: "",
        stock: 17,
        sku: "GIG-G5KF5-16GB512GB-RTX4060-BLK",
        available: true,
        images: [
          {
            public_id: "eshop/products/gigabyte-g5-intel-core-i5-13500h-16gb-512gb-ssd-rtx-4060-156/jiaytwsqtchtlpnuvhwl",
            url: "https://res.cloudinary.com/did3sbjr8/image/upload/v1726210615/eshop/products/gigabyte-g5-intel-core-i5-13500h-16gb-512gb-ssd-rtx-4060-156/jiaytwsqtchtlpnuvhwl.webp",
          },
          {
            public_id: "eshop/products/gigabyte-g5-intel-core-i5-13500h-16gb-512gb-ssd-rtx-4060-156/bsgvovdp8zzonohdvpyt",
            url: "https://res.cloudinary.com/did3sbjr8/image/upload/v1726210615/eshop/products/gigabyte-g5-intel-core-i5-13500h-16gb-512gb-ssd-rtx-4060-156/bsgvovdp8zzonohdvpyt.webp",
          },
          {
            public_id: "eshop/products/gigabyte-g5-intel-core-i5-13500h-16gb-512gb-ssd-rtx-4060-156/waoe9ulzzpjrpltbz9ng",
            url: "https://res.cloudinary.com/did3sbjr8/image/upload/v1726210614/eshop/products/gigabyte-g5-intel-core-i5-13500h-16gb-512gb-ssd-rtx-4060-156/waoe9ulzzpjrpltbz9ng.webp",
          },
          {
            public_id: "eshop/products/gigabyte-g5-intel-core-i5-13500h-16gb-512gb-ssd-rtx-4060-156/zebjngpdhzjigyukkke4",
            url: "https://res.cloudinary.com/did3sbjr8/image/upload/v1726210614/eshop/products/gigabyte-g5-intel-core-i5-13500h-16gb-512gb-ssd-rtx-4060-156/zebjngpdhzjigyukkke4.webp",
          }
        ],
      },
    ],
    createdAt: new Date().toISOString()
  },
  {
    _id: "0bc51f36-cda7-4863-b431-f5dd5305a684",
    name: "Apple MacBook Air Apple M3 SSD GPU 8 Cores/13.6\" 8GB",
    slug: "apple-macbook-air-apple-m3-ssd-gpu-8-cores-136-8gb",
    brand: "apple",
    category: "laptops",
    description: "The 13-inch MacBook Air is powered by the M3 chip, which offers a super-compact design and up to 18 hours of battery life.1 It's the perfect companion for work and play, anywhere.",
    features: [
      {
        key: "M3 Power. Sharpened to the max",
        value: "MacBook Air with M3 chip is compact enough to work and play anywhere."
      },
      {
        key: "Compact design",
        value: "Because it's super lightweight and just over an inch thick, you can take your MacBook Air with you anywhere."
      },
      {
        key: "Do more. Faster.",
        value: "The power of the Apple M3 chip's 8-core CPU and up to 10-core GPU keeps everything running smoothly."
      },
      {
        key: "Up to 18 hours of autonomyn",
        value: "With all-day battery life, you can leave the adapter at home with peace of mind."
      },
      {
        key: "A bright screen",
        value: "The 13.6-inch Liquid Retina display2 supports 1 billion colors."
      },
      {
        key: "Full connectivity",
        value: "MacBook Air has two Thunderbolt ports, a headphone jack, Wi-Fi 6E,4 Bluetooth 5.3, and a MagSafe charging port. And you can connect up to two external monitors with the lid of the laptop closed."
      }
    ],
    specs: [
      {
        key: "chip",
        value: [
          "Apple M3 chip",
          "8-core CPU (4 performance and 4 efficiency)",
          "8-core GPU",
          "16-core Neural Engine",
          "100 GB/s memory bandwidth"
        ]
      },
      {
        key: "display",
        value: [
          "Liquid Retina display",
          "13.6-inch (diagonal) LED-backlit display with IPS technology;1 2,560-by-1,664 native resolution at 224 pixels per inch",
          "500 nits brightness",
          "Supports 1 billion colors",
          "True Tone Technology"
        ]
      },
      {
        key: "memory",
        value: [
          "8GB unified memory"
        ]
      },
      {
        key: "connectivity",
        value: [
          "WiFi 6E (802.11ax)4",
          "Bluetooth 5.3"
        ]
      },
      {
        key: "Webcam",
        value: [
          "1080p FaceTime HD camera",
          "Advanced Image Signal Processor with Computational Video"
        ]
      },
      {
        key: "battery",
        value: [
          "Up to 18 hours of video playback on the Apple TV app",
          "Up to 15 hours of wireless web browsing",
          "52.6 watt hour lithium polymer battery",
          "30W USB-C power adapter (included with M2 and M3 with 8-core GPU)"
        ]
      },
      {
        key: "dimensions and weight",
        value: [
          "width: 30.41 cm",
          "depth: 21.5 cm",
          "height: 1.13 cm",
          "weight: 1.24 kg"
        ]
      }
    ],
    reviews: [],
    averageRating: 0,
    variations: [
      {
        _id: "967b2b7e-06e6-4707-bc53-50ec0b397cbb",
        name: "Apple MacBook Air Apple M3 SSD GPU 8 Cores/13.6\" 8GB 512GB Midnight",
        slug: "apple-macbook-air-apple-m3-ssd-gpu-8-cores-136-8gb-512gb-midnight",
        color: "midnight",
        hexCode: "#40464F",
        memory: "512GB",
        size: "",
        price: 132900,
        stock: 12,
        sku: "APP-MBAIR-M3-8GB512GB-MID",
        available: true,
        images: [
          {
            public_id: "eshop/products/apple-macbook-air-apple-m3-ssd-gpu-136-midnight/j2vlhkgnoao2yuzivxxm",
            url: "https://res.cloudinary.com/did3sbjr8/image/upload/v1727170285/eshop/products/apple-macbook-air-apple-m3-ssd-gpu-136-midnight/j2vlhkgnoao2yuzivxxm.webp",
          },
          {
            public_id: "eshop/products/apple-macbook-air-apple-m3-ssd-gpu-136-midnight/gej5xo73ikam0swaf0m5",
            url: "https://res.cloudinary.com/did3sbjr8/image/upload/v1727170285/eshop/products/apple-macbook-air-apple-m3-ssd-gpu-136-midnight/gej5xo73ikam0swaf0m5.webp",
          },
          {
            public_id: "eshop/products/apple-macbook-air-apple-m3-ssd-gpu-136-midnight/qvouxj55ihk68qvjtafw",
            url: "https://res.cloudinary.com/did3sbjr8/image/upload/v1727170285/eshop/products/apple-macbook-air-apple-m3-ssd-gpu-136-midnight/qvouxj55ihk68qvjtafw.webp",
          },
          {
            public_id: "eshop/products/apple-macbook-air-apple-m3-ssd-gpu-136-midnight/xyukpvntcypm2uwemfxn",
            url: "https://res.cloudinary.com/did3sbjr8/image/upload/v1727170285/eshop/products/apple-macbook-air-apple-m3-ssd-gpu-136-midnight/xyukpvntcypm2uwemfxn.webp",
          }
        ],
      },
      {
        _id: "3c2cf1bc-371a-4ff5-a4ec-c377188a2ff4",
        name: "Apple MacBook Air Apple M3 SSD GPU 8 Cores/13.6\" 8GB 256GB Midnight",
        slug: "apple-macbook-air-apple-m3-ssd-gpu-8-cores-136-8gb-256gb-midnight",
        color: "midnight",
        hexCode: "#40464F",
        memory: "256GB",
        size: "",
        price: 109899,
        stock: 16,
        sku: "APP-MBAIR-M3-8GB256GB-MID",
        available: true,
        images: [
          {
            public_id: "eshop/products/apple-macbook-air-apple-m3-ssd-gpu-136-midnight/j2vlhkgnoao2yuzivxxm",
            url: "https://res.cloudinary.com/did3sbjr8/image/upload/v1727170285/eshop/products/apple-macbook-air-apple-m3-ssd-gpu-136-midnight/j2vlhkgnoao2yuzivxxm.webp",
          },
          {
            public_id: "eshop/products/apple-macbook-air-apple-m3-ssd-gpu-136-midnight/gej5xo73ikam0swaf0m5",
            url: "https://res.cloudinary.com/did3sbjr8/image/upload/v1727170285/eshop/products/apple-macbook-air-apple-m3-ssd-gpu-136-midnight/gej5xo73ikam0swaf0m5.webp",
          },
          {
            public_id: "eshop/products/apple-macbook-air-apple-m3-ssd-gpu-136-midnight/qvouxj55ihk68qvjtafw",
            url: "https://res.cloudinary.com/did3sbjr8/image/upload/v1727170285/eshop/products/apple-macbook-air-apple-m3-ssd-gpu-136-midnight/qvouxj55ihk68qvjtafw.webp",
          },
          {
            public_id: "eshop/products/apple-macbook-air-apple-m3-ssd-gpu-136-midnight/xyukpvntcypm2uwemfxn",
            url: "https://res.cloudinary.com/did3sbjr8/image/upload/v1727170285/eshop/products/apple-macbook-air-apple-m3-ssd-gpu-136-midnight/xyukpvntcypm2uwemfxn.webp",
          }
        ],
      },
      {
        _id: "f5aaf6a2-92ee-4709-82c1-8f8a44d8476e",
        name: "Apple MacBook Air Apple M3 SSD GPU 8 Cores/13.6\" 8GB 512GB Space Grey",
        slug: "apple-macbook-air-apple-m3-ssd-gpu-8-cores-136-8gb-512gb-space-grey",
        color: "space grey",
        hexCode: "#9C9C9C",
        memory: "512GB",
        size: "",
        price: 132900,
        stock: 22,
        sku: "APP-MBAIR-M3-8GB512GB-SPG",
        available: true,
        images: [
          {
            public_id: "eshop/products/apple-macbook-air-apple-m3-ssd-gpu-136-space-grey/nkogezgqf5l6hfsqtyie",
            url: "https://res.cloudinary.com/did3sbjr8/image/upload/v1727168005/eshop/products/apple-macbook-air-apple-m3-ssd-gpu-136-space-grey/nkogezgqf5l6hfsqtyie.webp",
          },
          {
            public_id: "eshop/products/apple-macbook-air-apple-m3-ssd-gpu-136-space-grey/wsc3bsvqu3ahyiiyiwml",
            url: "https://res.cloudinary.com/did3sbjr8/image/upload/v1727168005/eshop/products/apple-macbook-air-apple-m3-ssd-gpu-136-space-grey/wsc3bsvqu3ahyiiyiwml.webp",
          },
          {
            public_id: "eshop/products/apple-macbook-air-apple-m3-ssd-gpu-136-space-grey/chutgsbdzfqynbft88ap",
            url: "https://res.cloudinary.com/did3sbjr8/image/upload/v1727168005/eshop/products/apple-macbook-air-apple-m3-ssd-gpu-136-space-grey/chutgsbdzfqynbft88ap.webp",
          },
          {
            public_id: "eshop/products/apple-macbook-air-apple-m3-ssd-gpu-136-space-grey/cdluvw6ttjsku8wyjlq4",
            url: "https://res.cloudinary.com/did3sbjr8/image/upload/v1727168005/eshop/products/apple-macbook-air-apple-m3-ssd-gpu-136-space-grey/cdluvw6ttjsku8wyjlq4.webp",
          }
        ],
      },
      {
        _id:  "290f18b2-cc67-4f3d-b3b7-4be0f6542726",
        name: "Apple MacBook Air Apple M3 SSD GPU 8 Cores/13.6\" 8GB 256GB Space Grey",
        slug: "apple-macbook-air-apple-m3-ssd-gpu-8-cores-136-8gb-256gb-space-grey",
        color: "space grey",
        hexCode: "#9C9C9C",
        memory: "256GB",
        size: "",
        price: 109899,
        stock: 11,
        sku: "APP-MBAIR-M3-8GB256GB-SPG",
        available: true,
        images: [
          {
            public_id: "eshop/products/apple-macbook-air-apple-m3-ssd-gpu-136-space-grey/nkogezgqf5l6hfsqtyie",
            url: "https://res.cloudinary.com/did3sbjr8/image/upload/v1727168005/eshop/products/apple-macbook-air-apple-m3-ssd-gpu-136-space-grey/nkogezgqf5l6hfsqtyie.webp",
          },
          {
            public_id: "eshop/products/apple-macbook-air-apple-m3-ssd-gpu-136-space-grey/wsc3bsvqu3ahyiiyiwml",
            url: "https://res.cloudinary.com/did3sbjr8/image/upload/v1727168005/eshop/products/apple-macbook-air-apple-m3-ssd-gpu-136-space-grey/wsc3bsvqu3ahyiiyiwml.webp",
          },
          {
            public_id: "eshop/products/apple-macbook-air-apple-m3-ssd-gpu-136-space-grey/chutgsbdzfqynbft88ap",
            url: "https://res.cloudinary.com/did3sbjr8/image/upload/v1727168005/eshop/products/apple-macbook-air-apple-m3-ssd-gpu-136-space-grey/chutgsbdzfqynbft88ap.webp",
          },
          {
            public_id: "eshop/products/apple-macbook-air-apple-m3-ssd-gpu-136-space-grey/cdluvw6ttjsku8wyjlq4",
            url: "https://res.cloudinary.com/did3sbjr8/image/upload/v1727168005/eshop/products/apple-macbook-air-apple-m3-ssd-gpu-136-space-grey/cdluvw6ttjsku8wyjlq4.webp",
          }
        ],
      }
    ],
    createdAt: new Date().toISOString()
  },
  {
    _id: "1c60f872-45da-44f9-800c-c5fef5b2b0d4",
    name: "Apple Watch SE GPS 44mm",
    slug: "apple-watch-se-gps-44mm",
    brand: "apple",
    category: "smartwatches",
    description: "The 13-inch MacBook Air is powered by the M3 chip, which offers a super-compact design and up to 18 hours of battery life.1 It's the perfect companion for work and play, anywhere.",
    features: [
      {
        key: "M3 Power. Sharpened to the max",
        value: "MacBook Air with M3 chip is compact enough to work and play anywhere."
      },
      {
        key: "Compact design",
        value: "Because it's super lightweight and just over an inch thick, you can take your MacBook Air with you anywhere."
      },
      {
        key: "Do more. Faster.",
        value: "The power of the Apple M3 chip's 8-core CPU and up to 10-core GPU keeps everything running smoothly."
      },
      {
        key: "Up to 18 hours of autonomyn",
        value: "With all-day battery life, you can leave the adapter at home with peace of mind."
      },
      {
        key: "A bright screen",
        value: "The 13.6-inch Liquid Retina display2 supports 1 billion colors."
      },
      {
        key: "Full connectivity",
        value: "MacBook Air has two Thunderbolt ports, a headphone jack, Wi-Fi 6E,4 Bluetooth 5.3, and a MagSafe charging port. And you can connect up to two external monitors with the lid of the laptop closed."
      }
    ],
    specs: [
      {
        key: "chip",
        value: [
          "Apple M3 chip",
          "8-core CPU (4 performance and 4 efficiency)",
          "8-core GPU",
          "16-core Neural Engine",
          "100 GB/s memory bandwidth"
        ]
      },
      {
        key: "display",
        value: [
          "Liquid Retina display",
          "13.6-inch (diagonal) LED-backlit display with IPS technology;1 2,560-by-1,664 native resolution at 224 pixels per inch",
          "500 nits brightness",
          "Supports 1 billion colors",
          "True Tone Technology"
        ]
      },
      {
        key: "memory",
        value: [
          "8GB unified memory"
        ]
      },
      {
        key: "connectivity",
        value: [
          "WiFi 6E (802.11ax)4",
          "Bluetooth 5.3"
        ]
      },
      {
        key: "Webcam",
        value: [
          "1080p FaceTime HD camera",
          "Advanced Image Signal Processor with Computational Video"
        ]
      },
      {
        key: "battery",
        value: [
          "Up to 18 hours of video playback on the Apple TV app",
          "Up to 15 hours of wireless web browsing",
          "52.6 watt hour lithium polymer battery",
          "30W USB-C power adapter (included with M2 and M3 with 8-core GPU)"
        ]
      },
      {
        key: "dimensions and weight",
        value: [
          "width: 30.41 cm",
          "depth: 21.5 cm",
          "height: 1.13 cm",
          "weight: 1.24 kg"
        ]
      }
    ],
    reviews: [],
    averageRating: 0,
    variations: [
      {
        _id: "24c6f6fa-8358-40fc-a197-4f0a3c82c4e6",
        name: "Apple Watch SE GPS 44mm Midnight",
        slug: "apple-watch-se-gps-44mm-midnight",
        color: "midnight",
        hexCode: "#40464F",
        memory: "",
        size: "",
        price: 26900,
        stock: 15,
        sku: "APL-WSE-GPS44-MID",
        available: true,
        images: [
          {
            public_id: "mn163vnnfpw5nuc5e2br",
            url: "https://res.cloudinary.com/did3sbjr8/image/upload/v1726208525/eshop/products/apple-watch-se-gps-44mm-midnight-aluminum-with-midnight-sport-band-m-l/mn163vnnfpw5nuc5e2br.webp",
          },
          {
            public_id: "wvesgrb9gqw31wmopdpc",
            url: "https://res.cloudinary.com/did3sbjr8/image/upload/v1726231635/eshop/products/apple-watch-se-gps-44mm-midnight-aluminum-with-midnight-sport-band-m-l/wvesgrb9gqw31wmopdpc.webp",
          },
          {
            public_id: "w4kkqetzkvjufqaouklr",
            url: "https://res.cloudinary.com/did3sbjr8/image/upload/v1726231658/eshop/products/apple-watch-se-gps-44mm-midnight-aluminum-with-midnight-sport-band-m-l/w4kkqetzkvjufqaouklr.webp",
          },
          {
            public_id: "ab68xynbbfjf3yub5cod",
            url: "https://res.cloudinary.com/did3sbjr8/image/upload/v1726208525/eshop/products/apple-watch-se-gps-44mm-midnight-aluminum-with-midnight-sport-band-m-l/ab68xynbbfjf3yub5cod.webp",
          },
        ],
      },
      {
        _id: "0aab02e6-23bb-4bb7-b0bc-c05910b689b6",
        name: "Apple Watch SE GPS 44mm White Aluminum",
        slug: "apple-watch-se-gps-44mm-white-aluminum",
        color: "white aluminum",
        hexCode: "#DBD0C8",
        memory: "",
        size: "",
        price: 26900,
        stock:24,
        sku: "APL-WSE-GPS44-ALU",
        available: true,
        images: [
          {
            public_id: "oiw8tsls54i2pjgmd30m",
            url: "https://res.cloudinary.com/did3sbjr8/image/upload/v1726208685/eshop/products/apple-watch-se-gps-44mm-star-white-aluminum-with-star-white-sport-band-m-l/oiw8tsls54i2pjgmd30m.webp",
          },
          {
            public_id: "tvbaxdhofoaeq942vnpx",
            url: "https://res.cloudinary.com/did3sbjr8/image/upload/v1726208685/eshop/products/apple-watch-se-gps-44mm-star-white-aluminum-with-star-white-sport-band-m-l/tvbaxdhofoaeq942vnpx.webp",
          },
          {
            public_id: "w2y8diq7ecs3erlwa3nu",
            url: "https://res.cloudinary.com/did3sbjr8/image/upload/v1726208685/eshop/products/apple-watch-se-gps-44mm-star-white-aluminum-with-star-white-sport-band-m-l/w2y8diq7ecs3erlwa3nu.webp",
          },
          {
            public_id: "q21iaqzzd6skylp46okb",
            url: "https://res.cloudinary.com/did3sbjr8/image/upload/v1726208685/eshop/products/apple-watch-se-gps-44mm-star-white-aluminum-with-star-white-sport-band-m-l/q21iaqzzd6skylp46okb.webp",
          },
        ],
      },
    ],
    createdAt: new Date().toISOString()
  },
  {
    _id: "199c9986-0fe3-44c7-b07f-32ad268bf087",
    name: 'Apple iPad 2021 10.2" WiFi',
    slug: "apple-ipad-2021-102-wifi",
    brand: "apple",
    category: "tablets",
    description: "The 13-inch MacBook Air is powered by the M3 chip, which offers a super-compact design and up to 18 hours of battery life.1 It's the perfect companion for work and play, anywhere.",
    features: [
      {
        key: "M3 Power. Sharpened to the max",
        value: "MacBook Air with M3 chip is compact enough to work and play anywhere."
      },
      {
        key: "Compact design",
        value: "Because it's super lightweight and just over an inch thick, you can take your MacBook Air with you anywhere."
      },
      {
        key: "Do more. Faster.",
        value: "The power of the Apple M3 chip's 8-core CPU and up to 10-core GPU keeps everything running smoothly."
      },
      {
        key: "Up to 18 hours of autonomyn",
        value: "With all-day battery life, you can leave the adapter at home with peace of mind."
      },
      {
        key: "A bright screen",
        value: "The 13.6-inch Liquid Retina display2 supports 1 billion colors."
      },
      {
        key: "Full connectivity",
        value: "MacBook Air has two Thunderbolt ports, a headphone jack, Wi-Fi 6E,4 Bluetooth 5.3, and a MagSafe charging port. And you can connect up to two external monitors with the lid of the laptop closed."
      }
    ],
    specs: [
      {
        key: "chip",
        value: [
          "Apple M3 chip",
          "8-core CPU (4 performance and 4 efficiency)",
          "8-core GPU",
          "16-core Neural Engine",
          "100 GB/s memory bandwidth"
        ]
      },
      {
        key: "display",
        value: [
          "Liquid Retina display",
          "13.6-inch (diagonal) LED-backlit display with IPS technology;1 2,560-by-1,664 native resolution at 224 pixels per inch",
          "500 nits brightness",
          "Supports 1 billion colors",
          "True Tone Technology"
        ]
      },
      {
        key: "memory",
        value: [
          "8GB unified memory"
        ]
      },
      {
        key: "connectivity",
        value: [
          "WiFi 6E (802.11ax)4",
          "Bluetooth 5.3"
        ]
      },
      {
        key: "Webcam",
        value: [
          "1080p FaceTime HD camera",
          "Advanced Image Signal Processor with Computational Video"
        ]
      },
      {
        key: "battery",
        value: [
          "Up to 18 hours of video playback on the Apple TV app",
          "Up to 15 hours of wireless web browsing",
          "52.6 watt hour lithium polymer battery",
          "30W USB-C power adapter (included with M2 and M3 with 8-core GPU)"
        ]
      },
      {
        key: "dimensions and weight",
        value: [
          "width: 30.41 cm",
          "depth: 21.5 cm",
          "height: 1.13 cm",
          "weight: 1.24 kg"
        ]
      }
    ],
    reviews: [],
    averageRating: 0,
    variations: [
      {
        _id: "778948db-445b-4b96-a57e-25d8beea3e53",
        name: 'Apple iPad 2021 10.2" 64GB WiFi Silver',
        slug: "apple-ipad-2021-102-64gb-wifi-silver",
        color: "silver",
        hexCode: "#E0E2E4",
        memory: "64GB",
        size: "", 
        price: 28500,
        stock: 11,
        sku: "APL-IPAD-21-102-64GB-WIFI-SLV",
        available: true,
        images: [
          {
            public_id: "xoulggydjbcnsuwm3rtt",
            url: "https://res.cloudinary.com/did3sbjr8/image/upload/v1727171736/eshop/products/apple-ipad-2021-102-wifi-silver/xoulggydjbcnsuwm3rtt.webp",
          },
          {
            public_id: "j491qatevt4l2q1e2qql",
            url: "https://res.cloudinary.com/did3sbjr8/image/upload/v1727171736/eshop/products/apple-ipad-2021-102-wifi-silver/j491qatevt4l2q1e2qql.webp",
          },
          {
            public_id: "stcfxzll4xy5iillzzlk",
            url: "https://res.cloudinary.com/did3sbjr8/image/upload/v1727171735/eshop/products/apple-ipad-2021-102-wifi-silver/stcfxzll4xy5iillzzlk.webp",
          },
          {
            public_id: "j6gasd9jsmxmyuff0obm",
            url: "https://res.cloudinary.com/did3sbjr8/image/upload/v1727171736/eshop/products/apple-ipad-2021-102-wifi-silver/j6gasd9jsmxmyuff0obm.webp",
          },
        ],
      },
      {
        _id: "a5dc899d-d5c7-4fd8-b2c4-8eec07117a14",
        name: 'Apple iPad 2021 10.2" 64GB WiFi Space Grey',
        slug: "apple-ipad-2021-102-64gb-wifi-space-grey",
        color: "space grey",
        hexCode: "#9C9C9C",
        memory: "64GB",
        size: "",
        price: 28500,
        stock: 5,
        sku: "APL-IPAD-21-102-64GB-WIFI-SPG",
        available: true,
        images: [
          {
            public_id: "xfr9fb6jkfnaulpyknhw",
            url: "https://res.cloudinary.com/did3sbjr8/image/upload/v1727171490/eshop/products/apple-ipad-2021-102-wifi-space-grey/xfr9fb6jkfnaulpyknhw.webp",
          },
          {
            public_id: "ta8fgn6sfwq5oraf8tx9",
            url: "https://res.cloudinary.com/did3sbjr8/image/upload/v1727171490/eshop/products/apple-ipad-2021-102-wifi-space-grey/ta8fgn6sfwq5oraf8tx9.webp",
          },
          {
            public_id: "p4ppos5hvxpfpbw0sw1q",
            url: "https://res.cloudinary.com/did3sbjr8/image/upload/v1727171490/eshop/products/apple-ipad-2021-102-wifi-space-grey/p4ppos5hvxpfpbw0sw1q.webp",
          },
          {
            public_id: "y5uy5cfjhpc5zljbzmb4",
            url: "https://res.cloudinary.com/did3sbjr8/image/upload/v1727171490/eshop/products/apple-ipad-2021-102-wifi-space-grey/y5uy5cfjhpc5zljbzmb4.webp",
          },
        ],
      },
    ],
    createdAt: new Date().toISOString()
  },
  {
    _id: "b7e9b1c1-c93a-4322-8614-9cf55f0b41de",
    name: 'Logitech Speaker System Z313',
    slug: "logitech-speaker-system-z313",
    brand: "logitech",
    category: "speakers",
    description: "The 13-inch MacBook Air is powered by the M3 chip, which offers a super-compact design and up to 18 hours of battery life.1 It's the perfect companion for work and play, anywhere.",
    features: [
      {
        key: "M3 Power. Sharpened to the max",
        value: "MacBook Air with M3 chip is compact enough to work and play anywhere."
      },
      {
        key: "Compact design",
        value: "Because it's super lightweight and just over an inch thick, you can take your MacBook Air with you anywhere."
      },
      {
        key: "Do more. Faster.",
        value: "The power of the Apple M3 chip's 8-core CPU and up to 10-core GPU keeps everything running smoothly."
      },
      {
        key: "Up to 18 hours of autonomyn",
        value: "With all-day battery life, you can leave the adapter at home with peace of mind."
      },
      {
        key: "A bright screen",
        value: "The 13.6-inch Liquid Retina display2 supports 1 billion colors."
      },
      {
        key: "Full connectivity",
        value: "MacBook Air has two Thunderbolt ports, a headphone jack, Wi-Fi 6E,4 Bluetooth 5.3, and a MagSafe charging port. And you can connect up to two external monitors with the lid of the laptop closed."
      }
    ],
    specs: [
      {
        key: "chip",
        value: [
          "Apple M3 chip",
          "8-core CPU (4 performance and 4 efficiency)",
          "8-core GPU",
          "16-core Neural Engine",
          "100 GB/s memory bandwidth"
        ]
      },
      {
        key: "display",
        value: [
          "Liquid Retina display",
          "13.6-inch (diagonal) LED-backlit display with IPS technology;1 2,560-by-1,664 native resolution at 224 pixels per inch",
          "500 nits brightness",
          "Supports 1 billion colors",
          "True Tone Technology"
        ]
      },
      {
        key: "memory",
        value: [
          "8GB unified memory"
        ]
      },
      {
        key: "connectivity",
        value: [
          "WiFi 6E (802.11ax)4",
          "Bluetooth 5.3"
        ]
      },
      {
        key: "Webcam",
        value: [
          "1080p FaceTime HD camera",
          "Advanced Image Signal Processor with Computational Video"
        ]
      },
      {
        key: "battery",
        value: [
          "Up to 18 hours of video playback on the Apple TV app",
          "Up to 15 hours of wireless web browsing",
          "52.6 watt hour lithium polymer battery",
          "30W USB-C power adapter (included with M2 and M3 with 8-core GPU)"
        ]
      },
      {
        key: "dimensions and weight",
        value: [
          "width: 30.41 cm",
          "depth: 21.5 cm",
          "height: 1.13 cm",
          "weight: 1.24 kg"
        ]
      }
    ],
    reviews: [],
    averageRating: 0,
    variations: [
      {
        _id: "687fdc40-bd9d-4746-83d6-d6f8fd21a240",
        name: 'Logitech Speaker System Z313 Speakers 2.1',
        slug: "logitech-speaker-system-z313-speakers-21",
        color: "black",
        hexCode: "#000000",
        memory: "",
        size: "",
        price: 4400,
        stock: 14,
        sku: "LOG-SPK-Z313-21",
        available: true,
        images: [
          {
            public_id: "n2lmocihq6xyzbvz3nok",
            url: "https://res.cloudinary.com/did3sbjr8/image/upload/v1726211256/eshop/products/logitech-speaker-system-z313-speakers-21/n2lmocihq6xyzbvz3nok.webp",
          },
          {
            public_id: "asezwk6sushnet8hfkdh",
            url: "https://res.cloudinary.com/did3sbjr8/image/upload/v1726211256/eshop/products/logitech-speaker-system-z313-speakers-21/asezwk6sushnet8hfkdh.webp",
          },
          {
            public_id: "r4h0ught2pxz0az90zau",
            url: "https://res.cloudinary.com/did3sbjr8/image/upload/v1726211255/eshop/products/logitech-speaker-system-z313-speakers-21/r4h0ught2pxz0az90zau.webp",
          },
          {
            public_id: "vawayvs1dnxmjjtrgfu3",
            url: "https://res.cloudinary.com/did3sbjr8/image/upload/v1726211255/eshop/products/logitech-speaker-system-z313-speakers-21/vawayvs1dnxmjjtrgfu3.webp",
          },
        ],
      },
    ],
    createdAt: new Date().toISOString()
  },
  {
    _id: "66b51ef8-c3d7-4db4-a3a6-900e708b37b0",
    name: 'Bose QuietComfort Ultra Wireless Noise Cancelling Headphones',
    slug: "bose-quietcomfort-ultra-wireless-noise-cancelling-headphones",
    brand: "bose",
    category: "headphones",
    description: "The 13-inch MacBook Air is powered by the M3 chip, which offers a super-compact design and up to 18 hours of battery life.1 It's the perfect companion for work and play, anywhere.",
    features: [
      {
        key: "M3 Power. Sharpened to the max",
        value: "MacBook Air with M3 chip is compact enough to work and play anywhere."
      },
      {
        key: "Compact design",
        value: "Because it's super lightweight and just over an inch thick, you can take your MacBook Air with you anywhere."
      },
      {
        key: "Do more. Faster.",
        value: "The power of the Apple M3 chip's 8-core CPU and up to 10-core GPU keeps everything running smoothly."
      },
      {
        key: "Up to 18 hours of autonomyn",
        value: "With all-day battery life, you can leave the adapter at home with peace of mind."
      },
      {
        key: "A bright screen",
        value: "The 13.6-inch Liquid Retina display2 supports 1 billion colors."
      },
      {
        key: "Full connectivity",
        value: "MacBook Air has two Thunderbolt ports, a headphone jack, Wi-Fi 6E,4 Bluetooth 5.3, and a MagSafe charging port. And you can connect up to two external monitors with the lid of the laptop closed."
      }
    ],
    specs: [
      {
        key: "chip",
        value: [
          "Apple M3 chip",
          "8-core CPU (4 performance and 4 efficiency)",
          "8-core GPU",
          "16-core Neural Engine",
          "100 GB/s memory bandwidth"
        ]
      },
      {
        key: "display",
        value: [
          "Liquid Retina display",
          "13.6-inch (diagonal) LED-backlit display with IPS technology;1 2,560-by-1,664 native resolution at 224 pixels per inch",
          "500 nits brightness",
          "Supports 1 billion colors",
          "True Tone Technology"
        ]
      },
      {
        key: "memory",
        value: [
          "8GB unified memory"
        ]
      },
      {
        key: "connectivity",
        value: [
          "WiFi 6E (802.11ax)4",
          "Bluetooth 5.3"
        ]
      },
      {
        key: "Webcam",
        value: [
          "1080p FaceTime HD camera",
          "Advanced Image Signal Processor with Computational Video"
        ]
      },
      {
        key: "battery",
        value: [
          "Up to 18 hours of video playback on the Apple TV app",
          "Up to 15 hours of wireless web browsing",
          "52.6 watt hour lithium polymer battery",
          "30W USB-C power adapter (included with M2 and M3 with 8-core GPU)"
        ]
      },
      {
        key: "dimensions and weight",
        value: [
          "width: 30.41 cm",
          "depth: 21.5 cm",
          "height: 1.13 cm",
          "weight: 1.24 kg"
        ]
      }
    ],
    reviews: [],
    averageRating: 0,
    variations: [
      {
        _id: "2cfb3f18-2bfc-4b95-8b6e-1c132985d5cb",
        name: 'Bose QuietComfort Ultra Wireless Noise Cancelling Headphones Black',
        slug: "bose-quietcomfort-ultra-wireless-noise-cancelling-headphones-black",
        color: "black",
        hexCode: "#000000",
        memory: "",
        size: "", 
        price: 31599,
        stock: 4,
        sku: "BOSE-QCU-WLS-NC-BLK",
        available: true,
        images: [
          {
            public_id: "tv8ii6w33g0kdchbxoiy",
            url: "https://res.cloudinary.com/did3sbjr8/image/upload/v1726209828/eshop/products/bose-quietcomfort-ultra-wireless-noise-cancelling-headphones-black/tv8ii6w33g0kdchbxoiy.webp",
          },
          {
            public_id: "zdug01kfbzbuy2hwqe76",
            url: "https://res.cloudinary.com/did3sbjr8/image/upload/v1726209828/eshop/products/bose-quietcomfort-ultra-wireless-noise-cancelling-headphones-black/zdug01kfbzbuy2hwqe76.webp",
          },
          {
            public_id: "flao9nlitvmbiufeu056",
            url: "https://res.cloudinary.com/did3sbjr8/image/upload/v1726209828/eshop/products/bose-quietcomfort-ultra-wireless-noise-cancelling-headphones-black/flao9nlitvmbiufeu056.webp",
          },
          {
            public_id: "ghauhtbsensusjuahyda",
            url: "https://res.cloudinary.com/did3sbjr8/image/upload/v1726209828/eshop/products/bose-quietcomfort-ultra-wireless-noise-cancelling-headphones-black/ghauhtbsensusjuahyda.webp",
          },
        ],
      },
      {
        _id: "964b6d85-1bc1-4e49-bfa5-59f9fd279546",
        name: 'Bose QuietComfort Ultra Wireless Noise Cancelling Headphones Gold',
        slug: "bose-quietcomfort-ultra-wireless-noise-cancelling-headphones-gold",
        color: "gold",
        hexCode: "#9B8D8D",
        memory: "",
        size: "",
        price: 31599,
        stock: 8,
        sku: "BOSE-QCU-WLS-NC-GRY",
        available: true,
        images: [
          {
            public_id: "fwwzyufs0diszhhtgf3n",
            url: "https://res.cloudinary.com/did3sbjr8/image/upload/v1726210000/eshop/products/bose-quietcomfort-ultra-wireless-noise-cancelling-headphones-grey/fwwzyufs0diszhhtgf3n.webp",
          },
          {
            public_id: "gyemtsup6bmgbrtkzoyf",
            url: "https://res.cloudinary.com/did3sbjr8/image/upload/v1726210000/eshop/products/bose-quietcomfort-ultra-wireless-noise-cancelling-headphones-grey/gyemtsup6bmgbrtkzoyf.webp",
          },
          {
            public_id: "m8dqbaufstejkxjaywk8",
            url: "https://res.cloudinary.com/did3sbjr8/image/upload/v1726210000/eshop/products/bose-quietcomfort-ultra-wireless-noise-cancelling-headphones-grey/m8dqbaufstejkxjaywk8.webp",
          },
          {
            public_id: "awtbgeidtisgn0itckrs",
            url: "https://res.cloudinary.com/did3sbjr8/image/upload/v1726209999/eshop/products/bose-quietcomfort-ultra-wireless-noise-cancelling-headphones-grey/awtbgeidtisgn0itckrs.webp",
          },
          {
            public_id: "lfyhfvecxggfxnwtdgqv",
            url: "https://res.cloudinary.com/did3sbjr8/image/upload/v1726210000/eshop/products/bose-quietcomfort-ultra-wireless-noise-cancelling-headphones-grey/lfyhfvecxggfxnwtdgqv.webp",
          },
        ],
      },
    ],
    createdAt: new Date().toISOString()
  },
  {
    _id: "7c88c257-9fc3-4531-9eb6-917db5869a18",
    name: 'Samsung TV QLED Ultra HD 4K Quantum HDR',
    slug: "samsung-tv-qled-ultra-hd-4k-quantum-hdr",
    brand: "samsung",
    category: "televisions",
    description: "The 13-inch MacBook Air is powered by the M3 chip, which offers a super-compact design and up to 18 hours of battery life.1 It's the perfect companion for work and play, anywhere.",
    features: [
      {
        key: "M3 Power. Sharpened to the max",
        value: "MacBook Air with M3 chip is compact enough to work and play anywhere."
      },
      {
        key: "Compact design",
        value: "Because it's super lightweight and just over an inch thick, you can take your MacBook Air with you anywhere."
      },
      {
        key: "Do more. Faster.",
        value: "The power of the Apple M3 chip's 8-core CPU and up to 10-core GPU keeps everything running smoothly."
      },
      {
        key: "Up to 18 hours of autonomyn",
        value: "With all-day battery life, you can leave the adapter at home with peace of mind."
      },
      {
        key: "A bright screen",
        value: "The 13.6-inch Liquid Retina display2 supports 1 billion colors."
      },
      {
        key: "Full connectivity",
        value: "MacBook Air has two Thunderbolt ports, a headphone jack, Wi-Fi 6E,4 Bluetooth 5.3, and a MagSafe charging port. And you can connect up to two external monitors with the lid of the laptop closed."
      }
    ],
    specs: [
      {
        key: "chip",
        value: [
          "Apple M3 chip",
          "8-core CPU (4 performance and 4 efficiency)",
          "8-core GPU",
          "16-core Neural Engine",
          "100 GB/s memory bandwidth"
        ]
      },
      {
        key: "display",
        value: [
          "Liquid Retina display",
          "13.6-inch (diagonal) LED-backlit display with IPS technology;1 2,560-by-1,664 native resolution at 224 pixels per inch",
          "500 nits brightness",
          "Supports 1 billion colors",
          "True Tone Technology"
        ]
      },
      {
        key: "memory",
        value: [
          "8GB unified memory"
        ]
      },
      {
        key: "connectivity",
        value: [
          "WiFi 6E (802.11ax)4",
          "Bluetooth 5.3"
        ]
      },
      {
        key: "Webcam",
        value: [
          "1080p FaceTime HD camera",
          "Advanced Image Signal Processor with Computational Video"
        ]
      },
      {
        key: "battery",
        value: [
          "Up to 18 hours of video playback on the Apple TV app",
          "Up to 15 hours of wireless web browsing",
          "52.6 watt hour lithium polymer battery",
          "30W USB-C power adapter (included with M2 and M3 with 8-core GPU)"
        ]
      },
      {
        key: "dimensions and weight",
        value: [
          "width: 30.41 cm",
          "depth: 21.5 cm",
          "height: 1.13 cm",
          "weight: 1.24 kg"
        ]
      }
    ],
    reviews: [],
    averageRating: 0,
    variations: [
      {
        _id: "83cf8893-f260-4b0a-8662-dfce1e1a30f5",
        name: 'Samsung TV QLED 65" Ultra HD 4K Quantum HDR Black',
        slug: "samsung-tv-qled-65-ultra-hd-4k-quantum-hdr-black",
        color: "black",
        hexCode: "#000000",
        memory: "",
        size: '65',
        price: 57900,
        stock: 12,
        sku: "SAM-TV-QLED-65-UHD-4K-HDR-BLK",
        available: true,
        images: [
          {
            public_id: "szmawrefwavgvucofcep",
            url: "https://res.cloudinary.com/did3sbjr8/image/upload/v1726215147/eshop/products/samsung-tv-qe65q60dauxxh-65-qled-ultrahd-4k-quantum-hdr/szmawrefwavgvucofcep.webp",
          },
          {
            public_id: "guj7d2jvnx7x46ulwnh6",
            url: "https://res.cloudinary.com/did3sbjr8/image/upload/v1726215146/eshop/products/samsung-tv-qe65q60dauxxh-65-qled-ultrahd-4k-quantum-hdr/guj7d2jvnx7x46ulwnh6.webp",
          },
          {
            public_id: "qxxow8ui11mywiiksys1",
            url: "https://res.cloudinary.com/did3sbjr8/image/upload/v1726215148/eshop/products/samsung-tv-qe65q60dauxxh-65-qled-ultrahd-4k-quantum-hdr/qxxow8ui11mywiiksys1.webp",
          },
          {
            public_id: "g0sax2wjjvxswunuhl99",
            url: "https://res.cloudinary.com/did3sbjr8/image/upload/v1726215147/eshop/products/samsung-tv-qe65q60dauxxh-65-qled-ultrahd-4k-quantum-hdr/g0sax2wjjvxswunuhl99.webp",
          },
        ],
      },
      {
        _id: "91a3e947-4a56-43a2-9963-e12f40524491",
        name: 'Samsung TV QLED 55" Ultra HD 4K Quantum HDR Black',
        slug: "samsung-tv-qled-55-ultra-hd-4k-quantum-hdr-black",
        color: "black",
        hexCode: "#000000",
        memory: "",
        size: '55',
        price: 43900,
        stock: 5,
        sku: "SAM-TV-QLED-55-UHD-4K-HDR-BLK",
        available: true,
        images: [
          {
            public_id: "szmawrefwavgvucofcep",
            url: "https://res.cloudinary.com/did3sbjr8/image/upload/v1726215147/eshop/products/samsung-tv-qe65q60dauxxh-65-qled-ultrahd-4k-quantum-hdr/szmawrefwavgvucofcep.webp",
          },
          {
            public_id: "guj7d2jvnx7x46ulwnh6",
            url: "https://res.cloudinary.com/did3sbjr8/image/upload/v1726215146/eshop/products/samsung-tv-qe65q60dauxxh-65-qled-ultrahd-4k-quantum-hdr/guj7d2jvnx7x46ulwnh6.webp",
          },
          {
            public_id: "qxxow8ui11mywiiksys1",
            url: "https://res.cloudinary.com/did3sbjr8/image/upload/v1726215148/eshop/products/samsung-tv-qe65q60dauxxh-65-qled-ultrahd-4k-quantum-hdr/qxxow8ui11mywiiksys1.webp",
          },
          {
            public_id: "g0sax2wjjvxswunuhl99",
            url: "https://res.cloudinary.com/did3sbjr8/image/upload/v1726215147/eshop/products/samsung-tv-qe65q60dauxxh-65-qled-ultrahd-4k-quantum-hdr/g0sax2wjjvxswunuhl99.webp",
          },
        ],
      },
    ],
    createdAt: new Date().toISOString()
  },
]