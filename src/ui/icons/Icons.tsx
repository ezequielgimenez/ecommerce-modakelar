export function Logo() {
  return (
    <div className="cursor-pointer">
      <img
        className="w-[132px] h-[19px]"
        src="/logo.svg"
        alt="Logo modakelar"
      />
    </div>
  );
}

export function Carrito() {
  return (
    <div className="cursor-pointer">
      <img className="w-[26px] h-[27px]" src="/carrito.svg" alt="Cart" />
    </div>
  );
}

export function Burger() {
  return (
    <div className="cursor-pointer">
      <img className="w-[45px]" src="/burger.svg" alt="Burger" />
    </div>
  );
}
