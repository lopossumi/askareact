import React from 'react'
import { Button, Modal, Icon } from 'semantic-ui-react'
import TasklistEditForm from './forms/TasklistEditForm'
import DeleteTasklist from './DeleteTasklist'
class EditTasklist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalOpen: false
        }
        this.handleClose = this.handleClose.bind(this)
    }

    handleOpen = () => this.setState({ modalOpen: true })
    handleClose = () => this.setState({ modalOpen: false })

    render() {
        return (
            <Modal
                trigger={
                    <Button icon size='mini' color='grey' onClick={this.handleOpen}>
                            <Icon name='edit' />
                    </Button>
                }
                open={this.state.modalOpen}
                onClose={this.handleClose}>

                <Modal.Header color='blue'><Icon name='plus' />Edit tasklist<DeleteTasklist id={this.props.tasklist._id}/></Modal.Header>
                <Modal.Content>
                    <TasklistEditForm 
                        mode='edit'
                        tasklist={this.props.tasklist}
                        handleClose={this.handleClose}/>
                </Modal.Content>
            </Modal>
        )
    }
}

export default EditTasklist

