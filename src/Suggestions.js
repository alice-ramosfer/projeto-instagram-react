export default function Suggestions(){
    const listaSugetoes = [{src:"assets/img/bad.vibes.memes.svg", alt:"bad.vibes.memes"}, {src:"assets/img/chibirdart.svg", alt:"chibirdart"},{ src:"assets/img/razoesparaacreditar.svg" ,alt:"razoesparaacreditar"}, {src:"assets/img/adorable_animals.svg", alt:"adorable_animals"}];
    return(
        <>
            <div className="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            {listaSugetoes.map(({src, alt}) => ( <Usuarios src ={src} alt={alt} key={alt}/>) )}
        
        </>
    );
}
 
function Usuarios({src,alt}){
    return (
        <>
             <div className="sugestao">
                <div className="usuario">
                    <img src={src} alt={alt}/>
                    <div className="texto">
                        <div className="nome">{alt}</div>
                        <div className="razao">Segue você</div>
                    </div>
                </div>
                <div className="seguir">Seguir</div>
            </div>
        </>
    );
}
