import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import Image from "next/image";

function UserAvatar({
    name,
    image,
    className
} : {
    name?: string | null;
    image?: string | null;
    className?: string;
}) {
  return (

      <Avatar className={cn("bg-white text-black", className)}>
        {image && (
            <Image 
                src={image}
                alt={name || "Username"}
                className="rounded-full"
                width={40}
                height={40}
            />
        )}
        <AvatarFallback
            delayMs={1000}
            className="text-lg"
        >
            {name 
                ?.split(" ")
                .map((part) => part[0])
                .join("")
            }
        </AvatarFallback>
      </Avatar>

  );
}

export default UserAvatar;
