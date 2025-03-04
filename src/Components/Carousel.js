import React, { useEffect } from 'react';
import $ from 'jquery';
import './App.css';

function Carousel() {
  useEffect(() => {
    var itemsMainDiv = ('.MultiCarousel');
    var itemsDiv = ('.MultiCarousel-inner');
    var itemWidth = "";

    $('.leftLst, .rightLst').click(function () {
      var condition = $(this).hasClass("leftLst");
      if (condition)
        click(0, this);
      else
        click(1, this);
    });

    ResCarouselSize();

    $(window).resize(function () {
      ResCarouselSize();
    });

    // This function defines the size of the items
    function ResCarouselSize() {
      var incno = 0;
      var dataItems = ("data-items");
      var itemClass = ('.item');
      var id = 0;
      var btnParentSb = '';
      var itemsSplit = '';
      var sampwidth = $(itemsMainDiv).width();
      var bodyWidth = $('body').width();
      $(itemsDiv).each(function () {
        id = id + 1;
        var itemNumbers = $(this).find(itemClass).length;
        btnParentSb = $(this).parent().attr(dataItems);
        itemsSplit = btnParentSb.split(',');
        $(this).parent().attr("id", "MultiCarousel" + id);
        if (bodyWidth >= 1200) {
          incno = itemsSplit[3];
          itemWidth = sampwidth / incno;
        }
        else if (bodyWidth >= 992) {
          incno = itemsSplit[3];
          itemWidth = sampwidth / incno;
        }
        else if (bodyWidth >= 768) {
          incno = itemsSplit[3];
          itemWidth = sampwidth / incno;
        }
        else if (bodyWidth >= 300) {
          incno = itemsSplit[1];
          itemWidth = sampwidth / incno;
        }
        else {
          incno = itemsSplit[0];
          itemWidth = sampwidth / incno;
        }
        $(this).css({ 'transform': 'translateX(0px)', 'width': itemWidth * itemNumbers });
        $(this).find(itemClass).each(function () {
          $(this).outerWidth(itemWidth);
        });

        $(".leftLst").addClass("over");
        $(".rightLst").removeClass("over");

      });
    }

    // This function is used to move the items
    function ResCarousel(e, el, s) {
      var leftBtn = ('.leftLst');
      var rightBtn = ('.rightLst');
      var translateXval = '';
      var divStyle = $(el + ' ' + itemsDiv).css('transform');
      var values = divStyle.match(/-?[\d\.]+/g);
      var xds = Math.abs(values[4]);
      if (e === 0) {
        translateXval = parseInt(xds) - parseInt(itemWidth * s);
        $(el + ' ' + rightBtn).removeClass("over");

        if (translateXval <= itemWidth / 2) {
          translateXval = 0;
          $(el + ' ' + leftBtn).addClass("over");
        }
      }
      else if (e === 1) {
        var itemsCondition = $(el).find(itemsDiv).width() - $(el).width();
        translateXval = parseInt(xds) + parseInt(itemWidth * s);
        $(el + ' ' + leftBtn).removeClass("over");

        if (translateXval >= itemsCondition - itemWidth / 2) {
          translateXval = itemsCondition;
          $(el + ' ' + rightBtn).addClass("over");
        }
      }
      $(el + ' ' + itemsDiv).css('transform', 'translateX(' + -translateXval + 'px)');
    }

    // It is used to get some elements from btn
    function click(ell, ee) {
      var Parent = "#" + $(ee).parent().attr("id");
      var slide = $(Parent).attr("data-slide");
      ResCarousel(ell, Parent, slide);
    }
  }, []);

  return (
    <div className="container carousel-position">
      <div className="row">
        <div className="MultiCarousel" data-items="1,3,5,6" data-slide="1" id="MultiCarousel" data-interval="1000">
          <div className="MultiCarousel-inner">
            <div className="item">
              <div className="pad15">
                <p className="lead"><i className="fa-solid fa-spa"></i></p>
              </div>
              <p className='t-car'>Spa</p>
            </div>
            <div className="item">
              <div className="pad15">
                <p className="lead"><i className="fa-solid fa-person-swimming"></i></p>
              </div>
              <p className='t-car'>Pool</p>
            </div>
            <div className="item">
              <div className="pad15">
                <p className="lead"><i className="fa-solid fa-paw"></i></p>
              </div>
              <p className='t-car'>Pet friendly</p>
            </div>
            <div className="item">
              <div className="pad15">
                <p className="lead"><i className="fa-solid fa-water"></i></p>
              </div>
              <p className='t-car'>Sea view</p>
            </div>
            <div className="item">
              <div className="pad15">
                <p className="lead"><i className="fa-solid fa-hot-tub-person"></i></p>
              </div>
              <p className='t-car'>Hot tub</p>
            </div>
            <div className="item">
              <div className="pad15">
                <p className="lead"><i className="fa-solid fa-house-chimney-window"></i></p>
              </div>
              <p className='t-car'>Cottage</p>
            </div>
            <div className="item">
              <div className="pad15">
                <p className="lead"><i className="fa-solid fa-building"></i></p>
              </div>
              <p className='t-car'>Apartment</p>
            </div>
            <div className="item">
              <div className="pad15">
                <p className="lead"><i className="fa-solid fa-hotel"></i></p>
              </div>
              <p className='t-car'>Aparthotel</p>
            </div>
            <div className="item">
              <div className="pad15">
                <p className="lead"><i className="fa-regular fa-chess-rook"></i></p>
              </div>
              <p className='t-car'>Castle</p>
            </div>
            <div className="item">
              <div className="pad15">
                <p className="lead"><i className="fa-solid fa-wheat-awn"></i></p>
              </div>
              <p className='t-car'>Farm</p>
            </div>
            <div className="item">
              <div className="pad15">
                <p className="lead"><i className="fa-solid fa-dungeon"></i></p>
              </div>
              <p className='t-car'>Villa</p>
            </div>
            <div className="item">
              <div className="pad15">
                <p className="lead"><i className="fa-solid fa-people-group"></i></p>
              </div>
              <p className='t-car'>Family friendly</p>
            </div>
          </div>
          <button className="btn btn-primary leftLst"><i className="fa-solid fa-chevron-left f-color"></i></button>
          <button className="btn btn-primary rightLst"><i className="fa-solid fa-chevron-right f-color"></i></button>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
