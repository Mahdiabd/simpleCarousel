import React from 'react';
import ReactDOM from 'react-dom';
import bacon from 'baconjs';
import request from 'superagent';

import CarouselComponent from '../components/carousel';
import {CAROUSEL_API_URL, CAROUSEL_MEDIA_HOST} from '../js/utils/constants';

function Carousel(element) {
    this.element = element;
}

Carousel.prototype.init = function () {
    // Assume that we're having a perfect API: no fail, no error, always available, quick response
    const req = request.get(CAROUSEL_API_URL);

    bacon.fromNodeCallback(req.end.bind(req))
        .onValue(this.render.bind(this));
};

Carousel.prototype.render = function (data) {
    if (this.element) {
        const dataJson = JSON.parse(data.text);

        ReactDOM.render(
            <CarouselComponent
                {...dataJson}
                totalSlide={dataJson.carousel.length}
                mediaHost={CAROUSEL_MEDIA_HOST} />,
            this.element
        );
    }
};

export default function (element) {
    return new Carousel(element);
}
