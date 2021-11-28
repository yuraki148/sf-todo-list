import { LightningElement, api, wire } from "lwc";

import getToDoDetail from "@salesforce/apex/ToDoCategoryListController.getToDoDetail";

const TODO_DETAIL_COLUMNS = [
    {
        fieldName: "Name",
        label: "Name"
    },
    {
        fieldName: "Completed__c",
        label: "完了"
    }
];
export default class ToDoDetailList extends LightningElement {
    @api recordId;
    @api categoryName;

    columnsList = TODO_DETAIL_COLUMNS;

    @wire(getToDoDetail, { categoryId: "$recordId" })
    wiredDetails;
}