// This is more like a functional component

function NavBar() {
    return (
        <div>
            <img src="./image/react-logo.png" alt="React Logo" width="40px" />
            <h1>Reasons I'm excited to learn React</h1>
        </div>
    )
}

function Main() {
    return (
        <div>
            <ol>
                <li>It's a popular library, so I'll beable to fit in with the cool kids!</li>
                <li>I'm more likely to get a job as a developer if I know React</li>
            </ol>
        </div>
    )
}

function Footer() {
    return (
        <footer>
            © 20xx development. All rights reserved
        </footer>
    )
}



function App() {
    return (
        <div>
            <NavBar />
            <Main />
            <Footer />
        </div>
    );
}


ReactDOM.render(<App />, document.getElementById("root"))