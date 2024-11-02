export const questionnaire = [
  {
    "id": 1,
    "title": "Select an Icon",
    "value": [
      {
        "name": "icon",
        "type": "radio",
        "option": [
          {
            "type": "image",
            "path": "@/assets/images/elements/user_icon1.png"
          },
          {
            "type": "image",
            "path": "@/assets/images/elements/user_icon2.png"
          },
          {
            "type": "image",
            "path": "@/assets/images/elements/user_icon3.png"
          },

        ]
      }
    ]
  },
  {
    "id": 2,
    "title": "Creation a profile",
    "value": [
      {
        "name": "Nickname",
        "type": "inputText",
        "option": [

        ]
      },
      {
        "name": "Gender",
        "type": "dropdownlist",
        "option": [

        ]
      },
      {
        "name": "Age",
        "type": "inputText",
        "option": [

        ]
      }
    ]
  },
  {
    "id": 3,
    "title": "Select Allergies",
    "value": [
      {
        "name": "icon",
        "type": "option",
        "option": [
          "eggs",
          "milk",
          "mustard",
          "peanuts",
          "Crustaceans and molluscs",
          "fish",
          "sesame seeds",
          "soy",
          "sulphites",
          "tree nuts",
          "wheat and triticale"
        ]
      }
    ]
  },
  {
    "id": 4,
    "title": "Add Emergency Contact",
    "value": [
      {
        "name": "Nickname",
        "type": "inputText",
        "option": [

        ]
      },
      {
        "name": "Relationship",
        "type": "inputText",
        "option": [

        ]
      },
      {
        "name": "Phone Number",
        "type": "inputText",
        "option": [

        ]
      }
    ]
  },
]