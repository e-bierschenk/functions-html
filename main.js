/* <section id="computer--1">
	<h1>Apple Macbook</h1>
	<div>Model: Pro</div>
	<div>Memory: 32 GB</div>
	<div>Hard drive space: 500 GB</div>
	<div>Processor speed: 2.4 Ghz</div>
</section> 
*/

const computer = {
	id: 1,
	manufacturer: "Apple",
	make: "Macbook",
	model: "Pro",
	specs: {
		memory: 32,
		hardDrive: "500 GB",
		processor: 2.4
	}
}

const htmlString = (obj) => {
    return `<section id="computer--${obj.id}">\n
                <h1>${obj.manufacturer} ${obj.make}</h1>\n
                <div>Model: ${obj.model}</div>\n
                <div>Memory: ${obj.specs.memory}</div>\n
                <div>Hard drive space: ${obj.specs.hardDrive}</div>\n
                <div>Processor speed: ${obj.specs.processor}</div>\n
            </section>`
}


document.getElementById("script").innerHTML = htmlString(computer)