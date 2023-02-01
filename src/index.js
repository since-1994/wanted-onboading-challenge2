/**
 * @typedef {Object} Todo
 * @property {string} id 아이디
 * @property {string} [contents] 내용
 * @property {boolean} isDone 완료여부
 * @property {string} category 카테고리
 * @property {string[]} tags 태그들
 */

class Todos{
    constructor(){}

    /**
     * ID를 기반으로 특정 할 일을 조회할 수 있다.
     * @param {string} id
     * @returns {Todo}
     */
    getTodo(id) {}

    /**
     * 모든 할 일을 조회할 수 있다.
     * @returns {Todo[]}
     */
    get all() {}

    /**
     * 할 일을 추가할 수 있다.
     * @param {Todo} todo
     */
    createTodo(todo){}

    /**
     * ID를 제외한 모든 속성을 수정할 수 있다.
     * 특정 할 일의 특정 태그를 수정할 수 있다.
     * @param id
     * @param todo
     */
    updateTodo(id, todo) {}

    /**
     * ID를 기반으로 특정 할 일을 삭제할 수 있다.
     * @param id
     */
    deleteTodo(id) {}

    /**
     * 모든 할 일을 삭제할 수 있다.
     */
    deleteAll() {}

    /**
     * 특정 카테고리의 할 일을 삭제할 수 있다.
     * @param {string} category
     */
    deleteTodoByCategory(category) {}
}