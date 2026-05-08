
//objects have some personal ibuilt methods and properties


console.log("----------OBject methods--------");
const laptop = {
    brand: "Dell",
    ram: "16GB",
    ssd: "512GB"
};

console.log('keys :', Object.keys(laptop));

console.log("values :", Object.values(laptop));

console.log("Entries :" , Object.entries(laptop));

Object.freeze(laptop); // This method prevents any changes to the object
laptop.brand = "HP";
