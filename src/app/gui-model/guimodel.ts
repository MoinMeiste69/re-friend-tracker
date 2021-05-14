export class GuiModel {

    /* HINWEIS: Texte sind in der Datei ../example-translation-service.ts definiert.
    Erscheinen Texte in {}, so kann die Übersetzung in example-translation-service.ts definiert werden
    */

    private _guiModel = {
        "application": {
            "title": "Stalking for beginners with Ines Pesut, Selina Zopfi, Max Wolfsberger",
            "formList": [
                {
                    //Definiert, was alles in die Liste zur Erstellung von Freunden kommt
                    "id": "FriendForm",
                    "title": "Friend",
                    "url": "/friend",
                    "formFieldList": [
                        {
                            "id": "familyName",
                            "type": "text",
                            "name": "FamilyName",
                            "width": 1,
                            "required": true
                        },
                        { "id": "nickname",
                         "type": "text",
                          "name": "Nickname",
                           "width": 2,
                            "required": true 
                        },
                        {
                            "id": "firstName",
                            "type": "text",
                            "name": "FirstName",
                            "width": 1,
                            "required": true
                        },
                        {
                            "id":   "location",
                            "type": "autocomplete",
                            "name": "Location",
                            "url": "/location",
                            "form": "LocationForm",
                            "width": 2
                        },
                        {
                            "id": "birthdate",
                            "type": "date",
                            "name": "Birthday",
                            "width": 2
                        },
                        {
                            "id": "comment",
                            "type": "text",
                            "name": "Comments",
                            "width": 2,
                            "height": 4,
                            "maxLength": 5000,
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        },
                    //1.10 1:n Beziehung
                        {   "id": "group",
                            "type": "autocomplete",
                            "name": "Group",
                            "url": "/group",
                            "form": "GroupForm",
                            "width": 2 
                        },

                    ]
                },

                //1.8 Neue Form erstellen
                {
                    "id": "GroupForm",
                    "title": "Group",
                    "url": "/group",
                    "formFieldList": [
                        {
                            "id": "name",
                            "type": "text",
                            "name": "GroupName",
                            "width": 2,
                            "required": true
                        },

                        {
                            "id": "comment",
                            "type": "text",
                            "name": "Comments",
                            "width": 2,
                            "height": 4,
                            "maxLength": 5000,
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "id": "creationdate",
                            "type": "date",
                            "name": "CreationDate",
                            "width": 2
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "ActivityForm",
                    "title": "Activity",
                    "url": "/activity",
                    "formFieldList": [
                        {
                            "id": "name",
                            "type": "text",
                            "name": "Activity",
                            "width": 2,
                            "required": true
                        },
                        {
                            "id" : "Location",
                            "type": "autocomplete",
                            "name" : "Location",
                            "url":"/location",
                            "width" : 2,
                            "required" : true,
                            "form" : "LocationForm",
                            
                            
                        },

                        {
                            "id": "comment",
                            "type": "text",
                            "name": "Comments",
                            "width": 2,
                            "height": 4,
                            "maxLength": 5000,
                        },

                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },


                {
                    "id": "LocationForm",
                    "title": "Location",
                    "url": "/location",
                    "formFieldList": [
                        {
                            "id": "name",
                            "type":"text",
                            "name": "LocationName",
                            "width": 2,
                            "required": true
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "id": "comment",
                            "type": "text",
                            "name": "Comments",
                            "width": 2,
                            "height": 4,
                            "maxLength": 5000,
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "AddActivityForm",
                    "title": "Activity",
                    "url": "/friend/:friendKey/activity",
                    "formFieldList": [
                        {
                            "id":   "activity",
                            "type": "autocomplete",
                            "name": "Activity",
                            "url": "/activity",
                            "defaultKey": "activityKey",
                            "readonly": true,
                            "form": "ActivityForm",
                            "width": 2
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
            ],

           
            "pageList": [
                {
                    //Neue Kacheln im Hauptmenu
                    "id": "mainmenu",
                    "name": "MainMenu",
                    "elementList": [
                        {
                            "type": "button",
                            "name": "Friends",
                            "icon": "fa-user",
                            "color": "blue",
                            "page": "friendspage",
                        }, 
                        {
                            "type": "button",
                            "name": "Activity",
                            "icon": "fa-user",
                            "color": "pink",
                            "page": "activitypage",
                        },
                        {
                            "type": "button",
                            "name": "Groups",
                            "icon": "fa-weixin",
                            "color": "asbestos",
                            "page": "groupspage",
                        },
                        {
                            "type": "button",
                            "name": "Location",
                            "icon": "fa-cubes",
                            "color": "yellow",
                            "page": "locationspage",
                        },
                    ]
                },
                {
                    //Page selber für Hauptmenu 
                    "id": "friendspage",
                    "elementList": [
 

                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": "NewFriend",
                            "icon": "fa-user",
                            "color": "green",
                            "form": {
                                "form": "FriendForm"
                            }
                        },
                        {
                            //Weiterleiten von Freundesseite auf Aktivitätenübersicht + Edit Friend
                            "type": "list",
                            "icon": "fa-user",
                            "color": "blue",
                            "search": true,
                            "url": "/friend",
                            "page":"editfriendpage",
                        },
                    ]
                },
                {
                    "id": "locationspage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": "NewLocation",
                            "icon": "fa-home",
                            "color": "green",
                            "width": 2,
                            "form": {
                                "form": "LocationForm"
                            }
                        },
                    
                        {
                            "type": "list",
                            "icon": "fa-home",
                            "color": "blue",
                            "search": true,
                            "url": "/location",
                            "form": {
                                "form": "LocationForm"
                            }
                        },
                    ]
                },
                {
                    //Layout für Seite, nachdem man auf einen Friend geklickt hat
                        "id": "editfriendpage",
                         "elementList": [
                        {
                            "type": "backbutton",
                            "color": "blue",
                        },
                        {
                            "type": "newButton",
                            "name": "AddActivity",
                            "icon": "fa-home",
                            "color": "green sea",
                            "width": 1,
                            "url": "/activity",
                            "form": {
                                "form": "AddActivityForm",
                                "url" : "activity",
                            }
                        },
                        {
                            "type": "button",
                            "name": "EditFriend",
                            "icon": "fa-user",
                            "color": "green",
                            "width" : 1,
                            //"search":true,
                            "url" :"/friend",
                            "form": {
                                "form": "FriendForm"
                                
                            }
                        },
                        {   
                        "type": "list",
                            "name":"EditFriend",
                            "icon": "fa-user",
                            "color": "blue",
                            //"search": true,
                            "url": "/friend/:friendKey/activity",
                            "form": {
                                "form": "ActivityForm"
                            }
                        },
                         ]  
                },

                {   
                    "id": "groupspage",
                    "elementList": [
                        {
                            "type": "backbutton",
                            "color":"blue",
                        },
                        
                        {
                            "type": "newButton",
                            "name": "NewGroup",
                            "icon": "fa-home",
                            "color": "green",
                            "width": 2,
                            "form": {
                                "form": "GroupForm"
                            }
                        },
                        {
                            "type": "list",
                            "icon": "fa-weixin",
                            "color": "wisteria",
                            "search": true,
                            "url": "/group",
                            "form": {
                                    "form": "GroupForm"
                                    }
                        }
                      
                    ]                    
                },
                {   
                    "id": "activitypage",
                    "elementList": [
                        {
                            "type": "backbutton",
                            "color":"blue",
                        },
                        
                        {
                            "type": "newButton",
                            "name": "NewActivity",
                            "icon": "fa-home",
                            "color": "purple",
                            "width": 2,
                            "form": {
                                "form": "ActivityForm"
                            }
                        },
                        {
                            "type": "list",
                            "icon": "fa-weixin",
                            "color": "wisteria",
                            "search": true,
                            "url": "/activity",
                            "page" : "editactivitypage",
                            "form": {
                                    "form": "ActivityForm"
                                   
                                    }
                        },

                    ]     
                },

                {
                    //Layout für Seite, nachdem man auf ein Activity geklickt hat
                        "id": "editactivitypage",
                         "elementList": [
                        {
                            "type": "backbutton",
                            "color": "blue",
                        },
                        {
                            //Weiterleiten von Freundesseite auf Aktivitätenübersicht + Edit Friend
                            "type": "list",
                            "icon": "fa-user",
                            "color": "purple",
                            "search": true,
                            "url": "/activity/:activityKey/friend",
                           "form": {
                                "form": "FriendForm"
                                
                            }
                               
                            
                        },

                        
                         ]  
                },
            ]
        }
    };


    get guiModel() {
        return this._guiModel;
    }
}