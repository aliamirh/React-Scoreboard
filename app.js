const desc   = 'I just learned how to create a React node and render it into the DOM.';
const myTitleID = 'main-title';
const name = 'Ali';
const lastName = 'Amirhamzeh'

const header = (
    <header>
    <h1 id={myTitleID}>{name} {lastName} 's First React Element</h1>
    <p>{desc}</p>
    </header>
);

ReactDOM.render(
    header,
    document.getElementById('root')
);