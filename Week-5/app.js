let tempArray = [];
let listArray = [];

// Class 1 of 2 - Will be the 'blueprint' for each shopping item 
class Item {
    constructor(itemName, quantity, budgetPrice, hasCoupon) {
        this.itemName = itemName;
        this.quantity = quantity;
        this.budgetPrice = budgetPrice;
        this.hasCoupon = hasCoupon; 
    }
}

// Class 2 of 2 - the 'blueprint' for the shopping list
class List {
    constructor(storeName) {
        this.storeName = storeName;
        this.items = [];
    }
    addItem(item) {
        this.items.push(item);
    }
}

function mainMenu () {
    let userSelection = prompt('1) Manage Items \n2) Manage Lists \n3) Exit');
    switch(userSelection) {
        case '1':
            let itemSelection = itemMenu();
            handleItemSelection(itemSelection);
            break;
        case '2':
            let listSelection = listMenu();
            handleListSelection(listSelection);
            break;
        default:
            break;
    }
}

function itemMenu () {
    return prompt('1) Create Item\n 2) Remove Item\n 3) Add Item To Existing List\n 4) Go Back')
}

function listMenu () {
    return prompt('1) Create List\n 2) Add Item to List\n 3) Remove Item from Existing List\n 4) Go Back')
}

function handleItemSelection(selection) {
    switch(selection) {
        case '1':
            createItem();
            break;
        case '2':
            removeItem();
            break;
    }
}

function handleListSelection(selection) {
    switch(selection) {
        case '1':
            createList();
            break;
        case '2':
            addItem();
            break;
    }
}

function createItem() {
    while(true) {
        const item = new Item(
            prompt('Enter item name: '),
            prompt('How many do we want: '),
            prompt('What is are budget for this item? '),
            prompt('Do we have any coupons?')
        )
        tempArray.push(item);
        console.log(tempArray);
        let userContinue = prompt('Do you want to add another item (y/n)');
        if (userContinue === 'n') {
            mainMenu();
        }
    }
}

function removeItem() {
    let str = "";
    for ( let i = 0; i < tempArray.length; i++ ) {
        str += i+1 + ") " + tempArray[i].itemName + "\n" 
        // 1) Bananas 
        // 2) Apples 
    }
    let itemToRemove = prompt('Which item do you want to delete?\n\n' + str);
    itemToRemove = parseInt(itemToRemove) - 1;
    tempArray.splice(itemToRemove, 1);
    mainMenu()
}

function createList() {
    const list = new List(
        prompt('What store is this list for?')
    );
    listArray.push(list);
    mainMenu();
}

function addItem() {
    let str = "";
    for ( let i = 0; i < tempArray.length; i++ ) {
        str += i+1 + ") " + tempArray[i].itemName + "\n" 
        // 1) Bananas 
        // 2) Apples 
    }
    let itemToAdd = prompt('Which item do you want to delete?\n\n' + str);
    itemToAdd = parseInt(itemToAdd) - 1;
    listArray[0].items.push(tempArray.splice(itemToAdd, 1));
    console.log(listArray[0]);
    mainMenu()
}


mainMenu();
