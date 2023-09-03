import React from 'react'
import './Curiosidades.css'
import CuriosidadeImagem from'./CuriosidadeImagem.jpg'

export default function Curiosidades(){
    return (
        <section id='sectionC' className='sectionC' >
                <h1 id='h1C' className='h1C'  >Curiosidades de Star Wars</h1> <br /> <br /> <br /> <br />
                <p id="pC" className='pC' >1- O som da respiração do Darth Vader foi criado por Ben Burtt, que colocou um pequeno microfone do bocal de um respirador de mergulho e gravou o som da própria respiração usando o aparelho.</p>
                <p id='pC' className='pC' >2- Nas primeiras versões do roteiro, R2-D2 podia falar normalmente. Apesar de suas falas terem sido removidas, as reações de C-3PO ao diálogo foram mantidas no roteiro</p>
                <p id='pC' className='pC' >3- O visual Yoda foi baseado em Albert Einstein. Stuart Freeborn, supervisor de efeitos especiais em O Império Contra-Ataca, usou o próprio rosto misturado com o do famoso físico para criar o personagem.</p>
            <div className='divImgC' >
                <img src={CuriosidadeImagem} alt="" className='imagemC' />
            </div>
        </section>
    )
}

