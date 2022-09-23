import React, { useState, useEffect } from "react";
import { fabric } from "fabric";
import data from "../data.json";
import { useIndexedDB } from "react-indexed-db";
const TemplateOne = () => {
  const { add } = useIndexedDB("Template Data");
  const { getByID } = useIndexedDB("Template Data");
  const [localData, setLocalData] = useState("");
  const [template, setTemplate] = useState("");
  const [fabricData, setFabricData] = useState({
    item: {
      data: {},
      index: {},
    },
    quantity: {
      data: {},
      index: {},
    },
    price: {
      data: {},
      index: {},
    },
    baseAmt: {
      data: {},
      index: {},
    },
  });
  const [preview, setPreview] = useState({});
  const [newDesign, setNewDesign] = useState({});
  useEffect(() => {
    setTemplate(renderFrabicCanvas);
  }, []);
  console.log("template console temp2", JSON.stringify(template));
  useEffect(() => {
    console.log("preview.data", preview);
    if (preview && preview.length > 0) {
      getData();
    }
  }, [fabricData, preview]);
  useEffect(() => {
    if (Object.keys(newDesign).length > 0) {
      initCanvas();
    }
  }, [newDesign]);

  const getData = () => {
    let index = fabricData.price.index;

    for (let i = 1; i < data.itemsTwo.length; i++) {
      let modItem = { ...fabricData.item.data };
      modItem.text = data.itemsTwo[i].name;
      console.log("i><><<><><><><><><><>", i);
      modItem.top += i * 35;
      let modItemDetails = preview;
      console.log("index value 1", index + 1, modItem.text, modItem.top);
      modItemDetails.splice(index + 1, 0, modItem);
      index += 1;

      let modQuantity = { ...fabricData.quantity.data };
      modQuantity.text = data.itemsTwo[i].quantity;
      console.log("i><><<><><><><><><><>", i);
      modQuantity.top += i * 35;
      let modQtyDetails = preview;
      console.log("i><><<><><><><><><><>", i);
      console.log(
        "index value 2",
        index + 1,
        modQuantity.text,
        modQuantity.top
      );
      modQtyDetails.splice(index + 1, 0, modQuantity);
      index += 1;

      let modPrice = { ...fabricData.price.data };
      modPrice.text = data.itemsTwo[i].Price;
      console.log("i><><<><><><><><><><>", i);
      modPrice.top += i * 35;
      let modPriceDetails = preview;
      console.log("i><><<><><><><><><><>", i);
      console.log("index value 3", index + 1, modPrice.text, modPrice.top);
      modPriceDetails.splice(index + 1, 0, modPrice);
      index = index + 1;

      let modAmt = { ...fabricData.baseAmt.data };
      modAmt.text = data.itemsTwo[i].baseAmt;
      console.log("i><><<><><><><><><><>", i);
      modAmt.top += i * 35;
      let modAmtDetails = preview;
      console.log("i><><<><><><><><><><>", i);
      //   console.log("index value 3", index + 1, modPrice.text, modPrice.top);
      modAmtDetails.splice(index + 1, 0, modAmt);
      index = index + 1;

      let modDetails = modPriceDetails;
      let datas = JSON.stringify(template);
      console.log("template  data /,.,./,.,///", datas);

      let newData = JSON.parse(datas);

      newData.objects = modDetails;

      let newDesignData = JSON.stringify(newData);
      console.log("newDEsignDAta", newDesignData);
      setNewDesign(newDesignData);
    }
  };
  let fabricCavas;
  const renderFrabicCanvas = () => {
    fabricCavas = new fabric.Canvas("canvasnew", {
      height: 800,
      width: 600,
      backgroundColor: "#F2F3F4",
    });

    let textHeader = new fabric.Textbox("Organization Name And Address", {
      width: 300,
      left: 145,
      top: 10,
      fontSize: 17,
      textAlign: "center",
      fill: "red",
    });
    let phoneNo = new fabric.Textbox("Phone No:", {
      width: 100,
      left: 230,
      top: 80,
      fontSize: 17,
    });
    let phoneNoData = new fabric.Textbox("phone no", {
      width: 100,
      left: 310,
      top: 80,
      fontSize: 17,
      fill: "red",
    });
    let SACCode = new fabric.Textbox("SAC Code:", {
      width: 100,
      left: 230,
      top: 100,
      fontSize: 17,
    });
    let SACCodeData = new fabric.Textbox("sacCodeData", {
      width: 100,
      left: 315,
      top: 100,
      fontSize: 17,
      fill: "red",
    });
    let billNo = new fabric.Textbox("Bill No:", {
      width: 100,
      left: 60,
      top: 170,
      fontSize: 17,
    });
    let billNoData = new fabric.Textbox("Bill Data", {
      width: 100,
      left: 120,
      top: 170,
      fontSize: 17,
      fill: "red",
    });
    let billDate = new fabric.Textbox("Bill Date:", {
      width: 100,
      left: 60,
      top: 190,
      fontSize: 17,
    });
    let billDateData = new fabric.Textbox("Bill Date Data:", {
      width: 190,
      left: 130,
      top: 190,
      fontSize: 17,
      fill: "red",
    });
    let printTime = new fabric.Textbox("Print Time:", {
      width: 190,
      left: 60,
      top: 210,
      fontSize: 17,
    });
    let printTimeData = new fabric.Textbox("Print Time Data", {
      width: 220,
      left: 140,
      top: 210,
      fontSize: 17,
      fill: "red",
    });
    let Cashier = new fabric.Textbox("Cashier:", {
      width: 190,
      left: 60,
      top: 230,
      fontSize: 17,
    });
    let CashierData = new fabric.Textbox("CashierData", {
      width: 220,
      left: 120,
      top: 230,
      fontSize: 17,
      fill: "red",
    });
    let orderNo = new fabric.Textbox("Order No:", {
      width: 190,
      left: 60,
      top: 250,
      fontSize: 17,
    });
    let orderData = new fabric.Textbox("OrderData", {
      width: 220,
      left: 130,
      top: 250,
      fontSize: 17,
      fill: "red",
    });
    let Zomato = new fabric.Textbox("ZOMATO", {
      width: 190,
      left: 270,
      top: 270,
      fontSize: 17,
      underline: true,
    });
    let OrderNoNew = new fabric.Textbox("Order No:", {
      width: 190,
      left: 250,
      top: 300,
      fontSize: 20,
    });
    let OrderNoNewData = new fabric.Textbox("No", {
      width: 90,
      left: 335,
      top: 300,
      fontSize: 20,
      fill: "red",
    });
    let linesOne = new fabric.Line([0, 20, 460, 20], {
      width: 550,
      left: 75,
      top: 350,
      fontSize: 5,
      stroke: "black",
    });
    let linesThree = new fabric.Line([1, 60, 1, 20], {
      width: 10,
      left: 75,
      top: 350,
      fontSize: 5,
      stroke: "black",
    });
    let orderInstruction = new fabric.Textbox("Order Instruction", {
      width: 390,
      left: 100,
      top: 360,
      fontSize: 17,
      fill: "red",
      textAlign: "center",
    });
    let linesFour = new fabric.Line([1, 60, 1, 20], {
      width: 10,
      left: 535,
      top: 350,
      fontSize: 5,
      stroke: "black",
    });
    let linesTwo = new fabric.Line([0, 20, 460, 20], {
      width: 550,
      left: 75,
      top: 390,
      fontSize: 5,
      stroke: "black",
    });
    let linesFive = new fabric.Line([0, 20, 45, 20], {
      width: 550,
      left: 75,
      top: 400,
      fontSize: 5,
      stroke: "black",
    });
    let qty = new fabric.Textbox("Qty", {
      width: 90,
      left: 50,
      top: 405,
      fontSize: 17,
      textAlign: "center",
    });
    let linesSix = new fabric.Line([0, 20, 45, 20], {
      width: 550,
      left: 75,
      top: 430,
      fontSize: 5,
      stroke: "black",
    });

    let linesSeven = new fabric.Line([0, 20, 115, 20], {
      width: 550,
      left: 160,
      top: 400,
      fontSize: 5,
      stroke: "black",
    });
    let itemName = new fabric.Textbox("Item Name", {
      width: 100,
      left: 160,
      top: 405,
      fontSize: 17,
      textAlign: "center",
    });
    let linesEight = new fabric.Line([0, 20, 115, 20], {
      width: 550,
      left: 160,
      top: 430,
      fontSize: 5,
      stroke: "black",
    });
    let linesNine = new fabric.Line([0, 20, 50, 20], {
      width: 550,
      left: 320,
      top: 400,
      fontSize: 5,
      stroke: "black",
    });
    let rate = new fabric.Textbox("Rate", {
      width: 90,
      left: 300,
      top: 405,
      fontSize: 17,
      textAlign: "center",
    });
    let linesTen = new fabric.Line([0, 20, 50, 20], {
      width: 550,
      left: 320,
      top: 430,
      fontSize: 5,
      stroke: "black",
    });
    let lineselEleven = new fabric.Line([0, 20, 120, 20], {
      width: 550,
      left: 395,
      top: 400,
      fontSize: 5,
      stroke: "black",
    });
    let BasicAmt = new fabric.Textbox("Basic Amt", {
      width: 90,
      left: 395,
      top: 405,
      fontSize: 17,
      textAlign: "center",
    });
    let lineselTwelve = new fabric.Line([0, 20, 120, 20], {
      width: 550,
      left: 395,
      top: 430,
      fontSize: 5,
      stroke: "black",
    });
    let qtyData = new fabric.Textbox("QtyNO", {
      width: 90,
      left: 50,
      top: 440,
      fontSize: 13,
      fill: "red",
      textAlign: "center",
    });
    let itemData = new fabric.Textbox("item Data", {
      width: 100,
      left: 160,
      top: 440,
      fontSize: 13,
      fill: "red",
      textAlign: "center",
    });
    let rateData = new fabric.Textbox("rate Data", {
      width: 90,
      left: 300,
      top: 440,
      fontSize: 13,
      fill: "red",
      textAlign: "center",
    });
    let AmtData = new fabric.Textbox("amt Data", {
      width: 90,
      left: 395,
      top: 440,
      fontSize: 13,
      fill: "red",
      textAlign: "center",
    });
    let linesEnd = new fabric.Line([0, 20, 500, 20], {
      width: 550,
      left: 55,
      top: 550,
      fontSize: 5,
      stroke: "black",
    });
    let BasicAmount = new fabric.Textbox("Basic Amt:", {
      width: 100,
      left: 230,
      top: 570,
      fontSize: 17,
    });
    let BasicAmountTotal = new fabric.Textbox("Total", {
      width: 100,
      left: 400,
      top: 570,
      fill: "red",
      fontSize: 17,
    });
    let Discount = new fabric.Textbox("Discount 52.4%:", {
      width: 120,
      left: 220,
      top: 600,
      fontSize: 17,
      textAlign: "right",
    });
    let DiscountAmt = new fabric.Textbox("Discount amt", {
      width: 120,
      left: 345,
      top: 600,
      fontSize: 14,
      fill: "red",
      textAlign: "left",
    });
    let DiscountNew = new fabric.Textbox("Discount 45.5%:", {
      width: 120,
      left: 220,
      top: 620,
      fontSize: 17,
      textAlign: "right",
    });
    let DiscountNewAmt = new fabric.Textbox("Discount new amt", {
      width: 120,
      left: 345,
      top: 620,
      fontSize: 14,
      fill: "red",
      textAlign: "left",
    });
    let DiscountZero = new fabric.Textbox("Discount 0%:", {
      width: 120,
      left: 220,
      top: 640,
      fontSize: 17,
      textAlign: "right",
    });
    let DiscountZeroAmt = new fabric.Textbox("Discount 0 amt", {
      width: 120,
      left: 345,
      top: 640,
      fontSize: 14,
      fill: "red",
      textAlign: "left",
    });
    let linestotone = new fabric.Line([0, 20, 460, 20], {
      width: 550,
      left: 75,
      top: 680,
      fontSize: 5,
      stroke: "black",
    });
    let linestotThree = new fabric.Line([1, 60, 1, 20], {
      width: 10,
      left: 75,
      top: 680,
      fontSize: 5,
      stroke: "black",
    });
    let grandTotal = new fabric.Textbox("Grand Total:", {
      width: 390,
      left: 100,
      top: 690,
      fontSize: 17,
      textAlign: "center",
    });
    let Total = new fabric.Textbox("Grand Total", {
      width: 100,
      left: 350,
      top: 690,
      fill: "red",
      fontSize: 15,
    });
    let linestotFour = new fabric.Line([1, 60, 1, 20], {
      width: 10,
      left: 535,
      top: 680,
      fontSize: 5,
      stroke: "black",
    });
    let linestotTwo = new fabric.Line([0, 20, 460, 20], {
      width: 550,
      left: 75,
      top: 720,
      fontSize: 5,
      stroke: "black",
    });
    let textFooter = new fabric.Textbox("Bill Paid", {
      width: 310,
      top: 725,
      left: 145,
      fontSize: 15,
      textAlign: "center",
    });
    fabricCavas.add(
      textHeader,
      phoneNo,
      phoneNoData,
      SACCode,
      SACCodeData,
      billNo,
      billNoData,
      billDate,
      billDateData,
      printTime,
      printTimeData,
      Cashier,
      CashierData,
      orderNo,
      orderData,
      Zomato,
      OrderNoNew,
      OrderNoNewData,
      linesOne,
      linesThree,
      orderInstruction,
      linesFour,
      linesTwo,
      linesFive,
      qty,
      linesSix,
      linesSeven,
      itemName,
      linesEight,
      linesNine,
      rate,
      linesTen,
      lineselEleven,
      BasicAmt,
      lineselTwelve,
      qtyData,
      itemData,
      rateData,
      AmtData,
      linesEnd,
      BasicAmount,
      BasicAmountTotal,
      Discount,
      DiscountAmt,
      DiscountNew,
      DiscountNewAmt,
      DiscountZero,
      DiscountZeroAmt,
      linestotone,
      linestotThree,
      grandTotal,
      Total,
      linestotFour,
      linestotTwo,
      textFooter
    );
    return fabricCavas;
  };

  const clickHandlerFuntion = () => {
    if (localData) {
      let newData = JSON.parse(localData.data);

      let billData = newData.objects;
      let details = {
        item: {
          data: {},
          index: {},
        },
        quantity: {
          data: {},
          index: {},
        },
        price: {
          data: {},
          index: {},
        },
        baseAmt: {
          data: {},
          index: {},
        },
      };

      for (let i = 0; i < billData.length; i++) {
        if (billData[i].text === "Organization Name And Address") {
          billData[i].text = data.orgnametwo;
        }
        if (billData[i].text === "phone no") {
          billData[i].text = data.phoneno;
        }
        if (billData[i].text === "sacCodeData") {
          billData[i].text = data.SACCode;
        }
        if (billData[i].text === "Bill Data") {
          billData[i].text = data.billnotwo;
        }
        if (billData[i].text === "Bill Date Data:") {
          billData[i].text = data.billDate;
        }
        if (billData[i].text === "Print Time Data") {
          billData[i].text = data.printTime;
        }
        if (billData[i].text === "CashierData") {
          billData[i].text = data.cashier;
        }
        if (billData[i].text === "OrderData") {
          billData[i].text = data.orderNo;
        }
        if (billData[i].text === "No") {
          billData[i].text = data.orderNoNew;
        }
        if (billData[i].text === "Order Instruction") {
          billData[i].text = data.orderInstruction;
        }
        if (billData[i].text === "item Data") {
          details.item.data = { ...billData[i] };
          billData[i].text = data.itemsTwo[0].name;
          details.item.index = i;
        }

        if (billData[i].text === "QtyNO") {
          details.quantity.data = { ...billData[i] };
          billData[i].text = data.itemsTwo[0].quantity;
          details.quantity.index = i;
        }

        if (billData[i].text === "rate Data") {
          details.price.data = { ...billData[i] };
          details.price.index = i;
          billData[i].text = data.itemsTwo[0].Price;
        }
        if (billData[i].text === "amt Data") {
          details.baseAmt.data = { ...billData[i] };
          details.baseAmt.index = i;
          billData[i].text = data.itemsTwo[0].baseAmt;
          console.log("billData[i].text", billData[i].text);
        }

        if (billData[i].text === "Total") {
          billData[i].text = data.gross;
        }
        if (billData[i].text === "Discount amt") {
          billData[i].text = data.discountOne;
        }
        if (billData[i].text === "Discount new amt") {
          billData[i].text = data.discountTwo;
        }
        if (billData[i].text === "Discount 0 amt") {
          billData[i].text = data.discountThree;
        }
        // if (billData[i].text === "SGSTValue : ") {
        //   billData[i].text = data.SGSTPercentage;
        // }
        // if (billData[i].text === "SGSTValue : ") {
        //   billData[i].text = data.SGSTPercentage;
        // }
        // if (billData[i].text === "CGSTValue : ") {
        //   billData[i].text = data.CGSTPercentage;
        // }
        // if (billData[i].text === "SGSTTotal") {
        //   billData[i].text = data.SGSTValue;
        // }
        // if (billData[i].text === "CGSTTotal") {
        //   billData[i].text = data.CGSTValue;
        // }
        if (billData[i].text === "Grand Total") {
          billData[i].text = data.grandTotal;
        }
      }
      console.log("billData", billData);
      setFabricData(details);
      setPreview(billData);
    }
  };

  console.log("Preview", preview);
  const initCanvas = () => {
    let initCanvas = new fabric.Canvas("canvasFour", {
      height: 800,
      width: 600,
      backgroundColor: "#F2F3F4",
    });
    initCanvas.loadFromJSON(newDesign);
    return initCanvas;
  };
  const handleClick = () => {
    add({ data: JSON.stringify(template) }, 2).then(
      (event) => {
        console.log("ID Generated: ", event);
      },
      (error) => {
        console.log(error);
      }
    );
  };
  const getHandleClick = () => {
    getByID(2).then((personFromDB) => {
      setLocalData(personFromDB);
    });
  };
  console.log("local data ", localData.data);
  return (
    <div>
      <button className="btn btn-success mb-2" onClick={handleClick}>
        Add Template
      </button>
      <canvas id="canvasnew" />
      <button className="btn btn-success mt-2" onClick={getHandleClick}>
        Get Template
      </button>
      <div>
        <button
          className="btn btn-info mt-2"
          onClick={() => clickHandlerFuntion()}
          disabled={!localData}
        >
          Preview
        </button>
      </div>
      <canvas id="canvasFour" className="mt-3"></canvas>
    </div>
  );
};

export default TemplateOne;
