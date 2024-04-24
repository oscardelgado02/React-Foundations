const domNode = document.getElementById('app');

function Header({ title }){
    return (<h1>{title ? title : 'Default title'}</h1>)
}

function HomePage() {
    return (
        <div>
        {/* Nesting the Header component */}
        <Header title="React"/>
        <Header title="A new title"/>
        <Header />
        </div>
    );
}

function HomePage2() {
    const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

    function handleClick(){
        console.log("increment like count")
    }

    return (
        <div>
        <Header title="Develop. Preview. Ship." />
        <u1>
            {names.map((name) => (
            <li key={name}>{name}</li>
            ))}
        </u1>
        <button onClick={handleClick}>Like</button>
        </div>
    );
}

const root = ReactDOM.createRoot(domNode);
root.render(<HomePage2 />);