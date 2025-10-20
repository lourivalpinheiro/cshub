import { Sheet, SheetTrigger, SheetContent } from "../ui/sheet";
import { Button } from "../ui/button";
import Link from "next/link";
import {
  LayoutDashboard,
  MenuIcon,
  LayoutDashboardIcon,
  FileMinus2,
  Package,
  HomeIcon,
  LogOutIcon,
  Box,
  House,
  CalculatorIcon,
} from "lucide-react";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "../ui/tooltip";

export function Sidebar() {
  return (
    <div className="flex w-full flex-col">
      {/* Desktop Sidebar */}
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 border-r bg-dark sm:flex flex-col">
        <nav className="flex flex-col items-center gap-4 px-2 py-5">
          <TooltipProvider>
            {/* <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/home"
                  className="flex h-9 w-9 items-center justify-center rounded-md transition-colors hover:text-orange-400"
                >
                  <Package className="h-6 w-6" />
                  <span className="sr-only">Dashboard Avatar</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Avatar</TooltipContent>
            </Tooltip> */}

            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/home"
                  className="flex h-9 w-9 items-center justify-center rounded-md transition-colors hover:text-orange-400"
                >
                  <HomeIcon className="h-6 w-6" />
                  <span className="sr-only">Início</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Início</TooltipContent>
            </Tooltip>

            {/* <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/home"
                  className="flex h-9 w-9 items-center justify-center rounded-md transition-colors hover:text-orange-400"
                >
                  <LayoutDashboard className="h-6 w-6" />
                  <span className="sr-only">Dashboard</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Dashboard</TooltipContent>
            </Tooltip> */}

            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/pops"
                  className="flex h-9 w-9 items-center justify-center rounded-md transition-colors hover:text-orange-400"
                >
                  <FileMinus2 className="h-6 w-6" />
                  <span className="sr-only">POPs</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">POPs</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/cshub-calc"
                  target="blank"
                  className="flex h-9 w-9 items-center justify-center rounded-md transition-colors hover:text-orange-400"
                >
                  <CalculatorIcon className="h-6 w-6" />
                  <span className="sr-only">CSHUB CALC</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">CSHUB CALC</TooltipContent>
            </Tooltip>

            <div className="mt-auto pb-4">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="/"
                    className="flex h-9 w-9 items-center justify-center rounded-md transition-colors hover:text-orange-400"
                  >
                    <LogOutIcon className="h-6 w-6" />
                    <span className="sr-only">Sair</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">Sair</TooltipContent>
              </Tooltip>
            </div>
          </TooltipProvider>
        </nav>
      </aside>

      {/* Mobile Sidebar */}
      <div className="sm:hidden flex flex-col">
        <header className="sticky top-0 z-30 flex h-14 items-center px-4 border-b bg-dark text-white">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" className="hover:bg-orange-400 bg-transparent">
                <MenuIcon className="w-5 h-5" />
                <span className="sr-only">Abrir</span>
              </Button>
            </SheetTrigger>

            <SheetContent side="left" className="bg-black text-white w-64">
              <nav className="grid gap-6 text-lg font-medium p-4">
                {/* <Link
                  href="/home"
                  className="flex h-10 w-10 bg-primary rounded-full justify-center items-center hover:text-orange-400"
                  prefetch={false}
                >
                  <Box className="h-5 w-5" />
                  <span className="sr-only">Logo</span>
                </Link> */}

                <Link
                  href="/home"
                  className="flex items-center gap-4 px-2.5 hover:text-orange-400"
                  prefetch={false}
                >
                  <House className="h-5 w-5" />
                  Início
                </Link>

                {/* <Link
                  href="/home"
                  className="flex items-center gap-4 px-2.5 hover:text-orange-400"
                  prefetch={false}
                >
                  <LayoutDashboardIcon className="h-5 w-5" />
                  Dashboard
                </Link> */}

                <Link
                  href="/pops"
                  className="flex items-center gap-4 px-2.5 hover:text-orange-400"
                  prefetch={false}
                >
                  <FileMinus2 className="h-5 w-5" />
                  POPs
                </Link>
                
                <Link
                  href="/cshub-calc"
                  target="blank"
                  className="flex items-center gap-4 px-2.5 hover:text-orange-400"
                  prefetch={false}
                >
                  <CalculatorIcon className="h-5 w-5" />
                  CSHUB CALC
                </Link>

                <Link
                  href="/"
                  className="flex items-center gap-4 px-2.5 hover:text-orange-400"
                  prefetch={false}
                >
                  <LogOutIcon className="h-5 w-5" />
                  Sair
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <h2 className="ml-4 font-semibold text-white">CSHUB</h2>
        </header>
      </div>
    </div>
  );
}
