import * as React from "react";
import { Dispatch } from "redux";
import StoreState from "store/storeState";
import * as styles from "./FeedsComponent.css";
import Image from "./Image";
interface IFeedProps  {
  readonly feeds: any;
   getFeeds: () => (dispatch: Dispatch<StoreState>) => Promise<void>;
}

export default class FeedsComponent extends React.Component<IFeedProps> {
  componentDidMount() {
    this.props.getFeeds();
  }
  public render() {
    if (this.props.feeds.loading) {
      return <div>Loading</div>;
    }
    return (
      <div className={styles.base}>
        {this.props.feeds.feeds &&
          this.props.feeds.feeds.feeds &&
          this.props.feeds.feeds.feeds.map((feed: any, idx: number) => {
            return (
              <div className={styles.feeds} key={idx}>
                <h3>{feed.title}</h3>

                <Image imageUrl={feed.imageUrl} />
              </div>
            );
          })}
      </div>
    );
  }
}
