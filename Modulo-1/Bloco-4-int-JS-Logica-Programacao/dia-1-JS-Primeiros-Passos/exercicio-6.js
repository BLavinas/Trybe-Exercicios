let chessPiece = "Rook".toLowerCase();
switch (chessPiece) {
    case "rook":
        console.log("The rook may move forward, backward, left or right.");
        break;
    case "bishop":
        console.log("The bishop may move in any direction diagonally, forward or backward.")
        break;
    case "queen":
        console.log("The queen may move forward, backward, left, right, or diagonally in any direction.");
        break;
    case "knight":
        console.log("The knight may move two squares in any direction forward, backward, left, or right, followed by one square in either perpendicular direction.");
        break;
    case "king":
        console.log("The king may move one square in any direction forward, backward, left, right, or diagonal.")
        break;
    case "pawn":
        console.log("After its first move, the pawn may move one square forward.");
        break;
    default:
        console.log("Invalid Piece");
    }