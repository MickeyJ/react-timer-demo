import React from 'react'

const AboutComponent = props => {
  return (
    <div> 
      <h1>State vs Props</h1>
      
      <section id="info-article">
        <p>React provides two types of data, "props" and "state".</p>
        <article>
          <h3>Props</h3>
          <p>...are READ ONLY.</p>
          <p>In other words, you can't change them once assigned a value.</p>
          <p>
            <span>Declare props by passing them down as attributes.</span>
            <code>
              {`<Timer startTime={0} />`}
            </code>
          </p>
          <p>
            <span>For example, inside the timer you CANNOT do this...</span>
            <code>
              this.props.startTime = 10;
            </code>
          </p>
        </article>
        <article>
          <h3>State</h3>
          <p>...can be changed!</p>
          <p>However, it must be done in a specific way.</p>
          <p>
            <span>Declare stateful properties inside the constructor</span>
            <code>
              {`this.state = { count: this.props.startTime }`}
            </code>
          </p>
          <p>
            <span>
              In order to change anything in the state object you
              must use the setState() method provided by React.Component
            </span>
            <code>
              {`this.setState({ count: newCount });`}
            </code>
          </p>
          <p>
            <span>Like props, state CANNOT be changed like this...</span>
            <code>
              this.state.count = newCount;
            </code>
          </p>
        </article>
        <article>
          <h3>Conclusion</h3>
          <p>
            Of course this is a little overboard for a
            simple timer, but a great example.
          </p>
          <p>
            Working with these limitations will help you to
            thoughtfully handle data and encourage you to plan ahead.
          </p>
          <p>
            Once you wrap your mind around these concepts
            it's probably time to learn about the Flux architecture
            and Flux inspired modules like Redux.
          </p>
        </article>

      </section>
      
    </div>
  )
};
export default AboutComponent