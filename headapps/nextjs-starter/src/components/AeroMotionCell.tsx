import React from 'react';
import { Field } from '@sitecore-jss/sitecore-jss-nextjs';
import { Placeholder, ComponentRendering } from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Field: Field;
}

type AeromotionCellProps = {
  rendering: ComponentRendering;
  params: { [key: string]: string };
  fields: Fields;
};

const AeromotionCellDefaultComponent = (props: AeromotionCellProps): JSX.Element => (
  <div className={`component promo ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint">Cell</span>
    </div>
  </div>
);

export const Default = (props: AeromotionCellProps): JSX.Element => {
  //const id = props.params.RenderingIdentifier;
  if (props.fields) {
    return (
      <div key={props.params.RenderingIdentifier} className={`cell ${props.params.styles}`}>
        <Placeholder
          name={`cell-content-${props.params.DynamicPlaceholderId}`}
          rendering={props.rendering}
        />
      </div>
    );
  }
  return <AeromotionCellDefaultComponent {...props} />;
};
