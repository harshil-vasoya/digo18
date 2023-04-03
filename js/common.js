import data from "./data.js";


var nav_bar = document.getElementsByClassName("navigation-section");
// var footer = document.getElementsByClassName("footer-section");
var footer = document.querySelectorAll(".footer-section");
var product = document.getElementsByClassName("rp_product");

{/* <span>p_id : ${e.product_id}</span> */ }
try {
	var product_section = document.getElementById("rp_product_section");
	var url = product_section.dataset.img_url;
	data.forEach((e) => {
		product_section.innerHTML += `
		<div class="product-card" data-product_id=${e.product_id} data-url=${url}>
			<div class="product-container-product">
			<div class="product-img-div d-flex d-content-center">
				<img src="${url + "/" + e.img_name}" alt="product name " />
			</div>
			<div>
				<p class="product_content m-1">${e.info}</p>
			</div>
			<div>
				<h1 class="m-1">${e.price}</h1>
			</div>
			</div>
		</div>
		`
	})
	var product_card = document.getElementsByClassName("product-card");
	Object.keys(product_card).forEach(key => {
		var element = product_card[key];
		var id = element.dataset.product_id;
		var dataObj;
		data.forEach(e=>{
			if(e.product_id==id){
				dataObj = e;
			}
		})
		
		element.addEventListener("click", () => {

			document.write(`
			<!DOCTYPE html>
			<html lang="en">
			<head>
    			<title>Document</title>
				<link rel="stylesheet" href="css/details.css" />
				<link rel="stylesheet" href="css/bash.css">
				<link rel="stylesheet" href="css/mediaquery.css" />
			</head>
			<body>
			<a class="back-button" href="product.html">&laquo; Previous</a>

			<section class="navigation-section"></section>

			<!-- product deatils page -->
			<section class="container">
				<div class="single-product" style="margin-top: 100px;">
				  <div class="d-flex d-content-between row details-mobile-view">
					<div class="imgbg d-flex d-content-center ">
					  <img src="${element.dataset.url+"/"+dataObj.img_name}" alt="product-image" style="border: 2px solid black;">
					</div>
					<div >
					  <p class="newdrgs">${dataObj.info}</p>
					  <h4>${dataObj.price}</h4>
					  <h3>product Details <span class="fa-solid fa-crown"></span></h3>
					  <p> ${dataObj.dis} </p>
					</div>
				  </div>
				</div>
			  </section>
		
		
		
			<section class="footer-section"></section>
    
			</body>
			</html>
			`);
		});
	})

} catch (e) {
	console.log(e);
}








Object.keys(product).forEach(key => {

	var e = product[key];
	e.innerHTML = `
		<div class="product-container-product">
			<div class="product-img-div d-flex d-content-center">
				<img src="${e.getAttribute("href")}" alt="product name " />
			</div>
			<div>
				<p class="product_content m-1">${e.dataset.product_info}</p>
			</div>
			<div>
				<h1 class="m-1">${e.dataset.product_price}</h1>
			</div>
		</div>
	`
})




// Navigation Bar---------------

for (var i = 0; i < nav_bar.length; i++) {
	nav_bar[i].innerHTML = `<div class="navigation-bar">
	<span class="brand-name">Shivam</span>
	<div class="links">
		<a href="index.html">Home</a>
		<a href="product.html">products</a>
		<a href="ContactUs.html">contact</a>
	</div>
	<div class="burger-btn">
		<span class="burger-bar"></span>
		<span class="burger-bar"></span>
		<span class="burger-bar"></span>
	</div>
	</div>
	<div class="navigation-bar-mobile">
		<a href="index.html"  onclick="go_back()">Home</a>
		<a href="product.html" onclick="go_back()">Projects</a>

		<a href="#"   onclick="go_back()">Contact</a>
	</div>`
};

/* Footer section */
for (var i = 0; i < footer.length; i++) {
	footer[i].innerHTML = `<footer>
	<div> 
		<div class="brand-name dark">
			<a href="index.html">Shivam</a>
		</div>
		<div class="brand-line">
		<a href="index.html"><b>I N D U S T R I E S</b></a>
			<hr>
		</div>
	</div>
	<div class="contact-box">
		<div class="contact"> <a class="block" href="tel:9426998736"> <span class="fa-solid fa-phone mt-2"></span>&nbsp;+91
		9426998736</a></i></div>
		<div class="contact"><a class="block" href="mailto:superwax9@gmail.com"> <span
		class="fa-solid fa-envelope mt-1"></span>&nbsp;&nbsp;superwax9@gmail.com </a></i></div>
		<div class="contact"><a href="https://www.google.com/maps/place/22°17'25.2%22N+70°47'55.3%22E/@22.2903439,70.7942153,17z/data=!4m14!1m7!3m6!1s0x3bcb99a2716b0d81:0xb0038aa72de8a8ec!2sVidya+Nagar,+Adikmet,+Hyderabad,+Telangana!3b1!8m2!3d17.4065284!4d78.5139136!3m5!1s0x0:0x65d391488804dc3!7e2!8m2!3d22.2903392!4d70.7986996?hl=en" class="m-icon fa-solid fa-location-dot"> 
		<span class="jugad">&nbsp;&nbsp;superwax9@gmail.com</span></a></div>
	</div>
</footer>`
};


var navbar_mobile = document.getElementsByClassName("navigation-bar-mobile")[0];
document.getElementsByClassName("burger-btn")[0].addEventListener('click', () => {
	if (navbar_mobile.style.display == "flex") {
		navbar_mobile.style.display = "none";
	} else {
		navbar_mobile.style.display = "flex";
	}
})

//Surevy No.37 , Plot No.42 , Near Mahalaxmi Masala , Opp. Tirth Agro, Vavdi Gondal Road, Rajkot-360004.