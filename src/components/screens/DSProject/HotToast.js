import React, { Component } from "react";
import toast, { Toaster, ToastBar } from "react-hot-toast";
import CloseIcon from "@material-ui/icons/Close";

export default class HotToast extends Component {
  notify = () => toast.error("Here is your toast.");
  render() {
    return (
      <>
        <div>HotTcdfvsddsxoast</div>
        <button onClick={this.notify}>Make me a toast</button>
        <Toaster>
          {(t) => (
            <ToastBar
              toast={t}
              style={{
                width: "400px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {({ icon, message }) => (
                <>
                  <div style={{display:'flex',alignItems:'center'}}>
                    <p>{icon}</p>

                    <p>{message}</p>
                  </div>

                  {t.type !== "loading" && (
                    <CloseIcon onClick={() => toast.dismiss(t.id)} />
                  )}
                </>
              )}
            </ToastBar>
          )}
        </Toaster>
        ;
      </>
    );
  }
}
