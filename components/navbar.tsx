import Link from 'next/link';
import { itemsNavbar } from '../data';
import { ToggleTheme } from './toggle-theme';
const Navbar = () => {
    return (
        <nav className="fixed z-20 flex fñex-col items-center w-full mt-auto justify-center h-max bottom-20">
            <div className="flex items-center gap-2 justify-center px-4 py-1 dark:bg-white/10 bg-slate-800/10 backdrop-blur-sm rounded-full">
                {itemsNavbar.map((item) => (
                    <div key={item.id} className="relative group">
                        <Link href={item.link} className='cursor-pointer hover:dark:bg-slate-800 hover:bg-slate-400 px-3 py-2 rounded-full transition duration-150 flex items-center justify-center'>
                            {item.icon}
                        </Link>
                        <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 dark:bg-white text-white dark:text-slate-800 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-150 whitespace-nowrap pointer-events-none">
                            {item.title}
                        </span>
                    </div>
                ))}
                <ToggleTheme></ToggleTheme>
            </div>
        </nav>
    );
}

export default Navbar;