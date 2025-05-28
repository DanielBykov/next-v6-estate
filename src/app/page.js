import {properties, propsWithPhotos} from "@/app/mockPropList";
import PropList from "@/app/_UI/PropList";

export default function Home() {
  return (
    <div className="">
      <PropList list={propsWithPhotos} />
    </div>
  );
}
