import {cn} from "@/lib/utils";

export const ScreenSize = ({cls, devMode}) => (
  devMode &&
  <div className={cn("absolute z-999", cls)}>
    <div className="absolute right-0 w-10 bg-zinc-400 text-center">XS</div>
    <div className="absolute right-0 hidden w-10 bg-amber-400 text-center sm:block">SM</div>
    <div className="absolute right-0 hidden w-10 bg-green-400 text-center md:block">MD</div>
    <div className="absolute right-0 hidden w-10 bg-sky-400 text-center lg:block">LG</div>
    <div className="absolute right-0 hidden w-10 bg-purple-400 text-center xl:block">XL</div>
    <div className="absolute right-0 hidden w-10 bg-rose-400 text-center 2xl:block">2XL</div>
  </div>
);
