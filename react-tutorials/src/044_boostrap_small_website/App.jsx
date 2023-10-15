import React from "react";
import Bootstrap from "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <>
      <h1 className="text-center text-danger text-capitalize my-5">
        welcome to my channel
      </h1>
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <div class="card">
              <img
                src="https://picsum.photos/200/300"
                class="card-img-top"
                alt="https://picsum.photos/200/300"
                height="200px"
              />
              <div class="card-body">
                <h5 class="card-title"></h5>
                <p class="card-text">
                  Some qyuck exampe text to build on the card title and body
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div class="card">
              <img
                src="https://picsum.photos/200/301"
                class="card-img-top"
                alt="https://picsum.photos/200/300"
                height="200px"
              />
              <div class="card-body">
                <h5 class="card-title"></h5>
                <p class="card-text">
                  Some qyuck exampe text to build on the card title and body
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div class="card">
              <img
                src="https://picsum.photos/200/300"
                class="card-img-top"
                alt="https://picsum.photos/201/300"
                height="200px"
              />
              <div class="card-body">
                <h5 class="card-title"></h5>
                <p class="card-text">
                  Some qyuck exampe text to build on the card title and body
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
