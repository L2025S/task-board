type FooterProps ={
    creator:string,
    year:number;
};

const Footer =({creator,year}:FooterProps)=>{

    return(
        <footer>&copy; created by {creator} in {year}</footer>
    );
};
export default Footer;