import React, { useState } from "react";

function Add() {
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [category, setCategory] = useState("");
  const [info, setInfo] = useState("");
  const [Price, setPrice] = useState("");

  const SendingData = (e) => {
    e.preventDefault();

    const newData = {
      name,
      img,
      category,
      info,
      Price,
    };

    fetch("http://localhost:3000/products", {
      method: "POST",
      body: JSON.stringify(newData),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then(() => {
        alert("Mahsulot muvaffaqiyatli qo‘shildi!");
        window.location.assign("/");
      });
  };

  return (
    <div className="addd">
      <section className="Add">
        <h1>Maxsulolarni Qoshish</h1>
      </section>

      <section className="add-bottom">
        <div className="add-left">
          <h4>Maxsulot ko’rish</h4>
          {img && <img src={img} alt="Preview" width={200} />}
        </div>

        <form onSubmit={SendingData}>
          <div className="add-right">
            <div className="add-input">
              <div className="label-box">
                <label>Rasm havolasi</label>
              </div>
              <input
                value={img}
                onChange={(e) => setImg(e.target.value)}
                type="text"
                placeholder="rasmni havolasini qo’ying"
              />
            </div>

            <div className="add-input">
              <div className="label-box">
                <label>Maxsulot nomi</label>
              </div>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Maxsulot nomini kiriting"
              />
            </div>

            <div className="add-input">
              <div className="label-box">
                <label>Maxsulot Info haqida batafsil</label>
              </div>
              <input
                value={info}
                onChange={(e) => setInfo(e.target.value)}
                type="text"
                placeholder="Maxsulot haqida batafsil"
              />
            </div>

            <div className="add-input">
              <div className="label-box">
                <label>Maxsulot narxi</label>
              </div>
              <div className="aib">
                <input
                  value={Price}
                  onChange={(e) => setPrice(e.target.value)}
                  type="text"
                  placeholder="Price"
                />
              </div>
            </div>

            <button type="submit">Maxsulot Qoshish</button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Add;
