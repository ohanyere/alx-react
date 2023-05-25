import React from "react";
import PropTypes from "prop-types";

function CourseListRow({ isHeader = false, textFirstCell, textSecondCell = null
}) {
    if (isHeader) {
    return (
      <tr>
        {textSecondCell ? (
          <>
            <th>{textFirstCell}</th>
            <th>{textSecondCell}</th>
          </>
	) : (
              <th colSpan={2}>{textFirstCell}</th>
	)}
      </tr>
    );
    } else {
        return (
          <tr>
            <td>{textFirstCell}</td>
            <td>{textSecondCell}</td>
          </tr>
	);
    }
}

CourseListRow.propTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.string,
};

export default CourseListRow;
