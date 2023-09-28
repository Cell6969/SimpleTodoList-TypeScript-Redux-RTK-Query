import { useState } from "react"
import Input from "../../components/Input/Input";

export default function StateInput() {
    const [nama, setNama] = useState<string>();
    return (
        <>
            <Input placeholder="Masukkan Nama" value={nama} onChange={(e) => {
                setNama(e.target.value)
            }}/>
            <h1>{nama}</h1>
        </>
    )
};