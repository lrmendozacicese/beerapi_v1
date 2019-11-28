const inventoryCtrl = {};
const Inventory = require('../models/beer');


inventoryCtrl.createInventory = async(req,res)=> {
    const { Name,Brewery,Style,Description,Address,Establishment } = req.body;
    const newBeer = new Inventory({
        Name: Name,
        Style: Style,
        Brewery: Brewery,
        Address:Address,
        Establishment:Establishment,
        Description: Description
    });
    await newBeer.save();
    res.json({message:'New Item added'});
}

inventoryCtrl.deleteInventory =async(req,res)=> {
    const { Name,Brewery,Style,Description } = req.body;
    const beer = await Inventory.findOneAndDelete({Name:Name});
    res.json('Item Deleted');
    
}

inventoryCtrl.findBrewery =async(req,res)=> {
    const { Name,Brewery,Style,Description } = req.body;
    const brewery = await Inventory.find({Brewery: Brewery});
    res(brewery);
}
inventoryCtrl.findBeer =async(req,res)=> {
    const { Name,Brewery,Style,Description } = req.body;
    const beer = await Inventory.find({Name: Name});
    res(beer);
}
inventoryCtrl.findStyle =async(req,res)=> {
    const { Name,Brewery,Style,Description } = req.body;
    const style = await Inventory.find({Style: Style});
    res(style);
}

module.exports = inventoryCtrl;