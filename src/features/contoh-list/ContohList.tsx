interface Biodata {
    name: string;
    age: number;
}




export default function ContohList() {
    const biodata: Biodata[] = [
        {
            name: 'Adi',
            age: 20
        },
        {
            name: 'Farhan',
            age: 25
        },
        {
            name: 'Arnold',
            age: 26
        }
    ]
    return (
        <>
            <ol>
                {biodata.map((item, index) =>(<li key={index}>{item.name}, umur: {item.age}</li>))}
            </ol>
        </>
    )
}