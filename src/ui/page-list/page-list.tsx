export default function PageList({ children }) {
  return (
    <div className="inline-block cursor-pointer">
      <li className="w-[32px] h-[32px]  text-center list-none text-[#737373] font-[500] rounded-[5px] hover:bg-[#4189e60b]">
        {children}
      </li>
    </div>
  );
}
