class Mkulima{

    constructor(){
        this.farms = [];
        this.products = [];
        this.orders = []
    };
    addFarm (newFarm, farm){ 
        newFarm.farms.push(farm);
         console.log(newFarm.farms);   
       }

       removeFarm(newFarm, id){
        for(var i = 0; i<newFarm.farms.length; i++){
            if(newFarm.farms[i].farmId === id){
                newFarm.farms.splice(i, 1)
                   console.log(newFarm.farms)
            }
        }
       }

       updateFarm(newFarm, id, name, farmer, phone, address){
           for(var i = 0; i<newFarm.farms.length; i++){
               if(newFarm.farms[i].farmId === id){
                newFarm.farms[i].name = name;
                newFarm.farms[i].farmer = farmer;
                newFarm.farms[i].phone = phone;
                newFarm.farms[i].address = address
                console.log(newFarm.farms[i]);
               }
           }
       }

       getFarm(newFarm, id){
           for(var i=0; i<newFarm.farms.length; i++){
               if(newFarm.farms[i].farmId === id){
                   console.log(newFarm.farms[i]);
               }
           }
       }

       addProduct (newProduct, product){ 
        newProduct.products.push(product);
        console.log(newProduct.products);   
       }

       removeProduct(newProduct, id){
        for(var i = 0; i<newProduct.products.length; i++){
            if(newProduct.products[i].productId === id){
                newProduct.products.splice(i, 1)
                   console.log(newProduct.products)
            }
        }
       }

       updateProduct(newProduct, id, name, price){
        for(var i = 0; i<newProduct.products.length; i++){
            if(newProduct.products[i].productId === id){
             newProduct.products[i].name = name;
             newProduct.products[i].price = price;
             console.log(newProduct.products[i]);
            }
        }
    }

    getProduct(newProduct, id){
        for(var i=0; i<newProduct.products.length; i++){
            if(newProduct.products[i].productId === id){
                console.log(newProduct.products[i]);
            }
        }
    }
    
    printProducts(){
        console.log(newProduct.products);
    }
   calculateOrderCost(productId,quantity){
      let priceProduct= this.products.find(priceProduct=>priceProduct.productId===productId) 
       return priceProduct.price*quantity
   }
}
// Farms
var newFarm = new Mkulima()
//add a farm
console.log("Add a farm")
newFarm.addFarm(newFarm, {farmId: 1,name: "Kigali Farm", farmer: "Belyse", phone: "078934532",address: "Kicukiro"})
newFarm.addFarm(newFarm, {farmId: 2,name: "Kigali Farm", farmer: "Belyse", phone: "078934532",address: "Kicukiro"})
// Remove a farm
console.log("Remove a farm");
newFarm.removeFarm(newFarm, 2);
// Update a farm
console.log("update a farm");
newFarm.updateFarm(newFarm,1, "Kanombe Farm",  "Belyse",  "078934532","Kicukiro")
//Get a Farm
console.log("get a farm");
newFarm.getFarm(newFarm, 1);

//Products
var newProduct = new Mkulima()
//add a product
console.log("Add a product")
newProduct.addProduct(newProduct, {productId: 1,name: "patatoes", price: "200"})
newProduct.addProduct(newProduct, {productId: 2,name: "Rice", price: "400"})
// Remove a product
console.log("Remove a product");
newProduct.removeProduct(newProduct, 2);
// Update a product
console.log("update a product");
newProduct.updateProduct(newProduct,1, "Ugali","300")
//Get a Farm
console.log("get a product");
newProduct.getProduct(newProduct, 1);
// Print Products
console.log("print products");
newProduct.printProducts()
//Calculate Order Cost
console.log("Calculate Order cost")
console.log(newProduct.calculateOrderCost(1,10))