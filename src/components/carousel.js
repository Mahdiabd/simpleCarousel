import React from 'react';
import classnames from 'classnames';

export default class Carousel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentSlide: 0
        };
    }

    changeSlide(index) {
        this.setState({
            currentSlide: index
        });
    }

    renderNavItems() {
        return this.props.carousel.map((slide, index) => {
            const className = classnames(
                    'simple-carousel__nav-item',
                    {'simple-carousel__nav-item--active': this.state.currentSlide === index}
            );

            return (
                <button
                    key={index}
                    className={className}
                    onClick={() => { this.changeSlide(index); }}>
                </button>
            );
        });
    }

    renderSlides() {
        return this.props.carousel.map((slide, index) => {
            const imageUrl = `${this.props.mediaHost}${slide.imageurl}`;

            const className = classnames(
                    'simple-carousel__slide',
                    {'simple-carousel__slide--active': this.state.currentSlide === index}
            );

            return (
                <li key={index} className={className}>
                    <img src={imageUrl}  className="simple-carousel__image"/>
                    <div className="simple-carousel__title">
                        {slide.title}
                    </div>
                    <div className="simple-carousel__nav">
                        {this.renderNavItems()}
                    </div>
                </li>
            );
        });
    }

    render() {
        return (
            <ul className="simple-carousel">
                {this.renderSlides()}
            </ul>
        );
    }
}

Carousel.defaultProps = {
    carousel: {},
    mediaHost: '',
    totalSlide: 0
};

Carousel.propTypes = {
    carousel: React.PropTypes.arrayOf(
        React.PropTypes.shape({
            imageurl: React.PropTypes.string,
            link: React.PropTypes.string,
            synopsis: React.PropTypes.string,
            title: React.PropTypes.string
        })
    ),
    mediaHost: React.PropTypes.string,
    totalSlide: React.PropTypes.number
};
