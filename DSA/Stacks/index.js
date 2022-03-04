/**
 * A stack is an ordered list in which insertion and deletion are done at one end, called top.
 * The last element inserted is the first one to be deleted.
 * Hence, it is called the Last in First out (LIFO) or First in Last out(FILO) list. 
 */

const { StackArray } = require("./StackArray");
const { StackLinkedList } = require("./StackLinkedList");

module.exports = {
    Stack: StackArray,
    StackLinkedList
}