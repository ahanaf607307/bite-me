import { cn } from "@/lib/utils";
interface TitleType {
  title: string;
  className: string;
}

const TitleShared = ({ title, className }: TitleType) => {
  return (
    <div>
      <h1 className={cn("text-xl md:text-3xl pb-4 md:pb-6")}>{title}</h1>
    </div>
  );
};

export default TitleShared;
