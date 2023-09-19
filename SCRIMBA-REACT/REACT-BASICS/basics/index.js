// This is more like a functional component

function NavBar() {
    return (

        <div>
            <h1>Website</h1>
            <ul>
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
            </ul>

        </div>
    )
}

ReactDOM.render(<NavBar />, document.getElementById("root"))