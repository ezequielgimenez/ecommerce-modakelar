type propsInput = {
  type: string;
  name: string;
  placeholder: string;
};

export function MyInput(p: propsInput) {
  return (
    <div>
      <input
        className="grow-1 w-[333px] h-[50px] bg-white border-2 border-gray-300 rounded-[5px] transition-colors duration-400 ease-in-out"
        type={p.type}
        name={p.name}
        placeholder={p.placeholder}
      />
    </div>
  );
}

export function MyInputSmall(p: propsInput) {
  return (
    <div>
      <input
        className="grow-1 w-[300px] h-[30px] bg-white border-2 border-gray-300 rounded-[5px] transition-colors duration-400 ease-in-out"
        type={p.type}
        name={p.name}
        placeholder={p.placeholder}
      />
    </div>
  );
}
