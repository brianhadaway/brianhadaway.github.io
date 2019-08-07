import React, { Component, Fragment, createRef } from "react";

export class Header extends Component {
  options = {
    root: null,
    rootMargin: "-40px",
    threshold: [0, 1]
  };

  constructor(props) {
    super(props);
    this.scrollTrackerRef = createRef();
    this.observer = new IntersectionObserver(this.callback, this.options);
  }

  componentDidMount() {
    this.observer.observe(this.scrollTrackerRef.current);
  }

  callback = entries => {
    entries.forEach(entry => {
      console.log(entry);
      if (entry.intersectionRatio > 0) {
        return document.body.classList.remove("scrolled");
      }
      document.body.classList.add("scrolled");
    });
  };

  render() {
    return (
      <Fragment>
        <header class="">
          <h1>
            Brian<strong>Hadaway</strong>
          </h1>
          <h2>
            Brian<strong>Hadaway</strong>
          </h2>
        </header>
        <div id="scroll-tracker" ref={this.scrollTrackerRef} />
      </Fragment>
    );
  }
}
