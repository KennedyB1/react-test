export const Hellow = () => {
    //  const age: number = 12;

    const numbers = [1, 2, 22, 4];

    return <ul>
        {
            numbers.map((i, index) => <li key={index}>{i}</li>)
        }

    </ul>


}
