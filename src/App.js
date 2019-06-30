import React, { Component } from 'react';
import axios from 'axios';
import CreateMembro from './components/CreateMembro'

const api = axios.create({
  baseURL: 'http://localhost:3333',
})

class App extends Component {

  state = { 
    newMinisterioContent: '',
    newMinisterioDesc: '',
    ministerios: [],
  }

  handleSubmit = async (e) => { 
    e.preventDefault()
  
    const { data: ministerio } = await api.post('/ministerios', { min_nome: this.state.newMinisterioContent, min_descricao: this.state.newMinisterioDesc})

    this.setState({ministerios: [...this.state.ministerios, ministerio], newMinisterioContent: '', newMinisterioDesc: '' })
  }

  render() {
    return (
      <div className="App">
        <CreateMembro />
       
        
      </div>
    )
  }
}

export default App;
