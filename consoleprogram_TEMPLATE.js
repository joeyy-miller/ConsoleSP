var programname="Test :p";
//Dont change programdrive
var programdrive=1;
function program(data1)
{
	switch (data1)
	{
		case "first":
			//What the user will see when they run your software: Edit this
			consolewrite("Welcome!");
			break;
		case "exit":
			//This is what the user will see when they exit your software: Edit this
			consolewrite("Bye!");
	}
}
function programuser()
{
	switch (document.getElementById("consoleinput").value)
	{
		//Each case is a command by the user. 
		case "":
			//You may change this
			consolewrite("No input detected!");
			break;
		default:
			//When the command is not recognized
			consolewrite("That was not a command, silly!");
	}
}
