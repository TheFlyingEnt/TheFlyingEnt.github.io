var amountOfSide = parseFloat(prompt("Hello There!, Noice Monke Design welcomes! To Start, Please input the number of sides from 0-10 to find out the name polygon"));

//Checker
var i = 0;
while (i == 0) {
    if (validateEntry(amountOfSide)) 
    {
        var shape = getShape(amountOfSide);
        alert(shape);
        i = 1;
    }
    else 
    {
        amountOfSide = parseFloat(prompt("It looks like you typed in an invalid entry. Please type in a number 0 through 10."));
    }
}


// Display Anwser
function getShape(sides) 
{
    sides = Math.round(Math.abs(sides));
    switch (sides) 
    {
        case 0:
            return "This polygon with this many sides does not exist :(";
            break;
        case 1:
            return "This polygon with 1 side is a Henagon";
            break;
        case 2:
            return "This polygon with 2 side is a Digon";
            break;
        case 3:
            return "This polygon with 3 side is a Trigon";
            break;
        case 4:
            return "This polygon with 4 side is a Tetragon";
            break;
        case 5:
            return "This polygon with 5 side is a Pentagon";
            break;
        case 6:
            return "This polygon with 6 side is a Hexagon";
            break;
        case 7:
            return "This polygon with 7 side is a Heptagon";
            break;
        case 8:
            return "This polygon with 8 side is a Octagon";
            break;
        case 9:
            return "This polygon with 9 side is a Nonagon";
            break;
        case 10:
            return "This polygon with 10 side is a Decagon";
            break;
    }
}

//Validate if Number of Side is Valid
function validateEntry(sides) 
{
    if (typeof sides == 'number') 
    {
        if (sides >= -10 && sides <= 10) 
        {
            return (sides == sides);
        }
    }
}
