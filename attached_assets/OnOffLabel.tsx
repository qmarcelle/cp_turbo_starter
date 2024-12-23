import { IComponent } from '../IComponent';

interface OnOffLabelProps extends IComponent {
  enabled: boolean;
}

export const OnOffLabel = ({ className = '', enabled }: OnOffLabelProps) => {
  const enabledStyle: React.CSSProperties = {
    backgroundColor: '#E2F0D3',
    color: '#508316',
    borderColor: 'initial',
    borderRadius: '5px',
    fontWeight: 500,
  };

  const disabledStyle: React.CSSProperties = {
    backgroundColor: '#F2F2F2',
    color: '#333333',
    borderColor: 'gray',
    borderRadius: '5px',
    fontWeight: 500,
  };

  return (
    <div
      className={`on-off justify-center items-center body-2 ${className}`.trimEnd()}
      style={{
        minWidth: 40,
        height: 24,
        ...(enabled ? enabledStyle : disabledStyle),
      }}
    >
      <div>
        {enabled ? (
          <span className="on-dot"> </span>
        ) : (
          <span className="off-dot"> </span>
        )}
      </div>
      {enabled ? 'ON' : 'OFF'}
    </div>
  );
};
