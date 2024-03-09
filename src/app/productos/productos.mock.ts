export const ListaProductos: Productos[] = [
    {id: 1, name: 'Lavandina',price: 750, descripcion: 'Botella de 1L'},
    {id: 2, name: 'Detergente',price: 1250, descripcion: ' Anti-Grasa para toda la cocina'},
    {id: 3, name: 'Jabon',price: 300, descripcion: 'Quita cualquier mancha'},
    {id: 4, name: 'Esponja',price: 250},
    {id: 5, name: 'Enjuague',price: 550, descripcion: 'Cabello brillante'}
]

export interface Productos{

    id: number;
    name: string;
    price: number;
    descripcion?: string;   

}