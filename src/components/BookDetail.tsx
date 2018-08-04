import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export interface Props extends RouteComponentProps<BookDetail> {
    
}

class BookDetail extends React.Component<Props, {}> {
  constructor(props : Props){
    super(props);
  }

  render() {
    return(
        <div>
            book detail
        </div> 
    );
  }
}

export default BookDetail;
