/**
 * Represents a navigation bar component.
 * @function
 * @returns {JSX.Element} The JSX element for the navigation bar.
 */
function NavBar() {
    return (
        <div class="nav">
            <img src="./image/react-logo.png" alt="React Logo" class="nav-logo" />
            <ul className="nav-items">
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}

/**
 * Represents a main content component.
 * @function
 * @returns {JSX.Element} The JSX element for the main content.
 */
function Main() {
    return (
        <div class="main">
            <h1>Reasons I'm excited to learn React</h1>
            <ol class="main-list">
                <li>It's a popular library, so I'll be able to fit in with the cool kids!</li>
                <li>I'm more likely to get a job as a developer if I know React</li>
            </ol>
        </div>
    )
}

/**
 * Represents a footer component.
 * @function
 * @returns {JSX.Element} The JSX element for the footer.
 */
function Footer() {
    return (
        <footer>
            © 20xx development. All rights reserved
        </footer>
    )
}

/**
 * Represents the main application component.
 * @function
 * @returns {JSX.Element} The JSX element for the main application.
 */
function App() {
    return (
        <div>
            <NavBar />
            <Main />
            <Footer />
        </div>
    );
}

// Render the App component to the "root" element in the HTML document.
ReactDOM.render(<App />, document.getElementById("root"))
