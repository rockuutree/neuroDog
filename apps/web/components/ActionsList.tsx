import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export function ActionsList() {
  return (
    <div className="space-y-4">
      <div className="flex items-center border border-border/40 py-2 px-2 rounded-md ">
        <Avatar className="h-9 w-9">
          <AvatarFallback>🧠</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">{`"Listening to your brain..."`}</p>
          <p className="text-sm text-muted-foreground">Dispatch Command</p>
        </div>
      </div>
      <div className="flex items-center border border-border/40 py-2 px-2 rounded-md">
        <Avatar className="flex h-9 w-9 items-center  justify-center space-y-0">
          <AvatarFallback>🐒</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">{`"Sit"`}</p>
          <p className="text-sm text-muted-foreground">Voice Command</p>
        </div>
      </div>
      <div className="flex items-center border border-border/40 py-2 px-2 rounded-md">
        <Avatar className="h-9 w-9">
          <AvatarFallback>🐒</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">{`"Sit"`}</p>
          <p className="text-sm text-muted-foreground">Voice Command</p>
        </div>
      </div>
      <div className="flex items-center border border-border/40 py-2 px-2 rounded-md">
        <Avatar className="h-9 w-9">
          <AvatarFallback>🙇‍♂️</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">{`"Bow"`}</p>
          <p className="text-sm text-muted-foreground">Voice Command</p>
        </div>
      </div>
      <div className="flex items-center border border-border/40 py-2 px-2 rounded-md">
        <Avatar className="h-9 w-9">
          <AvatarImage alt="Avatar" />
          <AvatarFallback>🐥</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">{`"Stand"`}</p>
          <p className="text-sm text-muted-foreground">Voice Command</p>
        </div>
      </div>
    </div>
  );
}
