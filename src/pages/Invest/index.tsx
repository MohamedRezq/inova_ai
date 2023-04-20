import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { VscDebugBreakpointData } from "react-icons/vsc";

const Invest = () => {
  return (
    <div className="invest-page">
      <div className="in-inova">
        <div className="in-inova-text">
          <div className="first-title">Invest in InovaAI</div>
          <div className="second-title">The Future of AI is here</div>
          <div className="desc">
            Our platform allows businesses to access and connect to high-quality
            AI models.
          </div>
          <Link to="mailto:info@useinovaai.com">
            <button className="invest-btn">Invest Now</button>
          </Link>
        </div>
        <div className="invest-img-blurred">
          <img src="/assets/invest.jpg" className="invest-img" />
        </div>
      </div>
      <Container className="inova-value">
        <div className="inova-value-title">Our Value Proposition</div>
        <div className="inova-value-desc">
          InovaAI democratizes access to Artificial Intelligence (AI)
          technologies by making them accessible and affordable for individuals
          and organizations globally, starting from Africa.
        </div>
      </Container>
      <Container className="in-inova-brochure">
        <div className="in-inova-brochure-title">Invest in</div>
        <div className="in-inova-brochure-inova">-- InovaAI --</div>
        <Container className="in-inova-brochure-img">
          <img src="/assets/invest.jpg" />
        </Container>
      </Container>
      <div className="white-container">
        <div className="section">
          <div className="title">The Problem</div>
          <div className="desc">
            <div className="desc-1">
              <div className="desc-title">For AI consumers</div>
              <hr />
              <div className="desc-text">
                <div className=" desc-text-item">
                  <VscDebugBreakpointData />
                  As the popularity and complexity of AI technologies have
                  increased, businesses still find it difficult to use them. AI
                  development is expensive.
                </div>
                <div className=" desc-text-item">
                  <VscDebugBreakpointData />
                  Finding a tool that might be useful in your situation,
                  figuring out where to find and how to use that tool, and
                  setting it up in the cloud are all steps in the process.
                </div>
                <div className=" desc-text-item">
                  <VscDebugBreakpointData />
                  All of them take a lot of timeand call for domain knowledge.
                </div>
              </div>
            </div>
            <div className="desc-2">
              <div className="desc-title">For independent AI providers</div>
              <hr />
              <div className="desc-text">
                <div className="desc-text-item">
                  <VscDebugBreakpointData />
                  They can neither monetize nor connect with AI consumers.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="title">The Solution</div>
          <div className="desc">
            <div className="desc-1">
              <div className="desc-title">For AI consumers</div>
              <hr />
              <div className="desc-text">
                <div className="desc-text-item">
                  <VscDebugBreakpointData />
                  We’ve taken the pain to deploy some of the most popular AI
                  tools on our managed infrastructure for any business to use
                  via our API.
                </div>
                <div className="desc-text-item">
                  <VscDebugBreakpointData />
                  We maintain these tools in production so businesses can focus
                  on using them to improve their applications.
                </div>
                <div className="desc-text-item">
                  <VscDebugBreakpointData />
                  We provide an easy and affordable platform to help businesses
                  find and integrate third-party AI solutions into their
                  applications with one simple API call. No AI knowledge needed.{" "}
                </div>
              </div>
            </div>
            <div className="desc-2">
              <div className="desc-title">For independent AI providers</div>
              <hr />
              <div className="desc-text">
                <div className="desc-text-item">
                  <VscDebugBreakpointData />
                  Our platform allows independent AI providers to connect with
                  AI consumers and monetize their AI models.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Container className="inova-value">
        <div className="inova-value-title">Building InovaAI Marketplace</div>
        <div className="inova-value-desc">
          <div>
            Our platform allows businesses find and connect to thousands of AI
            model APIs.
          </div>
          <div>
            Businesses can discover thousands of AI-related APIs, connect using
            code snippets, test APIs from browser and manage APIs from one
            dashboard
          </div>
        </div>
      </Container>
      <Container className="inova-value">
        <div className="inova-value-title">The Market</div>
        <div className="inova-value-desc">
          According to{" "}
          <Link className="outer-link" to="https://www.grandviewresearch.com/industry-analysis/artificial-intelligence-ai-market#:~:text=The%20global%20artificial%20intelligence%20market,37.3%25%20from%202023%20to%202030.">
            Grand View Research
          </Link>
          , the projected revenue in AI market by 2030 is $1,811.75B, with an
          expected Compound Annual Growth Rate of AI market from 2023 – 2030 of
          37.3%.
        </div>
      </Container>
      <Container className="inova-value">
        <div className="inova-value-title">
          Join us in making AI technology{" "}
        </div>
        <div className="inova-value-title">easily accessible </div>
        <div className="inova-value-title">to every business in Africa.</div>
        <Link to="mailto:info@useinovaai.com">
          <button className="invest-btn">Invest Now</button>
        </Link>
      </Container>
    </div>
  );
};

export default Invest;
