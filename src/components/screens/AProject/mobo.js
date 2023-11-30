import React from "react";
// Customizable Area Start
import "./categoryAdmin.css";
import "./table.css";
import { FaRegTrashAlt } from "react-icons/fa";
import { PiPen, PiArrowsDownUpBold } from "react-icons/pi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// Customizable Area End

import CatalogueController, { Props } from "./CatalogueController";

export default class Table extends CatalogueController {
  constructor(props: Props) {
    super(props);
    // Customizable Area Start
    // Customizable Area End
  }

  // Customizable Area Start
  // Customizable Area End

  render() {
    return (
      //Merge Engine DefaultContainer
      <>
        <table id="table">
          <thead>
            <tr>
              <th>
                <input
                  type="checkbox"
                  test-id="headerCheckbox"
                  checked={this.state.isHeaderChecked}
                  onChange={() =>
                    this.handleHeaderCheckboxChange(this.props.tableData)
                  }
                />
              </th>
              <th></th>
              <th>S.No</th>
              {this.props.tableHeaders?.map((header: string, index: number) => (
                <th key={index.toString()}>{header}</th>
              ))}
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <span className="dividerLine"></span>
            <tbody className="tableBody">
              {this.props.tableData?.map((row: any, index: number) => (
                <>
                  <tr key={row.id}>
                    <td>
                      <input
                        test-id="rowCheckbox"
                        type="checkbox"
                        checked={this.state.isChecked[index]}
                        onChange={() => this.handleRowCheckboxChange(index)}
                      />
                    </td>
                    <td>
                      <PiArrowsDownUpBold />
                    </td>
                    <td>{index + 1}</td>
                    {this.props.customRows && this.props.customRows(row)}
                    <td>
                      <label className="switch">
                        <input
                          type="checkbox"
                          checked={row.attributes.status}
                          readOnly
                        />
                        <span className="slider round"></span>
                      </label>
                    </td>
                    <td>
                      <span className="tableActions">
                        <span
                          style={{ background: "none", border: "none" }}
                          onClick={() => this.props.editCategory(row)}
                          test-id="modalOpen"
                        >
                          <PiPen color={"black"} size={25} />
                        </span>
                        <span
                          style={{ background: "none", border: "none" }}
                          onClick={() => this.delCategory(row.id)}
                          test-id="deleteCategory"
                        >
                          <FaRegTrashAlt />
                        </span>
                      </span>
                    </td>
                  </tr>
                  <span className="dividerLine"></span>
                </>
              ))}
            </tbody>
        </table>
        <div className="tableFooter">
          <p>View All</p>
          <div className="pageWrapper">
            <button
              test-id="tablePrev"
              onClick={() => this.handleTablePrevious(this.props.tableFunction)}
            >
              <IoIosArrowBack />
            </button>
            <div className="pagination">
              {[1, 2, 3, 4, 5].map((pageNo: any, index: any) => (
                <span
                key={index.toString()}
                  className={
                    this.state.pageNo == pageNo ? "currentPage" : "pageNo"
                  }
                  onClick={() =>
                    this.handleTableNumberClick(
                      pageNo,
                      this.props.tableFunction
                    )
                  }
                  test-id="numberClick"
                >
                  {pageNo}
                </span>
              ))}
            </div>
            {this.state.categoryData.length > 0 && (
              <button
                test-id="tableNext"
                onClick={() => this.handleTableNext(this.props.tableFunction)}
              >
                <IoIosArrowForward />
              </button>
            )}
          </div>
        </div>
      </>
    );
  }
}

// Customizable Area Start
// Customizable Area End
