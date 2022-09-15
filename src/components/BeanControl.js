import React from "react";
import NewBeanForm from './NewBeanForm';
import BeanList from './BeanList';
import BeanDetail from "./BeanDetail";
import EditBeanForm from "./EditBeanForm";


class BeanControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainBeanList: [],
      selectedBean: null,
      editing: false, 
      // beanCount: 0
    };
  }

  handleClick = () => {
    if (this.state.selectedBean != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedBean: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage,
    }));
    }
  }
  handleAddingNewBeanToList = (newBean) => {
    const newMainBeanList = this.state.mainBeanList.concat(newBean);
    this.setState({
      mainBeanList: newMainBeanList, 
      formVisibleOnPage: false });
  }
  handleChangingSelectedBean = (id) => {
    const selectedBean = this.state.mainBeanList.filter(bean=> bean.id === id)[0];
    this.setState({selectedBean: selectedBean});
  }
  handleDeletingBean = (id) => {
    const newMainBeanList = this.state.mainBeanList.filter(bean=> bean.id !== id);
    this.setState({
      mainBeanList: newMainBeanList,
      selectedBean: null
    });
  }

  handleEditClick = () => {
    console.log("handleEditClick Reached!");
    this.setState({editing: true});
  }
  handleEditingBeanInList = (beanToEdit) => {
    const editedMainBeanList = this.state.mainBeanList.filter(bean=> bean.id !== this.state.selectedBean.id).concat(beanToEdit);
    this.setState({
      mainBeanList: editedMainBeanList,
      editing: false,
      selectedBean: null
    });
  }

    handleBuyingBagOfBeans = () => {
      const bagToBuy = this.state.selectedBean;
      if (this.state.selectedBean.beanCount !== 0){
          const quantityToSell = {
              quantity: bagToBuy.beanCount -=1
          }
          this.handleChangingSelectedBean(quantityToSell.id)   
      } else {
          this.handleChangingSelectedBean(this.state.selectedBean.id)
          // this.setState({selectedBean: bagToBuy});
      }
  }


  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing) {
      currentlyVisibleState = <EditBeanForm bean= {this.state.selectedBean} onEditBean = {this.handleEditingBeanInList} />
      buttonText = "Return to beanlist";
    }
    else if(this.state.selectedBean != null) {
      currentlyVisibleState = <BeanDetail bean= {this.state.selectedBean} onClickingDelete = {this.handleDeletingBean}
      onClickingEdit= {this.handleEditClick}
      onBuyingBean={this.handleBuyingBagOfBeans}/>
      buttonText="Return to Bean List";
    }
    else if (this.state.formVisibleOnPage){
      currentlyVisibleState = <NewBeanForm onNewBeanCreation={this.handleAddingNewBeanToList} />
      buttonText = "Return to Bean List";
    } else  {
      currentlyVisibleState = <BeanList beanList={this.state.mainBeanList} 
      onBeanSelection={this.handleChangingSelectedBean}/>
      buttonText = "Add Bean";    
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
        </React.Fragment>
    );
  }
}

export default BeanControl;