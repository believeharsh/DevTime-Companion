import usePageMetadata from "../../../Hooks/UsePageMetadeta";
const Header = () => {
  const {title} = usePageMetadata() ; 
    return (
      <div className="w-full bg-neutral-900 text-white py-1 px-4 text-right font-bold">
        <h1 className="text-2xl font-bold">{title}</h1>
      </div>
    );
  };
  export default Header ; 