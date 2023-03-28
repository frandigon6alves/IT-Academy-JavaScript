const NOODLES_PER_PERSON = 0.125;
const SQUID_PER_PERSON = 0.1;
const SHRIMP_PER_PERSON = 0.05;

function calculatePrice() {
    const friends = Number(document.getElementById('numFriends').value);

    const noodlesPricekg = Number(document.getElementById('priceNoodles').value);
    const squidPricekg = Number(document.getElementById('priceSquid').value);
    const shrimpPricekg = Number(document.getElementById('priceShrimp').value);

    const message = `${friends * NOODLES_PER_PERSON} de noodles.
    ${friends * SQUID_PER_PERSON} de calamares.
    ${friends * SHRIMP_PER_PERSON} de gambas`;

    const unitPrice = (NOODLES_PER_PERSON * noodlesPricekg) + (SQUID_PER_PERSON * squidPricekg)
    + (SHRIMP_PER_PERSON * shrimpPricekg);
    const totalPrice = unitPrice * friends;

    document.getElementById('result').innerHTML= `El precio por persona es ${unitPrice}$.<br>El precio
    total es ${totalPrice}.<br>Lacantidad utilizada es de ${message}.`

}
