module.exports = (temp, product) => {
	let output = temp.replace(/{%NAME%}/g, product.NAME);
	output = output.replace(/{%BIRTH%}/g, product.BIRTH);
	output = output.replace(/{%CLASS%}/g, product.CLASS);
	output = output.replace(/{%id%}/g, product.id);

	return output;
};
