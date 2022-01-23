const categoriesRef = document.querySelectorAll('.item')
console.log(`Number of categories: ${categoriesRef.length}`)

categoriesRef.forEach(element => {
    const categoryName = element.querySelector('h2');
    
    const elementItem = element.querySelectorAll('li');

    console.log(`Category: ${categoryName.textContent}`);
    console.log(`Elements:${elementItem.length}`);
});