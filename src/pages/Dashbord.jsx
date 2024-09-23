import DesktopLayout from "../components/ui/DesktopLayout";
import DesktopMenu from "../components/ui/DesktopMenu";
import DesktopNav from "../components/ui/DesktopNav";
import TreeView from "../components/ui/TreeView";
import ToolBar from "../components/ui/ToolBar";
import MobileLayout from "../components/ui/MobileLayout";

function Dashbord() {
  return (
    <div>
      <MobileLayout />
      <div className="hidden md:flex fixed">
        <DesktopMenu />
        <div className="w-full">
          <DesktopNav />
          <ToolBar />
          <div className="flex">
            <TreeView />
            <DesktopLayout />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashbord;
