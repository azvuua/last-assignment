import { useState } from "react";

export default function Home() {
    const [click, setclick] = useState(true);
    const [ner, setNer] = useState(false);
    let a = "Azzaya";
    
    return(
        <div> 
            <div className="cursor-pointer" onClick={ () => setNer('ohio')}>
                click me
                <p>
                    {ner == true ? "ohio" : ""}
                </p>
               
            </div>
            <button className="" onClick={ () => setNer("")}>
                remove
            </button>
            <p> {ner}</p>
        </div> 
    )

}