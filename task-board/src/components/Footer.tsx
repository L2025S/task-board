type FooterProps ={
    creator:string,
    year:number;
};

const Footer =({creator,year}:FooterProps)=>{

    return(
        <footer className="bg-[#f9dcc4] text-black text-center py-4 mt-auto border-t border-[#e8c4b0]">
        <p className="text-sm opacity-80"> 
            &copy; created by {creator} in {year}
        </p>
        </footer>
    );
};
export default Footer;