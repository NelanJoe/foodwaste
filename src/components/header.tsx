import { Link } from "react-router";
import { BellIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="max-w-md mx-auto px-4 py-10">
      <nav className="flex items-center justify-between">
        <Link to="/" className="font-semibold text-xl ">
          Food Waste
        </Link>
        <div className="flex items-center gap-4">
          <Button variant="outline" asChild>
            <Link to="/notifications" className="shadow p-2 rounded-md">
              <BellIcon className="size-3.5" />
            </Link>
          </Button>
          <Link to="/">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </Link>
        </div>
      </nav>
    </header>
  );
}
