function NavBar(){
    return(
        <div>
            <a>Home</a>
            <div className="profile">Profile</div>
        </div>
    )
}

const domContainer = document.querySelector('#navbar');
const root = ReactDOM.createRoot(domContainer);
root.render(NavBar());