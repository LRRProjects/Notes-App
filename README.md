# Notes-App
Created a command line note application that reads user input, stores that user input into a JSON file and reacts to user commands. Different modules were used like the yargs module that was used to read the user input from the command line, the fs module was used to read and write the JSON file, the chalk module was used to color code error/success messages and the import functionality was used to import functions from a file that I created.

If the user enters a command using the following format: 'node app.js add --title="X" --body="X"' the code will run the add function
behind the scenes. This function verifies if the JSON file exist and if the entry exist, if that was the case and error message bolded in red will be displayed 
informing the user the entry already exist. If the file does not exist, it will create a new file with the entry, images below:

File was created and entry was added successfully:
![image](https://user-images.githubusercontent.com/102123401/161441124-9ee44e99-09eb-43ac-8e4c-51cdd80e6a13.png)

Entry already exists:
![image](https://user-images.githubusercontent.com/102123401/161441161-69aa2c5e-7fe9-493c-a86c-33b7b76b63b7.png)

If the user enters a command using the following format: 'node app.js list' the code will run the list function behind the scenes. This function
will list all the notes in the JSON file, image below:

List of notes on JSON file:
![image](https://user-images.githubusercontent.com/102123401/161441368-5a210d3b-431a-47fe-805d-b41099eeaa4d.png)

If the user enters a command using the following format: 'node app.js read --title="X"' the code will run the read function behind the scenes. This function
checks if the title provided exist if it doesn't it will print an error message bolded in red, if it does exist it will takes the title and return the title and body of the specified note, image below:

Reading note:
![image](https://user-images.githubusercontent.com/102123401/161441541-d470baec-e908-4b3f-bc1c-e3baf97dc984.png)

If the title provided does not exits:
![image](https://user-images.githubusercontent.com/102123401/161441646-14bed70d-3577-49d7-8481-50e355f42440.png)

If the user enters a command using the following format: 'node app.js add --title="X"' the code will run the remove function behind the scenes. This function
takes in the notes title as a parameter and check if the title exist in the JSON file if it does not it will print an error message bolded in red, if it does it will remove a note from the file, image below:

Note removed from file:
![image](https://user-images.githubusercontent.com/102123401/161441738-63932ccf-9bee-41fb-a1c9-ee6c08fbd49a.png)

Removing a note from the file, when the note does not exist:
![image](https://user-images.githubusercontent.com/102123401/161441774-15885627-fff4-4ad4-803c-981bba423b48.png)



