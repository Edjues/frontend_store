import React from 'react';
import "./itemMenu.css"

interface List {
    id: number;
    descripcion: string;
    url?: string;
    icono?: string;
    title?: string;
    onClick?: () => void;
    supValue?: number;
}
interface ItemMenuProps{
    children?: React.ReactNode;
    className?: string;
    listItem: List[];
}
const ItemMenu: React.FC<ItemMenuProps> = ({ className, listItem}) => {

    return(
        <>
        {listItem?.length > 0 ? ( // Check for length to avoid potential errors
            <ul className={className}>
            {(listItem as List[]).map((item) => ( // Type assertion for clarity
                <li key={item.id} >
                    <a onClick={item.onClick} href={item.url} title={item.title}><i>{item.icono}</i>{item.descripcion}<sup>{item.supValue}</sup></a>
                </li>
            ))}
            </ul>
        ) : (
            <p>No hay datos</p>
        )}
        </>
    )
}

export default ItemMenu;