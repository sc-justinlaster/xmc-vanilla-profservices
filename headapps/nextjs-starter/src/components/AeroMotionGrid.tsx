import React from 'react';
import { Field, Placeholder, ComponentRendering } from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  BottomRule: Field;
  //CellList: Array<Item>;
}

type AeromotionGridProps = {
  rendering: ComponentRendering;
  params: { [key: string]: string };
  fields: Fields;
};

const AeromotionGridDefaultComponent = (props: AeromotionGridProps): JSX.Element => (
  <div className={`component promo ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint">Grid</span>
    </div>
  </div>
);

export const Default = (props: AeromotionGridProps): JSX.Element => {
  return (
    <section key={props.params.RenderingIdentifier} className={`grid ${props.params.styles}`}>
      <Placeholder
        name={`aeromotiongrid--${props.params.DynamicPlaceholderId}`}
        rendering={props.rendering}
      />
    </section>
  );

  return <AeromotionGridDefaultComponent {...props} />;
};
