import './Home.css';
const Home = (props) => {

    const { loggedIn, email } = props

    const OnButtonClick = () => {
    }
    return <div className='mainContainer'>
        <div className={'titleContainer'}>
            <div><h1>Welcome!</h1></div>
        </div>
        <div><h3>This Is The Home Page.</h3></div>
        <div className={'buttonContainer'}>
            <input className={"button button1"}
                type="button" onClick={OnButtonClick}
                value={loggedIn ? "Log Out" : "Log In"} />
            <div className={'buttonContainer'}>
                <input className={"button button2"}
                    type="button" onClick={OnButtonClick}
                    value={loggedIn ? "Log Out" : "Register User"} />
                {(loggedIn ? <div>
                    Your email adress is {email}</div> : <div />)}
            </div>
        </div>
    </div>
}

export default Home;