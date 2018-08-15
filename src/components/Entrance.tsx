import * as React from 'react';
import { KeycodeEnum } from '../enums/KeycodeEnum';
import { RouteComponentProps } from 'react-router';
import { RouterPathEnum } from '../enums/RouterPathEnum';

interface IProps extends RouteComponentProps<Entrance> {
  onCreateAccount: ( userName: string ) => void;
}

class Entrance extends React.Component<IProps, {}> {
  private hasAccount: boolean = false;

  constructor(props : IProps){
    super(props);

    this.onKeyUpHandler = this.onKeyUpHandler.bind( this );
    this.createAccount = this.createAccount.bind( this );
  }

  render() {
    let inputName: HTMLInputElement | null;

    const onClickCreateAccountButton = () => {
      if( !inputName )  return;

      this.createAccount( inputName.value );
    }

    return(
        <div>
            enter name:<br/>
            <input ref={ (t) => inputName = t } type="text" placeholder="justin koo" onKeyUp={ this.onKeyUpHandler } />
            <br/>
            <button onClick={ onClickCreateAccountButton }>create account</button>
        </div> 
    );
  }

  private onKeyUpHandler( e: React.KeyboardEvent ): void {
    if( e.keyCode != KeycodeEnum.ENTER )  return;

    const input: HTMLInputElement = e.target as HTMLInputElement;
    this.createAccount( input.value );
  }

  private createAccount( strInput: string ): void {
    if( this.hasAccount  )  return;

    if( !strInput ) {
      alert( "put your name please." );  
      return;
    }

    this.hasAccount = true;

    this.props.onCreateAccount( strInput );

    this.props.history.push( RouterPathEnum.BOOK_LIST );
  }
}

export default Entrance;
