import BootstrapTable from 'react-bootstrap-table-next'
import paginationFactory from 'react-bootstrap-table2-paginator'
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit'

const { SearchBar, ClearSearchButton } = Search;

const Table = ({data}) => {
    data.forEach ( (employee, index) => {
        employee.index = index
    })

    const columns = [{
        dataField: 'firstName',
        text: 'First Name',
        sort: true
        }, {
        dataField: 'lastName',
        text: 'Last Name',
        sort: true
        }, {
        dataField: 'dateOfBirth',
        text: 'Birth Date',
        sort: true
        }, {
        dataField: 'startDate',
        text: 'Start Date',
        sort: true
        }, {
        dataField: 'department',
        text: 'Department',
        sort: true
        }, {
        dataField: 'street',
        text: 'Street',
        sort: true
        }, 
        {
        dataField: 'city',
        text: 'City',
        sort: true
        },{
        dataField: 'state',
        text: 'State',
        sort: true
        }, {
        dataField: 'zipCode',
        text: 'Zip Code',
        sort: true
        }
    ];
    
  return (
    <div>
        <ToolkitProvider  
        keyField={'index'}
        data = {data}
        columns= {columns}
        search
        >
        {
            props => (
            <div>
                <SearchBar { ...props.searchProps } />
                <ClearSearchButton { ...props.searchProps } />
                <hr />
                <BootstrapTable
                { ...props.baseProps }
                className='employeesTable'
                striped
                hover
                condensed
                pagination={paginationFactory()}
                />
            </div>
            )
        }
        </ToolkitProvider>
    </div>
  )
}

export default Table