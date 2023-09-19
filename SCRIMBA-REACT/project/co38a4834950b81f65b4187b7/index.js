

/* 
Challenge: 

Create a navbar in JSX:
    - Use the semantic `nav` element as the parent wrapper
    - Have an h1 element with the brand name of your "website"
    - Insert an unordered list for the other nav elements
        - Inside the `ul`, have three `li`s for "Pricing",
        "About", and "Contact"
    - Don't worry about styling yet - it'll just be plain-looking HTML for now
*/


// This is more like a functional componet

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