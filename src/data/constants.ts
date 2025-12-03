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