const drawContainer = (containerSize, childSize, numberOfChildren) => {
    var squareOne = document.getElementById('mainSquare');
    var header = document.getElementById('headline');

    // using if/else conditions
    if (containerSize < childSize) {
        squareOne.textContent = "This containerSize will be always in lesser than childSize";
        return false;
      } else if (containerSize < childSize) {
        header.textContent = "Square Color Palette";
        return false;
    }
    // parentEle will be include inside elements to contain elements to get parent elements
    var parentEle = document.createElement('div');
    parentEle.id = 'boxContainer';
    // Sets the value of an attribute on the specified element
    parentEle.setAttribute("style","width:"+ containerSize +"px;height:"+ containerSize +"px");

    var containerOfBox = Math.floor(containerSize / childSize);
    var childrenOfBox = containerOfBox * containerOfBox;
    // using for loop method
    for(let i = 0; i < childrenOfBox ; i++){
        var childrenEle = document.createElement('div');
        childrenEle.id = 'childElement_'+ i;
        childrenEle.className = 'childrenElement1';
        var generateColor = getSquareColor();
        childrenEle.setAttribute("style","width:"+childSize+"px;height:"+childSize+"px;background:" + generateColor);
        parentEle.appendChild(childrenEle);
    }
    if (numberOfChildren > childrenOfBox){
        squareOne.textContent = "Isolated " + childrenOfBox +" square is possible to show the output in the browser ";
    } else if (numberOfChildren > childrenOfBox){
        squareOne.textContent =  "It might possible to show the output in the browser " + childrenOfBox ;
    } else {
        squareOne.textContent = childrenOfBox + " square is possible to show the output in the browser ";
    }
    document.documentElement.appendChild(parentEle);
    addEventListener(parentEle);
}

/* this would able to generate colors */
const getSquareColor = () => {
    var allOfLetters = '0123456789ABCDEFGH';
    var colors = '#';
    for (let i = 0; i < 6; i++ ) {
        colors += allOfLetters[Math.floor(Math.random() * 15)];
    }
    return colors;
}

/* this would return the colors */
const addEventListener = (parentEle) => {
    var continuing = null;
    parentEle.onmouseover = (start) => {
        var startBox = start.target;
        var restartBox = start.currentTarget;
        if (startBox !== restartBox) {
            continuing = setTimeout(() => {
                startBox.parentNode.removeChild(startBox);
                console.log("empty elements has been removed");
            }, 2000);
        }
        return false;
    };
    parentEle.onmouseout = () => {
       clearTimeout(continuing);
    }
}


drawContainer(200, 50, 17);
drawContainer(310, 200, 4);
drawContainer(413, 42, 30);
drawContainer(200, 300, 2);
