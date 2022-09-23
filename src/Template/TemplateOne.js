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
  });
  const [preview, setPreview] = useState({});
  const [newDesign, setNewDesign] = useState({});
  useEffect(() => {
    setTemplate(renderFrabicCanvas);
  }, []);
  console.log("template", template);
  console.log("template console", JSON.stringify(template));
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
  console.log("newDesign console", newDesign);
  const getData = () => {
    let index = fabricData.price.index;

    for (let i = 1; i < data.items.length; i++) {
      let modItem = { ...fabricData.item.data };
      modItem.text = data.items[i].name;
      console.log("i><><<><><><><><><><>", i);
      modItem.top += i * 25;
      let modItemDetails = preview;
      console.log("index value 1", index + 1, modItem.text, modItem.top);
      modItemDetails.splice(index + 1, 0, modItem);
      index += 1;

      let modQuantity = { ...fabricData.quantity.data };
      modQuantity.text = data.items[i].quantity;
      console.log("i><><<><><><><><><><>", i);
      modQuantity.top += i * 25;
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
      modPrice.text = data.items[i].Price;
      console.log("i><><<><><><><><><><>", i);
      modPrice.top += i * 25;
      let modPriceDetails = preview;
      console.log("i><><<><><><><><><><>", i);
      console.log("index value 3", index + 1, modPrice.text, modPrice.top);
      modPriceDetails.splice(index + 1, 0, modPrice);
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
    fabricCavas = new fabric.Canvas("canvas", {
      height: 650,
      width: 600,
      backgroundColor: "#F2F3F4",
    });
    let textHeader = new fabric.Textbox("Organization Name And Address", {
      width: 310,
      left: 145,
      top: 10,
      fontSize: 17,
      textAlign: "center",
      fill: "red",
    });
    let linesOne = new fabric.Line([0, 20, 500, 20], {
      width: 550,
      left: 55,
      top: 115,
      fontSize: 5,
      strokeDashArray: [5, 5],
      stroke: "black",
    });
    let textBillNo = new fabric.Textbox("BILL NO :  ", {
      width: 70,
      fontSize: 15,
      top: 125,
      left: 60,
    });
    let billNo = new fabric.Textbox("Number", {
      width: 70,
      fontSize: 15,
      top: 142,
      left: 56,
      fill: "red",
    });
    let textBillData = new fabric.Textbox("DATE :  ", {
      width: 70,
      fontSize: 15,
      top: 125,
      left: 200,
    });
    let billData = new fabric.Textbox("Date", {
      width: 70,
      fontSize: 15,
      top: 142,
      left: 200,
      fill: "red",
    });
    let textBillTime = new fabric.Textbox("BILL TIME : ", {
      width: 170,
      fontSize: 15,
      top: 170,
      left: 60,
    });
    let billTime = new fabric.Textbox("Time", {
      width: 170,
      fontSize: 15,
      top: 170,
      left: 145,
      fill: "red",
    });
    let textBillTable = new fabric.Textbox("TABLE : ", {
      width: 70,
      fontSize: 15,
      top: 170,
      left: 250,
    });
    let linesTwo = new fabric.Line([0, 20, 500, 20], {
      width: 550,
      left: 55,
      top: 200,
      fontSize: 5,
      strokeDashArray: [5, 5],
      stroke: "black",
    });
    let textBodyMenuItems = new fabric.Textbox("Menu Item", {
      width: 70,
      fontSize: 15,
      top: 215,
      left: 70,
    });
    let textBodyQty = new fabric.Textbox("Qty", {
      width: 70,
      fontSize: 15,
      top: 215,
      left: 400,
    });
    let textBodyAmount = new fabric.Textbox("Amount", {
      width: 70,
      fontSize: 15,
      top: 215,
      left: 470,
    });
    let linesThree = new fabric.Line([0, 20, 500, 20], {
      width: 550,
      left: 55,
      top: 250,
      fontSize: 5,
      strokeDashArray: [5, 5],
      stroke: "black",
    });

    let textBodyMenuItemsOne = new fabric.Textbox("Items 1", {
      width: 300,
      fontSize: 15,
      top: 270,
      left: 70,
      fill: "red",
    });
    let textBodyItemOneQty = new fabric.Textbox("Quantity Item1", {
      width: 40,
      fontSize: 15,
      top: 270,
      left: 410,
      fill: "red",
    });
    let textBodyItemOneAmount = new fabric.Textbox("Price 1", {
      width: 70,
      fontSize: 15,
      top: 270,
      left: 475,
      fill: "red",
    });

    let linesFour = new fabric.Line([0, 20, 120, 20], {
      width: 550,
      left: 400,
      top: 420,
      fontSize: 5,
      strokeDashArray: [5, 5],
      stroke: "black",
    });
    let textBodyGross = new fabric.Textbox("Gross : ", {
      width: 70,
      fontSize: 15,
      top: 440,
      left: 370,
    });
    let textBodyGrossTotal = new fabric.Textbox("Total", {
      width: 70,
      fontSize: 15,
      top: 440,
      left: 455,
      fill: "red",
    });
    let textBodySGST = new fabric.Textbox("SGST ", {
      width: 90,
      fontSize: 15,
      top: 460,
      left: 330,
    });
    let textBodySGSTPercentage = new fabric.Textbox("SGSTValue : ", {
      width: 90,
      fontSize: 15,
      top: 460,
      left: 372,
      fill: "red",
    });
    let textBodySGSTTotal = new fabric.Textbox("SGSTTotal", {
      width: 70,
      fontSize: 15,
      top: 460,
      left: 455,
      fill: "red",
    });
    let textBodyCGST = new fabric.Textbox("CGST ", {
      width: 90,
      fontSize: 15,
      top: 480,
      left: 330,
    });
    let textBodyCGSTPercentage = new fabric.Textbox("CGSTValue : ", {
      width: 90,
      fontSize: 15,
      top: 480,
      left: 372,
      fill: "red",
    });
    let textBodyCGSTTotal = new fabric.Textbox("CGSTTotal", {
      width: 70,
      fontSize: 15,
      top: 480,
      left: 455,
      fill: "red",
    });
    let linesFive = new fabric.Line([0, 20, 120, 20], {
      width: 550,
      left: 400,
      top: 520,
      fontSize: 5,
      strokeDashArray: [5, 5],
      stroke: "black",
    });
    let textBodyGrandTotal = new fabric.Textbox("Grand Total (Rounded)", {
      width: 300,
      fontSize: 15,
      top: 530,
      left: 70,
    });
    let textBodyTotalAmount = new fabric.Textbox("Total Price", {
      width: 70,
      fontSize: 15,
      top: 530,
      left: 445,
      fill: "red",
    });
    let linesSix = new fabric.Line([0, 20, 120, 20], {
      width: 550,
      left: 400,
      top: 560,
      fontSize: 5,
      strokeDashArray: [5, 5],
      stroke: "black",
    });
    let textFooter = new fabric.Textbox("Thank You Visit Again", {
      width: 310,
      top: 590,
      left: 145,
      fontSize: 20,
      textAlign: "center",
    });
    fabricCavas.add(
      textHeader,
      linesOne,
      textBillNo,
      billNo,
      textBillData,
      billData,
      textBillTime,
      billTime,
      textBillTable,
      linesTwo,
      textBodyMenuItems,
      textBodyQty,
      textBodyAmount,
      linesThree,
      textBodyMenuItemsOne,
      textBodyItemOneQty,
      textBodyItemOneAmount,
      linesFour,
      textBodyGross,
      textBodyGrossTotal,
      textBodySGST,
      textBodySGSTPercentage,
      textBodySGSTTotal,
      textBodyCGST,
      textBodyCGSTPercentage,
      textBodyCGSTTotal,
      linesFive,
      textBodyGrandTotal,
      textBodyTotalAmount,
      linesSix,
      textFooter
    );
    return fabricCavas;
  };

  const clickHandlerFuntion = () => {
    if (localData) {
      console.log("New Canvas Template......", template);
      let datas = JSON.stringify(template);
      console.log("data,,,,,,,", datas);
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
      };

      for (let i = 0; i < billData.length; i++) {
        if (billData[i].text === "Organization Name And Address") {
          billData[i].text = data.orgname;
        }
        if (billData[i].text === "Number") {
          billData[i].text = data.billno;
        }
        if (billData[i].text === "Date") {
          billData[i].text = data.data;
        }
        if (billData[i].text === "Time") {
          billData[i].text = data.billTime;
        }
        if (billData[i].text === "Items 1") {
          details.item.data = { ...billData[i] };
          billData[i].text = data.items[0].name;
          details.item.index = i;
        }

        if (billData[i].text === "Quantity Item1") {
          details.quantity.data = { ...billData[i] };
          billData[i].text = data.items[0].quantity;
          details.quantity.index = i;
        }

        if (billData[i].text === "Price 1") {
          details.price.data = { ...billData[i] };
          details.price.index = i;
          billData[i].text = data.items[0].Price;
        }

        if (billData[i].text === "Total") {
          billData[i].text = data.gross;
        }
        if (billData[i].text === "SGSTValue : ") {
          billData[i].text = data.SGSTPercentage;
        }
        if (billData[i].text === "SGSTValue : ") {
          billData[i].text = data.SGSTPercentage;
        }
        if (billData[i].text === "CGSTValue : ") {
          billData[i].text = data.CGSTPercentage;
        }
        if (billData[i].text === "SGSTTotal") {
          billData[i].text = data.SGSTValue;
        }
        if (billData[i].text === "CGSTTotal") {
          billData[i].text = data.CGSTValue;
        }
        if (billData[i].text === "Total Price") {
          billData[i].text = data.grandTotalOne;
        }
      }
      console.log("details....", details);
      console.log("billData", billData);
      setFabricData(details);
      setPreview(billData);
    }
  };

  console.log("Preview", preview);
  const initCanvas = () => {
    let initCanvas = new fabric.Canvas("canvasTwo", {
      height: 650,
      width: 600,
      backgroundColor: "#F2F3F4",
    });
    initCanvas.loadFromJSON(newDesign);
    return initCanvas;
  };
  const handleClick = () => {
    add({ data: JSON.stringify(template) }, 1).then(
      (event) => {
        console.log("ID Generated: ", event);
      },
      (error) => {
        console.log(error);
      }
    );
  };
  const getHandleClick = () => {
    getByID(1).then((personFromDB) => {
      setLocalData(personFromDB);
    });
  };
  console.log("local data ", localData.data);
  return (
    <div>
      <button className="btn btn-success mb-2" onClick={handleClick}>
        Add Template
      </button>
      <canvas id="canvas" />
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
      <canvas id="canvasTwo" className="mt-3"></canvas>
    </div>
  );
};

export default TemplateOne;
