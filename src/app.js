// import react from 'react';

//Non ES-6 Function looks like this: function AppHD() {

const AppHD = () => { //ES-6 Function
    return (
        // we can only return one element from a function so div is the only element we have returned
        <div>
            {/* text-allign will become textAlign in jsx */}
            <h1 style={{ textAlign: "center" }}>Hello World</h1>

            {/* class will become className in jsx*/}
            <button className="button"> Heyy </button>
        </div>
    )
}

export default AppHD;