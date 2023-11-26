import {
  List, CellMeasurer, WindowScroller, CellMeasurerCache,
} from 'react-virtualized';
import { useState, useEffect } from 'react';
import TweetCard from '@components/TweetCard';
import { getFeeds } from '@services/tweet';
import { InfiniteScroll, PullToRefresh, ConfigProvider } from 'antd-mobile';
import style from './index.module.scss';
import enUS from 'antd-mobile/es/locales/en-US'

const cache = new CellMeasurerCache({
  fixedWidth: true,
  minHeight: 200,
});

const noRowsRenderer = () => 'Loading...';

/**
* 主页推文
*/
const Tweets = () => {
  const pullDownContent = {
    deactivate: <span>Pull down to refresh</span>,
    activate: <span>Release to refresh</span>,
    release: <span>Loading...</span>,
    finish: <span>Refresh complete</span>
  };
  const [data, setData] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  useEffect(() => {
    const init = async () => {
      const res = await getFeeds();
      setData(res);
    };
    init();
  }, []);

  const rowRenderer = ({
    key, style: sy, index, parent,
  }) => (
    <CellMeasurer
      cache={cache}
      columnIndex={0}
      key={key}
      rowIndex={index}
      parent={parent}
    >
      {({ registerChild }) => (
        <div style={sy} key={key} ref={registerChild}>
          <TweetCard dataSource={data[index]} />
        </div>
      )}
    </CellMeasurer>
  );
  const handleLoadMore = async () => {
    const res = await getFeeds();
    setData((d) => [...d, ...res]);
    if (res.length === 0) {
      setHasMore(false);
    }
  };

  return (
    <div className={style.container}>
      <ConfigProvider locale={enUS}>
        <PullToRefresh
          indicator={pullDownContent}
          onRefresh={async () => {
            const res = await getFeeds();
            setData((d) => [...d, ...res]);
          }}
        >
          <WindowScroller>
            {({
              height, width, isScrolling, registerChild, onChildScroll, scrollTop,
            }) => (
              <div ref={registerChild}>
                <List
                  isScrolling={isScrolling}
                  onScroll={onChildScroll}
                  scrollTop={scrollTop}
                  autoHeight
                  height={height}
                  deferredMeasurementCache={cache}
                  rowHeight={cache.rowHeight}
                  overscanRowCount={2}
                  noRowsRenderer={noRowsRenderer}
                  rowCount={data.length}
                  rowRenderer={rowRenderer}
                  width={width}
                />
              </div>
            )}
          </WindowScroller>
        </PullToRefresh>
      </ConfigProvider>
      <ConfigProvider locale={enUS}>
        <InfiniteScroll loadMore={handleLoadMore} hasMore={hasMore} />
      </ConfigProvider>
    </div>
  );
};

export default Tweets;
