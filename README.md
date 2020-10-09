

#Deliverables:

- A user should be able to view all of the contacts the exist in the db
  - A contact will show the name, email, phonenumber, linkedIn info
  - Contacts that have been marked as important will be highlighted somehow (maybe a dif color or border)
- A user should be able to add additional contacts into the field (the contact should persist)
- A user should be able to delete a contact (it should persist)
- A user should be able to mark a contact as important (it should not persist)


Give yourself about 3 hours to complete the basic deliverables


# Advanced Deliverables
- A user can filter to only see important contacts
- A user will get an errors if the name or phone is blank or if the email is invalid (checkout this (package)[https://www.npmjs.com/package/isemail])



Setup:

$ npm i
$ npm start
$ json-server db.json
