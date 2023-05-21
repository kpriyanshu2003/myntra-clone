import { Link } from "react-router-dom";

export default function Main() {
  return (
    <div>
      <Link to="/login">
        <div className="ml-5 mt-5">
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path
              fill="#3E4152"
              fillRule="evenodd"
              d="M20.25 11.25H5.555l6.977-6.976a.748.748 0 000-1.056.749.749 0 00-1.056 0L3.262 11.43A.745.745 0 003 12a.745.745 0 00.262.57l8.214 8.212a.75.75 0 001.056 0 .748.748 0 000-1.056L5.555 12.75H20.25a.75.75 0 000-1.5"
            ></path>
          </svg>
        </div>
      </Link>
      <div className="ml-16 mt-5">
        <div className="w-20 h-20">
          <svg viewBox="0 0 24 24" className="recovery-icon">
            <g fill="none" fillRule="evenodd">
              <circle cx="12" cy="12" r="12" fill="#FFF5F7"></circle>
              <g fillRule="nonzero">
                <path
                  fill="#DF8D9E"
                  d="M12.469 5.265a6.684 6.684 0 00-4.824 2.034.298.298 0 00.006.42.298.298 0 00.42-.006 6.089 6.089 0 014.398-1.853c3.387 0 6.144 2.757 6.144 6.144s-2.757 6.144-6.144 6.144-6.144-2.757-6.144-6.144v-.244l.723.723a.3.3 0 00.21.087.3.3 0 00.21-.087.295.295 0 000-.42l-1.23-1.23a.295.295 0 00-.42 0l-1.23 1.23a.295.295 0 000 .42.3.3 0 00.21.087.3.3 0 00.21-.087l.723-.723v.243a6.745 6.745 0 006.738 6.738 6.745 6.745 0 006.738-6.738 6.747 6.747 0 00-6.738-6.738z"
                ></path>
                <path
                  fill="#FF3F6C"
                  d="M12.469 8.292c-1.09 0-1.974.885-1.974 1.974v1.02H9.82a.296.296 0 00-.297.297V15c0 .165.132.297.297.297h5.295a.296.296 0 00.297-.297v-3.42a.296.296 0 00-.297-.297h-.675v-1.02a1.97 1.97 0 00-1.971-1.97zm-1.38 1.974a1.38 1.38 0 012.76 0v1.02h-2.757v-1.02h-.003zm3.732 1.611V14.7h-4.704v-2.823h4.704z"
                ></path>
              </g>
            </g>
          </svg>
        </div>
        <div className="mt-8">
          <span className="font-bold text-lg">Account Assistance</span>
          <br />
          <span className="font-light text-sm mt-1">
            Let us know what issue you'are facing ?
          </span>
        </div>
        <div className="mt-10 w-11/12">
          <Link
            to=""
            className="flex items-center justify-between border-b h-16"
          >
            <span className="text-sm font-light">I forgot my password</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="recovery-next-arrow pull-right -rotate-90"
              fill="#a9abb2"
            >
              <g fill="none" fillRule="evenodd">
                <path d="M0 0h24v24H0z" opacity="0.05"></path>
                <path
                  fill="#a9abb2"
                  d="M12.55 15.768a.786.786 0 00.041-.048l6.183-6.36a.815.815 0 000-1.128.761.761 0 00-1.095 0l-5.68 5.844-5.678-5.844a.761.761 0 00-1.095 0 .816.816 0 000 1.127l6.182 6.361A.761.761 0 0012 16a.76.76 0 00.55-.232"
                ></path>
              </g>
            </svg>
          </Link>
          <Link
            to=""
            className="flex items-center justify-between border-b h-16"
          >
            <span className="text-sm font-light">
              I cannot reset my password
            </span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="recovery-next-arrow pull-right -rotate-90"
              fill="#a9abb2"
            >
              <g fill="none" fillRule="evenodd">
                <path d="M0 0h24v24H0z" opacity="0.05"></path>
                <path
                  fill="#a9abb2"
                  d="M12.55 15.768a.786.786 0 00.041-.048l6.183-6.36a.815.815 0 000-1.128.761.761 0 00-1.095 0l-5.68 5.844-5.678-5.844a.761.761 0 00-1.095 0 .816.816 0 000 1.127l6.182 6.361A.761.761 0 0012 16a.76.76 0 00.55-.232"
                ></path>
              </g>
            </svg>
          </Link>
          <Link to="" className="flex items-center justify-between h-16">
            <span className="text-sm font-light">
              I don't remember my eamil or mobile
            </span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="recovery-next-arrow pull-right -rotate-90"
              fill="#a9abb2"
            >
              <g fill="none" fillRule="evenodd">
                <path d="M0 0h24v24H0z" opacity="0.05"></path>
                <path
                  fill="#a9abb2"
                  d="M12.55 15.768a.786.786 0 00.041-.048l6.183-6.36a.815.815 0 000-1.128.761.761 0 00-1.095 0l-5.68 5.844-5.678-5.844a.761.761 0 00-1.095 0 .816.816 0 000 1.127l6.182 6.361A.761.761 0 0012 16a.76.76 0 00.55-.232"
                ></path>
              </g>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
