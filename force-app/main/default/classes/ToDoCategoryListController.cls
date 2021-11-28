public with sharing class ToDoCategoryListController {
  @AuraEnabled(cacheable = true)
  public static List<ToDoCategory__c> getToDoCategories(){
    return [SELECT Name FROM ToDoCategory__c];
  }

  @AuraEnabled(cacheable = true)
  public static List<ToDoDetail__c> getToDoDetail(Id categoryId){
    return [SELECT Name, Completed__c FROM ToDoDetail__c WHERE ToDoCategory__c = :categoryId];
  }
}
