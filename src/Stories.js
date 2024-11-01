export default function Stories(){
    const dadosStories =[{src:"assets/img/9gag.svg", alt:"9gag"},
        {src:"assets/img/meowed.svg", alt:"meowed"},
        {src:"assets/img/barked.svg", alt:"barked"},
        {src:"assets/img/nathanwpylestrangeplanet.svg", alt:"nathanwpylestrangeplanet"},
        {src:"assets/img/wawawicomics.svg", alt:"wawawicomics"},
        {src:"assets/img/respondeai.svg", alt:"respondeai"},
        {src:"assets/img/filomoderna.svg", alt:"filomoderna"},
        {src:"assets/img/memeriagourmet.svg", alt:"memeriagourmet"}]
    
    return(

            <div className="stories">
                {dadosStories.map(seguidor => (<ExibeDados src ={seguidor.src} alt = {seguidor.alt}  key={seguidor.alt}/>))}
                <div className="setinha">
                    <ion-icon name="chevron-forward-circle"></ion-icon>
                </div>
            </div>

    );
}

function ExibeDados({src,alt}){
    return (

            <div className="story">
                <div className="imagem">
                    <img src={src} alt={alt}/>
                </div>
                <div className="usuario">
                    {alt}
                </div>
            </div>

    );
}