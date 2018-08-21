let billAmount = 100;

let gratuity = () => {
    return billAmount * 0.2;
}

let totalWithGrat = (amount) => {
    return amount + gratuity();
}

const total = totalWithGrat(billAmount);

console.log("your total including gratuity is : ", total);

