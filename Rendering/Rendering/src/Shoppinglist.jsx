const products=[
    {title:"Potato",isfruit:false,id:1},
    {title:"Tomato",isfruit:false,id:2},
    {title:"Guova",isfruit:true,id:3},
];

function ShoppingList(){

    const listitems=products.map(products=>
        <li
        key={products.id}
        style={{
            color:products.isfruit ? "blue" :"yellow"
        }}>{products.title}
        </li>

        );

        return(
            <ul>{listitems}</ul>
        )

}

export default ShoppingList;