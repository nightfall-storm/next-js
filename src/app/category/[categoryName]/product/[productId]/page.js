// @param params get the route dynamic
// @param searchParams get the search query ?
export default function Product({params, searchParams}){
    console.log(params, searchParams);
    return <>
     {/* //  ? Nested dynamic route */}
    <div>Category: {params.categoryName}</div>
    <div>Product number: {params.productId}</div>
    </>
}