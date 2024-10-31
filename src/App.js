// roda o novbar e o body (que a div corpo)
import NavBar from "./NavBar"
import Body from "./Body"


export default function App(){
    return (
        <>
            <div className="navbar"><NavBar/></div>
            <div className="corpo"><Body/></div>
        </>
    )
}