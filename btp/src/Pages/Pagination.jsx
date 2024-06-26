import React, {Component} from 'react'
import axios from 'axios'
import ReactPaginate from 'react-paginate';
import "./Pagination.css";

export default class Pagination extends Component {
  constructor(props) {
      super(props);
      this.state = {
          offset: 0,
          data: [],
          perPage: 6,
          currentPage: 0
      };
      this.handlePageClick = this
          .handlePageClick
          .bind(this);
  }
  receivedData() {
      axios
          .get(`http://10.10.120.28/api/projects/project`)
          .then(res => {

              const data = res.data.projec[0];
            //   console.log(data)

              const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
              
              const postData = slice.map(  pd => <div className='container'> <React.Fragment>
                  <h2>{pd.pname}</h2>
                    <p>{pd.description}</p>
                    <p>{pd.professorName}</p>
                    <p>{pd.strength}</p>
              </React.Fragment></div>)

              this.setState({
                  pageCount: Math.ceil(data.length / this.state.perPage),
                 
                  postData
              })
          });
  }
  handlePageClick = (e) => {
      const selectedPage = e.selected;
      const offset = selectedPage * this.state.perPage;

      this.setState({
          currentPage: selectedPage,
          offset: offset
      }, () => {
          this.receivedData()
      });

  };

  componentDidMount() {
      this.receivedData()
  }
  render() {
      return (
        <div className='page'>
              <div className='wrapper'>{this.state.postData}</div>
              <ReactPaginate
                  previousLabel={"prev"}
                  nextLabel={"next"}
                  breakLabel={"..."}
                  breakClassName={"break-me"}
                  pageCount={this.state.pageCount}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={5}
                  onPageChange={this.handlePageClick}
                  containerClassName={"pagination"}
                  subContainerClassName={"pages pagination"}
                  activeClassName={"active"}/>
          </div>

      )
  }
}
