import { LightningElement, api, wire } from "lwc";
import getToDoCategories from "@salesforce/apex/ToDoCategoryListController.getToDoCategories";

const TODO_CATEGORY_COLUMNS = [
	{ fieldName: "Name", label: "Name" }
];

export default class ToDoCategoryList extends LightningElement {
  @api apiName;
	@api listViewApiName;

  columnsList = TODO_CATEGORY_COLUMNS;

  @wire(getToDoCategories)
	wiredToDoCategories;

  handleRowSelection(event) {
		const itemSelected = new CustomEvent("itemselected", {
			detail: {
				recordId: event.detail.selectedRows[0].Id,
				categoryName: event.detail.selectedRows[0].Name
			}
		});
		this.dispatchEvent(itemSelected);
	}
}