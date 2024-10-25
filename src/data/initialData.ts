export const allComputadores = [
	{
	  brand: 'Apple',
	  colors: [{ color: '#FFFFFF', color_name: 'Blanco' }],
	  created_at: new Date().toISOString(),
	  description: {
		type: 'doc',
		content: [
		  {
			type: 'paragraph',
			content: [
			  {
				type: 'text',
				text: 'MacBook Air con chip M1, 8GB RAM, 256GB SSD, pantalla Retina de 13 pulgadas.',
			  },
			],
		  },
		],
	  },
	  features: ['8GB RAM', '256GB SSD', 'Pantalla Retina 13"'],
	  id: 'apple-macbook-air-m1',
	  images: ['https://ui.shadcn.com/placeholder.svg'],
	  name: 'MacBook Air M1',
	  price: 999.99,
	  slug: 'macbook-air-m1',
	  variants: [
		{
		  color: '#FFFFFF',
		  color_name: 'Blanco',
		  id: 'variant-macbook-air-m1',
		  price: 999.99,
		  stock: 5,
		  storage: '256GB',
		},
	  ],
	},
	{
	  brand: 'Huawei',
	  colors: [{ color: '#0000FF', color_name: 'Azul' }],
	  created_at: new Date().toISOString(),
	  description: {
		type: 'doc',
		content: [
		  {
			type: 'paragraph',
			content: [
			  {
				type: 'text',
				text: 'Huawei MateBook X Pro con procesador Intel Core i7, 16GB RAM, 1TB SSD.',
			  },
			],
		  },
		],
	  },
	  features: ['16GB RAM', '1TB SSD', 'Pantalla táctil 13.9"'],
	  id: 'huawei-matebook-x-pro',
	  images: ['https://ui.shadcn.com/placeholder.svg'],
	  name: 'Huawei MateBook X Pro',
	  price: 1399.99,
	  slug: 'huawei-matebook-x-pro',
	  variants: [
		{
		  color: '#0000FF',
		  color_name: 'Azul',
		  id: 'variant-huawei-matebook-x-pro',
		  price: 1399.99,
		  stock: 7,
		  storage: '1TB',
		},
	  ],
	},
	{
	  brand: 'Toshiba',
	  colors: [{ color: '#808080', color_name: 'Gris' }],
	  created_at: new Date().toISOString(),
	  description: {
		type: 'doc',
		content: [
		  {
			type: 'paragraph',
			content: [
			  {
				type: 'text',
				text: 'Toshiba Dynabook con Intel Core i5, 8GB RAM, 512GB SSD.',
			  },
			],
		  },
		],
	  },
	  features: ['8GB RAM', '512GB SSD', 'Pantalla 15.6"'],
	  id: 'toshiba-dynabook',
	  images: ['https://ui.shadcn.com/placeholder.svg'],
	  name: 'Toshiba Dynabook',
	  price: 899.99,
	  slug: 'toshiba-dynabook',
	  variants: [
		{
		  color: '#808080',
		  color_name: 'Gris',
		  id: 'variant-toshiba-dynabook',
		  price: 899.99,
		  stock: 12,
		  storage: '512GB',
		},
	  ],
	},
	{
	  brand: 'Samsung',
	  colors: [{ color: '#000000', color_name: 'Negro' }],
	  created_at: new Date().toISOString(),
	  description: {
		type: 'doc',
		content: [
		  {
			type: 'paragraph',
			content: [
			  {
				type: 'text',
				text: 'Samsung Galaxy Book Pro con procesador Intel Core i7, 16GB RAM, 512GB SSD.',
			  },
			],
		  },
		],
	  },
	  features: ['16GB RAM', '512GB SSD', 'Pantalla AMOLED 15.6"'],
	  id: 'samsung-galaxy-book-pro',
	  images: ['https://ui.shadcn.com/placeholder.svg'],
	  name: 'Samsung Galaxy Book Pro',
	  price: 1299.99,
	  slug: 'samsung-galaxy-book-pro',
	  variants: [
		{
		  color: '#000000',
		  color_name: 'Negro',
		  id: 'variant-samsung-galaxy-book-pro',
		  price: 1299.99,
		  stock: 8,
		  storage: '512GB',
		},
	  ],
	},
	{
	  brand: 'Asus',
	  colors: [{ color: '#000080', color_name: 'Azul Marino' }],
	  created_at: new Date().toISOString(),
	  description: {
		type: 'doc',
		content: [
		  {
			type: 'paragraph',
			content: [
			  {
				type: 'text',
				text: 'Asus ZenBook 14 con AMD Ryzen 7, 16GB RAM, 1TB SSD.',
			  },
			],
		  },
		],
	  },
	  features: ['16GB RAM', '1TB SSD', 'Pantalla 14"'],
	  id: 'asus-zenbook-14',
	  images: ['https://ui.shadcn.com/placeholder.svg'],
	  name: 'Asus ZenBook 14',
	  price: 1199.99,
	  slug: 'asus-zenbook-14',
	  variants: [
		{
		  color: '#000080',
		  color_name: 'Azul Marino',
		  id: 'variant-asus-zenbook-14',
		  price: 1199.99,
		  stock: 10,
		  storage: '1TB',
		},
	  ],
	},
	{
	  brand: 'Dell',
	  colors: [{ color: '#C0C0C0', color_name: 'Plata' }],
	  created_at: new Date().toISOString(),
	  description: {
		type: 'doc',
		content: [
		  {
			type: 'paragraph',
			content: [
			  {
				type: 'text',
				text: 'Dell XPS 13 con procesador Intel Core i7, 16GB RAM, 1TB SSD.',
			  },
			],
		  },
		],
	  },
	  features: ['16GB RAM', '1TB SSD', 'Pantalla táctil 13.4"'],
	  id: 'dell-xps-13',
	  images: ['https://ui.shadcn.com/placeholder.svg'],
	  name: 'Dell XPS 13',
	  price: 1499.99,
	  slug: 'dell-xps-13',
	  variants: [
		{
		  color: '#C0C0C0',
		  color_name: 'Plata',
		  id: 'variant-dell-xps-13',
		  price: 1499.99,
		  stock: 6,
		  storage: '1TB',
		},
	  ],
	},
	{
	  brand: 'Lenovo',
	  colors: [{ color: '#800080', color_name: 'Púrpura' }],
	  created_at: new Date().toISOString(),
	  description: {
		type: 'doc',
		content: [
		  {
			type: 'paragraph',
			content: [
			  {
				type: 'text',
				text: 'Lenovo ThinkPad X1 Carbon con Intel Core i7, 16GB RAM, 512GB SSD.',
			  },
			],
		  },
		],
	  },
	  features: ['16GB RAM', '512GB SSD', 'Pantalla 14"'],
	  id: 'lenovo-thinkpad-x1-carbon',
	  images: ['https://ui.shadcn.com/placeholder.svg'],
	  name: 'Lenovo ThinkPad X1 Carbon',
	  price: 1299.99,
	  slug: 'lenovo-thinkpad-x1-carbon',
	  variants: [
		{
		  color: '#800080',
		  color_name: 'Púrpura',
		  id: 'variant-lenovo-thinkpad-x1-carbon',
		  price: 1299.99,
		  stock: 9,
		  storage: '512GB',
		},
	  ],
	},
	{
	  brand: 'HP',
	  colors: [{ color: '#A52A2A', color_name: 'Marrón' }],
	  created_at: new Date().toISOString(),
	  description: {
		type: 'doc',
		content: [
		  {
			type: 'paragraph',
			content: [
			  {
				type: 'text',
				text: 'HP Spectre x360 con procesador Intel Core i7, 16GB RAM, 1TB SSD.',
			  },
			],
		  },
		],
	  },
	  features: ['16GB RAM', '1TB SSD', 'Pantalla táctil 15.6"'],
	  id: 'hp-spectre-x360',
	  images: ['https://ui.shadcn.com/placeholder.svg'],
	  name: 'HP Spectre x360',
	  price: 1499.99,
	  slug: 'hp-spectre-x360',
	  variants: [
		{
		  color: '#A52A2A',
		  color_name: 'Marrón',
		  id: 'variant-hp-spectre-x360',
		  price: 1499.99,
		  stock: 7,
		  storage: '1TB',
		},
	  ],
	}
];

