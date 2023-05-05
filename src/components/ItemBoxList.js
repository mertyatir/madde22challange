import React from "react"
import ItemBox from "./ItemBox"
import eventImageLarge1 from "../assets/EventImageLarge1.png"
import eventImageLarge2 from "../assets/EventImageLarge2.png"
import eventImageLarge3 from "../assets/EventImageLarge3.png"

function ItemBoxList() {
  let items = [
    {
      title: "BKM Yaz Etkinlikleri: Zengin Mutfağı",
      infoText: `1978 yılında ilk kez İstanbul Şehir Tiyatrolarında bu oyunda aşçı
            Lütfü Usta’yı canlandıran Şener Şen, 40 yıl aradan sonra aynı rolde
            ve genç bir.... Detaylı Bilgi`,
      img: eventImageLarge1,
    },
    {
      title: "Yasemin Sakallıoğlu",
      infoText: `1978 yılında ilk kez İstanbul Şehir Tiyatrolarında bu oyunda aşçı
            Lütfü Usta’yı canlandıran Şener Şen, 40 yıl aradan sonra aynı rolde
            ve genç bir.... Detaylı Bilgi`,
      img: eventImageLarge2,
    },
    {
      title: "Sinema Keyfi: Rifkin’s Festival",
      infoText: `1978 yılında ilk kez İstanbul Şehir Tiyatrolarında bu oyunda aşçı
            Lütfü Usta’yı canlandıran Şener Şen, 40 yıl aradan sonra aynı rolde
            ve genç bir.... Detaylı Bilgi`,
      img: eventImageLarge3,
    },
  ]

  items = items.concat(items)

  return (
    <div className="itemBoxListContainer">
      {items.map((item) => (
        <ItemBox title={item.title} infoText={item.infoText} img={item.img} />
      ))}
    </div>
  )
}

export default ItemBoxList
