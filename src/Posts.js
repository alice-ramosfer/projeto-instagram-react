import React from "react"

export default function Posts(){
    const posts =[{usuario:{src:"assets/img/meowed.svg",alt:"meowed"}, conteudo:{src:"assets/img/gato-telefone.svg", alt:"gato-telefone"}, fundo:{src:"assets/img/respondeai.svg" ,alt:"respondeai",texto:"101.523"}},
                  {usuario:{src:"assets/img/barked.svg",alt:"barked"}, conteudo:{src:"assets/img/dog.svg", alt:"dog"}, fundo:{src:"assets/img/adorable_animals.svg" ,alt:"adorable_animals",texto:"99.159"}},
                  {usuario:{src:"assets/img/barked.svg",alt:"lola"}, conteudo:{src:"assets/img/dog.svg", alt:"dog"}, fundo:{src:"assets/img/adorable_animals.svg" ,alt:"adorable_animals",texto:"99.159"}}
    ]

    return (
        <>
            <div className="posts">{posts.map(({usuario,conteudo,fundo}) => (<ExibePosts usuario={usuario} conteudo={conteudo} fundo={fundo} key={usuario.alt}/>))}</div>
        </>
        
    )
    
}

function ExibePosts({usuario,fundo,conteudo}){
    return (
        <>  
            <div className="post">
                <div className="topo"><Topo src={usuario.src} alt={usuario.alt}/></div>
                <div className="conteudo"><img src={conteudo.src} alt={conteudo.alt}/></div>
                <div className="fundo"><Fundo src={fundo.src} alt={fundo.alt} texto={fundo.texto}/></div>
            </div>
       </>
    )
}

function Topo({src, alt}){
    return (
        <>
            <div className="usuario">
                <img src={src} alt={alt}/>
                {alt}
              </div>
              <div className="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
              </div>
        </>
    )
}


function Fundo({src,alt,texto}){
    const [iconeSalvar, seticoneSalvar] = React.useState("bookmark-outline");
    function salvarPost(){
        seticoneSalvar(iconeAtual => iconeAtual === "bookmark-outline" ? "bookmark" : "bookmark-outline")
       

    }

    return(
        <>
            <div className="acoes">
                <div>
                  <ion-icon name="heart-outline"></ion-icon>
                  <ion-icon name="chatbubble-outline"></ion-icon>
                  <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                  <ion-icon name={iconeSalvar} onClick ={salvarPost}></ion-icon>
                </div>
              </div>

              <div className="curtidas">
                <img src={src} alt={alt}/>
                <div className="texto">
                  Curtido por <strong>{alt}</strong> e <strong>outras {texto} pessoas</strong>
                </div>
            </div>
        </>
    )
}
