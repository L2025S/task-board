import { Link } from "react-router-dom";

type HeaderProps = {
    courseName : string;
    title: string;
    description?:string;
};


const Header =({courseName, title, description}: HeaderProps) => {
  
    return (
        
        <header className="bg-[#f9dcc4] text-black py-4 px-6 shadow-md">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div>
            <h2 className="text-2xl font-bold mb-1">{title}</h2>
            <p className="text-base opacity-90">{courseName}</p>
            {description && <p className="text-sm opacity-80">{description}</p>}
            </div>

            {/* Navigation */}
            <nav className="flex gap-4">
                <Link
                to="/"
                className="px-4 py-2 rounded-lg bg-white hover:bg-[#f8edeb] font-medium transition-colors"
                >
                    Task Board
                </Link>

                <Link
                to="/new"
                className="px-4 py-2 rounded-lg bg-white hover:bg-[#f8edeb] font-medium transition-colors"
                >
                    New Task
                </Link>
            </nav>
            </div>
        </header>
    );

};
export default Header;