export const recentComputadores = [
	{
		brand: 'Asus',
		colors: [{ color: '#000080', color_name: 'Azul Marino' }],
		created_at: new Date().toISOString(),
		description: {
		  type: 'doc',
		  content: [
			{
			  type: 'paragraph',
			  content: [
				{
				  type: 'text',
				  text: 'Asus ZenBook 14 con AMD Ryzen 7, 16GB RAM, 1TB SSD.',
				},
			  ],
			},
		  ],
		},
		features: ['16GB RAM', '1TB SSD', 'Pantalla 14"'],
		id: 'asus-zenbook-14',
		images: ['https://ui.shadcn.com/placeholder.svg'],
		name: 'Asus ZenBook 14',
		price: 1199.99,
		slug: 'asus-zenbook-14',
		variants: [
		  {
			color: '#000080',
			color_name: 'Azul Marino',
			id: 'variant-asus-zenbook-14',
			price: 1199.99,
			stock: 10,
			storage: '1TB',
		  },
		],
	  },
	  {
		brand: 'Dell',
		colors: [{ color: '#C0C0C0', color_name: 'Plata' }],
		created_at: new Date().toISOString(),
		description: {
		  type: 'doc',
		  content: [
			{
			  type: 'paragraph',
			  content: [
				{
				  type: 'text',
				  text: 'Dell XPS 13 con procesador Intel Core i7, 16GB RAM, 1TB SSD.',
				},
			  ],
			},
		  ],
		},
		features: ['16GB RAM', '1TB SSD', 'Pantalla táctil 13.4"'],
		id: 'dell-xps-13',
		images: ['https://ui.shadcn.com/placeholder.svg'],
		name: 'Dell XPS 13',
		price: 1499.99,
		slug: 'dell-xps-13',
		variants: [
		  {
			color: '#C0C0C0',
			color_name: 'Plata',
			id: 'variant-dell-xps-13',
			price: 1499.99,
			stock: 6,
			storage: '1TB',
		  },
		],
	  },
	  {
		brand: 'Lenovo',
		colors: [{ color: '#800080', color_name: 'Púrpura' }],
		created_at: new Date().toISOString(),
		description: {
		  type: 'doc',
		  content: [
			{
			  type: 'paragraph',
			  content: [
				{
				  type: 'text',
				  text: 'Lenovo ThinkPad X1 Carbon con Intel Core i7, 16GB RAM, 512GB SSD.',
				},
			  ],
			},
		  ],
		},
		features: ['16GB RAM', '512GB SSD', 'Pantalla 14"'],
		id: 'lenovo-thinkpad-x1-carbon',
		images: ['https://ui.shadcn.com/placeholder.svg'],
		name: 'Lenovo ThinkPad X1 Carbon',
		price: 1299.99,
		slug: 'lenovo-thinkpad-x1-carbon',
		variants: [
		  {
			color: '#800080',
			color_name: 'Púrpura',
			id: 'variant-lenovo-thinkpad-x1-carbon',
			price: 1299.99,
			stock: 9,
			storage: '512GB',
		  },
		],
	  },
	  {
		brand: 'HP',
		colors: [{ color: '#A52A2A', color_name: 'Marrón' }],
		created_at: new Date().toISOString(),
		description: {
		  type: 'doc',
		  content: [
			{
			  type: 'paragraph',
			  content: [
				{
				  type: 'text',
				  text: 'HP Spectre x360 con procesador Intel Core i7, 16GB RAM, 1TB SSD.',
				},
			  ],
			},
		  ],
		},
		features: ['16GB RAM', '1TB SSD', 'Pantalla táctil 15.6"'],
		id: 'hp-spectre-x360',
		images: ['https://ui.shadcn.com/placeholder.svg'],
		name: 'HP Spectre x360',
		price: 1499.99,
		slug: 'hp-spectre-x360',
		variants: [
		  {
			color: '#A52A2A',
			color_name: 'Marrón',
			id: 'variant-hp-spectre-x360',
			price: 1499.99,
			stock: 7,
			storage: '1TB',
		  },
		],
	  }
];

