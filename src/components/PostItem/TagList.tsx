import React from "react";

export interface Label {
  color: string;
  name: string;
}
interface Props {
    labels: Label[];
}

const TagList = (props: Props) => {
  const { labels } = props;
  return (
    <>
      {labels.map((label: Label) => {
        return (
          <span
            key={label.name}
            className="post-item-tag"
            style={{
              color: `#${label.color}`,
              border: `1px solid #${label.color}`,
            }}
          >
            {label.name}
          </span>
        );
      })}
    </>
  );
};

export default TagList;
