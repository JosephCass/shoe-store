export default function Products() {
  let imageLinks = [
    "https://images.footlocker.com/is/image/EBFL2/N8490002?wid=267&hei=267&fmt=png-alpha",
    "https://images.footlocker.com/is/image/EBFL2/ML574EVE?wid=267&hei=267&fmt=png-alpha",
    "https://images.footlocker.com/is/image/EBFL2/X2836001?wid=267&hei=267&fmt=png-alpha",
    "https://images.footlocker.com/is/image/EBFL2/10061?wid=267&hei=267&fmt=png-alpha",
    "https://images.footlocker.com/is/image/EBFL2/W2288111?wid=267&hei=267&fmt=png-alpha",
    "https://images.footlocker.com/is/image/EBFL2/5950CHE?wid=267&hei=267&fmt=png-alpha",
    "https://images.footlocker.com/is/image/EBFL2/14571164?wid=267&hei=267&fmt=png-alpha",
    "https://images.footlocker.com/is/image/EBFL2/D1200016?wid=267&hei=267&fmt=png-alpha",
    "https://images.footlocker.com/is/image/EBFL2/24453004?wid=267&hei=267&fmt=png-alpha",
    "https://images.footlocker.com/is/image/EBFL2/54724201?wid=267&hei=267&fmt=png-alpha",
  ];

  return (
    <div className="products">
      <div className="shoe-product">
        <img
          className="shoe-image"
          src="https://images.footlocker.com/is/image/EBFL2/N8490002?wid=267&hei=267&fmt=png-alpha"
          alt="Black and white nike shoe"
        />
        <div className="shoe-text-container">
          <p className="shoe-title">Nike Air Max 90</p>
          <p className="shoe-price">$130.00</p>
        </div>
        <a className="shoe-add">Add To Cart</a>
      </div>
      <div className="shoe-product">
        <img
          className="shoe-image"
          src="https://images.footlocker.com/is/image/EBFL2/ML574EVE?wid=267&hei=267&fmt=png-alpha"
          alt="Black New balance shoes"
        />
        <div className="shoe-text-container">
          <p className="shoe-title">New Balance 574 Core</p>
          <p className="shoe-price">$85.00</p>
        </div>
        <a className="shoe-add">Add To Cart</a>
      </div>
      <div className="shoe-product">
        <img
          className="shoe-image"
          src="https://images.footlocker.com/is/image/EBFL2/X2836001?wid=267&hei=267&fmt=png-alpha"
          alt="Black Jordan shoes"
        />
        <div className="shoe-text-container">
          <p className="shoe-title">Jordan Retro 6</p>
          <p className="shoe-price">$200.00</p>
        </div>
        <a className="shoe-add">Add To Cart</a>
      </div>
      <div className="shoe-product">
        <img
          className="shoe-image"
          src="https://images.footlocker.com/is/image/EBFL2/10061?wid=267&hei=267&fmt=png-alpha"
          alt="Tan Timberland Boots"
          loading="lazy"
        />
        <div className="shoe-text-container">
          <p className="shoe-title">Timberland 6" Premium Waterproof Boots</p>
          <p className="shoe-price">$168.00</p>
        </div>
        <a className="shoe-add">Add To Cart</a>
      </div>
      <div className="shoe-product">
        <img
          className="shoe-image"
          src="https://images.footlocker.com/is/image/EBFL2/W2288111?wid=267&hei=267&fmt=png-alpha"
          alt="White nike shoes"
          loading="lazy"
        />
        <div className="shoe-text-container">
          <p className="shoe-title">Nike Air Force 1 '07 LE</p>
          <p className="shoe-price">$110.00</p>
        </div>
        <a className="shoe-add">Add To Cart</a>
      </div>
      <div className="shoe-product">
        <img
          className="shoe-image"
          src="https://images.footlocker.com/is/image/EBFL2/5950CHE?wid=267&hei=267&fmt=png-alpha"
          alt="Chestnut Brown slippers"
          loading="lazy"
        />
        <div className="shoe-text-container">
          <p className="shoe-title">UGG Tasman</p>
          <p className="shoe-price">$100.00</p>
        </div>
        <a className="shoe-add">Add To Cart</a>
      </div>
      <div className="shoe-product">
        <img
          className="shoe-image"
          src="https://images.footlocker.com/is/image/EBFL2/14571164?wid=267&hei=267&fmt=png-alpha"
          alt="White and blue jordan"
          loading="lazy"
        />
        <div className="shoe-text-container">
          <p className="shoe-title">Jordan Retro 13</p>
          <p className="shoe-price">$200.00</p>
        </div>

        <a className="shoe-add">Add To Cart</a>
      </div>
      <div className="shoe-product">
        <img
          className="shoe-image"
          src="https://images.footlocker.com/is/image/EBFL2/D1200016?wid=267&hei=267&fmt=png-alpha"
          alt="White and blue jordan"
          loading="lazy"
        />

        <div className="shoe-text-container">
          <p className="shoe-title">Jordan AJ 1 Mid SE</p>
          <p className="shoe-price">$135.00</p>
        </div>
        <a className="shoe-add">Add To Cart</a>
      </div>
      <div className="shoe-product">
        <img
          className="shoe-image"
          src="https://images.footlocker.com/is/image/EBFL2/24453004?wid=267&hei=267&fmt=png-alpha"
          alt="Black nike running shoes"
          loading="lazy"
        />
        <div className="shoe-text-container">
          <p className="shoe-title">Nike Air Vapormax Plus</p>
          <p className="shoe-price">$210.00</p>
        </div>
        <a className="shoe-add">Add To Cart</a>
      </div>
      <div className="shoe-product">
        <img
          className="shoe-image"
          src="https://images.footlocker.com/is/image/EBFL2/54724201?wid=267&hei=267&fmt=png-alpha"
          alt="Red, white and tan jordan sneakers"
          loading="lazy"
        />
        <div className="shoe-text-container">
          <p className="shoe-title">Jordan AJ 1 Mid</p>
          <p className="shoe-price">$120.00</p>
        </div>
        <a className="shoe-add">Add To Cart</a>
      </div>
    </div>
  );
}
