let boxes = document.querySelectorAll(".box");
let reset_btn = document.querySelector("#reset");
let win_stat = document.querySelector("p")

let turn0 = true;

const winning_patterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

// The main game function
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Box is clicked");
        if (turn0){
            box.innerText = "O";
            turn0 = false
        }else{box.innerText = "X";turn0 = true}
        box.disabled = true;

        let game_climax = check_win()
        if (game_climax){
        disable_all_boxes();
    }            
    })
    

})

reset_btn.addEventListener("click",() =>{
    boxes.forEach((box)=>{
        box.innerText = "";
        box.disabled = false;
        win_stat.innerText = ""
    })
})

// If the winning pattern is seen even once, will break the loop and return game_over as true
const check_win = () =>{
    let game_over = false;
    
    for (pattern of winning_patterns){
        let pos1 = boxes[pattern[0]].innerText
        let pos2 = boxes[pattern[1]].innerText
        let pos3 = boxes[pattern[2]].innerText

        if ((pos1==pos2) && (pos2==pos3) && (pos1!="" &&pos2!=""&&pos3!="")){
            if (turn0){
                win_stat.innerText = `Congratulations!  X won`;
            }else{win_stat.innerText = `Congratulations! O won`}
        
            game_over = true;
            break;
            
        }
        
    }
    return game_over
} 

// Will disable all the boxes once called
const disable_all_boxes = () => {
    boxes.forEach((box) => {
      box.disabled = true;
    });
  };
  