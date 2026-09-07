type HeaderProps = {
    courseName : string;
    title: string;
    description?:string;
};


const Header =({courseName, title, description}:HeaderProps)=>{
    
    if (description===undefined){
         return (
        
        <header className="bg-[#f9dcc4] text-black py-4 px-6 shadow-md">
            <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold mb-1">{title}</h2>
            <p className="text-base opacity-90">{courseName}</p>
            </div>
        </header>
    );
    }
    return (
        
        <header>
            <h2>{title}</h2>
            <p>{courseName}</p>
            <p>{description}</p>
        </header>
    );
};
export default Header;