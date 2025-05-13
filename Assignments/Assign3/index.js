const cardWrap=document.querySelector(".cards-wrapper");
const cards=document.querySelector(".cards");
const pf=document.querySelector(".profile-pic");
const name=document.querySelector
(".name");
const age=document.querySelector(".age");
const gender=document.querySelector(".gender");
const edit=document.getElementById("edit-btn");
const del=document.getElementById("del-btn");

const studentData = [
    {imgUrl:"assets/sneha.jpg",name: "Sneha Kumari", age: 19, gender: "female"},
    {imgUrl:"assets/sneha.jpg",name: "Rahul Sharma", age: 21, gender: "male"},
    {imgUrl:"assets/sneha.jpg",name: "Priya Patel", age: 20, gender: "female"},
    {imgUrl:"assets/sneha.jpg",name: "Amit Singh", age: 22, gender: "male"},
    {imgUrl:"assets/sneha.jpg",name: "Neha Gupta", age: 18, gender: "female"},
    {imgUrl:"assets/sneha.jpg",name: "Vijay Kumar", age: 23, gender: "male"},
    {imgUrl:"assets/sneha.jpg",name: "Ananya Desai", age: 19, gender: "female"},
    {imgUrl:"assets/sneha.jpg",name: "Raj Malhotra", age: 24, gender: "male"},
    {imgUrl:"assets/sneha.jpg",name: "Pooja Verma", age: 20, gender: "female"},
    {imgUrl:"assets/sneha.jpg",name: "Arjun Reddy", age: 22, gender: "male"},
    {imgUrl:"assets/sneha.jpg",name: "Meera Kapoor", age: 21, gender: "female"},
    {imgUrl:"assets/sneha.jpg",name: "Sanjay Joshi", age: 19, gender: "male"},
    {imgUrl:"assets/sneha.jpg",name: "Divya Mehta", age: 23, gender: "female"},
    {imgUrl:"assets/sneha.jpg",name: "Ravi Sharma", age: 20, gender: "male"},
    {imgUrl:"assets/sneha.jpg",name: "Anjali Saxena", age: 21, gender: "female"},
    {imgUrl:"assets/sneha.jpg",name: "Vikram Choudhary", age: 22, gender: "male"},
    {imgUrl:"assets/sneha.jpg",name: "Deepika Singh", age: 19, gender: "female"},
    {imgUrl:"assets/sneha.jpg",name: "Kunal Bajaj", age: 24, gender: "male"},
    {imgUrl:"assets/sneha.jpg",name: "Kavita Rao", age: 20, gender: "female"},
    {imgUrl:"assets/sneha.jpg",name: "Alok Nair", age: 21, gender: "male"}
];

const createCard=()=>{
    for(i=0;i<=studentData.length-1;i++){
      
         cardWrap.innerHTML += `
         <div class="cards" id=card${i}>
            <section class="cards-head">
                <img class="profile-pic" src=${studentData[i].imgUrl} alt="">
            </section>
            <section class="cards-body">
                <p class="name">${studentData[i].name}</p>
                <p class="age">${studentData[i].age}</p>
                <p class="gender">${studentData[i].gender}</p>
            </section>
            <section class="cards-foot">
                <button id="edit-btn" onclick="editCard(${i})">
                    <div class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M3 21v-4.25L16.2 3.575q.3-.275.663-.425t.762-.15t.775.15t.65.45L20.425 5q.3.275.438.65T21 6.4q0 .4-.137.763t-.438.662L7.25 21zM17.6 7.8L19 6.4L17.6 5l-1.4 1.4z"/></svg>
                    </div>
                <p>Edit</p>

                </button>
                <button id="del-btn" onclick="deleteCard(${i})">
                     <div class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M7 21q-.825 0-1.412-.587T5 19V6q-.425 0-.712-.288T4 5t.288-.712T5 4h4q0-.425.288-.712T10 3h4q.425 0 .713.288T15 4h4q.425 0 .713.288T20 5t-.288.713T19 6v13q0 .825-.587 1.413T17 21zm3-4q.425 0 .713-.288T11 16V9q0-.425-.288-.712T10 8t-.712.288T9 9v7q0 .425.288.713T10 17m4 0q.425 0 .713-.288T15 16V9q0-.425-.288-.712T14 8t-.712.288T13 9v7q0 .425.288.713T14 17"/></svg>
                    </div>
                   <p>Delete</p>
                </button>
            </section>

            <p>${i+1}</p>
         </div>


         `




    }

}


const deleteCard=(idx)=>{
    
   const card=document.getElementById(`card${idx}`);
if(card){
    card.remove();
}
}


const editCard=(idx)=>{
      const card = document.getElementById(`card${idx}`);
    if (card) {
        const nameElement = card.querySelector('.name');
        const ageElement = card.querySelector('.age');
        const genderElement = card.querySelector('.gender');
        // Prompt user for new values
        const newName = prompt("Enter new name:", nameElement.textContent);
        const newAge = prompt("Enter new age:", ageElement.textContent);
        const newGender = prompt("Enter new gender:", genderElement.textContent);
        // Update the card with new values
        if (newName) nameElement.textContent = newName;
        if (newAge) ageElement.textContent = newAge;
        if (newGender) genderElement.textContent = newGender;
    }

}

editCard();

deleteCard();

createCard();