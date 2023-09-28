import { FormEvent, useState } from 'react'
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'
import "./LatihanForm.css"

const LatihanForm = () => {
    const [nama, setNama] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log('Nama', nama);
        console.log('email', email);
        console.log('phone', phone);
    }
    return (
        <>
            <form className="latihan_form" onSubmit={handleSubmit}>
                <h2>Form Biodata</h2>
                <div className="latihan_form_item">
                    <label htmlFor="">Nama</label>
                    <Input
                        value={nama}
                        onChange={(e) => { setNama(e.target.value) }}
                        style={{ marginLeft: 10 }}
                        placeholder="Masukan Nama"
                        required
                    />
                </div>
                <div className="latihan_form_item">
                    <label htmlFor="">Email</label>
                    <Input
                        value={email}
                        onChange={(e) => { setEmail(e.target.value) }}
                        type="email"
                        style={{ marginLeft: 10 }}
                        placeholder="Masukan Email"
                    />
                </div>
                <div className="latihan_form_item">
                    <label htmlFor="">Telephon</label>
                    <Input
                        value={phone}
                        onChange={(e) => { setPhone(e.target.value) }}
                        type="text"
                        style={{ marginLeft: 10 }}
                        placeholder="Masukan Telephon"
                    />
                </div>
                <div style={{ marginTop: 20 }}>
                    <Button label="Submit" />
                </div>
            </form>
        </>
    )
}

export default LatihanForm