import * as React from 'react';
import * as className from 'classnames';

export const Tabs = props => <div>
    <div>
        {
            props.children.map((item, index) =>
                <a
                    key={index}
                    className={className({
                        [props.activeClassName || 'active']: index === props.activeTab}
                    )}
                    onClick={e => {
                        props.onChange(index);
                    }}>
                    {item.props.icon}
                    {item.props.title}
                </a>
            )
        }
    </div>
    <ul>
        {
            props.children.map((item, index) => index === props.activeTab ? <li key={index}>{item.props.children}</li> : null)
        }
    </ul>
</div>;

export const Tab = props => null;
