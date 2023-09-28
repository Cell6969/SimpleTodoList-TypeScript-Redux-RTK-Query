import { FormEvent, useEffect, useState } from 'react'
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'
import "./LatihanForm.css"

interface Biodata {
    nama: string;
    email: string;
    phone: string;
}

const LatihanForm = () => {
    const defaultState: Biodata = {
        nama: "",
        email: "",
        phone: ""
    };
    const [form, setForm] = useState<Biodata>(defaultState);

    const [biodatas, setBiodatas] = useState<Biodata[]>();

    const getData = async () => {
        const data = await fetch('http://localhost:3001/biodata', {
            method: 'GET',
            headers: {
                'Content-Type': "application/json"
            }
        })
            .then((res) => {
                return res.json()
            })
            .catch((error) => { });

        if (data) {
            setBiodatas(data)
        }
    };

    useEffect(() => {
        getData();
    }, [])

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        fetch("http://localhost:3001/biodata", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(form),
        })
            .then((res) => {
                // alert("Post data berhasil")
                getData();
            })
            .catch((error) => {
                alert("post data error")
            })
    }
    return (
        <>
            <form className="latihan_form" onSubmit={handleSubmit}>
                <h2>Form Biodata</h2>
                <div className="latihan_form_item">
                    <label htmlFor="">Nama</label>
                    <Input
                        value={form?.nama}
                        onChange={(e) => { setForm({ ...form, nama: e.target.value }) }}
                        style={{ marginLeft: 10 }}
                        placeholder="Masukan Nama"
                        required
                    />
                </div>
                <div className="latihan_form_item">
                    <label htmlFor="">Email</label>
                    <Input
                        value={form?.email}
                        onChange={(e) => { setForm({ ...form, email: e.target.value }) }}
                        type="email"
                        style={{ marginLeft: 10 }}
                        placeholder="Masukan Email"
                    />
                </div>
                <div className="latihan_form_item">
                    <label htmlFor="">Telephon</label>
                    <Input
                        value={form?.phone}
                        onChange={(e) => { setForm({ ...form, phone: e.target.value }) }}
                        type="text"
                        style={{ marginLeft: 10 }}
                        placeholder="Masukan Telephon"
                    />
                </div>
                <div style={{ marginTop: 20 }}>
                    <Button label="Submit" />
                </div>
            </form>
            <div>
                <ul>
                    {biodatas?.map((item, index) => (
                        <li key={index}>
                            <h3>
                                Nama: {item.nama}
                            </h3>
                            <h3>Email: {item.email}</h3>
                            <h4>{item.phone}</h4>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default LatihanForm