export const popularComputadores = [
		{
			brand: 'Apple',
			colors: [{ color: '#FFFFFF', color_name: 'Blanco' }],
			created_at: new Date().toISOString(),
			description: {
			  type: 'doc',
			  content: [
				{
				  type: 'paragraph',
				  content: [
					{
					  type: 'text',
					  text: 'MacBook Air con chip M1, 8GB RAM, 256GB SSD, pantalla Retina de 13 pulgadas.',
					},
				  ],
				},
			  ],
			},
			features: ['8GB RAM', '256GB SSD', 'Pantalla Retina 13"'],
			id: 'apple-macbook-air-m1',
			images: ['https://ui.shadcn.com/placeholder.svg'],
			name: 'MacBook Air M1',
			price: 999.99,
			slug: 'macbook-air-m1',
			variants: [
			  {
				color: '#FFFFFF',
				color_name: 'Blanco',
				id: 'variant-macbook-air-m1',
				price: 999.99,
				stock: 5,
				storage: '256GB',
			  },
			],
		  },
		  {
			brand: 'Huawei',
			colors: [{ color: '#0000FF', color_name: 'Azul' }],
			created_at: new Date().toISOString(),
			description: {
			  type: 'doc',
			  content: [
				{
				  type: 'paragraph',
				  content: [
					{
					  type: 'text',
					  text: 'Huawei MateBook X Pro con procesador Intel Core i7, 16GB RAM, 1TB SSD.',
					},
				  ],
				},
			  ],
			},
			features: ['16GB RAM', '1TB SSD', 'Pantalla táctil 13.9"'],
			id: 'huawei-matebook-x-pro',
			images: ['https://ui.shadcn.com/placeholder.svg'],
			name: 'Huawei MateBook X Pro',
			price: 1399.99,
			slug: 'huawei-matebook-x-pro',
			variants: [
			  {
				color: '#0000FF',
				color_name: 'Azul',
				id: 'variant-huawei-matebook-x-pro',
				price: 1399.99,
				stock: 7,
				storage: '1TB',
			  },
			],
		  },
		  {
			brand: 'Toshiba',
			colors: [{ color: '#808080', color_name: 'Gris' }],
			created_at: new Date().toISOString(),
			description: {
			  type: 'doc',
			  content: [
				{
				  type: 'paragraph',
				  content: [
					{
					  type: 'text',
					  text: 'Toshiba Dynabook con Intel Core i5, 8GB RAM, 512GB SSD.',
					},
				  ],
				},
			  ],
			},
			features: ['8GB RAM', '512GB SSD', 'Pantalla 15.6"'],
			id: 'toshiba-dynabook',
			images: ['https://ui.shadcn.com/placeholder.svg'],
			name: 'Toshiba Dynabook',
			price: 899.99,
			slug: 'toshiba-dynabook',
			variants: [
			  {
				color: '#808080',
				color_name: 'Gris',
				id: 'variant-toshiba-dynabook',
				price: 899.99,
				stock: 12,
				storage: '512GB',
			  },
			],
		  },
		  {
			brand: 'Samsung',
			colors: [{ color: '#000000', color_name: 'Negro' }],
			created_at: new Date().toISOString(),
			description: {
			  type: 'doc',
			  content: [
				{
				  type: 'paragraph',
				  content: [
					{
					  type: 'text',
					  text: 'Samsung Galaxy Book Pro con procesador Intel Core i7, 16GB RAM, 512GB SSD.',
					},
				  ],
				},
			  ],
			},
			features: ['16GB RAM', '512GB SSD', 'Pantalla AMOLED 15.6"'],
			id: 'samsung-galaxy-book-pro',
			images: ['https://ui.shadcn.com/placeholder.svg'],
			name: 'Samsung Galaxy Book Pro',
			price: 1299.99,
			slug: 'samsung-galaxy-book-pro',
			variants: [
			  {
				color: '#000000',
				color_name: 'Negro',
				id: 'variant-samsung-galaxy-book-pro',
				price: 1299.99,
				stock: 8,
				storage: '512GB',
			  },
			],
		  }
];