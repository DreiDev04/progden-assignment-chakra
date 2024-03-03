export function Navigation({}) {
  return (
    <nav className="rounded-full bg-red-400 border-2 border-foreground-light ">
      <ul className="flex justify-around py-3 text-foreground uppercase font-semibold">
        <li className="hover:underline hover:cursor-pointer">About</li>
        <li className="hover:underline hover:cursor-pointer">Portfolio</li>
        <li className="hover:underline hover:cursor-pointer">Contact</li>
      </ul>
    </nav>
  );
}
