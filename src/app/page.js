import PropList from "@/_UI/PropList";
import {propsWithPhotos} from "@/mockData/mockPropList";

export default function Home() {
  return (
    <div className="">
      <PropList list={propsWithPhotos} />
    </div>
  );
}
