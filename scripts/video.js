
const loadCategories = () => {
    console.log('Loading categories...');
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
        .then(res => res.json())
        .then(data => {
            displayCategories(data.categories);
        })
        .catch(err => console.log(err));
};
loadCategories();

// category
// : 
// "Music"
// category_id
// : 
// "1001"

const displayCategories = (categories) => {
    const categoryContainer = document.getElementById('categories');
    categories.forEach((item) => {
        console.log(item);
        // create a btn 
        const btn = document.createElement('button');
        btn.classList = 'btn btn-primary m-2';
        btn.innerText = item.category;

        // add btn to container
        categoryContainer.append(btn);
    });
};