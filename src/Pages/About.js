import React from 'react'

const AboutPage = () => (
  <section>

    <h1>State & Props</h1>

    <section id="info">
      <p>React provides two ways to handle/share data: "props" and "state".</p>

      <h3>Props</h3>
      <article>
        <p>
          <span>Declare props by passing them down as attributes.</span>
          <code>
            {`<TimerComponent startTime={0} />`}
          </code>
        </p>
        <p>
          <span>Now startTime is accessible within TimerComponent.</span>
          <code>
            this.props.startTime
          </code>
        </p>
        <p>Only thing is, they're READ ONLY!</p>
        <p>In other words, they can't be changed... ever.</p>
        <p>
          <span>For example, this will NOT work:</span>
          <code>
            this.props.startTime = 10;
          </code>
        </p>
        <p>
          <span>In this demo props are only used to control the timer.</span>
          <br/>
          <span>This way, currentTime can be assigned props.startTime and changed later.</span>
          <code>
            this.currentTime = props.startTime;
          </code>
        </p>
        <p>
          <span>Props can be displayed just as well.</span>
          <code>
            {`<span>{this.props.startTime}</span>`}
          </code>
        </p>
      </article>

      <h3>State</h3>
      <article>
        <p>... is MUTABLE!</p>
        <p>
          <span>Initialize the TimerComponent state inside the constructor() method.</span>
          <code>
            {`this.state = { count: this.currentTime }`}
          </code>
        </p>
        <p>
          <span>In order to change state it must be done using the setState() method.</span>
          <code>
            {`this.setState({ count: this.currentTime++ });`}
          </code>
        </p>
        <p>
          <span>Just like props, state CANNOT be changed like this ...</span>
          <code>
            this.state.count = newTime;
          </code>
        </p>
      </article>

      <h3>Conclusion</h3>
      <article>
        <p>
          – These limitations will encourage thoughtful
          data manipulation and forward thinking.
        </p>
        <p>
          – Once these concepts sink in, it's probably time to
          learn about the Flux architecture for managing state.
        </p>
      </article>

    </section>

  </section>
);

export default AboutPage
