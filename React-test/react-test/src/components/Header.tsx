export const Header = () => {


    return (
        <header>
            
            <div className="logo">
                {/* Replace 'logo.png' with the path to your logo image */}
                <img src="logo.png" alt="Logo" />
            </div>
            
                <button>Random chant</button>
                <input type="text" placeholder="Search for team or chant" />
                <button>Battle</button>


            <div className="logout"><button>Log in</button></div>
            
        </header>
    );

}