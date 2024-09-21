function ProductCard(props) {
  return (
    <div
      {...props}
      className={`product-row-item w-full group rounded overflow-hidden ${
        props.className || "bg-[#0B0E12]"
      } border border-[#3C3E42]`}
    >
      <div className="w-full  p-2.5 flex rtl:space-x-reverse space-x-4 items-center ">
        <div className="w-[160px] h-[126px] relative rounded overflow-hidden">
          <h1>Product Card</h1>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
