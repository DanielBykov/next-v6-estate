import PropertyCard from "@/app/prop1/[id]/PropCard";

const PropList = ({list}) => {
  return (
    <div className="grid gap-6 w-full justify-center">
      {list.map(item => <PropertyCard key={item.listingID} {...item} />)}
    </div>
  );
};

export default PropList;
