import React, { Component } from "react";
import PropTypes from "prop-types";

export default class User extends Component {
  render() {
    return (
      <svg
        width={this.props.size}
        height={this.props.size}
        viewBox="0 0 19 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.35631 11.0792C10.8634 11.0792 12.1682 10.5333 13.2347 9.45623C14.3008 8.37933 14.8415 7.06168 14.8415 5.53943C14.8415 4.0177 14.301 2.69987 13.2345 1.62263C12.1681 0.545906 10.8632 0 9.35631 0C7.84905 0 6.54438 0.545906 5.47809 1.6228C4.4118 2.6997 3.87109 4.01752 3.87109 5.53943C3.87109 7.06168 4.4118 8.37951 5.47809 9.45641C6.54472 10.5331 7.84957 11.0792 9.35631 11.0792ZM6.42188 2.57581C7.24006 1.7495 8.19984 1.34783 9.35631 1.34783C10.5126 1.34783 11.4726 1.7495 12.2909 2.57581C13.1091 3.40231 13.507 4.37181 13.507 5.53943C13.507 6.7074 13.1091 7.67673 12.2909 8.50322C11.4726 9.32971 10.5126 9.73138 9.35631 9.73138C8.20019 9.73138 7.24041 9.32954 6.42188 8.50322C5.60353 7.6769 5.20565 6.7074 5.20565 5.53943C5.20565 4.37181 5.60353 3.40231 6.42188 2.57581Z"
          fill="#D0D0D0"
        />
        <path
          d="M18.954 17.6859C18.9232 17.2377 18.861 16.7488 18.7694 16.2326C18.677 15.7125 18.558 15.2208 18.4155 14.7714C18.2682 14.3069 18.0682 13.8482 17.8206 13.4087C17.564 12.9524 17.2624 12.5551 16.9239 12.2282C16.57 11.8862 16.1366 11.6113 15.6356 11.4107C15.1362 11.2112 14.5828 11.1101 13.9909 11.1101C13.7584 11.1101 13.5336 11.2064 13.0994 11.4919C12.8321 11.6679 12.5196 11.8715 12.1707 12.0966C11.8723 12.2886 11.4682 12.4685 10.969 12.6313C10.482 12.7905 9.98754 12.8712 9.4993 12.8712C9.01142 12.8712 8.51694 12.7905 8.02957 12.6313C7.53092 12.4686 7.12661 12.2888 6.8288 12.0968C6.48322 11.8738 6.17047 11.6702 5.89925 11.4918C5.46541 11.2063 5.24058 11.1099 5.0081 11.1099C4.41597 11.1099 3.86276 11.2112 3.36358 11.4109C2.86284 11.6111 2.42934 11.8861 2.07507 12.2284C1.73661 12.5555 1.43498 12.9526 1.17853 13.4087C0.931287 13.8482 0.73113 14.3067 0.583792 14.7716C0.441493 15.221 0.322476 15.7125 0.230042 16.2326C0.138303 16.7481 0.0762752 17.2372 0.0455219 17.6864C0.0152898 18.1256 0 18.5827 0 19.0446C0 20.2452 0.377901 21.2172 1.1231 21.934C1.8591 22.6413 2.83278 23 4.01722 23H14.9828C16.1669 23 17.1406 22.6413 17.8767 21.934C18.6221 21.2177 19 20.2454 19 19.0444C18.9998 18.581 18.9844 18.1239 18.954 17.6859ZM16.9566 20.9575C16.4702 21.4249 15.8246 21.6522 14.9826 21.6522H4.01722C3.17506 21.6522 2.52942 21.4249 2.04327 20.9576C1.56633 20.4991 1.33456 19.8732 1.33456 19.0446C1.33456 18.6136 1.34863 18.1881 1.37678 17.7796C1.40423 17.3788 1.46035 16.9385 1.54357 16.4707C1.62576 16.0087 1.73035 15.5751 1.85476 15.1825C1.97412 14.8062 2.13692 14.4334 2.33882 14.0744C2.5315 13.7322 2.75321 13.4387 2.99784 13.2021C3.22667 12.9809 3.51509 12.7998 3.85494 12.6639C4.16925 12.5383 4.52248 12.4695 4.90594 12.4592C4.95268 12.4843 5.0359 12.5322 5.17073 12.6209C5.44508 12.8015 5.7613 13.0075 6.11088 13.233C6.50494 13.4867 7.01263 13.7159 7.61918 13.9137C8.23929 14.1162 8.87173 14.219 9.49948 14.219C10.1272 14.219 10.7598 14.1162 11.3796 13.9139C11.9867 13.7157 12.4942 13.4867 12.8888 13.2327C13.2465 13.0017 13.5539 12.8017 13.8282 12.6209C13.9631 12.5323 14.0463 12.4843 14.093 12.4592C14.4767 12.4695 14.8299 12.5383 15.1444 12.6639C15.484 12.7998 15.7725 12.981 16.0013 13.2021C16.2459 13.4385 16.4676 13.7321 16.6603 14.0746C16.8624 14.4334 17.0254 14.8063 17.1445 15.1824C17.2691 15.5754 17.3739 16.0089 17.4559 16.4705C17.539 16.9392 17.5952 17.3797 17.6227 17.7798V17.7801C17.651 18.187 17.6653 18.6124 17.6654 19.0446C17.6653 19.8734 17.4335 20.4991 16.9566 20.9575Z"
          fill="#D0D0D0"
        />
      </svg>
    );
  }
}

User.propTypes = {
  size: PropTypes.number
};

User.defaultProps = {
  size: 30
};