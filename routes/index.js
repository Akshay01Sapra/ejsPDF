const express = require("express");
const router = express.Router();
const fs = require("fs");
const pdf = require("html-pdf");

const html = fs.readFileSync(require.resolve("../views/template6.ejs"), "utf8");
const html1 = fs.readFileSync(
  require.resolve("../views/specificOrder.ejs"),
  "utf8"
);
const checkdDetails = fs.readFileSync(
  require.resolve("../views/cheque-details.ejs"),
  "utf8"
);

const options = {
  format: "A4",
  // header: {
  //   height: "28mm",

  // },
  // footer: {
  //   height: "31mm",
  //   contents: `
  //   <div style="padding:0 75px; margin:20px 0;">
  //   <p>Shivom Enterprises Pty Ltd.</p>
  //   <p>1/9 Bushells Place, Wetherill Park,NSW,2164.</p>
  //   <p>PH : 028206 2797, (FAX) 02 8007 7607</p>
  //   <p>info@uvsimpex.com.au</p>
  //   </div>
  //   `
  // }

  // header for template3.ejs

  // header: {
  //   height: "2mm",
  // },
  // footer: {
  //   height: "2mm",
  // },
};

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "HTML to PDF" });
});

router.get("/template", function (req, res, next) {
  res.render("template", { tableData: tableData });
});

router.get("/template3", function (req, res, next) {
  res.render("template3");
});

router.get("/download", (req, res) => {
  console.log(`file://${require.resolve("../public/images/saurbhi.png")}`);
  pdf.create(html, options).toStream((err, stream) => {
    if (err) return res.end(err.stack);
    res.setHeader("Content-type", "application/pdf");
    stream.pipe(res);
  });
});
router.get("/download1", (req, res) => {
  console.log(`file://${require.resolve("../public/images/saurbhi.png")}`);
  pdf.create(html1, options).toStream((err, stream) => {
    if (err) return res.end(err.stack);
    res.setHeader("Content-type", "application/pdf");
    stream.pipe(res);
  });
});

router.get("/download2", (req, res) => {
  console.log(`file://${require.resolve("../public/images/saurbhi.png")}`);
  pdf.create(checkdDetails, options).toStream((err, stream) => {
    if (err) return res.end(err.stack);
    res.setHeader("Content-type", "application/pdf");
    stream.pipe(res);
  });
});

router.get("/download3", (req, res) => {
  // console.log(`file://${require.resolve("../public/images/saurbhi.png")}`);
  const dietPlan = fs.readFileSync(
    require.resolve("../views/diet-plan.ejs"),
    "utf8"
  );
  pdf.create(dietPlan, options).toStream((err, stream) => {
    if (err) return res.end(err.stack);
    res.setHeader("Content-type", "application/pdf");
    stream.pipe(res);
  });
});

router.get("/invoice", (req, res) => {
  // console.log(`file://${require.resolve("../public/images/Left-Part.png")}`);
  const innvoice = fs.readFileSync(
    require.resolve("../views/invoice.ejs"),
    "utf8"
  );
  pdf.create(innvoice, options).toStream((err, stream) => {
    if (err) return res.end(err.stack);
    res.setHeader("Content-type", "application/pdf");
    stream.pipe(res);
  });
});

module.exports = router;
