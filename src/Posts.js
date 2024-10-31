import React from "react"

export default function Posts(){
    const posts =[{usuario:{src:"assets/img/meowed.svg",alt:"meowed"}, 
                    conteudo:{src:"assets/img/gato-telefone.svg", alt:"gato-telefone"}, 
                    fundo:{src:"assets/img/respondeai.svg" ,alt:"respondeai",texto:"101523"}},

                  {usuario:{src:"assets/img/barked.svg",alt:"barked"}, 
                  conteudo:{src:"assets/img/dog.svg", alt:"dog"}, 
                  fundo:{src:"assets/img/adorable_animals.svg" ,alt:"adorable_animals",texto:"99159"}},

                  {usuario:{src:"assets/img/barked.svg",alt:"lola"}, 
                  conteudo:{src:"assets/img/dog.svg", alt:"dog"}, 
                  fundo:{src:"assets/img/adorable_animals.svg" ,alt:"adorable_animals",texto:"99159"}}
    ]

    return (
        <>
            <div className="posts">{posts.map(({usuario,conteudo,fundo}) => (<ExibePosts usuario={usuario} conteudo={conteudo} fundo={fundo} key={usuario.alt}/>))}</div>
        </>
        
    );
    
}

function ExibePosts({usuario,fundo,conteudo}){
    const [curtida, setcurtida] = React.useState("heart-outline");
    const [numero, setnumero]= React.useState(fundo.texto);
    const [cor, setcor] = React.useState("black");  

    function curtirPost(controle){
        if(curtida === "heart-outline"){
            setcurtida("heart");
            setcor("red");
            const novoNum= (parseInt(numero)+1)
            setnumero(novoNum);

        }else if(curtida==="heart" && controle==="fundo"){
            setcurtida("heart-outline");
            setcor("black");
            const novoNum= (parseInt(numero)-1)
            setnumero(novoNum);
        }
    }
    return (
        <>  
            <div className="post">
                <div className="topo"><Topo src={usuario.src} alt={usuario.alt}/></div>
                <div className="conteudo"><Conteudo src={conteudo.src} alt={conteudo.alt} onCurtir={()=>curtirPost("conteudo")}/></div>
                <div className="fundo"><FundoeConteudo src={fundo.src} alt={fundo.alt}  numero={numero} curtida={curtida} cor={cor} onCurtir={()=>curtirPost("fundo")}/></div>
            </div>
       </>
    );
}

function Conteudo({src, alt, onCurtir}){
    return(
        <img src={src} alt={alt} onClick={onCurtir}/>
    );
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
    );
}


function FundoeConteudo({src,alt,curtida, cor, numero, onCurtir}){
    const [iconeSalvar, seticoneSalvar] = React.useState("bookmark-outline");
    function salvarPost(){
        seticoneSalvar(iconeAtual => iconeAtual === "bookmark-outline" ? "bookmark" : "bookmark-outline");

    }
    return(
        <>
            <div className="acoes">
                <div>
                <ion-icon name={curtida} style={{ color: cor}} onClick={onCurtir}></ion-icon>
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
                Curtido por <strong>{alt}</strong> e <strong>outras {numero.toString()} pessoas</strong>
                </div>
            </div>
        </>
    );

}

