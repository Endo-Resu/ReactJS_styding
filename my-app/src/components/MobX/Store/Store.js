import { observable, action } from "mobx"

class NewName {
    @observable newName = ''

    @action setNewName = () => {
        this.newName = ''
    }
}

const NewNameStore = new NewName()
export default NewNameStore

