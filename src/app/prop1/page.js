import PropList from "@/app/prop1/PropList";
import {propsWithPhotos} from "@/mockData/mockPropList";

export default function _1Col() {
  return (
    <div className="">
      <PropList list={propsWithPhotos} />
    </div>
  );
}
