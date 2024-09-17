import React, {useState} from 'react';
import "./Accordion.css"
interface AccordionProps{
    children?: React.ReactNode[];
    title: string[];
}
const Accordion: React.FC<AccordionProps> = ({ title , children}) => {
    // let List: ListContenido[] = []
    const [active, setActive] = useState(0);
    function cambio(e:number){
        // console.log(List)
        setActive(e)
    }
    return(
        <>
            <section className='menu__desplegable'>
                <ul className='nav__ul'>
                    {(title as string[]).map((item, cont) => ( // Type assertion for clarity
                        <li className={`${cont==active ?'activeT':''}`} onClick={()=> cambio(cont)} key={cont} id={cont+""}>
                            {item}</li>
                    ))}
                </ul>
                {(children as React.ReactNode[]).map((item, cont) => ( // Type assertion for clarity
                    // <li id=></li>
                    <article key={cont} className={`container c${cont} ${cont==active ?'active':'noaction'}`}>
                        {item}
                    </article>
                ))}
            </section>
        </>
    )
}

export default Accordion;