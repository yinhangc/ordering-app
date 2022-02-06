const Loader = (props) => {
  const className = 'h-3 w-3 rounded-full border-2 border-black';

  return (
    <div className="grid gap-1.5 justify-center">
      <div className={`flex gap-2 justify-center`}>
        <div className={`${className} animate-bounce`}></div>
        <div className={`${className} animate-bounce200`}></div>
        <div className={`${className} animate-bounce400`}></div>
      </div>
      <p className="text-center">{props.children}</p>
    </div>
  );
};

export default Loader;
