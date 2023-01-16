import EquipmentCard from "../components/ProductCard/ProductCard";
import monitorImg from "../public/images/monitorProductImg.png";
import { products } from "../constants/products";

const Equipment = () => {
  return (
    <main>
      <section>
        <div className="max-w-[1204px] w-full">

        </div>
      </section>
      <section>
        <div className="max-w-[1204px] w-full">
          {
            products.map(el => {
              return (
                <EquipmentCard key={el.id} image={el.image} title={el.title} price={el.price} />
              )
            })
          }
        </div>
      </section>
    </main>
  )
}

export default Equipment