import { Fragment } from "react";
import Sidebar from "../components/Sidebar";

export default function Overlay(props) {
  return (
    <Fragment>
      <Sidebar state={props.state} />
    </Fragment>
  );
}
