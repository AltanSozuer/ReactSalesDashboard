import "../../styles/css/shared/shadowbox.css"
import "../../styles/css/table.css"
import AtomButton from "../atoms/AtomButton"
import AtomSpan from "../atoms/AtomSpan"

export default function LastTransactionsWidget( props ) {
    return (
        <div className="large-outer-container shadow-box">
            <h3 className="table-title">
                Lastest Transactions
            </h3>
            <table className="tableCont">
                <tr className="table-tr">
                    <th className="table-th">Customer</th>
                    <th className="table-th">Date</th>
                    <th className="table-th">Amount</th>
                    <th className="table-th">Status</th>
                </tr>
                <tr className="table-tr">
                    <th className="table-th-user">
                        <img
                            src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            alt=""
                            className="table-img"/>
                        <AtomSpan
                            text="Susan Carol"
                            className="row-username" />
                    </th>
                    <th className="th-date">14 Dec 2022</th>
                    <th className="th-amount">$325.00</th>
                    <th className="th-status">
                        <AtomButton
                            size="small"
                            color="secondary"
                            text="Pending"
                            variant= "outlined" />
                    </th>
                </tr>

                <tr className="table-tr">
                    <th className="table-th-user">
                        <img
                            src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            alt=""
                            className="table-img"/>
                        <AtomSpan
                            text="Susan Carol"
                            className="row-username" />
                    </th>
                    <th className="th-date">14 Dec 2022</th>
                    <th className="th-amount">$325.00</th>
                    <th className="th-status-button">
                        <AtomButton
                            size="small"
                            color="success"
                            text="Approved"
                            variant= "outlined" />
                    </th>
                </tr>
                <tr className="table-tr">
                    <th className="table-th-user">
                        <img
                            src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            alt=""
                            className="table-img"/>
                        <AtomSpan
                            text="Susan Carol"
                            className="row-username" />
                    </th>
                    <th className="th-date">14 Dec 2022</th>
                    <th className="th-amount">$325.00</th>
                    <th className="th-status-button">
                        <AtomButton
                            size="small"
                            color="secondary"
                            text="Pending"
                            variant= "outlined" />
                    </th>
                </tr>
                <tr className="table-tr">
                    <th className="table-th-user">
                        <img
                            src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            alt=""
                            className="table-img"/>
                        <AtomSpan
                            text="Susan Carol"
                            className="row-username" />
                    </th>
                    <th className="th-date">14 Dec 2022</th>
                    <th className="th-amount">$325.00</th>
                    <th className="th-status-button">
                        <AtomButton
                            size="small"
                            color="error"
                            text="Cancelled"
                            variant= "outlined" />
                    </th>
                </tr>
            </table>
        </div>
    )
}