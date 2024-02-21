import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export function AvailableActions() {
  return (
    <div className="space-y-8">
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarFallback>🙇‍♂️</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">{`"Bow for me?"`}</p>
          <p className="text-sm text-muted-foreground">
            The dog will bow for you.
          </p>
        </div>
        <div className="ml-auto font-medium"></div>
      </div>
      <div className="flex items-center">
        <Avatar className="flex h-9 w-9 items-center justify-center space-y-0 border">
          <AvatarFallback>🐒</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">{`"Can you sit?"`}</p>
          <p className="text-sm text-muted-foreground">
            The dog will sit for you.
          </p>
        </div>
        <div className="ml-auto font-medium"></div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarFallback>🐥</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">{`"Can you stand?"`}</p>
          <p className="text-sm text-muted-foreground">
            The dog will rise to its regular height.
          </p>
        </div>
        <div className="ml-auto font-medium"></div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarFallback>🧠</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">{`"Can you listen to my brain?"`}</p>
          <p className="text-sm text-muted-foreground">
            The dog will react to your brains neural activities.
          </p>
        </div>
        <div className="ml-auto font-medium"></div>
      </div>
    </div>
  );
}
