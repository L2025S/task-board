type HeaderProps = {
    courseName : string;
    title: string;
    description?:string;
};


const Header =({courseName, title, description}:HeaderProps)=>{
    
    if (description===undefined){
         return (
        
        <header>
            <h2>{title}</h2>
            <p>{courseName}</p>
        
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