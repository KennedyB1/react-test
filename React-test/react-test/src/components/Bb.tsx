import { useState, ChangeEvent } from 'react';

export const Bb = () => {

    /*
    
        interface Isiffror {
            siffror: number;
        }
        const numbers: Isiffror[] = [{ siffror: 11 }, { siffror: 222 }];
    
        const test = numbers.map((siffra, index) => {
    
            return <h3 key={index}>{siffra.siffror}</h3>
    
        })
    */
    /*
     const handelButtonClick = (index: number, dataa: { Number: number }) => {
         console.log('Index:', index);
         console.log('Data:', dataa);
     };
 
     const data = [{ Number: 1 }, { Number: 12 }, { Number: 3 }];
 
     const test = data.map((dataa, index) => {
         return (
             <button onClick={() => handelButtonClick(index, dataa)} key={index}>
                 {dataa.Number}
             </button>
         );
     });
 */


    const [number, setNumber,] = useState("");

    const handelButtonClick = (e: ChangeEvent<HTMLInputElement>) => {
        setNumber(e.target.value);

    };

    const content =
        <div>
            <input value={number} onChange={handelButtonClick} />
            <h2>{number}</h2>
        </div>
        ;

    return <div><h3>{content}</h3></div>

};