import ExpanseItemSheet from "../../systems/expanse/module/item-sheet.js";

class ExpanseItemSheet extends ExpanseItemSheet {
  
get template() {
     const path = "modules/expanse-french/templates/sheet"
     return `${path}/${this.item.data.type}-sheet.html`;
  }

  
} 
