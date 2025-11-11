import React from "react";
import Viewer360 from "../../components/overView/Viewer360";
import OverPlayGuide from "../../components/overView/OverPlayGuide";
import BottomMenu from "../../components/BottomMenu";


function OverViewPage() {

  const [overPlay, setOverPlay] = React.useState(true)

  const [openMenu, setOpenMenu] = React.useState(true)

  const handleTurnOffOverPlay = () => {
    return setOverPlay(false)
  }

  const handleOpenPopup = () => {
     return setOverPlay(true)
  }

  const handleToggleMenu = () => {
    return setOpenMenu(prev => !prev)
  }
  return (
    <div className="relative h-screen w-screen overflow-hidden react360-container">
      {/* viewer 360 */}
      <Viewer360 />

      {/* OverPlay  + Guilde*/}
      <OverPlayGuide overPlay={overPlay} onClose={handleTurnOffOverPlay}>

      </OverPlayGuide>

      {/* Menu container */}
      <BottomMenu openMenu={openMenu} onToggle={handleToggleMenu} overPlay={overPlay} onOpenPopup={handleOpenPopup} />

    </div>
  );
}

export default OverViewPage;
