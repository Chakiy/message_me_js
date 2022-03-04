const me = document.querySelector("#input_me")
const you = document.querySelector("#input_you")
const chatSection = document.querySelector(".chat")
const name_me_place = document.querySelector(".name_me")
const name_you_place = document.querySelector(".name_you")
const message_me = document.querySelector("#textarea_message_me")
const message_you = document.querySelector("#textarea_message_you")

const my_name = document.querySelector(".name")
const your_name = document.querySelector(".name2")



let name_me = ""
let my_message = ""


let name_you = ""
let your_message = ""


console.log(me)
console.log(message_me)

me.addEventListener("keydown", function(e){
    if (e.key === "Enter"){
        my_name.style.color = "#333"
        name_me = me.value
        me.value = ""
        name_me_place.textContent = name_me.toUpperCase()
    }
})

message_me.addEventListener('keydown', function(e){
    if (e.key === "Enter"){
        if(name_me_place.textContent.length < 1){
            console.log("ehee")
            my_name.style.color = "red"
            message_me.value = ""
        }else {
            console.log(message_me.value)
            my_message = message_me.value 
            my_name.style.color = "#333"
            message_me.value = ""
            chatSection.insertAdjacentHTML('beforeend', `<p>${my_message}</p>`)
        
        }
      }
})




you.addEventListener("keydown", function(e){
    if (e.key === "Enter"){
        // console.log(me.value)
        your_name.style.color = "#333"
        name_you = you.value
        you.value = ""
        name_you_place.textContent = name_you.toUpperCase()
    }
})


message_you.addEventListener('keydown', function(e){
    if (e.key === "Enter"){

        if(name_you_place.textContent.length < 1){
            console.log("eheedsdsd")
            your_name.style.color = "red"
            message_you.value = ""

        }else{
            console.log(your_name.style.color)
            your_name.style.color = "#333"
            your_message = message_you.value 
            // your_name.style.color = "#333"
            message_you.value = ""
            chatSection.insertAdjacentHTML('beforeend', `<p class="response">${your_message}</p>`)
    
        }
        
       }
})