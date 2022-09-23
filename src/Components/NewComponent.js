import React, { useState, useEffect } from "react";
import { fabric } from "fabric";
import { useNavigate } from "react-router-dom";
import data from "../data.json";
const NewComponent = () => {
  const [template, setTemplate] = useState("");
  const [preview, setPreview] = useState({});

  useEffect(() => {
    setTemplate(renderFrabicCanvas);
  }, []);

  useEffect(() => {
    if (Object.keys(preview).length > 0) {
      initCanvas();
    }
  }, [preview]);

  const navigate = useNavigate();
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
    let textBodyMenuTwoOne = new fabric.Textbox("Items 2", {
      width: 300,
      fontSize: 15,
      top: 300,
      left: 70,
      fill: "red",
    });
    let textBodyItemTwoQty = new fabric.Textbox("Quantity Item2", {
      width: 40,
      fontSize: 15,
      top: 300,
      left: 410,
      fill: "red",
    });
    let textBodyItemTwoAmount = new fabric.Textbox("Price 2", {
      width: 70,
      fontSize: 15,
      top: 300,
      left: 475,
      fill: "red",
    });
    let textBodyMenuThreeOne = new fabric.Textbox("Items 3", {
      width: 300,
      fontSize: 15,
      top: 330,
      left: 70,
      fill: "red",
    });
    let textBodyItemThreeQty = new fabric.Textbox("Quantity Item3", {
      width: 40,
      fontSize: 15,
      top: 330,
      left: 410,
      fill: "red",
    });
    let textBodyItemThreeAmount = new fabric.Textbox("Price 3", {
      width: 70,
      fontSize: 15,
      top: 330,
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
      textBodyMenuTwoOne,
      textBodyItemTwoQty,
      textBodyItemTwoAmount,
      textBodyMenuThreeOne,
      textBodyItemThreeQty,
      textBodyItemThreeAmount,
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
  console.log("Template......", template._objects);
  let billData = template._objects;
  const clickHandlerFuntion = () => {
    for (let i = 0; i < billData.length; i++) {
      //   console.log("data", billData[i].text == "Number");
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
        billData[i].text = data.items[0].name;
      }
      if (billData[i].text === "Items 2") {
        billData[i].text = data.items[1].name;
      }
      if (billData[i].text === "Items 3") {
        billData[i].text = data.items[2].name;
      }
      if (billData[i].text === "Quantity Item1") {
        billData[i].text = data.items[0].quantity;
      }
      if (billData[i].text === "Quantity Item2") {
        billData[i].text = data.items[1].quantity;
      }
      if (billData[i].text === "Quantity Item3") {
        billData[i].text = data.items[2].quantity;
      }
      if (billData[i].text === "Price 1") {
        billData[i].text = data.items[0].Price;
      }
      if (billData[i].text === "Price 2") {
        billData[i].text = data.items[1].Price;
      }
      if (billData[i].text === "Price 3") {
        billData[i].text = data.items[2].Price;
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
        billData[i].text = data.grandTotal;
      }
    }
    console.log("billData", billData);
    console.log("Template......", JSON.stringify(template));
    setPreview(JSON.stringify(template));
  };
  const initCanvas = () => {
    let initCanvas = new fabric.Canvas("canvasTwo", {
      height: 650,
      width: 600,
      backgroundColor: "#F2F3F4",
    });
    initCanvas.loadFromJSON(preview);
    return initCanvas;
  };

  const clickHandler = () => {
    navigate("/");
  };
  return (
    <div>
      <h3 style={{ display: "flex", justifyContent: "center" }}>
        Billing Template
      </h3>
      <div>
        <canvas id="canvas" />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button className="btn btn-dark" onClick={() => clickHandler()}>
          Back
        </button>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button className="btn btn-info" onClick={() => clickHandlerFuntion()}>
          Preview
        </button>
      </div>
      <canvas id="canvasTwo"></canvas>
    </div>
  );
};

export default NewComponent;
