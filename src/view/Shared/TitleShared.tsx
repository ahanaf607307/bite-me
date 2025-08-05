import { cn } from "@/lib/utils";
interface TitleType {
  title: string;
  className: string;
}

const TitleShared = ({ title, className }: TitleType) => {
  return (
    <div>
      <h1 className={cn("text-xl md:text-3xl ")}>{title}</h1>
    </div>
  );
};

export default TitleShared;
