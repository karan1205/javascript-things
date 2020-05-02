/**
 * Polyfill for getElementsByClassName()
 */

function getElementsByClassNames(root, className) {
    const result = [];
    function traverse(node) {
       if(!node) {
           return;
       }
       if(node.classList.contains(className)) {
           result.push(node);
       }
       if(node.children.length) {
           Array.from(node.children).forEach(child => {
              traverse(child);
           })    
       }
       return result;
    }
    return traverse(root);
}
