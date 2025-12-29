import type { Sucursal, Product } from '../types';
// Sucursales con coordenadas reales de San Salvador
export const SUCURSALES: Sucursal[] = [
{
id: 'capricornio',
nombre: 'Farmacia San Rafael #1',
direccion: 'SAN SALVADOR,AGUILARES',
whatsapp: '50378558014',
lat: 13.956993,
lng: -89.186029,
horario: 'Lun-Sáb: 8:00am - 7:00pm',
},
{
id: 'libra',
nombre: 'Farmacia San Rafael #2',
direccion: 'CHALATENANGO,CHALATENANGO',
whatsapp: '50378039286',
lat: 14.040711,
lng: -88.937881,
horario: 'Lun-Dom: 8:00am - 8:00pm',
},
{
    id: 'piscis',
nombre: 'Farmacia San Rafael #3',
direccion: 'CHALATENANGO, LA PALMA',
whatsapp: '50378039289',
lat: 14.316926,
lng: -89.171111,
horario: 'Lun-Sáb: 8:00am - 6:00pm',
},

{
    id: 'escorpio',
nombre: 'Farmacia San Rafael #4',
direccion: 'CHALATENANGO,NUEVA CONCEPCION',
whatsapp: '50378039274',
lat: 14.125443,
lng: -89.292934,
horario: 'Lun-Sáb: 8:00am - 6:00pm',
},

{
    id: 'gemenis',
nombre: 'Farmacia San Rafael #5',
direccion: 'SAN SALVADOR,AGUILARES',
whatsapp: '50378039313',
lat: 13.957166,
lng: -89.186853,
horario: 'Lun-Sáb: 8:00am - 6:00pm',
},

{
    id: 'acuario',
nombre: 'Farmacia San Rafael #6',
direccion: 'CHALATENANGO,CHALATENANGO',
whatsapp: '50378039328',
lat: 14.039918,
lng: -88.939479,
horario: 'Lun-Sáb: 8:00am - 6:00pm',
},
{
    id: 'aries',
nombre: 'Farmacia San Rafael #7',
direccion: 'SAN SALVADOR,AGUILARES',
whatsapp: '50378039266',
lat: 13.955720,
lng: -89.187350,
horario: 'Lun-Dom: 7:00am - 8:00pm',
},

{
    id: 'aries',
nombre: 'Farmacia San Rafael #7',
direccion: 'SAN SALVADOR,AGUILARES',
whatsapp: '50378039266',
lat: 13.955720,
lng: -89.187350,
horario: 'Lun-Dom: 7:00am - 8:00pm',
},
{
    id: 'tauro',
nombre: 'Farmacia San Rafael #8',
direccion: 'CHALATENANGO,TEJUTLA',
whatsapp: '50378039335',
lat: 14.079027,
lng: -89.141451,
horario: 'Lun-Dom: 7:00am - 8:00pm',
},
{
    id: 'leo',
nombre: 'Farmacia San Rafael #9',
direccion: 'CHALATENANGO,NUEVA CONCEPCION',
whatsapp: '50378039343',
lat: 14.129420,
lng: -89.291971,
horario: 'Lun-Dom: 7:00am - 8:00pm',
},
{
    id: 'sagitario',
nombre: 'Farmacia San Rafael #10',
direccion: 'CHALATENANGO,NUEVA CONCEPCION',
whatsapp: '50378039364',
lat: 14.088271,
lng: -89.145242,
horario: 'Lun-Dom: 7:00am - 8:00pm',
},

{
    id: 'cancer',
nombre: 'Farmacia San Rafael #11',
direccion: 'LA LIBERTAD, ANTIGUO CUSCATLAN',
whatsapp: '50378033537',
lat: 13.667765,
lng: -89.256392,
horario: 'Lun-Dom: 7:00am - 8:00pm',
},

{
    id: 'jupiter',
nombre: 'Farmacia San Rafael #12',
direccion: 'CHALATENANGO, LA PALMA',
whatsapp: '50378033537',
lat: 14.315607,
lng: -89.168931,
horario: 'Lun-Dom: 7:00am - 8:00pm',
},

//Pendiente de actualizacion de coordenadas
{
    id: 'saturno',
nombre: 'Farmacia San Rafael #13',
direccion: 'CHALATENANGO, LA PALMA',
whatsapp: '50378033537',
lat: 14.000000,
lng: -89.000000,
horario: 'Lun-Dom: 7:00am - 8:00pm',
},

{
    id: 'venus',
nombre: 'Farmacia San Rafael #14',
direccion: 'LA LIBERTAD, ANTIGUO CUSCATLAN',
whatsapp: '50377456075',
lat: 13.662258,
lng: -89.252646,
horario: 'Lun-Dom: 7:00am - 8:00pm',
},

{
    id: 'neptuno',
nombre: 'Farmacia San Rafael #15',
direccion: 'CUSCATLAN,SUCHITOTO',
whatsapp: '50378039390',
lat: 13.936998,
lng: -89.026116,
horario: 'Lun-Dom: 7:00am - 8:00pm',
},

{
    id: 'mercurio',
nombre: 'Farmacia San Rafael #16',
direccion: 'CHALATENANGO,CHALATENANGO',
whatsapp: '50378033594',
lat: 14.056797,
lng: -89.000725,
horario: 'Lun-Dom: 7:00am - 8:00pm',
},

{
    id: 'joya',
nombre: 'Farmacia San Rafael #17',
direccion: 'CHALATENANGO, SAN IGNACIO',
whatsapp: '50378033545',
lat: 14.339791,
lng: -89.176229,
horario: 'Lun-Dom: 7:00am - 8:00pm',
},

{
    id: 'sol',
nombre: 'Farmacia San Rafael #18',
direccion: 'CHALATENANGO, CITALA',
whatsapp: '50378552231',
lat: 14.370055,
lng: -89.209624,
horario: 'Lun-Dom: 7:00am - 8:00pm',
},

{
    id: 'estrella',
nombre: 'Farmacia San Rafael #19',
direccion: 'LA LIBERTAD, SANTA TECLA',
whatsapp: '50378039267',
lat: 13.679537,
lng: -89.284837,
horario: 'Lun-Dom: 7:00am - 8:00pm',
},

{
    id: 'luna',
nombre: 'Farmacia San Rafael #20',
direccion: 'CHALATENANGO, NUEVA CONCEPCION',
whatsapp: '50378039250',
lat: 14.127552,
lng: -89.291467,
horario: 'Lun-Dom: 7:00am - 8:00pm',
},

//Pendiente de actualizacion de coordenadas
{
    id: 'marte',
nombre: 'Farmacia San Rafael #21',
direccion: 'CHALATENANGO, CHALATENANGO',
whatsapp: '50378033528',
lat: 11.000000,
lng: -89.000000,
horario: 'Lun-Dom: 7:00am - 8:00pm',
},

{
    id: 'sueños',
nombre: 'Farmacia San Rafael #23',
direccion: 'CHALATENANGO, LA REINA',
whatsapp: '50378597695',
lat: 14.193441,
lng: -89.148903,
horario: 'Lun-Dom: 7:00am - 8:00pm',
},

{
    id: 'gardenia',
nombre: 'Farmacia San Rafael #24',
direccion: 'LA LIBERTAD, SANTA TECLA',
whatsapp: '50378621073',
lat: 13.682852,
lng: -89.276652,
horario: 'Lun-Dom: 7:00am - 8:00pm',
},

{
    id: 'girasol',
nombre: 'Farmacia San Rafael #25',
direccion: 'CHALATENANGO, CHALATENANGO',
whatsapp: '50376052452',
lat: 14.039883,
lng: -88.934816,
horario: 'Lun-Dom: 7:00am - 8:00pm',
},
{
    id: 'lirios',
nombre: 'Farmacia San Rafael #26',
direccion: 'LA LIBERTAD,SAN JUAN OPICO',
whatsapp: '50378596577',
lat: 13.793530,
lng: -89.359370,
horario: 'Lun-Dom: 7:00am - 8:00pm',
},

{
    id: 'magnolia',
nombre: 'Farmacia San Rafael #27',
direccion: 'LA LIBERTAD, SANTA TECLA',
whatsapp: '50378597883',
lat: 13.674277,
lng: -89.285617,
horario: 'Lun-Dom: 7:00am - 8:00pm',
},

{
    id: 'orquidea',
nombre: 'Farmacia San Rafael #28',
direccion: 'SAN SALVADOR,AGUILARES',
whatsapp: '50370393924',
lat: 13.957934,
lng: -89.187193,
horario: 'Lun-Dom: 7:00am - 8:00pm',
},

{
    id: 'torogoz',
nombre: 'Farmacia San Rafael #29',
direccion: 'CUSCATLAN,SUCHITOTO',
whatsapp: '50376005586',
lat: 13.936603,
lng: -89.026653,
horario: 'Lun-Dom: 7:00am - 8:00pm',
},

{
    id: 'virgo',
nombre: 'Farmacia San Rafael #31',
direccion: 'SAN SALVADOR,AGUILARES',
whatsapp: '50378554079',
lat: 113.957392,
lng: -89.186035,
horario: 'Lun-Dom: 7:00am - 8:00pm',
},

{
    id: 'geranio',
nombre: 'Farmacia San Rafael #32',
direccion: 'SAN SALVADOR,AGUILARES',
whatsapp: '50376006559',
lat: 13.954507,
lng: -89.187791,
horario: 'Lun-Dom: 7:00am - 8:00pm',
},

{
    id: 'colibri',
nombre: 'Farmacia San Rafael #33',
direccion: 'SAN SALVADOR,AGUILARES',
whatsapp: '50378599989',
lat: 13.959101,
lng: -89.186438,
horario: 'Lun-Dom: 7:00am - 8:00pm',
},

{
    id: 'clavel',
nombre: 'Farmacia San Rafael #34',
direccion: 'CHALATENANGO,NUEVA CONCEPCION',
whatsapp: '50378554728',
lat: 14.128257,
lng: -89.292118,
horario: 'Lun-Dom: 7:00am - 8:00pm',
},

{
    id: 'aguila',
nombre: 'Farmacia San Rafael #35',
direccion: 'CHALATENANGO,TEJUTLA',
whatsapp: '50377453995',
lat: 14.169760,
lng: -89.100656,
horario: 'Lun-Dom: 7:00am - 8:00pm',
},


{
    id: 'orion',
nombre: 'Farmacia San Rafael #36',
direccion: 'CHALATENANGO, LA PALMA',
whatsapp: '50377442216',
lat: 14.316455,
lng: -89.169507,
horario: 'Lun-Dom: 7:00am - 8:00pm',
},

{
    id: 'gaviota',
nombre: 'Farmacia San Rafael #37',
direccion: 'SAN SALVADOR,SAN SALVADOR',
whatsapp: '50378039374',
lat: 13.727341,
lng: -89.202525,
horario: 'Lun-Dom: 7:00am - 8:00pm',
},

//Pendiente de actualizacion de coordenadas
{
    id: 'pelicano',
nombre: 'Farmacia San Rafael #38',
direccion: 'SAN SALVADOR,SOYAPANGO',
whatsapp: '50377446175',
lat: 11.000000,
lng: -90.000000,
horario: 'Lun-Dom: 7:00am - 8:00pm',
},

{
    id: 'halcon',
nombre: 'Farmacia San Rafael #39',
direccion: 'CHALATENANGO,TEJUTLA',
whatsapp: '50378602560',
lat: 14.104248,
lng: -89.151901,
horario: 'Lun-Dom: 7:00am - 8:00pm',
},

{
    id: 'tucan',
nombre: 'Farmacia San Rafael #40',
direccion: 'CCHALATENANGO, LA PALMA',
whatsapp: '50378604314',
lat: 14.316561,
lng: -89.170776,
horario: 'Lun-Dom: 7:00am - 8:00pm',
},

{
    id: 'london',
nombre: 'Farmacia San Rafael #41',
direccion: 'CHALATENANGO, El PARAISO',
whatsapp: '50378425488',
lat: 14.106754,
lng:-89.068392,
horario: 'Lun-Dom: 7:00am - 8:00pm',
},

{
    id: 'golondrina',
nombre: 'Farmacia San Rafael #42',
direccion: 'CHALATENANGO, TEJUTLA',
whatsapp: '50378624146',
lat: 14.078385,
lng:-89.141246,
horario: 'Lun-Dom: 7:00am - 8:00pm',
},
{
    id: 'enmanuel',
nombre: 'Farmacia San Rafael #43',
direccion: 'CHALATENANGO, DULCE NOMBRE DE MARIA',
whatsapp: '50378033577',
lat: 14.154581,
lng:-89.011324,
horario: 'Lun-Dom: 7:00am - 8:00pm',
},
{
    id: 'nachito',
nombre: 'Farmacia San Rafael #44',
direccion: 'CHALATENANGO, SAN IGNACIO',
whatsapp: '50378033577',
lat: 14.338775,
lng:-89.178701,
horario: 'Lun-Dom: 7:00am - 8:00pm',
},

{
    id: 'troncal',
nombre: 'Farmacia San Rafael #45',
direccion: 'SAN SALVADOR, AGUILARES',
whatsapp: '50378596599',
lat: 13.954505,
lng:-89.185767,
horario: 'Lun-Dom: 7:00am - 8:00pm',
},

{
    id: 'monaco',
nombre: 'Farmacia San Rafael #46',
direccion: 'SAN SALVADOR, AGUILARES',
whatsapp: '50369958888',
lat: 13.956477,
lng:-89.187063,
horario: 'Lun-Dom: 7:00am - 8:00pm',
},
];
// Productos de ejemplo - FARMACIA
export const PRODUCTOS_EJEMPLO: Product[] = [
// MEDICAMENTOS
{
id: 1,
nombre: 'Paracetamol 500mg',
nombreComercial: 'Tylenol',
componente: 'Paracetamol',
categoria: 'Medicamentos',
precio: 3.50,
stock: true,
tipo: 'farmacia',
marca: 'Bayer',
descripcion: 'Analgésico y antipirético para el alivio del dolor y fiebre',
sku: 'MED-001'
},
{
id: 2,
nombre: 'Ibuprofeno 400mg',
nombreComercial: 'Advil',
componente: 'Ibuprofeno',
categoria: 'Medicamentos',
precio: 5.99,
stock: true,
tipo: 'farmacia',
marca: 'Pfizer',
descripcion: 'Antiinflamatorio no esteroideo para dolor e inflamación',
sku: 'MED-002'
},
{
id: 3,
nombre: 'Amoxicilina 500mg',
componente: 'Amoxicilina',
categoria: 'Medicamentos',
precio: 8.50,
stock: true,
tipo: 'farmacia',
laboratorio: 'Lab. Chile',
descripcion: 'Antibiótico de amplio espectro',
sku: 'MED-003'
},
// VITAMINAS
{
id: 4,
nombre: 'Vitamina C 1000mg',
nombreComercial: 'Redoxon',
componente: 'Ácido ascórbico',
categoria: 'Vitaminas',
precio: 12.99,
stock: true,
tipo: 'farmacia',
laboratorio: 'Bayer',
descripcion: 'Suplemento vitamínico para reforzar el sistema inmunológico',
sku: 'VIT-001'
},
{
id: 5,
nombre: 'Complejo B',
componente: 'Vitaminas B1, B6, B12',
categoria: 'Vitaminas',
precio: 9.75,
stock: true,
tipo: 'farmacia',
marca: 'Nature Made',
descripcion: 'Suplemento de vitaminas del complejo B',
sku: 'VIT-002'
},
// CUIDADO PERSONAL
{
id: 6,
nombre: 'Crema Hidratante Facial',
categoria: 'Cuidado Personal',
precio: 8.75,
stock: true,
tipo: 'farmacia',
marca: 'Nivea',
descripcion: 'Crema hidratante para todo tipo de piel',
sku: 'CP-001'
},
{
id: 7,
nombre: 'Bloqueador Solar SPF 50',
categoria: 'Cuidado Personal',
precio: 15.99,
stock: true,
tipo: 'farmacia',
marca: 'Neutrogena',
descripcion: 'Protección solar de amplio espectro',
sku: 'CP-002'},
// PRIMEROS AUXILIOS
{
id: 8,
nombre: 'Alcohol en Gel',
componente: 'Alcohol etílico 70%',
categoria: 'Primeros Auxilios',
precio: 4.25,
stock: true,
tipo: 'farmacia',
descripcion: 'Desinfectante de manos antibacterial',
sku: 'PA-001'
},
{
id: 9,
nombre: 'Curitas Surtidas',
categoria: 'Primeros Auxilios',
precio: 3.50,
stock: true,
tipo: 'farmacia',
marca: 'Band-Aid',
descripcion: 'Apósitos adhesivos en diferentes tamaños',
sku: 'PA-002'
},
// BEBÉ Y MAMÁ
{
id: 10,
nombre: 'Pañales Etapa 3',
categoria: 'Bebé y Mamá',
precio: 15.50,
stock: true,
tipo: 'farmacia',
marca: 'Pampers',
descripcion: 'Pañales para bebés de 6-10 kg',
sku: 'BM-001'
},
{
id: 11,
nombre: 'Toallitas Húmedas',
categoria: 'Bebé y Mamá',
precio: 5.99,
stock: true,
tipo: 'farmacia',
marca: 'Huggies',
descripcion: 'Toallitas húmedas para bebé',
sku: 'BM-002'
},
// ==================== LIBRERÍA ====================
// ÚTILES ESCOLARES
{
id: 100,
nombre: 'Cuaderno 100 hojas',
categoria: 'Útiles Escolares',
precio: 2.50,
stock: true,
tipo: 'libreria',
marca: 'Norma',
descripcion: 'Cuaderno universitario rayado',
sku: 'UE-001'
},
{
id: 101,
nombre: 'Mochila Escolar',
categoria: 'Útiles Escolares',
precio: 25.00,
stock: true,
tipo: 'libreria',
marca: 'Kipling',
descripcion: 'Mochila resistente con múltiples compartimentos',
sku: 'UE-002'
},
{
id: 102,
nombre: 'Set de Reglas Geométricas',
categoria: 'Útiles Escolares',
precio: 4.50,
stock: true,
tipo: 'libreria',
marca: 'Maped',
descripcion: 'Juego de reglas: escuadra, cartabón y transportador',
sku: 'UE-003'
},
// PAPELERÍA
{
id: 103,
nombre: 'Marcadores x6',
categoria: 'Papelería',
precio: 3.25,
stock: true,
tipo: 'libreria',
marca: 'Sharpie',descripcion: 'Marcadores permanentes colores surtidos',
sku: 'PAP-001'
},
{
id: 104,
nombre: 'Resma de Papel A4',
categoria: 'Papelería',
precio: 4.75,
stock: true,
tipo: 'libreria',
marca: 'Xerox',
descripcion: 'Papel bond blanco 500 hojas',
sku: 'PAP-002'
},
// ARTE Y MANUALIDADES
{
id: 105,
nombre: 'Lápices de Colores x12',
categoria: 'Arte y Manualidades',
precio: 6.99,
stock: true,
tipo: 'libreria',
marca: 'Prismacolor',
descripcion: 'Lápices de colores profesionales',
sku: 'ART-001'
},
{
id: 106,
nombre: 'Temperas x6',
categoria: 'Arte y Manualidades',
precio: 8.50,
stock: true,
tipo: 'libreria',
marca: 'Crayola',
descripcion: 'Set de pinturas témpera colores básicos',
sku: 'ART-002'
},
// LIBROS
{
id: 107,
nombre: 'Diccionario Español',
categoria: 'Libros',
precio: 18.50,
stock: true,
tipo: 'libreria',
marca: 'RAE',
descripcion: 'Diccionario de la lengua española',
sku: 'LIB-001'
},
{
id: 108,
nombre: 'Atlas Universal',
categoria: 'Libros',
precio: 22.00,
stock: true,
tipo: 'libreria',
marca: 'National Geographic',
descripcion: 'Atlas con mapas actualizados',
sku: 'LIB-002'
},
// OFICINA
{
id: 109,
nombre: 'Grapadora Metálica',
categoria: 'Oficina',
precio: 7.50,
stock: true,
tipo: 'libreria',
marca: 'Swingline',
descripcion: 'Grapadora de oficina resistente',
sku: 'OF-001'},
{
id: 110,
nombre: 'Calculadora Científica',
categoria: 'Oficina',
precio: 18.99,
stock: true,
tipo: 'libreria',
marca: 'Casio',
descripcion: 'Calculadora científica con funciones avanzadas',
sku: 'OF-002'
},
];