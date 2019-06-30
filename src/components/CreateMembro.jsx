import React, { useState } from "react"
import axios from "axios"

const api = axios.create({
    baseURL: 'http://localhost:3333',
})

export default function CreateMembro() {
    const [newMinisterioNome , setNewMinisterioNome] = useState('')
    const [newMinisterioDesc, setNewMinisterioDesc] = useState('')
    const [ministerios, setMinisterios] = useState([])

    async function handleSubmit(e) { 
        e.preventDefault()
       
        const { data: ministerio } = await api.post('/ministerios', { min_nome: newMinisterioNome, min_descricao: newMinisterioDesc})
        setMinisterios([...ministerios, ministerio])
        setNewMinisterioDesc('')
        setNewMinisterioNome('')
      }


    return(
        <>
            <form onSubmit={handleSubmit}>
            Nome do Ministério
            <textarea 
            onChange={e => setNewMinisterioNome(e.target.value)}
            value={newMinisterioNome}
            />

            Descrição do ministério:

            <textarea
            onChange={e => setNewMinisterioDesc(e.target.value)}
            value={newMinisterioDesc}
            />
            <button type="submit">Postar</button>
            </form>

            <ul>
            { ministerios.map(min => (
                <li key={min.min_id}>{min.min_nome}: {min.min_descricao}</li>
            ))}
            </ul>
    </>    
    );

}