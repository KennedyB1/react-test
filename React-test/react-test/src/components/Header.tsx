import logo from '../assets/logo.png';

export const Header = () => {


    return (
        <header>
            
            <div className="logo">
            
            <img src={logo} alt="Logo" />
            </div>
            
                <button>Random chant</button>
                <input type="text" placeholder="Search for team or chant" />
                <button>Battle</button>


            <div className="logout"><button>Log in</button></div>
            
        </header>
    );

}